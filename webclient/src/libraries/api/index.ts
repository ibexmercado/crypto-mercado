export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type Account = {
   __typename?: 'Account',
  id: Scalars['ID'],
  password: Scalars['String'],
  clientID: Scalars['String'],
  user: User,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type AccountWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  clientID?: Maybe<Scalars['String']>,
  clientID_not?: Maybe<Scalars['String']>,
  clientID_in?: Maybe<Array<Scalars['String']>>,
  clientID_not_in?: Maybe<Array<Scalars['String']>>,
  clientID_lt?: Maybe<Scalars['String']>,
  clientID_lte?: Maybe<Scalars['String']>,
  clientID_gt?: Maybe<Scalars['String']>,
  clientID_gte?: Maybe<Scalars['String']>,
  clientID_contains?: Maybe<Scalars['String']>,
  clientID_not_contains?: Maybe<Scalars['String']>,
  clientID_starts_with?: Maybe<Scalars['String']>,
  clientID_not_starts_with?: Maybe<Scalars['String']>,
  clientID_ends_with?: Maybe<Scalars['String']>,
  clientID_not_ends_with?: Maybe<Scalars['String']>,
  user?: Maybe<UserWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<AccountWhereInput>>,
  OR?: Maybe<Array<AccountWhereInput>>,
  NOT?: Maybe<Array<AccountWhereInput>>,
};

export type AdminAuthenticateInput = {
  address: Scalars['String'],
  password: Scalars['String'],
};

export type AdminBankAccount = {
   __typename?: 'AdminBankAccount',
  id: Scalars['ID'],
  guatemala?: Maybe<GuatemalaBankAccount>,
  currency: Currency,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type AdminBankAccountWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  guatemala?: Maybe<GuatemalaBankAccountWhereInput>,
  currency?: Maybe<CurrencyWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<AdminBankAccountWhereInput>>,
  OR?: Maybe<Array<AdminBankAccountWhereInput>>,
  NOT?: Maybe<Array<AdminBankAccountWhereInput>>,
};

export type AdminGetUserInput = {
  id: Scalars['String'],
};

export type AuthenticateInput = {
  address: Scalars['String'],
  password: Scalars['String'],
};

export type Bank = {
   __typename?: 'Bank',
  country: Country,
  id: Scalars['ID'],
  imgHash?: Maybe<Scalars['String']>,
  name: Scalars['String'],
};

export type BankAccount = {
   __typename?: 'BankAccount',
  id: Scalars['ID'],
  guatemala?: Maybe<GuatemalaBankAccount>,
  currency: Currency,
  user: User,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  createdAt: Scalars['DateTime'],
};

export enum BankAccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VerifiedAtAsc = 'verifiedAt_ASC',
  VerifiedAtDesc = 'verifiedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type BankAccountWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  guatemala?: Maybe<GuatemalaBankAccountWhereInput>,
  currency?: Maybe<CurrencyWhereInput>,
  user?: Maybe<UserWhereInput>,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  verifiedAt_not?: Maybe<Scalars['DateTime']>,
  verifiedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_lt?: Maybe<Scalars['DateTime']>,
  verifiedAt_lte?: Maybe<Scalars['DateTime']>,
  verifiedAt_gt?: Maybe<Scalars['DateTime']>,
  verifiedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<BankAccountWhereInput>>,
  OR?: Maybe<Array<BankAccountWhereInput>>,
  NOT?: Maybe<Array<BankAccountWhereInput>>,
};

export type BankWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  imgHash?: Maybe<Scalars['String']>,
  imgHash_not?: Maybe<Scalars['String']>,
  imgHash_in?: Maybe<Array<Scalars['String']>>,
  imgHash_not_in?: Maybe<Array<Scalars['String']>>,
  imgHash_lt?: Maybe<Scalars['String']>,
  imgHash_lte?: Maybe<Scalars['String']>,
  imgHash_gt?: Maybe<Scalars['String']>,
  imgHash_gte?: Maybe<Scalars['String']>,
  imgHash_contains?: Maybe<Scalars['String']>,
  imgHash_not_contains?: Maybe<Scalars['String']>,
  imgHash_starts_with?: Maybe<Scalars['String']>,
  imgHash_not_starts_with?: Maybe<Scalars['String']>,
  imgHash_ends_with?: Maybe<Scalars['String']>,
  imgHash_not_ends_with?: Maybe<Scalars['String']>,
  country?: Maybe<CountryWhereInput>,
  AND?: Maybe<Array<BankWhereInput>>,
  OR?: Maybe<Array<BankWhereInput>>,
  NOT?: Maybe<Array<BankWhereInput>>,
};

