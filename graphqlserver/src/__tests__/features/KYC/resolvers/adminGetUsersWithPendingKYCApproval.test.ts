import { prisma as db } from "@ibexcm/database";
import { TestDependencies } from "@ibexcm/libraries/di";
import { emailVerificationRepositoryInjectionKey } from "../../../../features/EmailVerification";
import { smsVerificationRepositoryInjectionKey } from "../../../../features/SMSVerification";
import onboardUser from "../../../../__test-utils__/helpers/onboardUser";
import {
  mockEmailVerificationRepository,
  MockServer,
  mockSMSVerificationRepository,
} from "../../../../__test-utils__/mocks";
import GraphQLClient from "../../../../__test-utils__/mocks/GraphQLClient";

describe("adminGetUsersWithPendingKYCApproval", () => {
  const dependencies = new TestDependencies();
  const smsVerificationRepository = mockSMSVerificationRepository();
  const emailVerificationRepository = mockEmailVerificationRepository();
  dependencies.override(
    smsVerificationRepositoryInjectionKey,
    _ => smsVerificationRepository,
  );
  dependencies.override(
    emailVerificationRepositoryInjectionKey,
    _ => emailVerificationRepository,
  );

  const server = new MockServer(dependencies);

  beforeAll(async () => {
    await server.start();
    await db.deleteManyUsers();
  });

  afterAll(() => {
    server.stop();
  });

  test("returns N number of users", async () => {
    const address = "u1@ibexcm.com";
    const password = "password";

    const user = await onboardUser({ address, password });

    await db.updateUser({
      where: {
        id: user.id,
      },
      data: {
        role: {
          connect: {
            type: "ADMIN",
          },
        },
      },
    });

    const {
      data: {
        adminAuthenticate: { token },
      },
    } = await GraphQLClient.adminAuthenticate({ args: { address, password } });

    const length = 10;
    await Promise.all(new Array(length).fill(null).map(() => onboardUser()));

    const {
      data: { adminGetUsersWithPendingKYCApproval },
    } = await GraphQLClient.adminGetUsersWithPendingKYCApproval(token);

    expect(adminGetUsersWithPendingKYCApproval).toHaveLength(length);

    for (const user of adminGetUsersWithPendingKYCApproval) {
      expect(user.role.type).toEqual("CUSTOMER");
      expect(user.account.clientID).toBeDefined();
      expect(user.contact.phoneNumber[0].number).toBeDefined();
      expect(user.contact.email[0].address).toBeDefined();
      expect(user.profile.country.phoneNumberCode).toBeDefined();
      expect(user.profile.documents.guatemala.dpi[0].fileHash).toBeDefined();
      expect(user.bankAccounts[0].currency.name).toBeDefined();
      expect(user.bankAccounts[0].currency.symbol).toBeDefined();
      expect(user.bankAccounts[0].guatemala.accountNumber).toBeDefined();
      expect(user.bankAccounts[0].guatemala.fullName).toBeDefined();
      expect(user.bankAccounts[0].guatemala.bankAccountType).toBeDefined();
    }
  });
});
