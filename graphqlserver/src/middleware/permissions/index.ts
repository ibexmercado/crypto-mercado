import { and, shield } from "graphql-shield";
import * as rules from "./rules";

export const permissions = shield({
  Query: {
    user: rules.isUser,
    getTransactionBreakdown: rules.isUser,
    getTransaction: rules.isUser,
    getAdminBankAccounts: rules.isUser,

    //ACCOUNT RECOVERY
    recoverAccount: rules.isAccountRecoveryAvailable,
    // ADMIN
    // KYC
    adminGetUsersWithPendingKYCApproval: rules.isAdmin,

    // USER
    adminGetUser: rules.isAdmin,
    adminGetUsers: rules.isAdmin,

    // TRANSACTIONS
    adminGetTransactions: rules.isAdmin,
  },

  Mutation: {
    // AUTH
    authenticate: and(rules.usernameExists, rules.isValidPassword, rules.isKYCApproved),

    // ONBOARDING
    sendEmailVerificationCode: rules.isEmailAvailable,
    verifyEmail: rules.isEmailAvailable,
    setPassword: rules.isUser,
    uploadGovernmentID: rules.isUser,
    setBankAccount: rules.isUser,

    //ACCOUNT RECOVERY
    resetPassword: rules.isUser,

    // TRANSACTION
    createTransaction: and(rules.isUser, rules.isKYCApproved),
    setTransactionReceiptEvidence: and(rules.isUser, rules.isTransactionUser),

    // CRYPTO ACCOUNTS
    createBitcoinAccount: and(rules.isUser, rules.isKYCApproved),

    // ADMIN
    // TRANSACTIONS
    adminUpdateTransaction: rules.isAdmin,
    // USERS
    adminDeleteUser: rules.isAdmin,
    // AUTH
    adminAuthenticate: rules.isValidAdminAuthentication,
    // KYC
    adminKYCApproveUser: rules.isAdmin,
    adminKYCRejectUser: rules.isAdmin,
    // SETTINGS
    adminSettingsCreateExchangeRate: rules.isAdmin,
  },
});