export type Contact = {
   __typename?: 'Contact',
  id: Scalars['ID'],
  email?: Maybe<Array<Email>>,
  phoneNumber?: Maybe<Array<PhoneNumber>>,
  user: User,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type ContactEmailArgs = {
  where?: Maybe<EmailWhereInput>,
  orderBy?: Maybe<EmailOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type ContactPhoneNumberArgs = {
  where?: Maybe<PhoneNumberWhereInput>,
  orderBy?: Maybe<PhoneNumberOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ContactWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email_every?: Maybe<EmailWhereInput>,
  email_some?: Maybe<EmailWhereInput>,
  email_none?: Maybe<EmailWhereInput>,
  phoneNumber_every?: Maybe<PhoneNumberWhereInput>,
  phoneNumber_some?: Maybe<PhoneNumberWhereInput>,
  phoneNumber_none?: Maybe<PhoneNumberWhereInput>,
  user?: Maybe<UserWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ContactWhereInput>>,
  OR?: Maybe<Array<ContactWhereInput>>,
  NOT?: Maybe<Array<ContactWhereInput>>,
};

export type Country = {
   __typename?: 'Country',
  id: Scalars['ID'],
  name: Scalars['String'],
  symbol: Scalars['String'],
  phoneNumberCode: Scalars['String'],
};

export type CountryWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  symbol?: Maybe<Scalars['String']>,
  symbol_not?: Maybe<Scalars['String']>,
  symbol_in?: Maybe<Array<Scalars['String']>>,
  symbol_not_in?: Maybe<Array<Scalars['String']>>,
  symbol_lt?: Maybe<Scalars['String']>,
  symbol_lte?: Maybe<Scalars['String']>,
  symbol_gt?: Maybe<Scalars['String']>,
  symbol_gte?: Maybe<Scalars['String']>,
  symbol_contains?: Maybe<Scalars['String']>,
  symbol_not_contains?: Maybe<Scalars['String']>,
  symbol_starts_with?: Maybe<Scalars['String']>,
  symbol_not_starts_with?: Maybe<Scalars['String']>,
  symbol_ends_with?: Maybe<Scalars['String']>,
  symbol_not_ends_with?: Maybe<Scalars['String']>,
  phoneNumberCode?: Maybe<Scalars['String']>,
  phoneNumberCode_not?: Maybe<Scalars['String']>,
  phoneNumberCode_in?: Maybe<Array<Scalars['String']>>,
  phoneNumberCode_not_in?: Maybe<Array<Scalars['String']>>,
  phoneNumberCode_lt?: Maybe<Scalars['String']>,
  phoneNumberCode_lte?: Maybe<Scalars['String']>,
  phoneNumberCode_gt?: Maybe<Scalars['String']>,
  phoneNumberCode_gte?: Maybe<Scalars['String']>,
  phoneNumberCode_contains?: Maybe<Scalars['String']>,
  phoneNumberCode_not_contains?: Maybe<Scalars['String']>,
  phoneNumberCode_starts_with?: Maybe<Scalars['String']>,
  phoneNumberCode_not_starts_with?: Maybe<Scalars['String']>,
  phoneNumberCode_ends_with?: Maybe<Scalars['String']>,
  phoneNumberCode_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<CountryWhereInput>>,
  OR?: Maybe<Array<CountryWhereInput>>,
  NOT?: Maybe<Array<CountryWhereInput>>,
};

export type CryptoAccount = {
   __typename?: 'CryptoAccount',
  id: Scalars['ID'],
  address: Scalars['String'],
  user: User,
  currency: Currency,
  createdAt: Scalars['DateTime'],
};

export enum CryptoAccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type CryptoAccountWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  address?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  user?: Maybe<UserWhereInput>,
  currency?: Maybe<CurrencyWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<CryptoAccountWhereInput>>,
  OR?: Maybe<Array<CryptoAccountWhereInput>>,
  NOT?: Maybe<Array<CryptoAccountWhereInput>>,
};

export type Currency = {
   __typename?: 'Currency',
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  symbol: Scalars['String'],
};

