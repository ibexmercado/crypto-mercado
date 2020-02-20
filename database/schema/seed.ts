import { prisma } from "../generated/client";
import { UserRoleType } from "./models/UserRoleType";

async function createCurrencies() {
  await prisma.createCurrency({
    name: "United States Dollar",
    symbol: "USD",
  });
  await prisma.createCurrency({
    name: "Guatemalan Quetzal",
    symbol: "GTQ",
  });
  await prisma.createCurrency({
    name: "Bitcoin",
    symbol: "BTC",
  });
}

async function createUserRoles() {
  await prisma.createUserRole({
    type: UserRoleType.ADMIN,
  });
  await prisma.createUserRole({
    type: UserRoleType.USER,
  });
}

(async function() {
  try {
    await createCurrencies();
    await createUserRoles();
  } catch (error) {
    console.error(error);
  }
})();