export type CurrencyWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  symbol?: Maybe<Scalars['String']>,
  symbol_not?: Maybe<Scalars['String']>,
  symbol_in?: Maybe<Array<Scalars['String']>>,
  symbol_not_in?: Maybe<Array<Scalars['String']>>,
  symbol_lt?: Maybe<Scalars['String']>,
  symbol_lte?: Maybe<Scalars['String']>,
  symbol_gt?: Maybe<Scalars['String']>,
  symbol_gte?: Maybe<Scalars['String']>,
  symbol_contains?: Maybe<Scalars['String']>,
  symbol_not_contains?: Maybe<Scalars['String']>,
  symbol_starts_with?: Maybe<Scalars['String']>,
  symbol_not_starts_with?: Maybe<Scalars['String']>,
  symbol_ends_with?: Maybe<Scalars['String']>,
  symbol_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<CurrencyWhereInput>>,
  OR?: Maybe<Array<CurrencyWhereInput>>,
  NOT?: Maybe<Array<CurrencyWhereInput>>,
};


export type Email = {
   __typename?: 'Email',
  id: Scalars['ID'],
  address: Scalars['String'],
  isCurrent?: Maybe<Scalars['Boolean']>,
  contact: Contact,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  createdAt: Scalars['DateTime'],
};

export enum EmailOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  IsCurrentAsc = 'isCurrent_ASC',
  IsCurrentDesc = 'isCurrent_DESC',
  VerifiedAtAsc = 'verifiedAt_ASC',
  VerifiedAtDesc = 'verifiedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type EmailWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  address?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  isCurrent?: Maybe<Scalars['Boolean']>,
  isCurrent_not?: Maybe<Scalars['Boolean']>,
  contact?: Maybe<ContactWhereInput>,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  verifiedAt_not?: Maybe<Scalars['DateTime']>,
  verifiedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_lt?: Maybe<Scalars['DateTime']>,
  verifiedAt_lte?: Maybe<Scalars['DateTime']>,
  verifiedAt_gt?: Maybe<Scalars['DateTime']>,
  verifiedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<EmailWhereInput>>,
  OR?: Maybe<Array<EmailWhereInput>>,
  NOT?: Maybe<Array<EmailWhereInput>>,
};

export enum Genre {
  Male = 'MALE',
  Female = 'FEMALE'
}

export type GetBanksByCountryInput = {
  countryID: Scalars['String'],
};

export type GetCurrenciesByCountryInput = {
  countryID: Scalars['String'],
};

export type GuatemalaBankAccount = {
   __typename?: 'GuatemalaBankAccount',
  id: Scalars['ID'],
  fullName: Scalars['String'],
  accountNumber: Scalars['String'],
  bankAccountType: TGuatemalaBankAccount,
  bank: Bank,
  isCurrent?: Maybe<Scalars['Boolean']>,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type GuatemalaBankAccountWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  fullName?: Maybe<Scalars['String']>,
  fullName_not?: Maybe<Scalars['String']>,
  fullName_in?: Maybe<Array<Scalars['String']>>,
  fullName_not_in?: Maybe<Array<Scalars['String']>>,
  fullName_lt?: Maybe<Scalars['String']>,
  fullName_lte?: Maybe<Scalars['String']>,
  fullName_gt?: Maybe<Scalars['String']>,
  fullName_gte?: Maybe<Scalars['String']>,
  fullName_contains?: Maybe<Scalars['String']>,
  fullName_not_contains?: Maybe<Scalars['String']>,
  fullName_starts_with?: Maybe<Scalars['String']>,
  fullName_not_starts_with?: Maybe<Scalars['String']>,
  fullName_ends_with?: Maybe<Scalars['String']>,
  fullName_not_ends_with?: Maybe<Scalars['String']>,
  accountNumber?: Maybe<Scalars['String']>,
  accountNumber_not?: Maybe<Scalars['String']>,
  accountNumber_in?: Maybe<Array<Scalars['String']>>,
  accountNumber_not_in?: Maybe<Array<Scalars['String']>>,
  accountNumber_lt?: Maybe<Scalars['String']>,
  accountNumber_lte?: Maybe<Scalars['String']>,
  accountNumber_gt?: Maybe<Scalars['String']>,
  accountNumber_gte?: Maybe<Scalars['String']>,
  accountNumber_contains?: Maybe<Scalars['String']>,
  accountNumber_not_contains?: Maybe<Scalars['String']>,
  accountNumber_starts_with?: Maybe<Scalars['String']>,
  accountNumber_not_starts_with?: Maybe<Scalars['String']>,
  accountNumber_ends_with?: Maybe<Scalars['String']>,
  accountNumber_not_ends_with?: Maybe<Scalars['String']>,
  bankAccountType?: Maybe<TGuatemalaBankAccount>,
  bankAccountType_not?: Maybe<TGuatemalaBankAccount>,
  bankAccountType_in?: Maybe<Array<TGuatemalaBankAccount>>,
  bankAccountType_not_in?: Maybe<Array<TGuatemalaBankAccount>>,
  bank?: Maybe<BankWhereInput>,
  isCurrent?: Maybe<Scalars['Boolean']>,
  isCurrent_not?: Maybe<Scalars['Boolean']>,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  verifiedAt_not?: Maybe<Scalars['DateTime']>,
  verifiedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_lt?: Maybe<Scalars['DateTime']>,
  verifiedAt_lte?: Maybe<Scalars['DateTime']>,
  verifiedAt_gt?: Maybe<Scalars['DateTime']>,
  verifiedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<GuatemalaBankAccountWhereInput>>,
  OR?: Maybe<Array<GuatemalaBankAccountWhereInput>>,
  NOT?: Maybe<Array<GuatemalaBankAccountWhereInput>>,
};

export type GuatemalaDocument = {
   __typename?: 'GuatemalaDocument',
  id: Scalars['ID'],
  dpi?: Maybe<Array<GuatemalaDpi>>,
  profileDocument: ProfileDocument,
};


export type GuatemalaDocumentDpiArgs = {
  where?: Maybe<GuatemalaDpiWhereInput>,
  orderBy?: Maybe<GuatemalaDpiOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GuatemalaDocumentWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  dpi_every?: Maybe<GuatemalaDpiWhereInput>,
  dpi_some?: Maybe<GuatemalaDpiWhereInput>,
  dpi_none?: Maybe<GuatemalaDpiWhereInput>,
  profileDocument?: Maybe<ProfileDocumentWhereInput>,
  AND?: Maybe<Array<GuatemalaDocumentWhereInput>>,
  OR?: Maybe<Array<GuatemalaDocumentWhereInput>>,
  NOT?: Maybe<Array<GuatemalaDocumentWhereInput>>,
};

export type GuatemalaDpi = {
   __typename?: 'GuatemalaDPI',
  id: Scalars['ID'],
  fileHash: Scalars['String'],
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  CUI?: Maybe<Scalars['String']>,
  dateOfBirth?: Maybe<Scalars['DateTime']>,
  genre?: Maybe<Genre>,
  expiresAt?: Maybe<Scalars['DateTime']>,
  guatemalaDocument: GuatemalaDocument,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  createdAt: Scalars['DateTime'],
};

export enum GuatemalaDpiOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FileHashAsc = 'fileHash_ASC',
  FileHashDesc = 'fileHash_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  CuiAsc = 'CUI_ASC',
  CuiDesc = 'CUI_DESC',
  DateOfBirthAsc = 'dateOfBirth_ASC',
  DateOfBirthDesc = 'dateOfBirth_DESC',
  GenreAsc = 'genre_ASC',
  GenreDesc = 'genre_DESC',
  ExpiresAtAsc = 'expiresAt_ASC',
  ExpiresAtDesc = 'expiresAt_DESC',
  VerifiedAtAsc = 'verifiedAt_ASC',
  VerifiedAtDesc = 'verifiedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type GuatemalaDpiWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  fileHash?: Maybe<Scalars['String']>,
  fileHash_not?: Maybe<Scalars['String']>,
  fileHash_in?: Maybe<Array<Scalars['String']>>,
  fileHash_not_in?: Maybe<Array<Scalars['String']>>,
  fileHash_lt?: Maybe<Scalars['String']>,
  fileHash_lte?: Maybe<Scalars['String']>,
  fileHash_gt?: Maybe<Scalars['String']>,
  fileHash_gte?: Maybe<Scalars['String']>,
  fileHash_contains?: Maybe<Scalars['String']>,
  fileHash_not_contains?: Maybe<Scalars['String']>,
  fileHash_starts_with?: Maybe<Scalars['String']>,
  fileHash_not_starts_with?: Maybe<Scalars['String']>,
  fileHash_ends_with?: Maybe<Scalars['String']>,
  fileHash_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  CUI?: Maybe<Scalars['String']>,
  CUI_not?: Maybe<Scalars['String']>,
  CUI_in?: Maybe<Array<Scalars['String']>>,
  CUI_not_in?: Maybe<Array<Scalars['String']>>,
  CUI_lt?: Maybe<Scalars['String']>,
  CUI_lte?: Maybe<Scalars['String']>,
  CUI_gt?: Maybe<Scalars['String']>,
  CUI_gte?: Maybe<Scalars['String']>,
  CUI_contains?: Maybe<Scalars['String']>,
  CUI_not_contains?: Maybe<Scalars['String']>,
  CUI_starts_with?: Maybe<Scalars['String']>,
  CUI_not_starts_with?: Maybe<Scalars['String']>,
  CUI_ends_with?: Maybe<Scalars['String']>,
  CUI_not_ends_with?: Maybe<Scalars['String']>,
  dateOfBirth?: Maybe<Scalars['DateTime']>,
  dateOfBirth_not?: Maybe<Scalars['DateTime']>,
  dateOfBirth_in?: Maybe<Array<Scalars['DateTime']>>,
  dateOfBirth_not_in?: Maybe<Array<Scalars['DateTime']>>,
  dateOfBirth_lt?: Maybe<Scalars['DateTime']>,
  dateOfBirth_lte?: Maybe<Scalars['DateTime']>,
  dateOfBirth_gt?: Maybe<Scalars['DateTime']>,
  dateOfBirth_gte?: Maybe<Scalars['DateTime']>,
  genre?: Maybe<Genre>,
  genre_not?: Maybe<Genre>,
  genre_in?: Maybe<Array<Genre>>,
  genre_not_in?: Maybe<Array<Genre>>,
  expiresAt?: Maybe<Scalars['DateTime']>,
  expiresAt_not?: Maybe<Scalars['DateTime']>,
  expiresAt_in?: Maybe<Array<Scalars['DateTime']>>,
  expiresAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  expiresAt_lt?: Maybe<Scalars['DateTime']>,
  expiresAt_lte?: Maybe<Scalars['DateTime']>,
  expiresAt_gt?: Maybe<Scalars['DateTime']>,
  expiresAt_gte?: Maybe<Scalars['DateTime']>,
  guatemalaDocument?: Maybe<GuatemalaDocumentWhereInput>,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  verifiedAt_not?: Maybe<Scalars['DateTime']>,
  verifiedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_lt?: Maybe<Scalars['DateTime']>,
  verifiedAt_lte?: Maybe<Scalars['DateTime']>,
  verifiedAt_gt?: Maybe<Scalars['DateTime']>,
  verifiedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<GuatemalaDpiWhereInput>>,
  OR?: Maybe<Array<GuatemalaDpiWhereInput>>,
  NOT?: Maybe<Array<GuatemalaDpiWhereInput>>,
};

export type Mutation = {
   __typename?: 'Mutation',
  /** 
 * ADMIN
   * AUTHENTICATION: admin* must be the prefix for admin endpoints
 */
  adminAuthenticate: Session,
  /** AUTHENTICATION */
  authenticate: Session,
  sendEmailVerificationCode: Scalars['Boolean'],
  /** ONBOARDING */
  sendPhoneNumberVerificationCode: Scalars['Boolean'],
  setBankAccount: Session,
  setPassword: Session,
  uploadGovernmentID: Session,
  verifyEmail: Session,
  verifyPhoneNumber: Session,
};


export type MutationAdminAuthenticateArgs = {
  args: AdminAuthenticateInput
};


export type MutationAuthenticateArgs = {
  args: AuthenticateInput
};


export type MutationSendEmailVerificationCodeArgs = {
  args: SendEmailVerificationCodeInput
};


export type MutationSendPhoneNumberVerificationCodeArgs = {
  args: SendPhoneNumberVerificationCodeInput
};


export type MutationSetBankAccountArgs = {
  args: SetBankAccountInput
};


export type MutationSetPasswordArgs = {
  args: SetPasswordInput
};


export type MutationUploadGovernmentIdArgs = {
  args: UploadGovernmentIdInput
};


export type MutationVerifyEmailArgs = {
  args: VerifyEmailInput
};


export type MutationVerifyPhoneNumberArgs = {
  args: VerifyPhoneNumberInput
};

export type PhoneNumber = {
   __typename?: 'PhoneNumber',
  id: Scalars['ID'],
  number: Scalars['String'],
  isCurrent?: Maybe<Scalars['Boolean']>,
  contact: Contact,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  createdAt: Scalars['DateTime'],
};

export enum PhoneNumberOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  IsCurrentAsc = 'isCurrent_ASC',
  IsCurrentDesc = 'isCurrent_DESC',
  VerifiedAtAsc = 'verifiedAt_ASC',
  VerifiedAtDesc = 'verifiedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type PhoneNumberWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['String']>,
  number_not?: Maybe<Scalars['String']>,
  number_in?: Maybe<Array<Scalars['String']>>,
  number_not_in?: Maybe<Array<Scalars['String']>>,
  number_lt?: Maybe<Scalars['String']>,
  number_lte?: Maybe<Scalars['String']>,
  number_gt?: Maybe<Scalars['String']>,
  number_gte?: Maybe<Scalars['String']>,
  number_contains?: Maybe<Scalars['String']>,
  number_not_contains?: Maybe<Scalars['String']>,
  number_starts_with?: Maybe<Scalars['String']>,
  number_not_starts_with?: Maybe<Scalars['String']>,
  number_ends_with?: Maybe<Scalars['String']>,
  number_not_ends_with?: Maybe<Scalars['String']>,
  isCurrent?: Maybe<Scalars['Boolean']>,
  isCurrent_not?: Maybe<Scalars['Boolean']>,
  contact?: Maybe<ContactWhereInput>,
  verifiedAt?: Maybe<Scalars['DateTime']>,
  verifiedAt_not?: Maybe<Scalars['DateTime']>,
  verifiedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  verifiedAt_lt?: Maybe<Scalars['DateTime']>,
  verifiedAt_lte?: Maybe<Scalars['DateTime']>,
  verifiedAt_gt?: Maybe<Scalars['DateTime']>,
  verifiedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<PhoneNumberWhereInput>>,
  OR?: Maybe<Array<PhoneNumberWhereInput>>,
  NOT?: Maybe<Array<PhoneNumberWhereInput>>,
};

export type Profile = {
   __typename?: 'Profile',
  id: Scalars['ID'],
  documents?: Maybe<ProfileDocument>,
  user: User,
  country: Country,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type ProfileDocument = {
   __typename?: 'ProfileDocument',
  id: Scalars['ID'],
  guatemala?: Maybe<GuatemalaDocument>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type ProfileDocumentWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  guatemala?: Maybe<GuatemalaDocumentWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ProfileDocumentWhereInput>>,
  OR?: Maybe<Array<ProfileDocumentWhereInput>>,
  NOT?: Maybe<Array<ProfileDocumentWhereInput>>,
};

export type ProfileWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  documents?: Maybe<ProfileDocumentWhereInput>,
  user?: Maybe<UserWhereInput>,
  country?: Maybe<CountryWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<ProfileWhereInput>>,
  OR?: Maybe<Array<ProfileWhereInput>>,
  NOT?: Maybe<Array<ProfileWhereInput>>,
};

export type Query = {
   __typename?: 'Query',
  /** USER */
  adminGetUser: User,
  /** 
 * ADMIN
   * KYC
 */
  adminGetUsersWithPendingKYCApproval: Array<User>,
  getBanksByCountry: Array<Bank>,
  getCurrenciesByCountry: Array<Currency>,
  user: User,
};


export type QueryAdminGetUserArgs = {
  args: AdminGetUserInput
};


export type QueryGetBanksByCountryArgs = {
  args: GetBanksByCountryInput
};


export type QueryGetCurrenciesByCountryArgs = {
  args: GetCurrenciesByCountryInput
};

export type SendEmailVerificationCodeInput = {
  address: Scalars['String'],
};

export type Sender = {
   __typename?: 'Sender',
  id: Scalars['ID'],
  sender: User,
  bankAccount?: Maybe<BankAccount>,
  cryptoAccount?: Maybe<CryptoAccount>,
  adminBankAccount?: Maybe<AdminBankAccount>,
};

export type SenderWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  sender?: Maybe<UserWhereInput>,
  bankAccount?: Maybe<BankAccountWhereInput>,
  cryptoAccount?: Maybe<CryptoAccountWhereInput>,
  adminBankAccount?: Maybe<AdminBankAccountWhereInput>,
  AND?: Maybe<Array<SenderWhereInput>>,
  OR?: Maybe<Array<SenderWhereInput>>,
  NOT?: Maybe<Array<SenderWhereInput>>,
};

export type SendPhoneNumberVerificationCodeInput = {
  number: Scalars['String'],
};

export type Session = {
   __typename?: 'Session',
  expiresAt?: Maybe<Scalars['DateTime']>,
  token?: Maybe<Scalars['String']>,
};

export type SetBankAccountInput = {
  accountNumber: Scalars['String'],
  bankAccountType: Scalars['String'],
  bankID: Scalars['String'],
  currencyID: Scalars['String'],
  fullName: Scalars['String'],
};

export type SetPasswordInput = {
  password: Scalars['String'],
};

export enum TGuatemalaBankAccount {
  Monetaria = 'MONETARIA',
  Ahorro = 'AHORRO'
}

export type Transaction = {
   __typename?: 'Transaction',
  id: Scalars['ID'],
  amount: Scalars['String'],
  sender: Sender,
  fee: TransactionFee,
  receipt: TransactionReceipt,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type TransactionFee = {
   __typename?: 'TransactionFee',
  id: Scalars['ID'],
  fee: Scalars['String'],
};

export type TransactionFeeWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  fee?: Maybe<Scalars['String']>,
  fee_not?: Maybe<Scalars['String']>,
  fee_in?: Maybe<Array<Scalars['String']>>,
  fee_not_in?: Maybe<Array<Scalars['String']>>,
  fee_lt?: Maybe<Scalars['String']>,
  fee_lte?: Maybe<Scalars['String']>,
  fee_gt?: Maybe<Scalars['String']>,
  fee_gte?: Maybe<Scalars['String']>,
  fee_contains?: Maybe<Scalars['String']>,
  fee_not_contains?: Maybe<Scalars['String']>,
  fee_starts_with?: Maybe<Scalars['String']>,
  fee_not_starts_with?: Maybe<Scalars['String']>,
  fee_ends_with?: Maybe<Scalars['String']>,
  fee_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<TransactionFeeWhereInput>>,
  OR?: Maybe<Array<TransactionFeeWhereInput>>,
  NOT?: Maybe<Array<TransactionFeeWhereInput>>,
};

export enum TransactionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TransactionReceipt = {
   __typename?: 'TransactionReceipt',
  id: Scalars['ID'],
  evidence?: Maybe<Array<TransactionReceiptEvidence>>,
  toCurrency: Currency,
  fromCurrency: Currency,
  paidAt?: Maybe<Scalars['DateTime']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type TransactionReceiptEvidenceArgs = {
  where?: Maybe<TransactionReceiptEvidenceWhereInput>,
  orderBy?: Maybe<TransactionReceiptEvidenceOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type TransactionReceiptEvidence = {
   __typename?: 'TransactionReceiptEvidence',
  id: Scalars['ID'],
  bitcoinTxID?: Maybe<Scalars['String']>,
  fileHash?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export enum TransactionReceiptEvidenceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  BitcoinTxIdAsc = 'bitcoinTxID_ASC',
  BitcoinTxIdDesc = 'bitcoinTxID_DESC',
  FileHashAsc = 'fileHash_ASC',
  FileHashDesc = 'fileHash_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TransactionReceiptEvidenceWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  bitcoinTxID?: Maybe<Scalars['String']>,
  bitcoinTxID_not?: Maybe<Scalars['String']>,
  bitcoinTxID_in?: Maybe<Array<Scalars['String']>>,
  bitcoinTxID_not_in?: Maybe<Array<Scalars['String']>>,
  bitcoinTxID_lt?: Maybe<Scalars['String']>,
  bitcoinTxID_lte?: Maybe<Scalars['String']>,
  bitcoinTxID_gt?: Maybe<Scalars['String']>,
  bitcoinTxID_gte?: Maybe<Scalars['String']>,
  bitcoinTxID_contains?: Maybe<Scalars['String']>,
  bitcoinTxID_not_contains?: Maybe<Scalars['String']>,
  bitcoinTxID_starts_with?: Maybe<Scalars['String']>,
  bitcoinTxID_not_starts_with?: Maybe<Scalars['String']>,
  bitcoinTxID_ends_with?: Maybe<Scalars['String']>,
  bitcoinTxID_not_ends_with?: Maybe<Scalars['String']>,
  fileHash?: Maybe<Scalars['String']>,
  fileHash_not?: Maybe<Scalars['String']>,
  fileHash_in?: Maybe<Array<Scalars['String']>>,
  fileHash_not_in?: Maybe<Array<Scalars['String']>>,
  fileHash_lt?: Maybe<Scalars['String']>,
  fileHash_lte?: Maybe<Scalars['String']>,
  fileHash_gt?: Maybe<Scalars['String']>,
  fileHash_gte?: Maybe<Scalars['String']>,
  fileHash_contains?: Maybe<Scalars['String']>,
  fileHash_not_contains?: Maybe<Scalars['String']>,
  fileHash_starts_with?: Maybe<Scalars['String']>,
  fileHash_not_starts_with?: Maybe<Scalars['String']>,
  fileHash_ends_with?: Maybe<Scalars['String']>,
  fileHash_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<TransactionReceiptEvidenceWhereInput>>,
  OR?: Maybe<Array<TransactionReceiptEvidenceWhereInput>>,
  NOT?: Maybe<Array<TransactionReceiptEvidenceWhereInput>>,
};

export type TransactionReceiptWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  evidence_every?: Maybe<TransactionReceiptEvidenceWhereInput>,
  evidence_some?: Maybe<TransactionReceiptEvidenceWhereInput>,
  evidence_none?: Maybe<TransactionReceiptEvidenceWhereInput>,
  toCurrency?: Maybe<CurrencyWhereInput>,
  fromCurrency?: Maybe<CurrencyWhereInput>,
  paidAt?: Maybe<Scalars['DateTime']>,
  paidAt_not?: Maybe<Scalars['DateTime']>,
  paidAt_in?: Maybe<Array<Scalars['DateTime']>>,
  paidAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  paidAt_lt?: Maybe<Scalars['DateTime']>,
  paidAt_lte?: Maybe<Scalars['DateTime']>,
  paidAt_gt?: Maybe<Scalars['DateTime']>,
  paidAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<TransactionReceiptWhereInput>>,
  OR?: Maybe<Array<TransactionReceiptWhereInput>>,
  NOT?: Maybe<Array<TransactionReceiptWhereInput>>,
};

export type TransactionWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['String']>,
  amount_not?: Maybe<Scalars['String']>,
  amount_in?: Maybe<Array<Scalars['String']>>,
  amount_not_in?: Maybe<Array<Scalars['String']>>,
  amount_lt?: Maybe<Scalars['String']>,
  amount_lte?: Maybe<Scalars['String']>,
  amount_gt?: Maybe<Scalars['String']>,
  amount_gte?: Maybe<Scalars['String']>,
  amount_contains?: Maybe<Scalars['String']>,
  amount_not_contains?: Maybe<Scalars['String']>,
  amount_starts_with?: Maybe<Scalars['String']>,
  amount_not_starts_with?: Maybe<Scalars['String']>,
  amount_ends_with?: Maybe<Scalars['String']>,
  amount_not_ends_with?: Maybe<Scalars['String']>,
  sender?: Maybe<SenderWhereInput>,
  fee?: Maybe<TransactionFeeWhereInput>,
  receipt?: Maybe<TransactionReceiptWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<TransactionWhereInput>>,
  OR?: Maybe<Array<TransactionWhereInput>>,
  NOT?: Maybe<Array<TransactionWhereInput>>,
};

export enum TUserRole {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER'
}

export type UploadGovernmentIdInput = {
  fileHash: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  account?: Maybe<Account>,
  bankAccounts?: Maybe<Array<BankAccount>>,
  contact: Contact,
  cryptoAccounts?: Maybe<Array<CryptoAccount>>,
  id: Scalars['ID'],
  profile?: Maybe<Profile>,
  role: UserRole,
  transactions?: Maybe<Array<Transaction>>,
};


export type UserBankAccountsArgs = {
  where?: Maybe<BankAccountWhereInput>,
  orderBy?: Maybe<BankAccountOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserCryptoAccountsArgs = {
  where?: Maybe<CryptoAccountWhereInput>,
  orderBy?: Maybe<CryptoAccountOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type UserTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>,
  orderBy?: Maybe<TransactionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserRole = {
   __typename?: 'UserRole',
  id: Scalars['ID'],
  type: TUserRole,
};

export type UserRoleWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  type?: Maybe<TUserRole>,
  type_not?: Maybe<TUserRole>,
  type_in?: Maybe<Array<TUserRole>>,
  type_not_in?: Maybe<Array<TUserRole>>,
  AND?: Maybe<Array<UserRoleWhereInput>>,
  OR?: Maybe<Array<UserRoleWhereInput>>,
  NOT?: Maybe<Array<UserRoleWhereInput>>,
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  role?: Maybe<UserRoleWhereInput>,
  contact?: Maybe<ContactWhereInput>,
  account?: Maybe<AccountWhereInput>,
  profile?: Maybe<ProfileWhereInput>,
  bankAccounts_every?: Maybe<BankAccountWhereInput>,
  bankAccounts_some?: Maybe<BankAccountWhereInput>,
  bankAccounts_none?: Maybe<BankAccountWhereInput>,
  cryptoAccounts_every?: Maybe<CryptoAccountWhereInput>,
  cryptoAccounts_some?: Maybe<CryptoAccountWhereInput>,
  cryptoAccounts_none?: Maybe<CryptoAccountWhereInput>,
  transactions_every?: Maybe<TransactionWhereInput>,
  transactions_some?: Maybe<TransactionWhereInput>,
  transactions_none?: Maybe<TransactionWhereInput>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type VerifyEmailInput = {
  address: Scalars['String'],
  code: Scalars['String'],
};

export type VerifyPhoneNumberInput = {
  code: Scalars['String'],
  number: Scalars['String'],
};
