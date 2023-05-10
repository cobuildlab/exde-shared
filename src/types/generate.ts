export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateOrder = {
  __typename?: 'AggregateOrder';
  _avg?: Maybe<OrderAvgAggregate>;
  _count?: Maybe<OrderCountAggregate>;
  _max?: Maybe<OrderMaxAggregate>;
  _min?: Maybe<OrderMinAggregate>;
  _sum?: Maybe<OrderSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type Business = {
  __typename?: 'Business';
  BusinessBusinessTagRelation: Array<BusinessTag>;
  _count?: Maybe<BusinessCount>;
  archivedAt?: Maybe<Scalars['DateTime']>;
  businessName?: Maybe<Scalars['String']>;
  businessOrderRelation: Array<Order>;
  businessRecipientRelation: Array<Recipient>;
  businessUserRoleRelation: Array<UserRole>;
  contactName?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  location?: Maybe<Location>;
  note?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  pickupInstruction?: Maybe<Scalars['String']>;
  service?: Maybe<Service>;
  timezone: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BusinessBusinessBusinessTagRelationArgs = {
  cursor?: InputMaybe<BusinessTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<BusinessTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BusinessTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BusinessTagWhereInput>;
};

export type BusinessBusinessOrderRelationArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type BusinessBusinessRecipientRelationArgs = {
  cursor?: InputMaybe<RecipientWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipientWhereInput>;
};

export type BusinessBusinessUserRoleRelationArgs = {
  cursor?: InputMaybe<UserRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserRoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserRoleWhereInput>;
};

export type BusinessCount = {
  __typename?: 'BusinessCount';
  BusinessBusinessTagRelation: Scalars['Int'];
  businessOrderRelation: Scalars['Int'];
  businessRecipientRelation: Scalars['Int'];
  businessUserRoleRelation: Scalars['Int'];
};

export type BusinessCreateInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagCreateNestedManyWithoutBusinessInput>;
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessOrderRelation?: InputMaybe<OrderCreateNestedManyWithoutBusinessInput>;
  businessRecipientRelation?: InputMaybe<RecipientCreateNestedManyWithoutBusinessInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutBusinessInput>;
  contactName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  location?: InputMaybe<LocationCreateNestedOneWithoutBusinessInput>;
  note?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pickupInstruction?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutBusinessInput>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessCreateNestedOneWithoutBusinessBusinessTagRelationInput = {
  connect?: InputMaybe<BusinessWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutBusinessBusinessTagRelationInput>;
  create?: InputMaybe<BusinessCreateWithoutBusinessBusinessTagRelationInput>;
};

export type BusinessCreateNestedOneWithoutBusinessOrderRelationInput = {
  connect?: InputMaybe<BusinessWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutBusinessOrderRelationInput>;
  create?: InputMaybe<BusinessCreateWithoutBusinessOrderRelationInput>;
};

export type BusinessCreateNestedOneWithoutBusinessRecipientRelationInput = {
  connect?: InputMaybe<BusinessWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutBusinessRecipientRelationInput>;
  create?: InputMaybe<BusinessCreateWithoutBusinessRecipientRelationInput>;
};

export type BusinessCreateNestedOneWithoutBusinessUserRoleRelationInput = {
  connect?: InputMaybe<BusinessWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutBusinessUserRoleRelationInput>;
  create?: InputMaybe<BusinessCreateWithoutBusinessUserRoleRelationInput>;
};

export type BusinessCreateNestedOneWithoutLocationInput = {
  connect?: InputMaybe<BusinessWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutLocationInput>;
  create?: InputMaybe<BusinessCreateWithoutLocationInput>;
};

export type BusinessCreateOrConnectWithoutBusinessBusinessTagRelationInput = {
  create: BusinessCreateWithoutBusinessBusinessTagRelationInput;
  where: BusinessWhereUniqueInput;
};

export type BusinessCreateOrConnectWithoutBusinessOrderRelationInput = {
  create: BusinessCreateWithoutBusinessOrderRelationInput;
  where: BusinessWhereUniqueInput;
};

export type BusinessCreateOrConnectWithoutBusinessRecipientRelationInput = {
  create: BusinessCreateWithoutBusinessRecipientRelationInput;
  where: BusinessWhereUniqueInput;
};

export type BusinessCreateOrConnectWithoutBusinessUserRoleRelationInput = {
  create: BusinessCreateWithoutBusinessUserRoleRelationInput;
  where: BusinessWhereUniqueInput;
};

export type BusinessCreateOrConnectWithoutLocationInput = {
  create: BusinessCreateWithoutLocationInput;
  where: BusinessWhereUniqueInput;
};

export type BusinessCreateWithoutBusinessBusinessTagRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessOrderRelation?: InputMaybe<OrderCreateNestedManyWithoutBusinessInput>;
  businessRecipientRelation?: InputMaybe<RecipientCreateNestedManyWithoutBusinessInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutBusinessInput>;
  contactName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  location?: InputMaybe<LocationCreateNestedOneWithoutBusinessInput>;
  note?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pickupInstruction?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutBusinessInput>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessCreateWithoutBusinessOrderRelationInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagCreateNestedManyWithoutBusinessInput>;
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessRecipientRelation?: InputMaybe<RecipientCreateNestedManyWithoutBusinessInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutBusinessInput>;
  contactName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  location?: InputMaybe<LocationCreateNestedOneWithoutBusinessInput>;
  note?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pickupInstruction?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutBusinessInput>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessCreateWithoutBusinessRecipientRelationInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagCreateNestedManyWithoutBusinessInput>;
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessOrderRelation?: InputMaybe<OrderCreateNestedManyWithoutBusinessInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutBusinessInput>;
  contactName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  location?: InputMaybe<LocationCreateNestedOneWithoutBusinessInput>;
  note?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pickupInstruction?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutBusinessInput>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessCreateWithoutBusinessUserRoleRelationInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagCreateNestedManyWithoutBusinessInput>;
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessOrderRelation?: InputMaybe<OrderCreateNestedManyWithoutBusinessInput>;
  businessRecipientRelation?: InputMaybe<RecipientCreateNestedManyWithoutBusinessInput>;
  contactName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  location?: InputMaybe<LocationCreateNestedOneWithoutBusinessInput>;
  note?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pickupInstruction?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutBusinessInput>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessCreateWithoutLocationInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagCreateNestedManyWithoutBusinessInput>;
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessOrderRelation?: InputMaybe<OrderCreateNestedManyWithoutBusinessInput>;
  businessRecipientRelation?: InputMaybe<RecipientCreateNestedManyWithoutBusinessInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutBusinessInput>;
  contactName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  pickupInstruction?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutBusinessInput>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessOrderByWithRelationInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagOrderByRelationAggregateInput>;
  archivedAt?: InputMaybe<SortOrder>;
  businessName?: InputMaybe<SortOrder>;
  businessOrderRelation?: InputMaybe<OrderOrderByRelationAggregateInput>;
  businessRecipientRelation?: InputMaybe<RecipientOrderByRelationAggregateInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  contactName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<LocationOrderByWithRelationInput>;
  note?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  pickupInstruction?: InputMaybe<SortOrder>;
  service?: InputMaybe<ServiceOrderByWithRelationInput>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BusinessRelationFilter = {
  is?: InputMaybe<BusinessWhereInput>;
  isNot?: InputMaybe<BusinessWhereInput>;
};

export enum BusinessScalarFieldEnum {
  ArchivedAt = 'archivedAt',
  BusinessName = 'businessName',
  ContactName = 'contactName',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Note = 'note',
  PhoneNumber = 'phoneNumber',
  PickupInstruction = 'pickupInstruction',
  Timezone = 'timezone',
  UpdatedAt = 'updatedAt',
}

export type BusinessTag = {
  __typename?: 'BusinessTag';
  businessId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  tagId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type BusinessTagBusinessIdTagIdCompoundUniqueInput = {
  businessId: Scalars['Int'];
  tagId: Scalars['Int'];
};

export type BusinessTagCreateManyBusinessInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  tagId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessTagCreateManyBusinessInputEnvelope = {
  data: Array<BusinessTagCreateManyBusinessInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BusinessTagCreateManyTagInput = {
  businessId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessTagCreateManyTagInputEnvelope = {
  data: Array<BusinessTagCreateManyTagInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BusinessTagCreateNestedManyWithoutBusinessInput = {
  connect?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<BusinessTagCreateOrConnectWithoutBusinessInput>
  >;
  create?: InputMaybe<Array<BusinessTagCreateWithoutBusinessInput>>;
  createMany?: InputMaybe<BusinessTagCreateManyBusinessInputEnvelope>;
};

export type BusinessTagCreateNestedManyWithoutTagInput = {
  connect?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<BusinessTagCreateOrConnectWithoutTagInput>
  >;
  create?: InputMaybe<Array<BusinessTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<BusinessTagCreateManyTagInputEnvelope>;
};

export type BusinessTagCreateOrConnectWithoutBusinessInput = {
  create: BusinessTagCreateWithoutBusinessInput;
  where: BusinessTagWhereUniqueInput;
};

export type BusinessTagCreateOrConnectWithoutTagInput = {
  create: BusinessTagCreateWithoutTagInput;
  where: BusinessTagWhereUniqueInput;
};

export type BusinessTagCreateWithoutBusinessInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  tag: TagCreateNestedOneWithoutTagBusinessTagRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessTagCreateWithoutTagInput = {
  business: BusinessCreateNestedOneWithoutBusinessBusinessTagRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BusinessTagListRelationFilter = {
  every?: InputMaybe<BusinessTagWhereInput>;
  none?: InputMaybe<BusinessTagWhereInput>;
  some?: InputMaybe<BusinessTagWhereInput>;
};

export type BusinessTagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BusinessTagOrderByWithRelationInput = {
  business?: InputMaybe<BusinessOrderByWithRelationInput>;
  businessId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  tag?: InputMaybe<TagOrderByWithRelationInput>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum BusinessTagScalarFieldEnum {
  BusinessId = 'businessId',
  CreatedAt = 'createdAt',
  TagId = 'tagId',
  UpdatedAt = 'updatedAt',
}

export type BusinessTagScalarWhereInput = {
  AND?: InputMaybe<Array<BusinessTagScalarWhereInput>>;
  NOT?: InputMaybe<Array<BusinessTagScalarWhereInput>>;
  OR?: InputMaybe<Array<BusinessTagScalarWhereInput>>;
  businessId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BusinessTagUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BusinessTagUpdateManyWithWhereWithoutBusinessInput = {
  data: BusinessTagUpdateManyMutationInput;
  where: BusinessTagScalarWhereInput;
};

export type BusinessTagUpdateManyWithWhereWithoutTagInput = {
  data: BusinessTagUpdateManyMutationInput;
  where: BusinessTagScalarWhereInput;
};

export type BusinessTagUpdateManyWithoutBusinessNestedInput = {
  connect?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<BusinessTagCreateOrConnectWithoutBusinessInput>
  >;
  create?: InputMaybe<Array<BusinessTagCreateWithoutBusinessInput>>;
  createMany?: InputMaybe<BusinessTagCreateManyBusinessInputEnvelope>;
  delete?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BusinessTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  set?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  update?: InputMaybe<
    Array<BusinessTagUpdateWithWhereUniqueWithoutBusinessInput>
  >;
  updateMany?: InputMaybe<
    Array<BusinessTagUpdateManyWithWhereWithoutBusinessInput>
  >;
  upsert?: InputMaybe<
    Array<BusinessTagUpsertWithWhereUniqueWithoutBusinessInput>
  >;
};

export type BusinessTagUpdateManyWithoutTagNestedInput = {
  connect?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<BusinessTagCreateOrConnectWithoutTagInput>
  >;
  create?: InputMaybe<Array<BusinessTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<BusinessTagCreateManyTagInputEnvelope>;
  delete?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BusinessTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  set?: InputMaybe<Array<BusinessTagWhereUniqueInput>>;
  update?: InputMaybe<Array<BusinessTagUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: InputMaybe<Array<BusinessTagUpdateManyWithWhereWithoutTagInput>>;
  upsert?: InputMaybe<Array<BusinessTagUpsertWithWhereUniqueWithoutTagInput>>;
};

export type BusinessTagUpdateWithWhereUniqueWithoutBusinessInput = {
  data: BusinessTagUpdateWithoutBusinessInput;
  where: BusinessTagWhereUniqueInput;
};

export type BusinessTagUpdateWithWhereUniqueWithoutTagInput = {
  data: BusinessTagUpdateWithoutTagInput;
  where: BusinessTagWhereUniqueInput;
};

export type BusinessTagUpdateWithoutBusinessInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutTagBusinessTagRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BusinessTagUpdateWithoutTagInput = {
  business?: InputMaybe<BusinessUpdateOneRequiredWithoutBusinessBusinessTagRelationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BusinessTagUpsertWithWhereUniqueWithoutBusinessInput = {
  create: BusinessTagCreateWithoutBusinessInput;
  update: BusinessTagUpdateWithoutBusinessInput;
  where: BusinessTagWhereUniqueInput;
};

export type BusinessTagUpsertWithWhereUniqueWithoutTagInput = {
  create: BusinessTagCreateWithoutTagInput;
  update: BusinessTagUpdateWithoutTagInput;
  where: BusinessTagWhereUniqueInput;
};

export type BusinessTagWhereInput = {
  AND?: InputMaybe<Array<BusinessTagWhereInput>>;
  NOT?: InputMaybe<Array<BusinessTagWhereInput>>;
  OR?: InputMaybe<Array<BusinessTagWhereInput>>;
  business?: InputMaybe<BusinessRelationFilter>;
  businessId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  tag?: InputMaybe<TagRelationFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BusinessTagWhereUniqueInput = {
  businessId_tagId?: InputMaybe<BusinessTagBusinessIdTagIdCompoundUniqueInput>;
};

export type BusinessUpdateInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagUpdateManyWithoutBusinessNestedInput>;
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  businessName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  businessOrderRelation?: InputMaybe<OrderUpdateManyWithoutBusinessNestedInput>;
  businessRecipientRelation?: InputMaybe<RecipientUpdateManyWithoutBusinessNestedInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutBusinessNestedInput>;
  contactName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutBusinessNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pickupInstruction?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutBusinessNestedInput>;
  timezone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BusinessUpdateOneRequiredWithoutBusinessBusinessTagRelationNestedInput =
  {
    connect?: InputMaybe<BusinessWhereUniqueInput>;
    connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutBusinessBusinessTagRelationInput>;
    create?: InputMaybe<BusinessCreateWithoutBusinessBusinessTagRelationInput>;
    update?: InputMaybe<BusinessUpdateWithoutBusinessBusinessTagRelationInput>;
    upsert?: InputMaybe<BusinessUpsertWithoutBusinessBusinessTagRelationInput>;
  };

export type BusinessUpdateOneRequiredWithoutBusinessOrderRelationNestedInput = {
  connect?: InputMaybe<BusinessWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutBusinessOrderRelationInput>;
  create?: InputMaybe<BusinessCreateWithoutBusinessOrderRelationInput>;
  update?: InputMaybe<BusinessUpdateWithoutBusinessOrderRelationInput>;
  upsert?: InputMaybe<BusinessUpsertWithoutBusinessOrderRelationInput>;
};

export type BusinessUpdateOneRequiredWithoutBusinessRecipientRelationNestedInput =
  {
    connect?: InputMaybe<BusinessWhereUniqueInput>;
    connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutBusinessRecipientRelationInput>;
    create?: InputMaybe<BusinessCreateWithoutBusinessRecipientRelationInput>;
    update?: InputMaybe<BusinessUpdateWithoutBusinessRecipientRelationInput>;
    upsert?: InputMaybe<BusinessUpsertWithoutBusinessRecipientRelationInput>;
  };

export type BusinessUpdateOneWithoutBusinessUserRoleRelationNestedInput = {
  connect?: InputMaybe<BusinessWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutBusinessUserRoleRelationInput>;
  create?: InputMaybe<BusinessCreateWithoutBusinessUserRoleRelationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<BusinessUpdateWithoutBusinessUserRoleRelationInput>;
  upsert?: InputMaybe<BusinessUpsertWithoutBusinessUserRoleRelationInput>;
};

export type BusinessUpdateOneWithoutLocationNestedInput = {
  connect?: InputMaybe<BusinessWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BusinessCreateOrConnectWithoutLocationInput>;
  create?: InputMaybe<BusinessCreateWithoutLocationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<BusinessUpdateWithoutLocationInput>;
  upsert?: InputMaybe<BusinessUpsertWithoutLocationInput>;
};

export type BusinessUpdateWithoutBusinessBusinessTagRelationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  businessName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  businessOrderRelation?: InputMaybe<OrderUpdateManyWithoutBusinessNestedInput>;
  businessRecipientRelation?: InputMaybe<RecipientUpdateManyWithoutBusinessNestedInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutBusinessNestedInput>;
  contactName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutBusinessNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pickupInstruction?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutBusinessNestedInput>;
  timezone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BusinessUpdateWithoutBusinessOrderRelationInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagUpdateManyWithoutBusinessNestedInput>;
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  businessName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  businessRecipientRelation?: InputMaybe<RecipientUpdateManyWithoutBusinessNestedInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutBusinessNestedInput>;
  contactName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutBusinessNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pickupInstruction?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutBusinessNestedInput>;
  timezone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BusinessUpdateWithoutBusinessRecipientRelationInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagUpdateManyWithoutBusinessNestedInput>;
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  businessName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  businessOrderRelation?: InputMaybe<OrderUpdateManyWithoutBusinessNestedInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutBusinessNestedInput>;
  contactName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutBusinessNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pickupInstruction?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutBusinessNestedInput>;
  timezone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BusinessUpdateWithoutBusinessUserRoleRelationInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagUpdateManyWithoutBusinessNestedInput>;
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  businessName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  businessOrderRelation?: InputMaybe<OrderUpdateManyWithoutBusinessNestedInput>;
  businessRecipientRelation?: InputMaybe<RecipientUpdateManyWithoutBusinessNestedInput>;
  contactName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutBusinessNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pickupInstruction?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutBusinessNestedInput>;
  timezone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BusinessUpdateWithoutLocationInput = {
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagUpdateManyWithoutBusinessNestedInput>;
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  businessName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  businessOrderRelation?: InputMaybe<OrderUpdateManyWithoutBusinessNestedInput>;
  businessRecipientRelation?: InputMaybe<RecipientUpdateManyWithoutBusinessNestedInput>;
  businessUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutBusinessNestedInput>;
  contactName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pickupInstruction?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutBusinessNestedInput>;
  timezone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BusinessUpsertWithoutBusinessBusinessTagRelationInput = {
  create: BusinessCreateWithoutBusinessBusinessTagRelationInput;
  update: BusinessUpdateWithoutBusinessBusinessTagRelationInput;
};

export type BusinessUpsertWithoutBusinessOrderRelationInput = {
  create: BusinessCreateWithoutBusinessOrderRelationInput;
  update: BusinessUpdateWithoutBusinessOrderRelationInput;
};

export type BusinessUpsertWithoutBusinessRecipientRelationInput = {
  create: BusinessCreateWithoutBusinessRecipientRelationInput;
  update: BusinessUpdateWithoutBusinessRecipientRelationInput;
};

export type BusinessUpsertWithoutBusinessUserRoleRelationInput = {
  create: BusinessCreateWithoutBusinessUserRoleRelationInput;
  update: BusinessUpdateWithoutBusinessUserRoleRelationInput;
};

export type BusinessUpsertWithoutLocationInput = {
  create: BusinessCreateWithoutLocationInput;
  update: BusinessUpdateWithoutLocationInput;
};

export type BusinessWhereInput = {
  AND?: InputMaybe<Array<BusinessWhereInput>>;
  BusinessBusinessTagRelation?: InputMaybe<BusinessTagListRelationFilter>;
  NOT?: InputMaybe<Array<BusinessWhereInput>>;
  OR?: InputMaybe<Array<BusinessWhereInput>>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  businessName?: InputMaybe<StringNullableFilter>;
  businessOrderRelation?: InputMaybe<OrderListRelationFilter>;
  businessRecipientRelation?: InputMaybe<RecipientListRelationFilter>;
  businessUserRoleRelation?: InputMaybe<UserRoleListRelationFilter>;
  contactName?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<LocationRelationFilter>;
  note?: InputMaybe<StringNullableFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  pickupInstruction?: InputMaybe<StringNullableFilter>;
  service?: InputMaybe<ServiceRelationFilter>;
  timezone?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BusinessWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['DateTime']>>;
  has?: InputMaybe<Scalars['DateTime']>;
  hasEvery?: InputMaybe<Array<Scalars['DateTime']>>;
  hasSome?: InputMaybe<Array<Scalars['DateTime']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type DeviceToken = {
  __typename?: 'DeviceToken';
  active: Scalars['Boolean'];
  driverId: Scalars['Int'];
  id: Scalars['Int'];
  token: Scalars['String'];
};

export type DeviceTokenCreateManyDriverInput = {
  active: Scalars['Boolean'];
  id?: InputMaybe<Scalars['Int']>;
  token: Scalars['String'];
};

export type DeviceTokenCreateManyDriverInputEnvelope = {
  data: Array<DeviceTokenCreateManyDriverInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DeviceTokenCreateNestedManyWithoutDriverInput = {
  connect?: InputMaybe<Array<DeviceTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<DeviceTokenCreateOrConnectWithoutDriverInput>
  >;
  create?: InputMaybe<Array<DeviceTokenCreateWithoutDriverInput>>;
  createMany?: InputMaybe<DeviceTokenCreateManyDriverInputEnvelope>;
};

export type DeviceTokenCreateOrConnectWithoutDriverInput = {
  create: DeviceTokenCreateWithoutDriverInput;
  where: DeviceTokenWhereUniqueInput;
};

export type DeviceTokenCreateWithoutDriverInput = {
  active: Scalars['Boolean'];
  token: Scalars['String'];
};

export type DeviceTokenListRelationFilter = {
  every?: InputMaybe<DeviceTokenWhereInput>;
  none?: InputMaybe<DeviceTokenWhereInput>;
  some?: InputMaybe<DeviceTokenWhereInput>;
};

export type DeviceTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DeviceTokenOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  driver?: InputMaybe<DriverOrderByWithRelationInput>;
  driverId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum DeviceTokenScalarFieldEnum {
  Active = 'active',
  DriverId = 'driverId',
  Id = 'id',
  Token = 'token',
}

export type DeviceTokenScalarWhereInput = {
  AND?: InputMaybe<Array<DeviceTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<DeviceTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<DeviceTokenScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  driverId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
};

export type DeviceTokenUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DeviceTokenUpdateManyWithWhereWithoutDriverInput = {
  data: DeviceTokenUpdateManyMutationInput;
  where: DeviceTokenScalarWhereInput;
};

export type DeviceTokenUpdateManyWithoutDriverNestedInput = {
  connect?: InputMaybe<Array<DeviceTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<DeviceTokenCreateOrConnectWithoutDriverInput>
  >;
  create?: InputMaybe<Array<DeviceTokenCreateWithoutDriverInput>>;
  createMany?: InputMaybe<DeviceTokenCreateManyDriverInputEnvelope>;
  delete?: InputMaybe<Array<DeviceTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DeviceTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DeviceTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<DeviceTokenWhereUniqueInput>>;
  update?: InputMaybe<
    Array<DeviceTokenUpdateWithWhereUniqueWithoutDriverInput>
  >;
  updateMany?: InputMaybe<
    Array<DeviceTokenUpdateManyWithWhereWithoutDriverInput>
  >;
  upsert?: InputMaybe<
    Array<DeviceTokenUpsertWithWhereUniqueWithoutDriverInput>
  >;
};

export type DeviceTokenUpdateWithWhereUniqueWithoutDriverInput = {
  data: DeviceTokenUpdateWithoutDriverInput;
  where: DeviceTokenWhereUniqueInput;
};

export type DeviceTokenUpdateWithoutDriverInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DeviceTokenUpsertWithWhereUniqueWithoutDriverInput = {
  create: DeviceTokenCreateWithoutDriverInput;
  update: DeviceTokenUpdateWithoutDriverInput;
  where: DeviceTokenWhereUniqueInput;
};

export type DeviceTokenWhereInput = {
  AND?: InputMaybe<Array<DeviceTokenWhereInput>>;
  NOT?: InputMaybe<Array<DeviceTokenWhereInput>>;
  OR?: InputMaybe<Array<DeviceTokenWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  driver?: InputMaybe<DriverRelationFilter>;
  driverId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
};

export type DeviceTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DistributionCenter = {
  __typename?: 'DistributionCenter';
  closingTime: Array<Scalars['DateTime']>;
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  name: Scalars['String'];
};

export type DistributionCenterCreateInput = {
  closingTime?: InputMaybe<DistributionCenterCreateclosingTimeInput>;
  location: LocationCreateNestedOneWithoutDistributionCenterInput;
  name: Scalars['String'];
};

export type DistributionCenterCreateNestedOneWithoutLocationInput = {
  connect?: InputMaybe<DistributionCenterWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DistributionCenterCreateOrConnectWithoutLocationInput>;
  create?: InputMaybe<DistributionCenterCreateWithoutLocationInput>;
};

export type DistributionCenterCreateOrConnectWithoutLocationInput = {
  create: DistributionCenterCreateWithoutLocationInput;
  where: DistributionCenterWhereUniqueInput;
};

export type DistributionCenterCreateWithoutLocationInput = {
  closingTime?: InputMaybe<DistributionCenterCreateclosingTimeInput>;
  name: Scalars['String'];
};

export type DistributionCenterCreateclosingTimeInput = {
  set: Array<Scalars['DateTime']>;
};

export type DistributionCenterOrderByWithRelationInput = {
  closingTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<LocationOrderByWithRelationInput>;
  locationId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DistributionCenterRelationFilter = {
  is?: InputMaybe<DistributionCenterWhereInput>;
  isNot?: InputMaybe<DistributionCenterWhereInput>;
};

export enum DistributionCenterScalarFieldEnum {
  ClosingTime = 'closingTime',
  Id = 'id',
  LocationId = 'locationId',
  Name = 'name',
}

export type DistributionCenterUpdateInput = {
  closingTime?: InputMaybe<DistributionCenterUpdateclosingTimeInput>;
  location?: InputMaybe<LocationUpdateOneRequiredWithoutDistributionCenterNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DistributionCenterUpdateOneWithoutLocationNestedInput = {
  connect?: InputMaybe<DistributionCenterWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DistributionCenterCreateOrConnectWithoutLocationInput>;
  create?: InputMaybe<DistributionCenterCreateWithoutLocationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<DistributionCenterUpdateWithoutLocationInput>;
  upsert?: InputMaybe<DistributionCenterUpsertWithoutLocationInput>;
};

export type DistributionCenterUpdateWithoutLocationInput = {
  closingTime?: InputMaybe<DistributionCenterUpdateclosingTimeInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DistributionCenterUpdateclosingTimeInput = {
  push?: InputMaybe<Array<Scalars['DateTime']>>;
  set?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DistributionCenterUpsertWithoutLocationInput = {
  create: DistributionCenterCreateWithoutLocationInput;
  update: DistributionCenterUpdateWithoutLocationInput;
};

export type DistributionCenterWhereInput = {
  AND?: InputMaybe<Array<DistributionCenterWhereInput>>;
  NOT?: InputMaybe<Array<DistributionCenterWhereInput>>;
  OR?: InputMaybe<Array<DistributionCenterWhereInput>>;
  closingTime?: InputMaybe<DateTimeNullableListFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<LocationRelationFilter>;
  locationId?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type DistributionCenterWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  locationId?: InputMaybe<Scalars['Int']>;
};

export type Driver = {
  __typename?: 'Driver';
  _count?: Maybe<DriverCount>;
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deliveryRegion?: Maybe<Scalars['String']>;
  deliveryTime: Array<Scalars['DateTime']>;
  driverDeviceTokensRelation: Array<DeviceToken>;
  driverLicense?: Maybe<DriverLicense>;
  driverPolygonRelation: Array<Polygon>;
  driverTrackingRelation: Array<Tracking>;
  id: Scalars['Int'];
  isVerified: Scalars['Boolean'];
  nickName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  proofWork?: Maybe<Scalars['String']>;
  sinCard?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type DriverDriverDeviceTokensRelationArgs = {
  cursor?: InputMaybe<DeviceTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<DeviceTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DeviceTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DeviceTokenWhereInput>;
};

export type DriverDriverPolygonRelationArgs = {
  cursor?: InputMaybe<PolygonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PolygonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PolygonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PolygonWhereInput>;
};

export type DriverDriverTrackingRelationArgs = {
  cursor?: InputMaybe<TrackingWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrackingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrackingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrackingWhereInput>;
};

export type DriverCount = {
  __typename?: 'DriverCount';
  driverDeviceTokensRelation: Scalars['Int'];
  driverPolygonRelation: Scalars['Int'];
  driverTrackingRelation: Scalars['Int'];
};

export type DriverCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryRegion?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<DriverCreatedeliveryTimeInput>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenCreateNestedManyWithoutDriverInput>;
  driverLicense?: InputMaybe<DriverLicenseCreateNestedOneWithoutDriverInput>;
  driverPolygonRelation?: InputMaybe<PolygonCreateNestedManyWithoutDriverInput>;
  driverTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutDriverInput>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  nickName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  proofWork?: InputMaybe<Scalars['String']>;
  sinCard?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutDriverInput;
};

export type DriverCreateNestedOneWithoutDriverPolygonRelationInput = {
  connect?: InputMaybe<DriverWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DriverCreateOrConnectWithoutDriverPolygonRelationInput>;
  create?: InputMaybe<DriverCreateWithoutDriverPolygonRelationInput>;
};

export type DriverCreateNestedOneWithoutDriverTrackingRelationInput = {
  connect?: InputMaybe<DriverWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DriverCreateOrConnectWithoutDriverTrackingRelationInput>;
  create?: InputMaybe<DriverCreateWithoutDriverTrackingRelationInput>;
};

export type DriverCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<DriverWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DriverCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<DriverCreateWithoutUserInput>;
};

export type DriverCreateOrConnectWithoutDriverPolygonRelationInput = {
  create: DriverCreateWithoutDriverPolygonRelationInput;
  where: DriverWhereUniqueInput;
};

export type DriverCreateOrConnectWithoutDriverTrackingRelationInput = {
  create: DriverCreateWithoutDriverTrackingRelationInput;
  where: DriverWhereUniqueInput;
};

export type DriverCreateOrConnectWithoutUserInput = {
  create: DriverCreateWithoutUserInput;
  where: DriverWhereUniqueInput;
};

export type DriverCreateWithoutDriverPolygonRelationInput = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryRegion?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<DriverCreatedeliveryTimeInput>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenCreateNestedManyWithoutDriverInput>;
  driverLicense?: InputMaybe<DriverLicenseCreateNestedOneWithoutDriverInput>;
  driverTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutDriverInput>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  nickName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  proofWork?: InputMaybe<Scalars['String']>;
  sinCard?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutDriverInput;
};

export type DriverCreateWithoutDriverTrackingRelationInput = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryRegion?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<DriverCreatedeliveryTimeInput>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenCreateNestedManyWithoutDriverInput>;
  driverLicense?: InputMaybe<DriverLicenseCreateNestedOneWithoutDriverInput>;
  driverPolygonRelation?: InputMaybe<PolygonCreateNestedManyWithoutDriverInput>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  nickName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  proofWork?: InputMaybe<Scalars['String']>;
  sinCard?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutDriverInput;
};

export type DriverCreateWithoutUserInput = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryRegion?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<DriverCreatedeliveryTimeInput>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenCreateNestedManyWithoutDriverInput>;
  driverLicense?: InputMaybe<DriverLicenseCreateNestedOneWithoutDriverInput>;
  driverPolygonRelation?: InputMaybe<PolygonCreateNestedManyWithoutDriverInput>;
  driverTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutDriverInput>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  nickName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  proofWork?: InputMaybe<Scalars['String']>;
  sinCard?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DriverCreatedeliveryTimeInput = {
  set: Array<Scalars['DateTime']>;
};

export type DriverLicense = {
  __typename?: 'DriverLicense';
  back: Scalars['String'];
  createdAt: Scalars['DateTime'];
  driverId: Scalars['Int'];
  front: Scalars['String'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type DriverLicenseCreateNestedOneWithoutDriverInput = {
  connect?: InputMaybe<DriverLicenseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DriverLicenseCreateOrConnectWithoutDriverInput>;
  create?: InputMaybe<DriverLicenseCreateWithoutDriverInput>;
};

export type DriverLicenseCreateOrConnectWithoutDriverInput = {
  create: DriverLicenseCreateWithoutDriverInput;
  where: DriverLicenseWhereUniqueInput;
};

export type DriverLicenseCreateWithoutDriverInput = {
  back: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  front: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DriverLicenseOrderByWithRelationInput = {
  back?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  driver?: InputMaybe<DriverOrderByWithRelationInput>;
  driverId?: InputMaybe<SortOrder>;
  front?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type DriverLicenseRelationFilter = {
  is?: InputMaybe<DriverLicenseWhereInput>;
  isNot?: InputMaybe<DriverLicenseWhereInput>;
};

export type DriverLicenseUpdateOneWithoutDriverNestedInput = {
  connect?: InputMaybe<DriverLicenseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DriverLicenseCreateOrConnectWithoutDriverInput>;
  create?: InputMaybe<DriverLicenseCreateWithoutDriverInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<DriverLicenseUpdateWithoutDriverInput>;
  upsert?: InputMaybe<DriverLicenseUpsertWithoutDriverInput>;
};

export type DriverLicenseUpdateWithoutDriverInput = {
  back?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  front?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DriverLicenseUpsertWithoutDriverInput = {
  create: DriverLicenseCreateWithoutDriverInput;
  update: DriverLicenseUpdateWithoutDriverInput;
};

export type DriverLicenseWhereInput = {
  AND?: InputMaybe<Array<DriverLicenseWhereInput>>;
  NOT?: InputMaybe<Array<DriverLicenseWhereInput>>;
  OR?: InputMaybe<Array<DriverLicenseWhereInput>>;
  back?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  driver?: InputMaybe<DriverRelationFilter>;
  driverId?: InputMaybe<IntFilter>;
  front?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DriverLicenseWhereUniqueInput = {
  driverId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type DriverOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deliveryRegion?: InputMaybe<SortOrder>;
  deliveryTime?: InputMaybe<SortOrder>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenOrderByRelationAggregateInput>;
  driverLicense?: InputMaybe<DriverLicenseOrderByWithRelationInput>;
  driverPolygonRelation?: InputMaybe<PolygonOrderByRelationAggregateInput>;
  driverTrackingRelation?: InputMaybe<TrackingOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  nickName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  proofWork?: InputMaybe<SortOrder>;
  sinCard?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type DriverRelationFilter = {
  is?: InputMaybe<DriverWhereInput>;
  isNot?: InputMaybe<DriverWhereInput>;
};

export enum DriverScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  DeliveryRegion = 'deliveryRegion',
  DeliveryTime = 'deliveryTime',
  Id = 'id',
  IsVerified = 'isVerified',
  NickName = 'nickName',
  PhoneNumber = 'phoneNumber',
  ProofWork = 'proofWork',
  SinCard = 'sinCard',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type DriverSignUpInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driver?: InputMaybe<DriverCreateNestedOneWithoutUserInput>;
  email: Scalars['String'];
  emailNotificationsFlag?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  userTokenRelation?: InputMaybe<TokenCreateNestedManyWithoutUserInput>;
  userUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  userUserSettingRelation?: InputMaybe<UserSettingCreateNestedManyWithoutUserInput>;
};

export type DriverUpdateInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryRegion?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<DriverUpdatedeliveryTimeInput>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenUpdateManyWithoutDriverNestedInput>;
  driverLicense?: InputMaybe<DriverLicenseUpdateOneWithoutDriverNestedInput>;
  driverPolygonRelation?: InputMaybe<PolygonUpdateManyWithoutDriverNestedInput>;
  driverTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutDriverNestedInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  proofWork?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sinCard?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutDriverNestedInput>;
};

export type DriverUpdateOneRequiredWithoutDriverPolygonRelationNestedInput = {
  connect?: InputMaybe<DriverWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DriverCreateOrConnectWithoutDriverPolygonRelationInput>;
  create?: InputMaybe<DriverCreateWithoutDriverPolygonRelationInput>;
  update?: InputMaybe<DriverUpdateWithoutDriverPolygonRelationInput>;
  upsert?: InputMaybe<DriverUpsertWithoutDriverPolygonRelationInput>;
};

export type DriverUpdateOneWithoutDriverTrackingRelationNestedInput = {
  connect?: InputMaybe<DriverWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DriverCreateOrConnectWithoutDriverTrackingRelationInput>;
  create?: InputMaybe<DriverCreateWithoutDriverTrackingRelationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<DriverUpdateWithoutDriverTrackingRelationInput>;
  upsert?: InputMaybe<DriverUpsertWithoutDriverTrackingRelationInput>;
};

export type DriverUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<DriverWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DriverCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<DriverCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<DriverUpdateWithoutUserInput>;
  upsert?: InputMaybe<DriverUpsertWithoutUserInput>;
};

export type DriverUpdateWithoutDriverPolygonRelationInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryRegion?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<DriverUpdatedeliveryTimeInput>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenUpdateManyWithoutDriverNestedInput>;
  driverLicense?: InputMaybe<DriverLicenseUpdateOneWithoutDriverNestedInput>;
  driverTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutDriverNestedInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  proofWork?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sinCard?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutDriverNestedInput>;
};

export type DriverUpdateWithoutDriverTrackingRelationInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryRegion?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<DriverUpdatedeliveryTimeInput>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenUpdateManyWithoutDriverNestedInput>;
  driverLicense?: InputMaybe<DriverLicenseUpdateOneWithoutDriverNestedInput>;
  driverPolygonRelation?: InputMaybe<PolygonUpdateManyWithoutDriverNestedInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  proofWork?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sinCard?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutDriverNestedInput>;
};

export type DriverUpdateWithoutUserInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryRegion?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<DriverUpdatedeliveryTimeInput>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenUpdateManyWithoutDriverNestedInput>;
  driverLicense?: InputMaybe<DriverLicenseUpdateOneWithoutDriverNestedInput>;
  driverPolygonRelation?: InputMaybe<PolygonUpdateManyWithoutDriverNestedInput>;
  driverTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutDriverNestedInput>;
  isVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  nickName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  proofWork?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sinCard?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DriverUpdatedeliveryTimeInput = {
  push?: InputMaybe<Array<Scalars['DateTime']>>;
  set?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DriverUpsertWithoutDriverPolygonRelationInput = {
  create: DriverCreateWithoutDriverPolygonRelationInput;
  update: DriverUpdateWithoutDriverPolygonRelationInput;
};

export type DriverUpsertWithoutDriverTrackingRelationInput = {
  create: DriverCreateWithoutDriverTrackingRelationInput;
  update: DriverUpdateWithoutDriverTrackingRelationInput;
};

export type DriverUpsertWithoutUserInput = {
  create: DriverCreateWithoutUserInput;
  update: DriverUpdateWithoutUserInput;
};

export type DriverWhereInput = {
  AND?: InputMaybe<Array<DriverWhereInput>>;
  NOT?: InputMaybe<Array<DriverWhereInput>>;
  OR?: InputMaybe<Array<DriverWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deliveryRegion?: InputMaybe<StringNullableFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableListFilter>;
  driverDeviceTokensRelation?: InputMaybe<DeviceTokenListRelationFilter>;
  driverLicense?: InputMaybe<DriverLicenseRelationFilter>;
  driverPolygonRelation?: InputMaybe<PolygonListRelationFilter>;
  driverTrackingRelation?: InputMaybe<TrackingListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  nickName?: InputMaybe<StringNullableFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  proofWork?: InputMaybe<StringNullableFilter>;
  sinCard?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type DriverWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type EnumLocationTypeNullableFilter = {
  equals?: InputMaybe<LocationType>;
  in?: InputMaybe<Array<LocationType>>;
  not?: InputMaybe<NestedEnumLocationTypeNullableFilter>;
  notIn?: InputMaybe<Array<LocationType>>;
};

export type EnumOrderPriorityFieldUpdateOperationsInput = {
  set?: InputMaybe<OrderPriority>;
};

export type EnumOrderPriorityFilter = {
  equals?: InputMaybe<OrderPriority>;
  in?: InputMaybe<Array<OrderPriority>>;
  not?: InputMaybe<NestedEnumOrderPriorityFilter>;
  notIn?: InputMaybe<Array<OrderPriority>>;
};

export type EnumOrderStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<OrderStatus>;
};

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type EnumSettingClientFieldUpdateOperationsInput = {
  set?: InputMaybe<SettingClient>;
};

export type EnumSettingClientFilter = {
  equals?: InputMaybe<SettingClient>;
  in?: InputMaybe<Array<SettingClient>>;
  not?: InputMaybe<NestedEnumSettingClientFilter>;
  notIn?: InputMaybe<Array<SettingClient>>;
};

export type EnumTrackingStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<TrackingStatus>;
};

export type EnumTrackingStatusFilter = {
  equals?: InputMaybe<TrackingStatus>;
  in?: InputMaybe<Array<TrackingStatus>>;
  not?: InputMaybe<NestedEnumTrackingStatusFilter>;
  notIn?: InputMaybe<Array<TrackingStatus>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  _count?: Maybe<LocationCount>;
  address: Scalars['String'];
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['Int']>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  distributionCenter?: Maybe<DistributionCenter>;
  id: Scalars['Int'];
  latitude: Scalars['Float'];
  location: Scalars['String'];
  locationTrackingRelation: Array<Tracking>;
  longitude: Scalars['Float'];
  recipient?: Maybe<Recipient>;
  recipientId?: Maybe<Scalars['Int']>;
  state: Scalars['String'];
  type?: Maybe<LocationType>;
  unit?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  zipCode?: Maybe<Scalars['String']>;
};

export type LocationLocationTrackingRelationArgs = {
  cursor?: InputMaybe<TrackingWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrackingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrackingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrackingWhereInput>;
};

export type LocationCount = {
  __typename?: 'LocationCount';
  locationTrackingRelation: Scalars['Int'];
};

export type LocationCreateInput = {
  address: Scalars['String'];
  business?: InputMaybe<BusinessCreateNestedOneWithoutLocationInput>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  distributionCenter?: InputMaybe<DistributionCenterCreateNestedOneWithoutLocationInput>;
  latitude: Scalars['Float'];
  location: Scalars['String'];
  locationTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutLocationInput>;
  longitude: Scalars['Float'];
  recipient?: InputMaybe<RecipientCreateNestedOneWithoutRecipientLocationRelationInput>;
  state: Scalars['String'];
  type?: InputMaybe<LocationType>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type LocationCreateManyRecipientInput = {
  address: Scalars['String'];
  businessId?: InputMaybe<Scalars['Int']>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  latitude: Scalars['Float'];
  location: Scalars['String'];
  longitude: Scalars['Float'];
  state: Scalars['String'];
  type?: InputMaybe<LocationType>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type LocationCreateManyRecipientInputEnvelope = {
  data: Array<LocationCreateManyRecipientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LocationCreateNestedManyWithoutRecipientInput = {
  connect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<LocationCreateOrConnectWithoutRecipientInput>
  >;
  create?: InputMaybe<Array<LocationCreateWithoutRecipientInput>>;
  createMany?: InputMaybe<LocationCreateManyRecipientInputEnvelope>;
};

export type LocationCreateNestedOneWithoutBusinessInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutBusinessInput>;
  create?: InputMaybe<LocationCreateWithoutBusinessInput>;
};

export type LocationCreateNestedOneWithoutDistributionCenterInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutDistributionCenterInput>;
  create?: InputMaybe<LocationCreateWithoutDistributionCenterInput>;
};

export type LocationCreateNestedOneWithoutLocationTrackingRelationInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutLocationTrackingRelationInput>;
  create?: InputMaybe<LocationCreateWithoutLocationTrackingRelationInput>;
};

export type LocationCreateOrConnectWithoutBusinessInput = {
  create: LocationCreateWithoutBusinessInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateOrConnectWithoutDistributionCenterInput = {
  create: LocationCreateWithoutDistributionCenterInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateOrConnectWithoutLocationTrackingRelationInput = {
  create: LocationCreateWithoutLocationTrackingRelationInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateOrConnectWithoutRecipientInput = {
  create: LocationCreateWithoutRecipientInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateWithoutBusinessInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  distributionCenter?: InputMaybe<DistributionCenterCreateNestedOneWithoutLocationInput>;
  latitude: Scalars['Float'];
  location: Scalars['String'];
  locationTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutLocationInput>;
  longitude: Scalars['Float'];
  recipient?: InputMaybe<RecipientCreateNestedOneWithoutRecipientLocationRelationInput>;
  state: Scalars['String'];
  type?: InputMaybe<LocationType>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type LocationCreateWithoutDistributionCenterInput = {
  address: Scalars['String'];
  business?: InputMaybe<BusinessCreateNestedOneWithoutLocationInput>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  latitude: Scalars['Float'];
  location: Scalars['String'];
  locationTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutLocationInput>;
  longitude: Scalars['Float'];
  recipient?: InputMaybe<RecipientCreateNestedOneWithoutRecipientLocationRelationInput>;
  state: Scalars['String'];
  type?: InputMaybe<LocationType>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type LocationCreateWithoutLocationTrackingRelationInput = {
  address: Scalars['String'];
  business?: InputMaybe<BusinessCreateNestedOneWithoutLocationInput>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  distributionCenter?: InputMaybe<DistributionCenterCreateNestedOneWithoutLocationInput>;
  latitude: Scalars['Float'];
  location: Scalars['String'];
  longitude: Scalars['Float'];
  recipient?: InputMaybe<RecipientCreateNestedOneWithoutRecipientLocationRelationInput>;
  state: Scalars['String'];
  type?: InputMaybe<LocationType>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type LocationCreateWithoutRecipientInput = {
  address: Scalars['String'];
  business?: InputMaybe<BusinessCreateNestedOneWithoutLocationInput>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  distributionCenter?: InputMaybe<DistributionCenterCreateNestedOneWithoutLocationInput>;
  latitude: Scalars['Float'];
  location: Scalars['String'];
  locationTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutLocationInput>;
  longitude: Scalars['Float'];
  state: Scalars['String'];
  type?: InputMaybe<LocationType>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type LocationListRelationFilter = {
  every?: InputMaybe<LocationWhereInput>;
  none?: InputMaybe<LocationWhereInput>;
  some?: InputMaybe<LocationWhereInput>;
};

export type LocationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LocationOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  business?: InputMaybe<BusinessOrderByWithRelationInput>;
  businessId?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  distributionCenter?: InputMaybe<DistributionCenterOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  locationTrackingRelation?: InputMaybe<TrackingOrderByRelationAggregateInput>;
  longitude?: InputMaybe<SortOrder>;
  recipient?: InputMaybe<RecipientOrderByWithRelationInput>;
  recipientId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  unit?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
};

export type LocationRelationFilter = {
  is?: InputMaybe<LocationWhereInput>;
  isNot?: InputMaybe<LocationWhereInput>;
};

export enum LocationScalarFieldEnum {
  Address = 'address',
  BusinessId = 'businessId',
  City = 'city',
  Country = 'country',
  CreatedAt = 'createdAt',
  Id = 'id',
  Latitude = 'latitude',
  Location = 'location',
  Longitude = 'longitude',
  RecipientId = 'recipientId',
  State = 'state',
  Type = 'type',
  Unit = 'unit',
  UpdatedAt = 'updatedAt',
  ZipCode = 'zipCode',
}

export type LocationScalarWhereInput = {
  AND?: InputMaybe<Array<LocationScalarWhereInput>>;
  NOT?: InputMaybe<Array<LocationScalarWhereInput>>;
  OR?: InputMaybe<Array<LocationScalarWhereInput>>;
  address?: InputMaybe<StringFilter>;
  businessId?: InputMaybe<IntNullableFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  latitude?: InputMaybe<FloatFilter>;
  location?: InputMaybe<StringFilter>;
  longitude?: InputMaybe<FloatFilter>;
  recipientId?: InputMaybe<IntNullableFilter>;
  state?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumLocationTypeNullableFilter>;
  unit?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zipCode?: InputMaybe<StringNullableFilter>;
};

export enum LocationType {
  DistributionCenter = 'DISTRIBUTION_CENTER',
  Normal = 'NORMAL',
}

export type LocationUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneWithoutLocationNestedInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  distributionCenter?: InputMaybe<DistributionCenterUpdateOneWithoutLocationNestedInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  locationTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutLocationNestedInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  recipient?: InputMaybe<RecipientUpdateOneWithoutRecipientLocationRelationNestedInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumLocationTypeFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumLocationTypeFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpdateManyWithWhereWithoutRecipientInput = {
  data: LocationUpdateManyMutationInput;
  where: LocationScalarWhereInput;
};

export type LocationUpdateManyWithoutRecipientNestedInput = {
  connect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<LocationCreateOrConnectWithoutRecipientInput>
  >;
  create?: InputMaybe<Array<LocationCreateWithoutRecipientInput>>;
  createMany?: InputMaybe<LocationCreateManyRecipientInputEnvelope>;
  delete?: InputMaybe<Array<LocationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LocationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  set?: InputMaybe<Array<LocationWhereUniqueInput>>;
  update?: InputMaybe<
    Array<LocationUpdateWithWhereUniqueWithoutRecipientInput>
  >;
  updateMany?: InputMaybe<
    Array<LocationUpdateManyWithWhereWithoutRecipientInput>
  >;
  upsert?: InputMaybe<
    Array<LocationUpsertWithWhereUniqueWithoutRecipientInput>
  >;
};

export type LocationUpdateOneRequiredWithoutDistributionCenterNestedInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutDistributionCenterInput>;
  create?: InputMaybe<LocationCreateWithoutDistributionCenterInput>;
  update?: InputMaybe<LocationUpdateWithoutDistributionCenterInput>;
  upsert?: InputMaybe<LocationUpsertWithoutDistributionCenterInput>;
};

export type LocationUpdateOneWithoutBusinessNestedInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutBusinessInput>;
  create?: InputMaybe<LocationCreateWithoutBusinessInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LocationUpdateWithoutBusinessInput>;
  upsert?: InputMaybe<LocationUpsertWithoutBusinessInput>;
};

export type LocationUpdateOneWithoutLocationTrackingRelationNestedInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutLocationTrackingRelationInput>;
  create?: InputMaybe<LocationCreateWithoutLocationTrackingRelationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LocationUpdateWithoutLocationTrackingRelationInput>;
  upsert?: InputMaybe<LocationUpsertWithoutLocationTrackingRelationInput>;
};

export type LocationUpdateWithWhereUniqueWithoutRecipientInput = {
  data: LocationUpdateWithoutRecipientInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateWithoutBusinessInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  distributionCenter?: InputMaybe<DistributionCenterUpdateOneWithoutLocationNestedInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  locationTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutLocationNestedInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  recipient?: InputMaybe<RecipientUpdateOneWithoutRecipientLocationRelationNestedInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumLocationTypeFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpdateWithoutDistributionCenterInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneWithoutLocationNestedInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  locationTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutLocationNestedInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  recipient?: InputMaybe<RecipientUpdateOneWithoutRecipientLocationRelationNestedInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumLocationTypeFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpdateWithoutLocationTrackingRelationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneWithoutLocationNestedInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  distributionCenter?: InputMaybe<DistributionCenterUpdateOneWithoutLocationNestedInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  recipient?: InputMaybe<RecipientUpdateOneWithoutRecipientLocationRelationNestedInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumLocationTypeFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpdateWithoutRecipientInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneWithoutLocationNestedInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  distributionCenter?: InputMaybe<DistributionCenterUpdateOneWithoutLocationNestedInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  locationTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutLocationNestedInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumLocationTypeFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpsertWithWhereUniqueWithoutRecipientInput = {
  create: LocationCreateWithoutRecipientInput;
  update: LocationUpdateWithoutRecipientInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpsertWithoutBusinessInput = {
  create: LocationCreateWithoutBusinessInput;
  update: LocationUpdateWithoutBusinessInput;
};

export type LocationUpsertWithoutDistributionCenterInput = {
  create: LocationCreateWithoutDistributionCenterInput;
  update: LocationUpdateWithoutDistributionCenterInput;
};

export type LocationUpsertWithoutLocationTrackingRelationInput = {
  create: LocationCreateWithoutLocationTrackingRelationInput;
  update: LocationUpdateWithoutLocationTrackingRelationInput;
};

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>;
  NOT?: InputMaybe<Array<LocationWhereInput>>;
  OR?: InputMaybe<Array<LocationWhereInput>>;
  address?: InputMaybe<StringFilter>;
  business?: InputMaybe<BusinessRelationFilter>;
  businessId?: InputMaybe<IntNullableFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  distributionCenter?: InputMaybe<DistributionCenterRelationFilter>;
  id?: InputMaybe<IntFilter>;
  latitude?: InputMaybe<FloatFilter>;
  location?: InputMaybe<StringFilter>;
  locationTrackingRelation?: InputMaybe<TrackingListRelationFilter>;
  longitude?: InputMaybe<FloatFilter>;
  recipient?: InputMaybe<RecipientRelationFilter>;
  recipientId?: InputMaybe<IntNullableFilter>;
  state?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumLocationTypeNullableFilter>;
  unit?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zipCode?: InputMaybe<StringNullableFilter>;
};

export type LocationWhereUniqueInput = {
  businessId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneBusiness: Business;
  createOneDistributionCenter: DistributionCenter;
  createOneDriver: Driver;
  createOneLocation: Location;
  createOneNotification: Notification;
  createOneOrder: Order;
  createOneOrderLog: OrderLog;
  createOneOrderTag: OrderTag;
  createOneOrderType: OrderType;
  createOnePolygon: Polygon;
  createOneRecipient: Recipient;
  createOneRecurrentOrder: RecurrentOrder;
  createOneRole: Role;
  createOneRolePermission: RolePermission;
  createOneTag: Tag;
  createOneToken: Token;
  createOneTracking: Tracking;
  createOneUser: User;
  createOneUserRole: UserRole;
  createOneUserSetting: UserSetting;
  deleteManyPolygon: AffectedRowsOutput;
  deleteOneOrder?: Maybe<Order>;
  deleteOnePolygon?: Maybe<Polygon>;
  deleteOneToken?: Maybe<Token>;
  driverSignUp?: Maybe<User>;
  updateOneBusiness?: Maybe<Business>;
  updateOneDistributionCenter?: Maybe<DistributionCenter>;
  updateOneDriver?: Maybe<Driver>;
  updateOneLocation?: Maybe<Location>;
  updateOneNotification?: Maybe<Notification>;
  updateOneOrder?: Maybe<Order>;
  updateOnePolygon?: Maybe<Polygon>;
  updateOneRecipient?: Maybe<Recipient>;
  updateOneRecurrentOrder?: Maybe<RecurrentOrder>;
  updateOneRole?: Maybe<Role>;
  updateOneRolePermission?: Maybe<RolePermission>;
  updateOneTag?: Maybe<Tag>;
  updateOneToken?: Maybe<Token>;
  updateOneTracking?: Maybe<Tracking>;
  updateOneUser?: Maybe<User>;
  updateOneUserRole?: Maybe<UserRole>;
  updateOneUserSetting?: Maybe<UserSetting>;
};

export type MutationCreateOneBusinessArgs = {
  data: BusinessCreateInput;
};

export type MutationCreateOneDistributionCenterArgs = {
  data: DistributionCenterCreateInput;
};

export type MutationCreateOneDriverArgs = {
  data: DriverCreateInput;
};

export type MutationCreateOneLocationArgs = {
  data: LocationCreateInput;
};

export type MutationCreateOneNotificationArgs = {
  data: NotificationCreateInput;
};

export type MutationCreateOneOrderArgs = {
  data: OrderCreateInput;
};

export type MutationCreateOneOrderLogArgs = {
  data: OrderLogCreateInput;
};

export type MutationCreateOneOrderTagArgs = {
  data: OrderTagCreateInput;
};

export type MutationCreateOneOrderTypeArgs = {
  data: OrderTypeCreateInput;
};

export type MutationCreateOnePolygonArgs = {
  data: PolygonCreateInput;
};

export type MutationCreateOneRecipientArgs = {
  data: RecipientCreateInput;
};

export type MutationCreateOneRecurrentOrderArgs = {
  data: RecurrentOrderCreateInput;
};

export type MutationCreateOneRoleArgs = {
  data: RoleCreateInput;
};

export type MutationCreateOneRolePermissionArgs = {
  data: RolePermissionCreateInput;
};

export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
};

export type MutationCreateOneTokenArgs = {
  data: TokenCreateInput;
};

export type MutationCreateOneTrackingArgs = {
  data: TrackingCreateInput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateOneUserRoleArgs = {
  data: UserRoleCreateInput;
};

export type MutationCreateOneUserSettingArgs = {
  data: UserSettingCreateInput;
};

export type MutationDeleteManyPolygonArgs = {
  where?: InputMaybe<PolygonWhereInput>;
};

export type MutationDeleteOneOrderArgs = {
  where: OrderWhereUniqueInput;
};

export type MutationDeleteOnePolygonArgs = {
  where: PolygonWhereUniqueInput;
};

export type MutationDeleteOneTokenArgs = {
  where: TokenWhereUniqueInput;
};

export type MutationDriverSignUpArgs = {
  data: DriverSignUpInput;
};

export type MutationUpdateOneBusinessArgs = {
  data: BusinessUpdateInput;
  where: BusinessWhereUniqueInput;
};

export type MutationUpdateOneDistributionCenterArgs = {
  data: DistributionCenterUpdateInput;
  where: DistributionCenterWhereUniqueInput;
};

export type MutationUpdateOneDriverArgs = {
  data: DriverUpdateInput;
  where: DriverWhereUniqueInput;
};

export type MutationUpdateOneLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type MutationUpdateOneNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};

export type MutationUpdateOneOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type MutationUpdateOnePolygonArgs = {
  data: PolygonUpdateInput;
  where: PolygonWhereUniqueInput;
};

export type MutationUpdateOneRecipientArgs = {
  data: RecipientUpdateInput;
  where: RecipientWhereUniqueInput;
};

export type MutationUpdateOneRecurrentOrderArgs = {
  data: RecurrentOrderUpdateInput;
  where: RecurrentOrderWhereUniqueInput;
};

export type MutationUpdateOneRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};

export type MutationUpdateOneRolePermissionArgs = {
  data: RolePermissionUpdateInput;
  where: RolePermissionWhereUniqueInput;
};

export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type MutationUpdateOneTokenArgs = {
  data: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};

export type MutationUpdateOneTrackingArgs = {
  data: TrackingUpdateInput;
  where: TrackingWhereUniqueInput;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateOneUserRoleArgs = {
  data: UserRoleUpdateInput;
  where: UserRoleWhereUniqueInput;
};

export type MutationUpdateOneUserSettingArgs = {
  data: UserSettingUpdateInput;
  where: UserSettingWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumLocationTypeNullableFilter = {
  equals?: InputMaybe<LocationType>;
  in?: InputMaybe<Array<LocationType>>;
  not?: InputMaybe<NestedEnumLocationTypeNullableFilter>;
  notIn?: InputMaybe<Array<LocationType>>;
};

export type NestedEnumOrderPriorityFilter = {
  equals?: InputMaybe<OrderPriority>;
  in?: InputMaybe<Array<OrderPriority>>;
  not?: InputMaybe<NestedEnumOrderPriorityFilter>;
  notIn?: InputMaybe<Array<OrderPriority>>;
};

export type NestedEnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumSettingClientFilter = {
  equals?: InputMaybe<SettingClient>;
  in?: InputMaybe<Array<SettingClient>>;
  not?: InputMaybe<NestedEnumSettingClientFilter>;
  notIn?: InputMaybe<Array<SettingClient>>;
};

export type NestedEnumTrackingStatusFilter = {
  equals?: InputMaybe<TrackingStatus>;
  in?: InputMaybe<Array<TrackingStatus>>;
  not?: InputMaybe<NestedEnumTrackingStatusFilter>;
  notIn?: InputMaybe<Array<TrackingStatus>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  driverID?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['Int']>;
  readAt?: Maybe<Scalars['DateTime']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type NotificationCreateInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driverID?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<OrderCreateNestedOneWithoutOrderNotificationRelationInput>;
  readAt?: InputMaybe<Scalars['DateTime']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserNotificationRelationInput;
};

export type NotificationCreateManyOrderInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driverID?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  readAt?: InputMaybe<Scalars['DateTime']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type NotificationCreateManyOrderInputEnvelope = {
  data: Array<NotificationCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateManyUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driverID?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
  readAt?: InputMaybe<Scalars['DateTime']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationCreateManyUserInputEnvelope = {
  data: Array<NotificationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<NotificationCreateOrConnectWithoutOrderInput>
  >;
  create?: InputMaybe<Array<NotificationCreateWithoutOrderInput>>;
  createMany?: InputMaybe<NotificationCreateManyOrderInputEnvelope>;
};

export type NotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<NotificationCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
};

export type NotificationCreateOrConnectWithoutOrderInput = {
  create: NotificationCreateWithoutOrderInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateOrConnectWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutOrderInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driverID?: InputMaybe<Scalars['Int']>;
  readAt?: InputMaybe<Scalars['DateTime']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserNotificationRelationInput;
};

export type NotificationCreateWithoutUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driverID?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<OrderCreateNestedOneWithoutOrderNotificationRelationInput>;
  readAt?: InputMaybe<Scalars['DateTime']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  driverID?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  readAt?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DriverId = 'driverID',
  Id = 'id',
  OrderId = 'orderId',
  ReadAt = 'readAt',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type NotificationScalarWhereInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  driverID?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  orderId?: InputMaybe<IntNullableFilter>;
  readAt?: InputMaybe<DateTimeNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type NotificationUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driverID?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutOrderNotificationRelationNestedInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserNotificationRelationNestedInput>;
};

export type NotificationUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driverID?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithWhereWithoutOrderInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithWhereWithoutUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<NotificationCreateOrConnectWithoutOrderInput>
  >;
  create?: InputMaybe<Array<NotificationCreateWithoutOrderInput>>;
  createMany?: InputMaybe<NotificationCreateManyOrderInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<
    Array<NotificationUpdateWithWhereUniqueWithoutOrderInput>
  >;
  updateMany?: InputMaybe<
    Array<NotificationUpdateManyWithWhereWithoutOrderInput>
  >;
  upsert?: InputMaybe<
    Array<NotificationUpsertWithWhereUniqueWithoutOrderInput>
  >;
};

export type NotificationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<NotificationCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<
    Array<NotificationUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotificationUpdateWithWhereUniqueWithoutOrderInput = {
  data: NotificationUpdateWithoutOrderInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithoutOrderInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driverID?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserNotificationRelationNestedInput>;
};

export type NotificationUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driverID?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutOrderNotificationRelationNestedInput>;
  readAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpsertWithWhereUniqueWithoutOrderInput = {
  create: NotificationCreateWithoutOrderInput;
  update: NotificationUpdateWithoutOrderInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  driverID?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<IntNullableFilter>;
  readAt?: InputMaybe<DateTimeNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableEnumLocationTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<LocationType>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  _count?: Maybe<OrderCount>;
  archivedAt?: Maybe<Scalars['DateTime']>;
  business: Business;
  businessId: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deliveryDate?: Maybe<Scalars['DateTime']>;
  deliveryInstructions?: Maybe<Scalars['String']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  evidences: Array<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  length?: Maybe<Scalars['String']>;
  orderNotificationRelation: Array<Notification>;
  orderOrderLogRelation: Array<OrderLog>;
  orderOrderTagRelation: Array<OrderTag>;
  orderTrackingRelation: Array<Tracking>;
  orderType?: Maybe<OrderType>;
  pickupDate?: Maybe<Scalars['DateTime']>;
  priority: OrderPriority;
  reason?: Maybe<Scalars['String']>;
  recurrentOrder?: Maybe<RecurrentOrder>;
  signature?: Maybe<Scalars['String']>;
  status: OrderStatus;
  unit?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type OrderOrderNotificationRelationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};

export type OrderOrderOrderLogRelationArgs = {
  cursor?: InputMaybe<OrderLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderLogWhereInput>;
};

export type OrderOrderOrderTagRelationArgs = {
  cursor?: InputMaybe<OrderTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderTagWhereInput>;
};

export type OrderOrderTrackingRelationArgs = {
  cursor?: InputMaybe<TrackingWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrackingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrackingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrackingWhereInput>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  businessId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type OrderCount = {
  __typename?: 'OrderCount';
  orderNotificationRelation: Scalars['Int'];
  orderOrderLogRelation: Scalars['Int'];
  orderOrderTagRelation: Scalars['Int'];
  orderTrackingRelation: Scalars['Int'];
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  _all: Scalars['Int'];
  archivedAt: Scalars['Int'];
  businessId: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  deliveryDate: Scalars['Int'];
  deliveryInstructions: Scalars['Int'];
  deliveryTime: Scalars['Int'];
  evidences: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  length: Scalars['Int'];
  pickupDate: Scalars['Int'];
  priority: Scalars['Int'];
  reason: Scalars['Int'];
  signature: Scalars['Int'];
  status: Scalars['Int'];
  unit: Scalars['Int'];
  updatedAt: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Int'];
  zipCode: Scalars['Int'];
};

export type OrderCreateInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  business: BusinessCreateNestedOneWithoutBusinessOrderRelationInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['DateTime']>;
  evidences?: InputMaybe<OrderCreateevidencesInput>;
  height?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  orderNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutOrderInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogCreateNestedManyWithoutOrderInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagCreateNestedManyWithoutOrderInput>;
  orderTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutOrderInput>;
  orderType?: InputMaybe<OrderTypeCreateNestedOneWithoutOrderInput>;
  pickupDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<OrderPriority>;
  reason?: InputMaybe<Scalars['String']>;
  recurrentOrder?: InputMaybe<RecurrentOrderCreateNestedOneWithoutOrderInput>;
  signature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OrderCreateManyBusinessInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['DateTime']>;
  evidences?: InputMaybe<OrderCreateevidencesInput>;
  height?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Scalars['String']>;
  pickupDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<OrderPriority>;
  reason?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OrderCreateManyBusinessInputEnvelope = {
  data: Array<OrderCreateManyBusinessInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrderCreateNestedManyWithoutBusinessInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutBusinessInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutBusinessInput>>;
  createMany?: InputMaybe<OrderCreateManyBusinessInputEnvelope>;
};

export type OrderCreateNestedOneWithoutOrderNotificationRelationInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderNotificationRelationInput>;
  create?: InputMaybe<OrderCreateWithoutOrderNotificationRelationInput>;
};

export type OrderCreateNestedOneWithoutOrderOrderLogRelationInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderOrderLogRelationInput>;
  create?: InputMaybe<OrderCreateWithoutOrderOrderLogRelationInput>;
};

export type OrderCreateNestedOneWithoutOrderOrderTagRelationInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderOrderTagRelationInput>;
  create?: InputMaybe<OrderCreateWithoutOrderOrderTagRelationInput>;
};

export type OrderCreateNestedOneWithoutOrderTrackingRelationInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderTrackingRelationInput>;
  create?: InputMaybe<OrderCreateWithoutOrderTrackingRelationInput>;
};

export type OrderCreateNestedOneWithoutOrderTypeInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderTypeInput>;
  create?: InputMaybe<OrderCreateWithoutOrderTypeInput>;
};

export type OrderCreateNestedOneWithoutRecurrentOrderInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutRecurrentOrderInput>;
  create?: InputMaybe<OrderCreateWithoutRecurrentOrderInput>;
};

export type OrderCreateOrConnectWithoutBusinessInput = {
  create: OrderCreateWithoutBusinessInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutOrderNotificationRelationInput = {
  create: OrderCreateWithoutOrderNotificationRelationInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutOrderOrderLogRelationInput = {
  create: OrderCreateWithoutOrderOrderLogRelationInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutOrderOrderTagRelationInput = {
  create: OrderCreateWithoutOrderOrderTagRelationInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutOrderTrackingRelationInput = {
  create: OrderCreateWithoutOrderTrackingRelationInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutOrderTypeInput = {
  create: OrderCreateWithoutOrderTypeInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutRecurrentOrderInput = {
  create: OrderCreateWithoutRecurrentOrderInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateWithoutBusinessInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['DateTime']>;
  evidences?: InputMaybe<OrderCreateevidencesInput>;
  height?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  orderNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutOrderInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogCreateNestedManyWithoutOrderInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagCreateNestedManyWithoutOrderInput>;
  orderTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutOrderInput>;
  orderType?: InputMaybe<OrderTypeCreateNestedOneWithoutOrderInput>;
  pickupDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<OrderPriority>;
  reason?: InputMaybe<Scalars['String']>;
  recurrentOrder?: InputMaybe<RecurrentOrderCreateNestedOneWithoutOrderInput>;
  signature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OrderCreateWithoutOrderNotificationRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  business: BusinessCreateNestedOneWithoutBusinessOrderRelationInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['DateTime']>;
  evidences?: InputMaybe<OrderCreateevidencesInput>;
  height?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  orderOrderLogRelation?: InputMaybe<OrderLogCreateNestedManyWithoutOrderInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagCreateNestedManyWithoutOrderInput>;
  orderTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutOrderInput>;
  orderType?: InputMaybe<OrderTypeCreateNestedOneWithoutOrderInput>;
  pickupDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<OrderPriority>;
  reason?: InputMaybe<Scalars['String']>;
  recurrentOrder?: InputMaybe<RecurrentOrderCreateNestedOneWithoutOrderInput>;
  signature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OrderCreateWithoutOrderOrderLogRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  business: BusinessCreateNestedOneWithoutBusinessOrderRelationInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['DateTime']>;
  evidences?: InputMaybe<OrderCreateevidencesInput>;
  height?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  orderNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutOrderInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagCreateNestedManyWithoutOrderInput>;
  orderTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutOrderInput>;
  orderType?: InputMaybe<OrderTypeCreateNestedOneWithoutOrderInput>;
  pickupDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<OrderPriority>;
  reason?: InputMaybe<Scalars['String']>;
  recurrentOrder?: InputMaybe<RecurrentOrderCreateNestedOneWithoutOrderInput>;
  signature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OrderCreateWithoutOrderOrderTagRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  business: BusinessCreateNestedOneWithoutBusinessOrderRelationInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['DateTime']>;
  evidences?: InputMaybe<OrderCreateevidencesInput>;
  height?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  orderNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutOrderInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogCreateNestedManyWithoutOrderInput>;
  orderTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutOrderInput>;
  orderType?: InputMaybe<OrderTypeCreateNestedOneWithoutOrderInput>;
  pickupDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<OrderPriority>;
  reason?: InputMaybe<Scalars['String']>;
  recurrentOrder?: InputMaybe<RecurrentOrderCreateNestedOneWithoutOrderInput>;
  signature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OrderCreateWithoutOrderTrackingRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  business: BusinessCreateNestedOneWithoutBusinessOrderRelationInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['DateTime']>;
  evidences?: InputMaybe<OrderCreateevidencesInput>;
  height?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  orderNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutOrderInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogCreateNestedManyWithoutOrderInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagCreateNestedManyWithoutOrderInput>;
  orderType?: InputMaybe<OrderTypeCreateNestedOneWithoutOrderInput>;
  pickupDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<OrderPriority>;
  reason?: InputMaybe<Scalars['String']>;
  recurrentOrder?: InputMaybe<RecurrentOrderCreateNestedOneWithoutOrderInput>;
  signature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OrderCreateWithoutOrderTypeInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  business: BusinessCreateNestedOneWithoutBusinessOrderRelationInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['DateTime']>;
  evidences?: InputMaybe<OrderCreateevidencesInput>;
  height?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  orderNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutOrderInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogCreateNestedManyWithoutOrderInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagCreateNestedManyWithoutOrderInput>;
  orderTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutOrderInput>;
  pickupDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<OrderPriority>;
  reason?: InputMaybe<Scalars['String']>;
  recurrentOrder?: InputMaybe<RecurrentOrderCreateNestedOneWithoutOrderInput>;
  signature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OrderCreateWithoutRecurrentOrderInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  business: BusinessCreateNestedOneWithoutBusinessOrderRelationInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  deliveryInstructions?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['DateTime']>;
  evidences?: InputMaybe<OrderCreateevidencesInput>;
  height?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  orderNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutOrderInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogCreateNestedManyWithoutOrderInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagCreateNestedManyWithoutOrderInput>;
  orderTrackingRelation?: InputMaybe<TrackingCreateNestedManyWithoutOrderInput>;
  orderType?: InputMaybe<OrderTypeCreateNestedOneWithoutOrderInput>;
  pickupDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<OrderPriority>;
  reason?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  unit?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type OrderCreateevidencesInput = {
  set: Array<Scalars['String']>;
};

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderLog = {
  __typename?: 'OrderLog';
  createdAt: Scalars['DateTime'];
  difference?: Maybe<Scalars['JSON']>;
  id: Scalars['Int'];
  newData?: Maybe<Scalars['JSON']>;
  oldData?: Maybe<Scalars['JSON']>;
  order: Order;
  orderId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderLogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  difference?: InputMaybe<Scalars['JSON']>;
  newData?: InputMaybe<Scalars['JSON']>;
  oldData?: InputMaybe<Scalars['JSON']>;
  order: OrderCreateNestedOneWithoutOrderOrderLogRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderLogCreateManyOrderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  difference?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['Int']>;
  newData?: InputMaybe<Scalars['JSON']>;
  oldData?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderLogCreateManyOrderInputEnvelope = {
  data: Array<OrderLogCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrderLogCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<OrderLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderLogCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderLogCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderLogCreateManyOrderInputEnvelope>;
};

export type OrderLogCreateOrConnectWithoutOrderInput = {
  create: OrderLogCreateWithoutOrderInput;
  where: OrderLogWhereUniqueInput;
};

export type OrderLogCreateWithoutOrderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  difference?: InputMaybe<Scalars['JSON']>;
  newData?: InputMaybe<Scalars['JSON']>;
  oldData?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderLogListRelationFilter = {
  every?: InputMaybe<OrderLogWhereInput>;
  none?: InputMaybe<OrderLogWhereInput>;
  some?: InputMaybe<OrderLogWhereInput>;
};

export type OrderLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderLogOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  difference?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  newData?: InputMaybe<SortOrder>;
  oldData?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum OrderLogScalarFieldEnum {
  CreatedAt = 'createdAt',
  Difference = 'difference',
  Id = 'id',
  NewData = 'newData',
  OldData = 'oldData',
  OrderId = 'orderId',
  UpdatedAt = 'updatedAt',
}

export type OrderLogScalarWhereInput = {
  AND?: InputMaybe<Array<OrderLogScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderLogScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderLogScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  difference?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<IntFilter>;
  newData?: InputMaybe<JsonNullableFilter>;
  oldData?: InputMaybe<JsonNullableFilter>;
  orderId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrderLogUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  difference?: InputMaybe<Scalars['JSON']>;
  newData?: InputMaybe<Scalars['JSON']>;
  oldData?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderLogUpdateManyWithWhereWithoutOrderInput = {
  data: OrderLogUpdateManyMutationInput;
  where: OrderLogScalarWhereInput;
};

export type OrderLogUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<OrderLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderLogCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderLogCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderLogCreateManyOrderInputEnvelope>;
  delete?: InputMaybe<Array<OrderLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderLogWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderLogWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderLogUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: InputMaybe<Array<OrderLogUpdateManyWithWhereWithoutOrderInput>>;
  upsert?: InputMaybe<Array<OrderLogUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type OrderLogUpdateWithWhereUniqueWithoutOrderInput = {
  data: OrderLogUpdateWithoutOrderInput;
  where: OrderLogWhereUniqueInput;
};

export type OrderLogUpdateWithoutOrderInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  difference?: InputMaybe<Scalars['JSON']>;
  newData?: InputMaybe<Scalars['JSON']>;
  oldData?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderLogUpsertWithWhereUniqueWithoutOrderInput = {
  create: OrderLogCreateWithoutOrderInput;
  update: OrderLogUpdateWithoutOrderInput;
  where: OrderLogWhereUniqueInput;
};

export type OrderLogWhereInput = {
  AND?: InputMaybe<Array<OrderLogWhereInput>>;
  NOT?: InputMaybe<Array<OrderLogWhereInput>>;
  OR?: InputMaybe<Array<OrderLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  difference?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<IntFilter>;
  newData?: InputMaybe<JsonNullableFilter>;
  oldData?: InputMaybe<JsonNullableFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrderLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  archivedAt?: Maybe<Scalars['DateTime']>;
  businessId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  deliveryInstructions?: Maybe<Scalars['String']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['String']>;
  pickupDate?: Maybe<Scalars['DateTime']>;
  priority?: Maybe<OrderPriority>;
  reason?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  archivedAt?: Maybe<Scalars['DateTime']>;
  businessId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  deliveryInstructions?: Maybe<Scalars['String']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['String']>;
  pickupDate?: Maybe<Scalars['DateTime']>;
  priority?: Maybe<OrderPriority>;
  reason?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithRelationInput = {
  archivedAt?: InputMaybe<SortOrder>;
  business?: InputMaybe<BusinessOrderByWithRelationInput>;
  businessId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deliveryDate?: InputMaybe<SortOrder>;
  deliveryInstructions?: InputMaybe<SortOrder>;
  deliveryTime?: InputMaybe<SortOrder>;
  evidences?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  orderNotificationRelation?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogOrderByRelationAggregateInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagOrderByRelationAggregateInput>;
  orderTrackingRelation?: InputMaybe<TrackingOrderByRelationAggregateInput>;
  orderType?: InputMaybe<OrderTypeOrderByWithRelationInput>;
  pickupDate?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  reason?: InputMaybe<SortOrder>;
  recurrentOrder?: InputMaybe<RecurrentOrderOrderByWithRelationInput>;
  signature?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  unit?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrder>;
};

export enum OrderPriority {
  High = 'HIGH',
  Normal = 'NORMAL',
}

export type OrderRelationFilter = {
  is?: InputMaybe<OrderWhereInput>;
  isNot?: InputMaybe<OrderWhereInput>;
};

export enum OrderScalarFieldEnum {
  ArchivedAt = 'archivedAt',
  BusinessId = 'businessId',
  Content = 'content',
  CreatedAt = 'createdAt',
  DeliveryDate = 'deliveryDate',
  DeliveryInstructions = 'deliveryInstructions',
  DeliveryTime = 'deliveryTime',
  Evidences = 'evidences',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  PickupDate = 'pickupDate',
  Priority = 'priority',
  Reason = 'reason',
  Signature = 'signature',
  Status = 'status',
  Unit = 'unit',
  UpdatedAt = 'updatedAt',
  Weight = 'weight',
  Width = 'width',
  ZipCode = 'zipCode',
}

export type OrderScalarWhereInput = {
  AND?: InputMaybe<Array<OrderScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereInput>>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  businessId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deliveryDate?: InputMaybe<DateTimeNullableFilter>;
  deliveryInstructions?: InputMaybe<StringNullableFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableFilter>;
  evidences?: InputMaybe<StringNullableListFilter>;
  height?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  length?: InputMaybe<StringNullableFilter>;
  pickupDate?: InputMaybe<DateTimeNullableFilter>;
  priority?: InputMaybe<EnumOrderPriorityFilter>;
  reason?: InputMaybe<StringNullableFilter>;
  signature?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  unit?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weight?: InputMaybe<StringNullableFilter>;
  width?: InputMaybe<StringNullableFilter>;
  zipCode?: InputMaybe<StringNullableFilter>;
};

export enum OrderStatus {
  Delivered = 'DELIVERED',
  Failed = 'FAILED',
  ForDistribution = 'FOR_DISTRIBUTION',
  InTransit = 'IN_TRANSIT',
  NoTime = 'NO_TIME',
  Scheduled = 'SCHEDULED',
  Taken = 'TAKEN',
}

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  businessId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type OrderTag = {
  __typename?: 'OrderTag';
  createdAt: Scalars['DateTime'];
  order: Order;
  orderId: Scalars['Int'];
  tag: Tag;
  tagId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderTagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  order: OrderCreateNestedOneWithoutOrderOrderTagRelationInput;
  tag: TagCreateNestedOneWithoutTagOrderTagRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTagCreateManyOrderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  tagId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTagCreateManyOrderInputEnvelope = {
  data: Array<OrderTagCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrderTagCreateManyTagInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  orderId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTagCreateManyTagInputEnvelope = {
  data: Array<OrderTagCreateManyTagInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrderTagCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderTagCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderTagCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderTagCreateManyOrderInputEnvelope>;
};

export type OrderTagCreateNestedManyWithoutTagInput = {
  connect?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<OrderTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<OrderTagCreateManyTagInputEnvelope>;
};

export type OrderTagCreateOrConnectWithoutOrderInput = {
  create: OrderTagCreateWithoutOrderInput;
  where: OrderTagWhereUniqueInput;
};

export type OrderTagCreateOrConnectWithoutTagInput = {
  create: OrderTagCreateWithoutTagInput;
  where: OrderTagWhereUniqueInput;
};

export type OrderTagCreateWithoutOrderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  tag: TagCreateNestedOneWithoutTagOrderTagRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTagCreateWithoutTagInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  order: OrderCreateNestedOneWithoutOrderOrderTagRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTagListRelationFilter = {
  every?: InputMaybe<OrderTagWhereInput>;
  none?: InputMaybe<OrderTagWhereInput>;
  some?: InputMaybe<OrderTagWhereInput>;
};

export type OrderTagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderTagOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  tag?: InputMaybe<TagOrderByWithRelationInput>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OrderTagOrderIdTagIdCompoundUniqueInput = {
  orderId: Scalars['Int'];
  tagId: Scalars['Int'];
};

export enum OrderTagScalarFieldEnum {
  CreatedAt = 'createdAt',
  OrderId = 'orderId',
  TagId = 'tagId',
  UpdatedAt = 'updatedAt',
}

export type OrderTagScalarWhereInput = {
  AND?: InputMaybe<Array<OrderTagScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderTagScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderTagScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  orderId?: InputMaybe<IntFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrderTagUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderTagUpdateManyWithWhereWithoutOrderInput = {
  data: OrderTagUpdateManyMutationInput;
  where: OrderTagScalarWhereInput;
};

export type OrderTagUpdateManyWithWhereWithoutTagInput = {
  data: OrderTagUpdateManyMutationInput;
  where: OrderTagScalarWhereInput;
};

export type OrderTagUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderTagCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderTagCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderTagCreateManyOrderInputEnvelope>;
  delete?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderTagUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: InputMaybe<Array<OrderTagUpdateManyWithWhereWithoutOrderInput>>;
  upsert?: InputMaybe<Array<OrderTagUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type OrderTagUpdateManyWithoutTagNestedInput = {
  connect?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<OrderTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<OrderTagCreateManyTagInputEnvelope>;
  delete?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderTagWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderTagUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: InputMaybe<Array<OrderTagUpdateManyWithWhereWithoutTagInput>>;
  upsert?: InputMaybe<Array<OrderTagUpsertWithWhereUniqueWithoutTagInput>>;
};

export type OrderTagUpdateWithWhereUniqueWithoutOrderInput = {
  data: OrderTagUpdateWithoutOrderInput;
  where: OrderTagWhereUniqueInput;
};

export type OrderTagUpdateWithWhereUniqueWithoutTagInput = {
  data: OrderTagUpdateWithoutTagInput;
  where: OrderTagWhereUniqueInput;
};

export type OrderTagUpdateWithoutOrderInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutTagOrderTagRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderTagUpdateWithoutTagInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutOrderOrderTagRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderTagUpsertWithWhereUniqueWithoutOrderInput = {
  create: OrderTagCreateWithoutOrderInput;
  update: OrderTagUpdateWithoutOrderInput;
  where: OrderTagWhereUniqueInput;
};

export type OrderTagUpsertWithWhereUniqueWithoutTagInput = {
  create: OrderTagCreateWithoutTagInput;
  update: OrderTagUpdateWithoutTagInput;
  where: OrderTagWhereUniqueInput;
};

export type OrderTagWhereInput = {
  AND?: InputMaybe<Array<OrderTagWhereInput>>;
  NOT?: InputMaybe<Array<OrderTagWhereInput>>;
  OR?: InputMaybe<Array<OrderTagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<IntFilter>;
  tag?: InputMaybe<TagRelationFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrderTagWhereUniqueInput = {
  orderId_tagId?: InputMaybe<OrderTagOrderIdTagIdCompoundUniqueInput>;
};

export type OrderType = {
  __typename?: 'OrderType';
  cold?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  fragile?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  narcotics?: Maybe<Scalars['Boolean']>;
  order: Order;
  orderId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderTypeCreateInput = {
  cold?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fragile?: InputMaybe<Scalars['Boolean']>;
  narcotics?: InputMaybe<Scalars['Boolean']>;
  order: OrderCreateNestedOneWithoutOrderTypeInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTypeCreateNestedOneWithoutOrderInput = {
  connect?: InputMaybe<OrderTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderTypeCreateOrConnectWithoutOrderInput>;
  create?: InputMaybe<OrderTypeCreateWithoutOrderInput>;
};

export type OrderTypeCreateOrConnectWithoutOrderInput = {
  create: OrderTypeCreateWithoutOrderInput;
  where: OrderTypeWhereUniqueInput;
};

export type OrderTypeCreateWithoutOrderInput = {
  cold?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fragile?: InputMaybe<Scalars['Boolean']>;
  narcotics?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTypeOrderByWithRelationInput = {
  cold?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  fragile?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  narcotics?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OrderTypeRelationFilter = {
  is?: InputMaybe<OrderTypeWhereInput>;
  isNot?: InputMaybe<OrderTypeWhereInput>;
};

export enum OrderTypeScalarFieldEnum {
  Cold = 'cold',
  CreatedAt = 'createdAt',
  Fragile = 'fragile',
  Id = 'id',
  Narcotics = 'narcotics',
  OrderId = 'orderId',
  UpdatedAt = 'updatedAt',
}

export type OrderTypeUpdateOneWithoutOrderNestedInput = {
  connect?: InputMaybe<OrderTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderTypeCreateOrConnectWithoutOrderInput>;
  create?: InputMaybe<OrderTypeCreateWithoutOrderInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<OrderTypeUpdateWithoutOrderInput>;
  upsert?: InputMaybe<OrderTypeUpsertWithoutOrderInput>;
};

export type OrderTypeUpdateWithoutOrderInput = {
  cold?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fragile?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  narcotics?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderTypeUpsertWithoutOrderInput = {
  create: OrderTypeCreateWithoutOrderInput;
  update: OrderTypeUpdateWithoutOrderInput;
};

export type OrderTypeWhereInput = {
  AND?: InputMaybe<Array<OrderTypeWhereInput>>;
  NOT?: InputMaybe<Array<OrderTypeWhereInput>>;
  OR?: InputMaybe<Array<OrderTypeWhereInput>>;
  cold?: InputMaybe<BoolNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fragile?: InputMaybe<BoolNullableFilter>;
  id?: InputMaybe<IntFilter>;
  narcotics?: InputMaybe<BoolNullableFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrderTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
};

export type OrderUpdateInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneRequiredWithoutBusinessOrderRelationNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deliveryInstructions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  evidences?: InputMaybe<OrderUpdateevidencesInput>;
  height?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutOrderNestedInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogUpdateManyWithoutOrderNestedInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagUpdateManyWithoutOrderNestedInput>;
  orderTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutOrderNestedInput>;
  orderType?: InputMaybe<OrderTypeUpdateOneWithoutOrderNestedInput>;
  pickupDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumOrderPriorityFieldUpdateOperationsInput>;
  reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recurrentOrder?: InputMaybe<RecurrentOrderUpdateOneWithoutOrderNestedInput>;
  signature?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrderUpdateManyMutationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deliveryInstructions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  evidences?: InputMaybe<OrderUpdateevidencesInput>;
  height?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pickupDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumOrderPriorityFieldUpdateOperationsInput>;
  reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  signature?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrderUpdateManyWithWhereWithoutBusinessInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithoutBusinessNestedInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutBusinessInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutBusinessInput>>;
  createMany?: InputMaybe<OrderCreateManyBusinessInputEnvelope>;
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutBusinessInput>>;
  updateMany?: InputMaybe<Array<OrderUpdateManyWithWhereWithoutBusinessInput>>;
  upsert?: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutBusinessInput>>;
};

export type OrderUpdateOneRequiredWithoutOrderOrderTagRelationNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderOrderTagRelationInput>;
  create?: InputMaybe<OrderCreateWithoutOrderOrderTagRelationInput>;
  update?: InputMaybe<OrderUpdateWithoutOrderOrderTagRelationInput>;
  upsert?: InputMaybe<OrderUpsertWithoutOrderOrderTagRelationInput>;
};

export type OrderUpdateOneRequiredWithoutRecurrentOrderNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutRecurrentOrderInput>;
  create?: InputMaybe<OrderCreateWithoutRecurrentOrderInput>;
  update?: InputMaybe<OrderUpdateWithoutRecurrentOrderInput>;
  upsert?: InputMaybe<OrderUpsertWithoutRecurrentOrderInput>;
};

export type OrderUpdateOneWithoutOrderNotificationRelationNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderNotificationRelationInput>;
  create?: InputMaybe<OrderCreateWithoutOrderNotificationRelationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<OrderUpdateWithoutOrderNotificationRelationInput>;
  upsert?: InputMaybe<OrderUpsertWithoutOrderNotificationRelationInput>;
};

export type OrderUpdateOneWithoutOrderTrackingRelationNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderTrackingRelationInput>;
  create?: InputMaybe<OrderCreateWithoutOrderTrackingRelationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<OrderUpdateWithoutOrderTrackingRelationInput>;
  upsert?: InputMaybe<OrderUpsertWithoutOrderTrackingRelationInput>;
};

export type OrderUpdateWithWhereUniqueWithoutBusinessInput = {
  data: OrderUpdateWithoutBusinessInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithoutBusinessInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deliveryInstructions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  evidences?: InputMaybe<OrderUpdateevidencesInput>;
  height?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutOrderNestedInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogUpdateManyWithoutOrderNestedInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagUpdateManyWithoutOrderNestedInput>;
  orderTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutOrderNestedInput>;
  orderType?: InputMaybe<OrderTypeUpdateOneWithoutOrderNestedInput>;
  pickupDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumOrderPriorityFieldUpdateOperationsInput>;
  reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recurrentOrder?: InputMaybe<RecurrentOrderUpdateOneWithoutOrderNestedInput>;
  signature?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrderUpdateWithoutOrderNotificationRelationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneRequiredWithoutBusinessOrderRelationNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deliveryInstructions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  evidences?: InputMaybe<OrderUpdateevidencesInput>;
  height?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogUpdateManyWithoutOrderNestedInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagUpdateManyWithoutOrderNestedInput>;
  orderTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutOrderNestedInput>;
  orderType?: InputMaybe<OrderTypeUpdateOneWithoutOrderNestedInput>;
  pickupDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumOrderPriorityFieldUpdateOperationsInput>;
  reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recurrentOrder?: InputMaybe<RecurrentOrderUpdateOneWithoutOrderNestedInput>;
  signature?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrderUpdateWithoutOrderOrderTagRelationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneRequiredWithoutBusinessOrderRelationNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deliveryInstructions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  evidences?: InputMaybe<OrderUpdateevidencesInput>;
  height?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutOrderNestedInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogUpdateManyWithoutOrderNestedInput>;
  orderTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutOrderNestedInput>;
  orderType?: InputMaybe<OrderTypeUpdateOneWithoutOrderNestedInput>;
  pickupDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumOrderPriorityFieldUpdateOperationsInput>;
  reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recurrentOrder?: InputMaybe<RecurrentOrderUpdateOneWithoutOrderNestedInput>;
  signature?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrderUpdateWithoutOrderTrackingRelationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneRequiredWithoutBusinessOrderRelationNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deliveryInstructions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  evidences?: InputMaybe<OrderUpdateevidencesInput>;
  height?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutOrderNestedInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogUpdateManyWithoutOrderNestedInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagUpdateManyWithoutOrderNestedInput>;
  orderType?: InputMaybe<OrderTypeUpdateOneWithoutOrderNestedInput>;
  pickupDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumOrderPriorityFieldUpdateOperationsInput>;
  reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recurrentOrder?: InputMaybe<RecurrentOrderUpdateOneWithoutOrderNestedInput>;
  signature?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrderUpdateWithoutRecurrentOrderInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneRequiredWithoutBusinessOrderRelationNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deliveryInstructions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  evidences?: InputMaybe<OrderUpdateevidencesInput>;
  height?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutOrderNestedInput>;
  orderOrderLogRelation?: InputMaybe<OrderLogUpdateManyWithoutOrderNestedInput>;
  orderOrderTagRelation?: InputMaybe<OrderTagUpdateManyWithoutOrderNestedInput>;
  orderTrackingRelation?: InputMaybe<TrackingUpdateManyWithoutOrderNestedInput>;
  orderType?: InputMaybe<OrderTypeUpdateOneWithoutOrderNestedInput>;
  pickupDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumOrderPriorityFieldUpdateOperationsInput>;
  reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  signature?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  unit?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type OrderUpdateevidencesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type OrderUpsertWithWhereUniqueWithoutBusinessInput = {
  create: OrderCreateWithoutBusinessInput;
  update: OrderUpdateWithoutBusinessInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithoutOrderNotificationRelationInput = {
  create: OrderCreateWithoutOrderNotificationRelationInput;
  update: OrderUpdateWithoutOrderNotificationRelationInput;
};

export type OrderUpsertWithoutOrderOrderTagRelationInput = {
  create: OrderCreateWithoutOrderOrderTagRelationInput;
  update: OrderUpdateWithoutOrderOrderTagRelationInput;
};

export type OrderUpsertWithoutOrderTrackingRelationInput = {
  create: OrderCreateWithoutOrderTrackingRelationInput;
  update: OrderUpdateWithoutOrderTrackingRelationInput;
};

export type OrderUpsertWithoutRecurrentOrderInput = {
  create: OrderCreateWithoutRecurrentOrderInput;
  update: OrderUpdateWithoutRecurrentOrderInput;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  business?: InputMaybe<BusinessRelationFilter>;
  businessId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deliveryDate?: InputMaybe<DateTimeNullableFilter>;
  deliveryInstructions?: InputMaybe<StringNullableFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableFilter>;
  evidences?: InputMaybe<StringNullableListFilter>;
  height?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  length?: InputMaybe<StringNullableFilter>;
  orderNotificationRelation?: InputMaybe<NotificationListRelationFilter>;
  orderOrderLogRelation?: InputMaybe<OrderLogListRelationFilter>;
  orderOrderTagRelation?: InputMaybe<OrderTagListRelationFilter>;
  orderTrackingRelation?: InputMaybe<TrackingListRelationFilter>;
  orderType?: InputMaybe<OrderTypeRelationFilter>;
  pickupDate?: InputMaybe<DateTimeNullableFilter>;
  priority?: InputMaybe<EnumOrderPriorityFilter>;
  reason?: InputMaybe<StringNullableFilter>;
  recurrentOrder?: InputMaybe<RecurrentOrderRelationFilter>;
  signature?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  unit?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weight?: InputMaybe<StringNullableFilter>;
  width?: InputMaybe<StringNullableFilter>;
  zipCode?: InputMaybe<StringNullableFilter>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Permission = {
  __typename?: 'Permission';
  _count?: Maybe<PermissionCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  permissionRolePermissionRelation: Array<RolePermission>;
  updatedAt: Scalars['DateTime'];
};

export type PermissionPermissionRolePermissionRelationArgs = {
  cursor?: InputMaybe<RolePermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<RolePermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RolePermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RolePermissionWhereInput>;
};

export type PermissionCount = {
  __typename?: 'PermissionCount';
  permissionRolePermissionRelation: Scalars['Int'];
};

export type PermissionCreateNestedOneWithoutPermissionRolePermissionRelationInput =
  {
    connect?: InputMaybe<PermissionWhereUniqueInput>;
    connectOrCreate?: InputMaybe<PermissionCreateOrConnectWithoutPermissionRolePermissionRelationInput>;
    create?: InputMaybe<PermissionCreateWithoutPermissionRolePermissionRelationInput>;
  };

export type PermissionCreateOrConnectWithoutPermissionRolePermissionRelationInput =
  {
    create: PermissionCreateWithoutPermissionRolePermissionRelationInput;
    where: PermissionWhereUniqueInput;
  };

export type PermissionCreateWithoutPermissionRolePermissionRelationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PermissionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissionRolePermissionRelation?: InputMaybe<RolePermissionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PermissionRelationFilter = {
  is?: InputMaybe<PermissionWhereInput>;
  isNot?: InputMaybe<PermissionWhereInput>;
};

export enum PermissionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type PermissionUpdateOneRequiredWithoutPermissionRolePermissionRelationNestedInput =
  {
    connect?: InputMaybe<PermissionWhereUniqueInput>;
    connectOrCreate?: InputMaybe<PermissionCreateOrConnectWithoutPermissionRolePermissionRelationInput>;
    create?: InputMaybe<PermissionCreateWithoutPermissionRolePermissionRelationInput>;
    update?: InputMaybe<PermissionUpdateWithoutPermissionRolePermissionRelationInput>;
    upsert?: InputMaybe<PermissionUpsertWithoutPermissionRolePermissionRelationInput>;
  };

export type PermissionUpdateWithoutPermissionRolePermissionRelationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PermissionUpsertWithoutPermissionRolePermissionRelationInput = {
  create: PermissionCreateWithoutPermissionRolePermissionRelationInput;
  update: PermissionUpdateWithoutPermissionRolePermissionRelationInput;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  permissionRolePermissionRelation?: InputMaybe<RolePermissionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PermissionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Polygon = {
  __typename?: 'Polygon';
  _count?: Maybe<PolygonCount>;
  createdAt: Scalars['DateTime'];
  driver: Driver;
  driverId: Scalars['Int'];
  id: Scalars['Int'];
  polygonPolygonAreaRelation: Array<PolygonArea>;
  updatedAt: Scalars['DateTime'];
};

export type PolygonPolygonPolygonAreaRelationArgs = {
  cursor?: InputMaybe<PolygonAreaWhereUniqueInput>;
  distinct?: InputMaybe<Array<PolygonAreaScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PolygonAreaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PolygonAreaWhereInput>;
};

export type PolygonArea = {
  __typename?: 'PolygonArea';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  polygonId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type PolygonAreaCreateManyPolygonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PolygonAreaCreateManyPolygonInputEnvelope = {
  data: Array<PolygonAreaCreateManyPolygonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PolygonAreaCreateNestedManyWithoutPolygonInput = {
  connect?: InputMaybe<Array<PolygonAreaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<PolygonAreaCreateOrConnectWithoutPolygonInput>
  >;
  create?: InputMaybe<Array<PolygonAreaCreateWithoutPolygonInput>>;
  createMany?: InputMaybe<PolygonAreaCreateManyPolygonInputEnvelope>;
};

export type PolygonAreaCreateOrConnectWithoutPolygonInput = {
  create: PolygonAreaCreateWithoutPolygonInput;
  where: PolygonAreaWhereUniqueInput;
};

export type PolygonAreaCreateWithoutPolygonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PolygonAreaListRelationFilter = {
  every?: InputMaybe<PolygonAreaWhereInput>;
  none?: InputMaybe<PolygonAreaWhereInput>;
  some?: InputMaybe<PolygonAreaWhereInput>;
};

export type PolygonAreaOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PolygonAreaOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  polygon?: InputMaybe<PolygonOrderByWithRelationInput>;
  polygonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PolygonAreaScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  PolygonId = 'polygonId',
  UpdatedAt = 'updatedAt',
}

export type PolygonAreaScalarWhereInput = {
  AND?: InputMaybe<Array<PolygonAreaScalarWhereInput>>;
  NOT?: InputMaybe<Array<PolygonAreaScalarWhereInput>>;
  OR?: InputMaybe<Array<PolygonAreaScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  polygonId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PolygonAreaUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PolygonAreaUpdateManyWithWhereWithoutPolygonInput = {
  data: PolygonAreaUpdateManyMutationInput;
  where: PolygonAreaScalarWhereInput;
};

export type PolygonAreaUpdateManyWithoutPolygonNestedInput = {
  connect?: InputMaybe<Array<PolygonAreaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<PolygonAreaCreateOrConnectWithoutPolygonInput>
  >;
  create?: InputMaybe<Array<PolygonAreaCreateWithoutPolygonInput>>;
  createMany?: InputMaybe<PolygonAreaCreateManyPolygonInputEnvelope>;
  delete?: InputMaybe<Array<PolygonAreaWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PolygonAreaScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PolygonAreaWhereUniqueInput>>;
  set?: InputMaybe<Array<PolygonAreaWhereUniqueInput>>;
  update?: InputMaybe<
    Array<PolygonAreaUpdateWithWhereUniqueWithoutPolygonInput>
  >;
  updateMany?: InputMaybe<
    Array<PolygonAreaUpdateManyWithWhereWithoutPolygonInput>
  >;
  upsert?: InputMaybe<
    Array<PolygonAreaUpsertWithWhereUniqueWithoutPolygonInput>
  >;
};

export type PolygonAreaUpdateWithWhereUniqueWithoutPolygonInput = {
  data: PolygonAreaUpdateWithoutPolygonInput;
  where: PolygonAreaWhereUniqueInput;
};

export type PolygonAreaUpdateWithoutPolygonInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PolygonAreaUpsertWithWhereUniqueWithoutPolygonInput = {
  create: PolygonAreaCreateWithoutPolygonInput;
  update: PolygonAreaUpdateWithoutPolygonInput;
  where: PolygonAreaWhereUniqueInput;
};

export type PolygonAreaWhereInput = {
  AND?: InputMaybe<Array<PolygonAreaWhereInput>>;
  NOT?: InputMaybe<Array<PolygonAreaWhereInput>>;
  OR?: InputMaybe<Array<PolygonAreaWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  polygon?: InputMaybe<PolygonRelationFilter>;
  polygonId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PolygonAreaWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type PolygonCount = {
  __typename?: 'PolygonCount';
  polygonPolygonAreaRelation: Scalars['Int'];
};

export type PolygonCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driver: DriverCreateNestedOneWithoutDriverPolygonRelationInput;
  polygonPolygonAreaRelation?: InputMaybe<PolygonAreaCreateNestedManyWithoutPolygonInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PolygonCreateManyDriverInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PolygonCreateManyDriverInputEnvelope = {
  data: Array<PolygonCreateManyDriverInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PolygonCreateNestedManyWithoutDriverInput = {
  connect?: InputMaybe<Array<PolygonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PolygonCreateOrConnectWithoutDriverInput>>;
  create?: InputMaybe<Array<PolygonCreateWithoutDriverInput>>;
  createMany?: InputMaybe<PolygonCreateManyDriverInputEnvelope>;
};

export type PolygonCreateOrConnectWithoutDriverInput = {
  create: PolygonCreateWithoutDriverInput;
  where: PolygonWhereUniqueInput;
};

export type PolygonCreateWithoutDriverInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  polygonPolygonAreaRelation?: InputMaybe<PolygonAreaCreateNestedManyWithoutPolygonInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PolygonListRelationFilter = {
  every?: InputMaybe<PolygonWhereInput>;
  none?: InputMaybe<PolygonWhereInput>;
  some?: InputMaybe<PolygonWhereInput>;
};

export type PolygonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PolygonOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  driver?: InputMaybe<DriverOrderByWithRelationInput>;
  driverId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  polygonPolygonAreaRelation?: InputMaybe<PolygonAreaOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PolygonRelationFilter = {
  is?: InputMaybe<PolygonWhereInput>;
  isNot?: InputMaybe<PolygonWhereInput>;
};

export enum PolygonScalarFieldEnum {
  CreatedAt = 'createdAt',
  DriverId = 'driverId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type PolygonScalarWhereInput = {
  AND?: InputMaybe<Array<PolygonScalarWhereInput>>;
  NOT?: InputMaybe<Array<PolygonScalarWhereInput>>;
  OR?: InputMaybe<Array<PolygonScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  driverId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PolygonUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driver?: InputMaybe<DriverUpdateOneRequiredWithoutDriverPolygonRelationNestedInput>;
  polygonPolygonAreaRelation?: InputMaybe<PolygonAreaUpdateManyWithoutPolygonNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PolygonUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PolygonUpdateManyWithWhereWithoutDriverInput = {
  data: PolygonUpdateManyMutationInput;
  where: PolygonScalarWhereInput;
};

export type PolygonUpdateManyWithoutDriverNestedInput = {
  connect?: InputMaybe<Array<PolygonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PolygonCreateOrConnectWithoutDriverInput>>;
  create?: InputMaybe<Array<PolygonCreateWithoutDriverInput>>;
  createMany?: InputMaybe<PolygonCreateManyDriverInputEnvelope>;
  delete?: InputMaybe<Array<PolygonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PolygonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PolygonWhereUniqueInput>>;
  set?: InputMaybe<Array<PolygonWhereUniqueInput>>;
  update?: InputMaybe<Array<PolygonUpdateWithWhereUniqueWithoutDriverInput>>;
  updateMany?: InputMaybe<Array<PolygonUpdateManyWithWhereWithoutDriverInput>>;
  upsert?: InputMaybe<Array<PolygonUpsertWithWhereUniqueWithoutDriverInput>>;
};

export type PolygonUpdateWithWhereUniqueWithoutDriverInput = {
  data: PolygonUpdateWithoutDriverInput;
  where: PolygonWhereUniqueInput;
};

export type PolygonUpdateWithoutDriverInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  polygonPolygonAreaRelation?: InputMaybe<PolygonAreaUpdateManyWithoutPolygonNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PolygonUpsertWithWhereUniqueWithoutDriverInput = {
  create: PolygonCreateWithoutDriverInput;
  update: PolygonUpdateWithoutDriverInput;
  where: PolygonWhereUniqueInput;
};

export type PolygonWhereInput = {
  AND?: InputMaybe<Array<PolygonWhereInput>>;
  NOT?: InputMaybe<Array<PolygonWhereInput>>;
  OR?: InputMaybe<Array<PolygonWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  driver?: InputMaybe<DriverRelationFilter>;
  driverId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  polygonPolygonAreaRelation?: InputMaybe<PolygonAreaListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PolygonWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateOrder: AggregateOrder;
  businesses: Array<Business>;
  currentUser?: Maybe<User>;
  distributionCenters: Array<DistributionCenter>;
  drivers: Array<Driver>;
  findFirstBusiness?: Maybe<Business>;
  findFirstDriver?: Maybe<Driver>;
  findFirstLocation?: Maybe<Location>;
  findFirstNotification?: Maybe<Notification>;
  findFirstOrder?: Maybe<Order>;
  findFirstOrderLog?: Maybe<OrderLog>;
  findFirstOrderTag?: Maybe<OrderTag>;
  findFirstOrderType?: Maybe<OrderType>;
  findFirstPermission?: Maybe<Permission>;
  findFirstPolygon?: Maybe<Polygon>;
  findFirstRecipient?: Maybe<Recipient>;
  findFirstRole?: Maybe<Role>;
  findFirstRolePermission?: Maybe<RolePermission>;
  findFirstSetting?: Maybe<Setting>;
  findFirstTag?: Maybe<Tag>;
  findFirstToken?: Maybe<Token>;
  findFirstTracking?: Maybe<Tracking>;
  findFirstUser?: Maybe<User>;
  findFirstUserRole?: Maybe<UserRole>;
  findFirstUserSetting?: Maybe<UserSetting>;
  locations: Array<Location>;
  notifications: Array<Notification>;
  orderLogs: Array<OrderLog>;
  orderTags: Array<OrderTag>;
  orderTypes: Array<OrderType>;
  orders: Array<Order>;
  permissions: Array<Permission>;
  polygons: Array<Polygon>;
  recipients: Array<Recipient>;
  recurrentOrders: Array<RecurrentOrder>;
  rolePermissions: Array<RolePermission>;
  roles: Array<Role>;
  settings: Array<Setting>;
  tags: Array<Tag>;
  tokens: Array<Token>;
  trackings: Array<Tracking>;
  userRoles: Array<UserRole>;
  userSettings: Array<UserSetting>;
  users: Array<User>;
};

export type QueryAggregateOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryBusinessesArgs = {
  cursor?: InputMaybe<BusinessWhereUniqueInput>;
  distinct?: InputMaybe<Array<BusinessScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BusinessOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BusinessWhereInput>;
};

export type QueryDistributionCentersArgs = {
  cursor?: InputMaybe<DistributionCenterWhereUniqueInput>;
  distinct?: InputMaybe<Array<DistributionCenterScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DistributionCenterOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DistributionCenterWhereInput>;
};

export type QueryDriversArgs = {
  cursor?: InputMaybe<DriverWhereUniqueInput>;
  distinct?: InputMaybe<Array<DriverScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DriverOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DriverWhereInput>;
};

export type QueryFindFirstBusinessArgs = {
  cursor?: InputMaybe<BusinessWhereUniqueInput>;
  distinct?: InputMaybe<Array<BusinessScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BusinessOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BusinessWhereInput>;
};

export type QueryFindFirstDriverArgs = {
  cursor?: InputMaybe<DriverWhereUniqueInput>;
  distinct?: InputMaybe<Array<DriverScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DriverOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DriverWhereInput>;
};

export type QueryFindFirstLocationArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<LocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LocationWhereInput>;
};

export type QueryFindFirstNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};

export type QueryFindFirstOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryFindFirstOrderLogArgs = {
  cursor?: InputMaybe<OrderLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderLogWhereInput>;
};

export type QueryFindFirstOrderTagArgs = {
  cursor?: InputMaybe<OrderTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderTagWhereInput>;
};

export type QueryFindFirstOrderTypeArgs = {
  cursor?: InputMaybe<OrderTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderTypeWhereInput>;
};

export type QueryFindFirstPermissionArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
};

export type QueryFindFirstPolygonArgs = {
  cursor?: InputMaybe<PolygonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PolygonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PolygonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PolygonWhereInput>;
};

export type QueryFindFirstRecipientArgs = {
  cursor?: InputMaybe<RecipientWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipientWhereInput>;
};

export type QueryFindFirstRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};

export type QueryFindFirstRolePermissionArgs = {
  cursor?: InputMaybe<RolePermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<RolePermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RolePermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RolePermissionWhereInput>;
};

export type QueryFindFirstSettingArgs = {
  cursor?: InputMaybe<SettingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};

export type QueryFindFirstTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type QueryFindFirstTokenArgs = {
  cursor?: InputMaybe<TokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<TokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};

export type QueryFindFirstTrackingArgs = {
  cursor?: InputMaybe<TrackingWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrackingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrackingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrackingWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstUserRoleArgs = {
  cursor?: InputMaybe<UserRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserRoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserRoleWhereInput>;
};

export type QueryFindFirstUserSettingArgs = {
  cursor?: InputMaybe<UserSettingWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSettingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSettingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSettingWhereInput>;
};

export type QueryLocationsArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<LocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LocationWhereInput>;
};

export type QueryNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};

export type QueryOrderLogsArgs = {
  cursor?: InputMaybe<OrderLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderLogWhereInput>;
};

export type QueryOrderTagsArgs = {
  cursor?: InputMaybe<OrderTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderTagWhereInput>;
};

export type QueryOrderTypesArgs = {
  cursor?: InputMaybe<OrderTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderTypeWhereInput>;
};

export type QueryOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryPermissionsArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
};

export type QueryPolygonsArgs = {
  cursor?: InputMaybe<PolygonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PolygonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PolygonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PolygonWhereInput>;
};

export type QueryRecipientsArgs = {
  cursor?: InputMaybe<RecipientWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipientWhereInput>;
};

export type QueryRecurrentOrdersArgs = {
  cursor?: InputMaybe<RecurrentOrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecurrentOrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecurrentOrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecurrentOrderWhereInput>;
};

export type QueryRolePermissionsArgs = {
  cursor?: InputMaybe<RolePermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<RolePermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RolePermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RolePermissionWhereInput>;
};

export type QueryRolesArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};

export type QuerySettingsArgs = {
  cursor?: InputMaybe<SettingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};

export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type QueryTokensArgs = {
  cursor?: InputMaybe<TokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<TokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};

export type QueryTrackingsArgs = {
  cursor?: InputMaybe<TrackingWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrackingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrackingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrackingWhereInput>;
};

export type QueryUserRolesArgs = {
  cursor?: InputMaybe<UserRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserRoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserRoleWhereInput>;
};

export type QueryUserSettingsArgs = {
  cursor?: InputMaybe<UserSettingWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSettingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSettingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSettingWhereInput>;
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Recipient = {
  __typename?: 'Recipient';
  _count?: Maybe<RecipientCount>;
  archivedAt?: Maybe<Scalars['DateTime']>;
  business: Business;
  businessId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  note: Scalars['String'];
  phoneNumber: Scalars['String'];
  recipientLocationRelation: Array<Location>;
  updatedAt: Scalars['DateTime'];
};

export type RecipientRecipientLocationRelationArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<LocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LocationWhereInput>;
};

export type RecipientCount = {
  __typename?: 'RecipientCount';
  recipientLocationRelation: Scalars['Int'];
};

export type RecipientCreateInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  business: BusinessCreateNestedOneWithoutBusinessRecipientRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  phoneNumber: Scalars['String'];
  recipientLocationRelation?: InputMaybe<LocationCreateNestedManyWithoutRecipientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecipientCreateManyBusinessInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  note: Scalars['String'];
  phoneNumber: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecipientCreateManyBusinessInputEnvelope = {
  data: Array<RecipientCreateManyBusinessInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RecipientCreateNestedManyWithoutBusinessInput = {
  connect?: InputMaybe<Array<RecipientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<RecipientCreateOrConnectWithoutBusinessInput>
  >;
  create?: InputMaybe<Array<RecipientCreateWithoutBusinessInput>>;
  createMany?: InputMaybe<RecipientCreateManyBusinessInputEnvelope>;
};

export type RecipientCreateNestedOneWithoutRecipientLocationRelationInput = {
  connect?: InputMaybe<RecipientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipientCreateOrConnectWithoutRecipientLocationRelationInput>;
  create?: InputMaybe<RecipientCreateWithoutRecipientLocationRelationInput>;
};

export type RecipientCreateOrConnectWithoutBusinessInput = {
  create: RecipientCreateWithoutBusinessInput;
  where: RecipientWhereUniqueInput;
};

export type RecipientCreateOrConnectWithoutRecipientLocationRelationInput = {
  create: RecipientCreateWithoutRecipientLocationRelationInput;
  where: RecipientWhereUniqueInput;
};

export type RecipientCreateWithoutBusinessInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  phoneNumber: Scalars['String'];
  recipientLocationRelation?: InputMaybe<LocationCreateNestedManyWithoutRecipientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecipientCreateWithoutRecipientLocationRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  business: BusinessCreateNestedOneWithoutBusinessRecipientRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  note: Scalars['String'];
  phoneNumber: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecipientListRelationFilter = {
  every?: InputMaybe<RecipientWhereInput>;
  none?: InputMaybe<RecipientWhereInput>;
  some?: InputMaybe<RecipientWhereInput>;
};

export type RecipientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipientOrderByWithRelationInput = {
  archivedAt?: InputMaybe<SortOrder>;
  business?: InputMaybe<BusinessOrderByWithRelationInput>;
  businessId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  recipientLocationRelation?: InputMaybe<LocationOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RecipientRelationFilter = {
  is?: InputMaybe<RecipientWhereInput>;
  isNot?: InputMaybe<RecipientWhereInput>;
};

export enum RecipientScalarFieldEnum {
  ArchivedAt = 'archivedAt',
  BusinessId = 'businessId',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Note = 'note',
  PhoneNumber = 'phoneNumber',
  UpdatedAt = 'updatedAt',
}

export type RecipientScalarWhereInput = {
  AND?: InputMaybe<Array<RecipientScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipientScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipientScalarWhereInput>>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  businessId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RecipientUpdateInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneRequiredWithoutBusinessRecipientRelationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipientLocationRelation?: InputMaybe<LocationUpdateManyWithoutRecipientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipientUpdateManyMutationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipientUpdateManyWithWhereWithoutBusinessInput = {
  data: RecipientUpdateManyMutationInput;
  where: RecipientScalarWhereInput;
};

export type RecipientUpdateManyWithoutBusinessNestedInput = {
  connect?: InputMaybe<Array<RecipientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<RecipientCreateOrConnectWithoutBusinessInput>
  >;
  create?: InputMaybe<Array<RecipientCreateWithoutBusinessInput>>;
  createMany?: InputMaybe<RecipientCreateManyBusinessInputEnvelope>;
  delete?: InputMaybe<Array<RecipientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipientWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipientWhereUniqueInput>>;
  update?: InputMaybe<
    Array<RecipientUpdateWithWhereUniqueWithoutBusinessInput>
  >;
  updateMany?: InputMaybe<
    Array<RecipientUpdateManyWithWhereWithoutBusinessInput>
  >;
  upsert?: InputMaybe<
    Array<RecipientUpsertWithWhereUniqueWithoutBusinessInput>
  >;
};

export type RecipientUpdateOneWithoutRecipientLocationRelationNestedInput = {
  connect?: InputMaybe<RecipientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipientCreateOrConnectWithoutRecipientLocationRelationInput>;
  create?: InputMaybe<RecipientCreateWithoutRecipientLocationRelationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<RecipientUpdateWithoutRecipientLocationRelationInput>;
  upsert?: InputMaybe<RecipientUpsertWithoutRecipientLocationRelationInput>;
};

export type RecipientUpdateWithWhereUniqueWithoutBusinessInput = {
  data: RecipientUpdateWithoutBusinessInput;
  where: RecipientWhereUniqueInput;
};

export type RecipientUpdateWithoutBusinessInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipientLocationRelation?: InputMaybe<LocationUpdateManyWithoutRecipientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipientUpdateWithoutRecipientLocationRelationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  business?: InputMaybe<BusinessUpdateOneRequiredWithoutBusinessRecipientRelationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipientUpsertWithWhereUniqueWithoutBusinessInput = {
  create: RecipientCreateWithoutBusinessInput;
  update: RecipientUpdateWithoutBusinessInput;
  where: RecipientWhereUniqueInput;
};

export type RecipientUpsertWithoutRecipientLocationRelationInput = {
  create: RecipientCreateWithoutRecipientLocationRelationInput;
  update: RecipientUpdateWithoutRecipientLocationRelationInput;
};

export type RecipientWhereInput = {
  AND?: InputMaybe<Array<RecipientWhereInput>>;
  NOT?: InputMaybe<Array<RecipientWhereInput>>;
  OR?: InputMaybe<Array<RecipientWhereInput>>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  business?: InputMaybe<BusinessRelationFilter>;
  businessId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  recipientLocationRelation?: InputMaybe<LocationListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RecipientWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type RecurrentOrder = {
  __typename?: 'RecurrentOrder';
  biweekly: Scalars['Boolean'];
  clonedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  daily: Scalars['Boolean'];
  id: Scalars['Int'];
  monthly: Scalars['Boolean'];
  orderId: Scalars['Int'];
  twentyEightDays: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  weekly: Scalars['Boolean'];
};

export type RecurrentOrderCreateInput = {
  biweekly: Scalars['Boolean'];
  clonedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  daily: Scalars['Boolean'];
  monthly: Scalars['Boolean'];
  order: OrderCreateNestedOneWithoutRecurrentOrderInput;
  twentyEightDays: Scalars['Boolean'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weekly: Scalars['Boolean'];
};

export type RecurrentOrderCreateNestedOneWithoutOrderInput = {
  connect?: InputMaybe<RecurrentOrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecurrentOrderCreateOrConnectWithoutOrderInput>;
  create?: InputMaybe<RecurrentOrderCreateWithoutOrderInput>;
};

export type RecurrentOrderCreateOrConnectWithoutOrderInput = {
  create: RecurrentOrderCreateWithoutOrderInput;
  where: RecurrentOrderWhereUniqueInput;
};

export type RecurrentOrderCreateWithoutOrderInput = {
  biweekly: Scalars['Boolean'];
  clonedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  daily: Scalars['Boolean'];
  monthly: Scalars['Boolean'];
  twentyEightDays: Scalars['Boolean'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weekly: Scalars['Boolean'];
};

export type RecurrentOrderOrderByWithRelationInput = {
  biweekly?: InputMaybe<SortOrder>;
  clonedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  daily?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  monthly?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  twentyEightDays?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weekly?: InputMaybe<SortOrder>;
};

export type RecurrentOrderRelationFilter = {
  is?: InputMaybe<RecurrentOrderWhereInput>;
  isNot?: InputMaybe<RecurrentOrderWhereInput>;
};

export enum RecurrentOrderScalarFieldEnum {
  Biweekly = 'biweekly',
  ClonedAt = 'clonedAt',
  CreatedAt = 'createdAt',
  Daily = 'daily',
  Id = 'id',
  Monthly = 'monthly',
  OrderId = 'orderId',
  TwentyEightDays = 'twentyEightDays',
  UpdatedAt = 'updatedAt',
  Weekly = 'weekly',
}

export type RecurrentOrderUpdateInput = {
  biweekly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clonedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  daily?: InputMaybe<BoolFieldUpdateOperationsInput>;
  monthly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutRecurrentOrderNestedInput>;
  twentyEightDays?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weekly?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type RecurrentOrderUpdateOneWithoutOrderNestedInput = {
  connect?: InputMaybe<RecurrentOrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecurrentOrderCreateOrConnectWithoutOrderInput>;
  create?: InputMaybe<RecurrentOrderCreateWithoutOrderInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<RecurrentOrderUpdateWithoutOrderInput>;
  upsert?: InputMaybe<RecurrentOrderUpsertWithoutOrderInput>;
};

export type RecurrentOrderUpdateWithoutOrderInput = {
  biweekly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  clonedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  daily?: InputMaybe<BoolFieldUpdateOperationsInput>;
  monthly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  twentyEightDays?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weekly?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type RecurrentOrderUpsertWithoutOrderInput = {
  create: RecurrentOrderCreateWithoutOrderInput;
  update: RecurrentOrderUpdateWithoutOrderInput;
};

export type RecurrentOrderWhereInput = {
  AND?: InputMaybe<Array<RecurrentOrderWhereInput>>;
  NOT?: InputMaybe<Array<RecurrentOrderWhereInput>>;
  OR?: InputMaybe<Array<RecurrentOrderWhereInput>>;
  biweekly?: InputMaybe<BoolFilter>;
  clonedAt?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  daily?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  monthly?: InputMaybe<BoolFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<IntFilter>;
  twentyEightDays?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weekly?: InputMaybe<BoolFilter>;
};

export type RecurrentOrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
};

export type Role = {
  __typename?: 'Role';
  _count?: Maybe<RoleCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  roleRolePermissionRelation: Array<RolePermission>;
  roleUserRoleRelation: Array<UserRole>;
  updatedAt: Scalars['DateTime'];
};

export type RoleRoleRolePermissionRelationArgs = {
  cursor?: InputMaybe<RolePermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<RolePermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RolePermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RolePermissionWhereInput>;
};

export type RoleRoleUserRoleRelationArgs = {
  cursor?: InputMaybe<UserRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserRoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserRoleWhereInput>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  roleRolePermissionRelation: Scalars['Int'];
  roleUserRoleRelation: Scalars['Int'];
};

export type RoleCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  roleRolePermissionRelation?: InputMaybe<RolePermissionCreateNestedManyWithoutRoleInput>;
  roleUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutRoleInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RoleCreateNestedOneWithoutRoleRolePermissionRelationInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutRoleRolePermissionRelationInput>;
  create?: InputMaybe<RoleCreateWithoutRoleRolePermissionRelationInput>;
};

export type RoleCreateNestedOneWithoutRoleUserRoleRelationInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutRoleUserRoleRelationInput>;
  create?: InputMaybe<RoleCreateWithoutRoleUserRoleRelationInput>;
};

export type RoleCreateOrConnectWithoutRoleRolePermissionRelationInput = {
  create: RoleCreateWithoutRoleRolePermissionRelationInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateOrConnectWithoutRoleUserRoleRelationInput = {
  create: RoleCreateWithoutRoleUserRoleRelationInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutRoleRolePermissionRelationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  roleUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutRoleInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RoleCreateWithoutRoleUserRoleRelationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  roleRolePermissionRelation?: InputMaybe<RolePermissionCreateNestedManyWithoutRoleInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RoleOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  roleRolePermissionRelation?: InputMaybe<RolePermissionOrderByRelationAggregateInput>;
  roleUserRoleRelation?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RolePermission = {
  __typename?: 'RolePermission';
  createdAt: Scalars['DateTime'];
  permission: Permission;
  permissionId: Scalars['Int'];
  role: Role;
  roleId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type RolePermissionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  permission: PermissionCreateNestedOneWithoutPermissionRolePermissionRelationInput;
  role: RoleCreateNestedOneWithoutRoleRolePermissionRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RolePermissionCreateManyRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  permissionId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RolePermissionCreateManyRoleInputEnvelope = {
  data: Array<RolePermissionCreateManyRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RolePermissionCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<RolePermissionCreateOrConnectWithoutRoleInput>
  >;
  create?: InputMaybe<Array<RolePermissionCreateWithoutRoleInput>>;
  createMany?: InputMaybe<RolePermissionCreateManyRoleInputEnvelope>;
};

export type RolePermissionCreateOrConnectWithoutRoleInput = {
  create: RolePermissionCreateWithoutRoleInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionCreateWithoutRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  permission: PermissionCreateNestedOneWithoutPermissionRolePermissionRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RolePermissionListRelationFilter = {
  every?: InputMaybe<RolePermissionWhereInput>;
  none?: InputMaybe<RolePermissionWhereInput>;
  some?: InputMaybe<RolePermissionWhereInput>;
};

export type RolePermissionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RolePermissionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  permission?: InputMaybe<PermissionOrderByWithRelationInput>;
  permissionId?: InputMaybe<SortOrder>;
  role?: InputMaybe<RoleOrderByWithRelationInput>;
  roleId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RolePermissionPermissionIdRoleIdCompoundUniqueInput = {
  permissionId: Scalars['Int'];
  roleId: Scalars['Int'];
};

export enum RolePermissionScalarFieldEnum {
  CreatedAt = 'createdAt',
  PermissionId = 'permissionId',
  RoleId = 'roleId',
  UpdatedAt = 'updatedAt',
}

export type RolePermissionScalarWhereInput = {
  AND?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  permissionId?: InputMaybe<IntFilter>;
  roleId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RolePermissionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  permission?: InputMaybe<PermissionUpdateOneRequiredWithoutPermissionRolePermissionRelationNestedInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutRoleRolePermissionRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RolePermissionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
  data: RolePermissionUpdateManyMutationInput;
  where: RolePermissionScalarWhereInput;
};

export type RolePermissionUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<RolePermissionCreateOrConnectWithoutRoleInput>
  >;
  create?: InputMaybe<Array<RolePermissionCreateWithoutRoleInput>>;
  createMany?: InputMaybe<RolePermissionCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<RolePermissionUpdateWithWhereUniqueWithoutRoleInput>
  >;
  updateMany?: InputMaybe<
    Array<RolePermissionUpdateManyWithWhereWithoutRoleInput>
  >;
  upsert?: InputMaybe<
    Array<RolePermissionUpsertWithWhereUniqueWithoutRoleInput>
  >;
};

export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
  data: RolePermissionUpdateWithoutRoleInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionUpdateWithoutRoleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  permission?: InputMaybe<PermissionUpdateOneRequiredWithoutPermissionRolePermissionRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
  create: RolePermissionCreateWithoutRoleInput;
  update: RolePermissionUpdateWithoutRoleInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionWhereInput = {
  AND?: InputMaybe<Array<RolePermissionWhereInput>>;
  NOT?: InputMaybe<Array<RolePermissionWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  permission?: InputMaybe<PermissionRelationFilter>;
  permissionId?: InputMaybe<IntFilter>;
  role?: InputMaybe<RoleRelationFilter>;
  roleId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RolePermissionWhereUniqueInput = {
  permissionId_roleId?: InputMaybe<RolePermissionPermissionIdRoleIdCompoundUniqueInput>;
};

export type RoleRelationFilter = {
  is?: InputMaybe<RoleWhereInput>;
  isNot?: InputMaybe<RoleWhereInput>;
};

export enum RoleScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type RoleUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  roleRolePermissionRelation?: InputMaybe<RolePermissionUpdateManyWithoutRoleNestedInput>;
  roleUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutRoleNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RoleUpdateOneRequiredWithoutRoleRolePermissionRelationNestedInput =
  {
    connect?: InputMaybe<RoleWhereUniqueInput>;
    connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutRoleRolePermissionRelationInput>;
    create?: InputMaybe<RoleCreateWithoutRoleRolePermissionRelationInput>;
    update?: InputMaybe<RoleUpdateWithoutRoleRolePermissionRelationInput>;
    upsert?: InputMaybe<RoleUpsertWithoutRoleRolePermissionRelationInput>;
  };

export type RoleUpdateOneRequiredWithoutRoleUserRoleRelationNestedInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutRoleUserRoleRelationInput>;
  create?: InputMaybe<RoleCreateWithoutRoleUserRoleRelationInput>;
  update?: InputMaybe<RoleUpdateWithoutRoleUserRoleRelationInput>;
  upsert?: InputMaybe<RoleUpsertWithoutRoleUserRoleRelationInput>;
};

export type RoleUpdateWithoutRoleRolePermissionRelationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  roleUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutRoleNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RoleUpdateWithoutRoleUserRoleRelationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  roleRolePermissionRelation?: InputMaybe<RolePermissionUpdateManyWithoutRoleNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RoleUpsertWithoutRoleRolePermissionRelationInput = {
  create: RoleCreateWithoutRoleRolePermissionRelationInput;
  update: RoleUpdateWithoutRoleRolePermissionRelationInput;
};

export type RoleUpsertWithoutRoleUserRoleRelationInput = {
  create: RoleCreateWithoutRoleUserRoleRelationInput;
  update: RoleUpdateWithoutRoleUserRoleRelationInput;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  roleRolePermissionRelation?: InputMaybe<RolePermissionListRelationFilter>;
  roleUserRoleRelation?: InputMaybe<UserRoleListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RoleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Service = {
  __typename?: 'Service';
  businessId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  price?: Maybe<Scalars['String']>;
  timeSpecific?: Maybe<Scalars['Boolean']>;
  unscheduled?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['DateTime'];
  urgent?: Maybe<Scalars['Boolean']>;
};

export type ServiceCreateNestedOneWithoutBusinessInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ServiceCreateOrConnectWithoutBusinessInput>;
  create?: InputMaybe<ServiceCreateWithoutBusinessInput>;
};

export type ServiceCreateOrConnectWithoutBusinessInput = {
  create: ServiceCreateWithoutBusinessInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceCreateWithoutBusinessInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  timeSpecific?: InputMaybe<Scalars['Boolean']>;
  unscheduled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  urgent?: InputMaybe<Scalars['Boolean']>;
};

export type ServiceOrderByWithRelationInput = {
  business?: InputMaybe<BusinessOrderByWithRelationInput>;
  businessId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  currency?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  timeSpecific?: InputMaybe<SortOrder>;
  unscheduled?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  urgent?: InputMaybe<SortOrder>;
};

export type ServiceRelationFilter = {
  is?: InputMaybe<ServiceWhereInput>;
  isNot?: InputMaybe<ServiceWhereInput>;
};

export type ServiceUpdateOneWithoutBusinessNestedInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ServiceCreateOrConnectWithoutBusinessInput>;
  create?: InputMaybe<ServiceCreateWithoutBusinessInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ServiceUpdateWithoutBusinessInput>;
  upsert?: InputMaybe<ServiceUpsertWithoutBusinessInput>;
};

export type ServiceUpdateWithoutBusinessInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  timeSpecific?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  unscheduled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urgent?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type ServiceUpsertWithoutBusinessInput = {
  create: ServiceCreateWithoutBusinessInput;
  update: ServiceUpdateWithoutBusinessInput;
};

export type ServiceWhereInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  business?: InputMaybe<BusinessRelationFilter>;
  businessId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  price?: InputMaybe<StringNullableFilter>;
  timeSpecific?: InputMaybe<BoolNullableFilter>;
  unscheduled?: InputMaybe<BoolNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  urgent?: InputMaybe<BoolNullableFilter>;
};

export type ServiceWhereUniqueInput = {
  businessId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Setting = {
  __typename?: 'Setting';
  _count?: Maybe<SettingCount>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: SettingClient;
  updatedAt: Scalars['DateTime'];
};

export enum SettingClient {
  MobileApp = 'MOBILE_APP',
  WebAdminApp = 'WEB_ADMIN_APP',
}

export type SettingCount = {
  __typename?: 'SettingCount';
  settingUserSettingRelation: Scalars['Int'];
};

export type SettingCreateNestedOneWithoutSettingUserSettingRelationInput = {
  connect?: InputMaybe<SettingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SettingCreateOrConnectWithoutSettingUserSettingRelationInput>;
  create?: InputMaybe<SettingCreateWithoutSettingUserSettingRelationInput>;
};

export type SettingCreateOrConnectWithoutSettingUserSettingRelationInput = {
  create: SettingCreateWithoutSettingUserSettingRelationInput;
  where: SettingWhereUniqueInput;
};

export type SettingCreateWithoutSettingUserSettingRelationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type?: InputMaybe<SettingClient>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SettingOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  settingUserSettingRelation?: InputMaybe<UserSettingOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SettingRelationFilter = {
  is?: InputMaybe<SettingWhereInput>;
  isNot?: InputMaybe<SettingWhereInput>;
};

export enum SettingScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updatedAt',
}

export type SettingUpdateOneRequiredWithoutSettingUserSettingRelationNestedInput =
  {
    connect?: InputMaybe<SettingWhereUniqueInput>;
    connectOrCreate?: InputMaybe<SettingCreateOrConnectWithoutSettingUserSettingRelationInput>;
    create?: InputMaybe<SettingCreateWithoutSettingUserSettingRelationInput>;
    update?: InputMaybe<SettingUpdateWithoutSettingUserSettingRelationInput>;
    upsert?: InputMaybe<SettingUpsertWithoutSettingUserSettingRelationInput>;
  };

export type SettingUpdateWithoutSettingUserSettingRelationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  label?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumSettingClientFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SettingUpsertWithoutSettingUserSettingRelationInput = {
  create: SettingCreateWithoutSettingUserSettingRelationInput;
  update: SettingUpdateWithoutSettingUserSettingRelationInput;
};

export type SettingWhereInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  NOT?: InputMaybe<Array<SettingWhereInput>>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  label?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  settingUserSettingRelation?: InputMaybe<UserSettingListRelationFilter>;
  type?: InputMaybe<EnumSettingClientFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SettingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orders: Array<Order>;
  ordersCreation: Array<Order>;
};

export type SubscriptionOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type SubscriptionOrdersCreationArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type Tag = {
  __typename?: 'Tag';
  _count?: Maybe<TagCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  tagBusinessTagRelation: Array<BusinessTag>;
  tagOrderTagRelation: Array<OrderTag>;
  updatedAt: Scalars['DateTime'];
};

export type TagTagBusinessTagRelationArgs = {
  cursor?: InputMaybe<BusinessTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<BusinessTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BusinessTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BusinessTagWhereInput>;
};

export type TagTagOrderTagRelationArgs = {
  cursor?: InputMaybe<OrderTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderTagWhereInput>;
};

export type TagCount = {
  __typename?: 'TagCount';
  tagBusinessTagRelation: Scalars['Int'];
  tagOrderTagRelation: Scalars['Int'];
};

export type TagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  tagBusinessTagRelation?: InputMaybe<BusinessTagCreateNestedManyWithoutTagInput>;
  tagOrderTagRelation?: InputMaybe<OrderTagCreateNestedManyWithoutTagInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagCreateNestedOneWithoutTagBusinessTagRelationInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutTagBusinessTagRelationInput>;
  create?: InputMaybe<TagCreateWithoutTagBusinessTagRelationInput>;
};

export type TagCreateNestedOneWithoutTagOrderTagRelationInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutTagOrderTagRelationInput>;
  create?: InputMaybe<TagCreateWithoutTagOrderTagRelationInput>;
};

export type TagCreateOrConnectWithoutTagBusinessTagRelationInput = {
  create: TagCreateWithoutTagBusinessTagRelationInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutTagOrderTagRelationInput = {
  create: TagCreateWithoutTagOrderTagRelationInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutTagBusinessTagRelationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  tagOrderTagRelation?: InputMaybe<OrderTagCreateNestedManyWithoutTagInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagCreateWithoutTagOrderTagRelationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  tagBusinessTagRelation?: InputMaybe<BusinessTagCreateNestedManyWithoutTagInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tagBusinessTagRelation?: InputMaybe<BusinessTagOrderByRelationAggregateInput>;
  tagOrderTagRelation?: InputMaybe<OrderTagOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagRelationFilter = {
  is?: InputMaybe<TagWhereInput>;
  isNot?: InputMaybe<TagWhereInput>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type TagUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tagBusinessTagRelation?: InputMaybe<BusinessTagUpdateManyWithoutTagNestedInput>;
  tagOrderTagRelation?: InputMaybe<OrderTagUpdateManyWithoutTagNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateOneRequiredWithoutTagBusinessTagRelationNestedInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutTagBusinessTagRelationInput>;
  create?: InputMaybe<TagCreateWithoutTagBusinessTagRelationInput>;
  update?: InputMaybe<TagUpdateWithoutTagBusinessTagRelationInput>;
  upsert?: InputMaybe<TagUpsertWithoutTagBusinessTagRelationInput>;
};

export type TagUpdateOneRequiredWithoutTagOrderTagRelationNestedInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutTagOrderTagRelationInput>;
  create?: InputMaybe<TagCreateWithoutTagOrderTagRelationInput>;
  update?: InputMaybe<TagUpdateWithoutTagOrderTagRelationInput>;
  upsert?: InputMaybe<TagUpsertWithoutTagOrderTagRelationInput>;
};

export type TagUpdateWithoutTagBusinessTagRelationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tagOrderTagRelation?: InputMaybe<OrderTagUpdateManyWithoutTagNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutTagOrderTagRelationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tagBusinessTagRelation?: InputMaybe<BusinessTagUpdateManyWithoutTagNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpsertWithoutTagBusinessTagRelationInput = {
  create: TagCreateWithoutTagBusinessTagRelationInput;
  update: TagUpdateWithoutTagBusinessTagRelationInput;
};

export type TagUpsertWithoutTagOrderTagRelationInput = {
  create: TagCreateWithoutTagOrderTagRelationInput;
  update: TagUpdateWithoutTagOrderTagRelationInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  tagBusinessTagRelation?: InputMaybe<BusinessTagListRelationFilter>;
  tagOrderTagRelation?: InputMaybe<OrderTagListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Token = {
  __typename?: 'Token';
  User?: Maybe<User>;
  apiKey?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
};

export type TokenCreateInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutUserTokenRelationInput>;
  apiKey?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TokenCreateManyUserInput = {
  apiKey?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TokenCreateManyUserInputEnvelope = {
  data: Array<TokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<TokenCreateManyUserInputEnvelope>;
};

export type TokenCreateOrConnectWithoutUserInput = {
  create: TokenCreateWithoutUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenCreateWithoutUserInput = {
  apiKey?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TokenListRelationFilter = {
  every?: InputMaybe<TokenWhereInput>;
  none?: InputMaybe<TokenWhereInput>;
  some?: InputMaybe<TokenWhereInput>;
};

export type TokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TokenOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>;
  apiKey?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum TokenScalarFieldEnum {
  ApiKey = 'apiKey',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type TokenScalarWhereInput = {
  AND?: InputMaybe<Array<TokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<TokenScalarWhereInput>>;
  OR?: InputMaybe<Array<TokenScalarWhereInput>>;
  apiKey?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type TokenUpdateInput = {
  User?: InputMaybe<UserUpdateOneWithoutUserTokenRelationNestedInput>;
  apiKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TokenUpdateManyMutationInput = {
  apiKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TokenUpdateManyWithWhereWithoutUserInput = {
  data: TokenUpdateManyMutationInput;
  where: TokenScalarWhereInput;
};

export type TokenUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<TokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  set?: InputMaybe<Array<TokenWhereUniqueInput>>;
  update?: InputMaybe<Array<TokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TokenUpdateWithWhereUniqueWithoutUserInput = {
  data: TokenUpdateWithoutUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenUpdateWithoutUserInput = {
  apiKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TokenUpsertWithWhereUniqueWithoutUserInput = {
  create: TokenCreateWithoutUserInput;
  update: TokenUpdateWithoutUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  NOT?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  apiKey?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type TokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Tracking = {
  __typename?: 'Tracking';
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  deprecatedAt?: Maybe<Scalars['DateTime']>;
  driver?: Maybe<Driver>;
  driverId?: Maybe<Scalars['Int']>;
  flag: TrackingStatus;
  id: Scalars['Int'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type TrackingCreateInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deprecatedAt?: InputMaybe<Scalars['DateTime']>;
  driver?: InputMaybe<DriverCreateNestedOneWithoutDriverTrackingRelationInput>;
  flag: TrackingStatus;
  location?: InputMaybe<LocationCreateNestedOneWithoutLocationTrackingRelationInput>;
  order?: InputMaybe<OrderCreateNestedOneWithoutOrderTrackingRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackingCreateManyDriverInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deprecatedAt?: InputMaybe<Scalars['DateTime']>;
  flag: TrackingStatus;
  id?: InputMaybe<Scalars['Int']>;
  locationId?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackingCreateManyDriverInputEnvelope = {
  data: Array<TrackingCreateManyDriverInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TrackingCreateManyLocationInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deprecatedAt?: InputMaybe<Scalars['DateTime']>;
  driverId?: InputMaybe<Scalars['Int']>;
  flag: TrackingStatus;
  id?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackingCreateManyLocationInputEnvelope = {
  data: Array<TrackingCreateManyLocationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TrackingCreateManyOrderInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deprecatedAt?: InputMaybe<Scalars['DateTime']>;
  driverId?: InputMaybe<Scalars['Int']>;
  flag: TrackingStatus;
  id?: InputMaybe<Scalars['Int']>;
  locationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackingCreateManyOrderInputEnvelope = {
  data: Array<TrackingCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TrackingCreateNestedManyWithoutDriverInput = {
  connect?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TrackingCreateOrConnectWithoutDriverInput>
  >;
  create?: InputMaybe<Array<TrackingCreateWithoutDriverInput>>;
  createMany?: InputMaybe<TrackingCreateManyDriverInputEnvelope>;
};

export type TrackingCreateNestedManyWithoutLocationInput = {
  connect?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TrackingCreateOrConnectWithoutLocationInput>
  >;
  create?: InputMaybe<Array<TrackingCreateWithoutLocationInput>>;
  createMany?: InputMaybe<TrackingCreateManyLocationInputEnvelope>;
};

export type TrackingCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrackingCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<TrackingCreateWithoutOrderInput>>;
  createMany?: InputMaybe<TrackingCreateManyOrderInputEnvelope>;
};

export type TrackingCreateOrConnectWithoutDriverInput = {
  create: TrackingCreateWithoutDriverInput;
  where: TrackingWhereUniqueInput;
};

export type TrackingCreateOrConnectWithoutLocationInput = {
  create: TrackingCreateWithoutLocationInput;
  where: TrackingWhereUniqueInput;
};

export type TrackingCreateOrConnectWithoutOrderInput = {
  create: TrackingCreateWithoutOrderInput;
  where: TrackingWhereUniqueInput;
};

export type TrackingCreateWithoutDriverInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deprecatedAt?: InputMaybe<Scalars['DateTime']>;
  flag: TrackingStatus;
  location?: InputMaybe<LocationCreateNestedOneWithoutLocationTrackingRelationInput>;
  order?: InputMaybe<OrderCreateNestedOneWithoutOrderTrackingRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackingCreateWithoutLocationInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deprecatedAt?: InputMaybe<Scalars['DateTime']>;
  driver?: InputMaybe<DriverCreateNestedOneWithoutDriverTrackingRelationInput>;
  flag: TrackingStatus;
  order?: InputMaybe<OrderCreateNestedOneWithoutOrderTrackingRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackingCreateWithoutOrderInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deprecatedAt?: InputMaybe<Scalars['DateTime']>;
  driver?: InputMaybe<DriverCreateNestedOneWithoutDriverTrackingRelationInput>;
  flag: TrackingStatus;
  location?: InputMaybe<LocationCreateNestedOneWithoutLocationTrackingRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrackingListRelationFilter = {
  every?: InputMaybe<TrackingWhereInput>;
  none?: InputMaybe<TrackingWhereInput>;
  some?: InputMaybe<TrackingWhereInput>;
};

export type TrackingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TrackingOrderByWithRelationInput = {
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deprecatedAt?: InputMaybe<SortOrder>;
  driver?: InputMaybe<DriverOrderByWithRelationInput>;
  driverId?: InputMaybe<SortOrder>;
  flag?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<LocationOrderByWithRelationInput>;
  locationId?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum TrackingScalarFieldEnum {
  CompletedAt = 'completedAt',
  CreatedAt = 'createdAt',
  DeprecatedAt = 'deprecatedAt',
  DriverId = 'driverId',
  Flag = 'flag',
  Id = 'id',
  LocationId = 'locationId',
  OrderId = 'orderId',
  UpdatedAt = 'updatedAt',
}

export type TrackingScalarWhereInput = {
  AND?: InputMaybe<Array<TrackingScalarWhereInput>>;
  NOT?: InputMaybe<Array<TrackingScalarWhereInput>>;
  OR?: InputMaybe<Array<TrackingScalarWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deprecatedAt?: InputMaybe<DateTimeNullableFilter>;
  driverId?: InputMaybe<IntNullableFilter>;
  flag?: InputMaybe<EnumTrackingStatusFilter>;
  id?: InputMaybe<IntFilter>;
  locationId?: InputMaybe<IntNullableFilter>;
  orderId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum TrackingStatus {
  Delivery = 'DELIVERY',
  Distribution = 'DISTRIBUTION',
  PickUp = 'PICK_UP',
}

export type TrackingUpdateInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deprecatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  driver?: InputMaybe<DriverUpdateOneWithoutDriverTrackingRelationNestedInput>;
  flag?: InputMaybe<EnumTrackingStatusFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutLocationTrackingRelationNestedInput>;
  order?: InputMaybe<OrderUpdateOneWithoutOrderTrackingRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrackingUpdateManyMutationInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deprecatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  flag?: InputMaybe<EnumTrackingStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrackingUpdateManyWithWhereWithoutDriverInput = {
  data: TrackingUpdateManyMutationInput;
  where: TrackingScalarWhereInput;
};

export type TrackingUpdateManyWithWhereWithoutLocationInput = {
  data: TrackingUpdateManyMutationInput;
  where: TrackingScalarWhereInput;
};

export type TrackingUpdateManyWithWhereWithoutOrderInput = {
  data: TrackingUpdateManyMutationInput;
  where: TrackingScalarWhereInput;
};

export type TrackingUpdateManyWithoutDriverNestedInput = {
  connect?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TrackingCreateOrConnectWithoutDriverInput>
  >;
  create?: InputMaybe<Array<TrackingCreateWithoutDriverInput>>;
  createMany?: InputMaybe<TrackingCreateManyDriverInputEnvelope>;
  delete?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TrackingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  set?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  update?: InputMaybe<Array<TrackingUpdateWithWhereUniqueWithoutDriverInput>>;
  updateMany?: InputMaybe<Array<TrackingUpdateManyWithWhereWithoutDriverInput>>;
  upsert?: InputMaybe<Array<TrackingUpsertWithWhereUniqueWithoutDriverInput>>;
};

export type TrackingUpdateManyWithoutLocationNestedInput = {
  connect?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TrackingCreateOrConnectWithoutLocationInput>
  >;
  create?: InputMaybe<Array<TrackingCreateWithoutLocationInput>>;
  createMany?: InputMaybe<TrackingCreateManyLocationInputEnvelope>;
  delete?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TrackingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  set?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  update?: InputMaybe<Array<TrackingUpdateWithWhereUniqueWithoutLocationInput>>;
  updateMany?: InputMaybe<
    Array<TrackingUpdateManyWithWhereWithoutLocationInput>
  >;
  upsert?: InputMaybe<Array<TrackingUpsertWithWhereUniqueWithoutLocationInput>>;
};

export type TrackingUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrackingCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<TrackingCreateWithoutOrderInput>>;
  createMany?: InputMaybe<TrackingCreateManyOrderInputEnvelope>;
  delete?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TrackingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  set?: InputMaybe<Array<TrackingWhereUniqueInput>>;
  update?: InputMaybe<Array<TrackingUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: InputMaybe<Array<TrackingUpdateManyWithWhereWithoutOrderInput>>;
  upsert?: InputMaybe<Array<TrackingUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type TrackingUpdateWithWhereUniqueWithoutDriverInput = {
  data: TrackingUpdateWithoutDriverInput;
  where: TrackingWhereUniqueInput;
};

export type TrackingUpdateWithWhereUniqueWithoutLocationInput = {
  data: TrackingUpdateWithoutLocationInput;
  where: TrackingWhereUniqueInput;
};

export type TrackingUpdateWithWhereUniqueWithoutOrderInput = {
  data: TrackingUpdateWithoutOrderInput;
  where: TrackingWhereUniqueInput;
};

export type TrackingUpdateWithoutDriverInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deprecatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  flag?: InputMaybe<EnumTrackingStatusFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutLocationTrackingRelationNestedInput>;
  order?: InputMaybe<OrderUpdateOneWithoutOrderTrackingRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrackingUpdateWithoutLocationInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deprecatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  driver?: InputMaybe<DriverUpdateOneWithoutDriverTrackingRelationNestedInput>;
  flag?: InputMaybe<EnumTrackingStatusFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneWithoutOrderTrackingRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrackingUpdateWithoutOrderInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deprecatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  driver?: InputMaybe<DriverUpdateOneWithoutDriverTrackingRelationNestedInput>;
  flag?: InputMaybe<EnumTrackingStatusFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutLocationTrackingRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrackingUpsertWithWhereUniqueWithoutDriverInput = {
  create: TrackingCreateWithoutDriverInput;
  update: TrackingUpdateWithoutDriverInput;
  where: TrackingWhereUniqueInput;
};

export type TrackingUpsertWithWhereUniqueWithoutLocationInput = {
  create: TrackingCreateWithoutLocationInput;
  update: TrackingUpdateWithoutLocationInput;
  where: TrackingWhereUniqueInput;
};

export type TrackingUpsertWithWhereUniqueWithoutOrderInput = {
  create: TrackingCreateWithoutOrderInput;
  update: TrackingUpdateWithoutOrderInput;
  where: TrackingWhereUniqueInput;
};

export type TrackingWhereInput = {
  AND?: InputMaybe<Array<TrackingWhereInput>>;
  NOT?: InputMaybe<Array<TrackingWhereInput>>;
  OR?: InputMaybe<Array<TrackingWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deprecatedAt?: InputMaybe<DateTimeNullableFilter>;
  driver?: InputMaybe<DriverRelationFilter>;
  driverId?: InputMaybe<IntNullableFilter>;
  flag?: InputMaybe<EnumTrackingStatusFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<LocationRelationFilter>;
  locationId?: InputMaybe<IntNullableFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TrackingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  archivedAt?: Maybe<Scalars['DateTime']>;
  auth0Id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  driver?: Maybe<Driver>;
  email: Scalars['String'];
  emailNotificationsFlag?: Maybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  lastActivityAt?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userNotificationRelation: Array<Notification>;
  userTokenRelation: Array<Token>;
  userUserRoleRelation: Array<UserRole>;
  userUserSettingRelation: Array<UserSetting>;
};

export type UserUserNotificationRelationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};

export type UserUserTokenRelationArgs = {
  cursor?: InputMaybe<TokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<TokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};

export type UserUserUserRoleRelationArgs = {
  cursor?: InputMaybe<UserRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserRoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserRoleWhereInput>;
};

export type UserUserUserSettingRelationArgs = {
  cursor?: InputMaybe<UserSettingWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSettingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSettingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserSettingWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  userNotificationRelation: Scalars['Int'];
  userTokenRelation: Scalars['Int'];
  userUserRoleRelation: Scalars['Int'];
  userUserSettingRelation: Scalars['Int'];
};

export type UserCreateInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driver?: InputMaybe<DriverCreateNestedOneWithoutUserInput>;
  email: Scalars['String'];
  emailNotificationsFlag?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  userTokenRelation?: InputMaybe<TokenCreateNestedManyWithoutUserInput>;
  userUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  userUserSettingRelation?: InputMaybe<UserSettingCreateNestedManyWithoutUserInput>;
};

export type UserCreateNestedOneWithoutDriverInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDriverInput>;
  create?: InputMaybe<UserCreateWithoutDriverInput>;
};

export type UserCreateNestedOneWithoutUserNotificationRelationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserNotificationRelationInput>;
  create?: InputMaybe<UserCreateWithoutUserNotificationRelationInput>;
};

export type UserCreateNestedOneWithoutUserTokenRelationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserTokenRelationInput>;
  create?: InputMaybe<UserCreateWithoutUserTokenRelationInput>;
};

export type UserCreateNestedOneWithoutUserUserRoleRelationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserUserRoleRelationInput>;
  create?: InputMaybe<UserCreateWithoutUserUserRoleRelationInput>;
};

export type UserCreateNestedOneWithoutUserUserSettingRelationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserUserSettingRelationInput>;
  create?: InputMaybe<UserCreateWithoutUserUserSettingRelationInput>;
};

export type UserCreateOrConnectWithoutDriverInput = {
  create: UserCreateWithoutDriverInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserNotificationRelationInput = {
  create: UserCreateWithoutUserNotificationRelationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserTokenRelationInput = {
  create: UserCreateWithoutUserTokenRelationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserUserRoleRelationInput = {
  create: UserCreateWithoutUserUserRoleRelationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserUserSettingRelationInput = {
  create: UserCreateWithoutUserUserSettingRelationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutDriverInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailNotificationsFlag?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  userTokenRelation?: InputMaybe<TokenCreateNestedManyWithoutUserInput>;
  userUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  userUserSettingRelation?: InputMaybe<UserSettingCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserNotificationRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driver?: InputMaybe<DriverCreateNestedOneWithoutUserInput>;
  email: Scalars['String'];
  emailNotificationsFlag?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userTokenRelation?: InputMaybe<TokenCreateNestedManyWithoutUserInput>;
  userUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  userUserSettingRelation?: InputMaybe<UserSettingCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserTokenRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driver?: InputMaybe<DriverCreateNestedOneWithoutUserInput>;
  email: Scalars['String'];
  emailNotificationsFlag?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  userUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  userUserSettingRelation?: InputMaybe<UserSettingCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserUserRoleRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driver?: InputMaybe<DriverCreateNestedOneWithoutUserInput>;
  email: Scalars['String'];
  emailNotificationsFlag?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  userTokenRelation?: InputMaybe<TokenCreateNestedManyWithoutUserInput>;
  userUserSettingRelation?: InputMaybe<UserSettingCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserUserSettingRelationInput = {
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  driver?: InputMaybe<DriverCreateNestedOneWithoutUserInput>;
  email: Scalars['String'];
  emailNotificationsFlag?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityAt?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotificationRelation?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  userTokenRelation?: InputMaybe<TokenCreateNestedManyWithoutUserInput>;
  userUserRoleRelation?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
};

export type UserOrderByWithRelationInput = {
  archivedAt?: InputMaybe<SortOrder>;
  auth0Id?: InputMaybe<SortOrder>;
  avatar?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  driver?: InputMaybe<DriverOrderByWithRelationInput>;
  email?: InputMaybe<SortOrder>;
  emailNotificationsFlag?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  lastActivityAt?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userNotificationRelation?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  userTokenRelation?: InputMaybe<TokenOrderByRelationAggregateInput>;
  userUserRoleRelation?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  userUserSettingRelation?: InputMaybe<UserSettingOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserRole = {
  __typename?: 'UserRole';
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  role: Role;
  roleId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type UserRoleCreateInput = {
  business?: InputMaybe<BusinessCreateNestedOneWithoutBusinessUserRoleRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  role: RoleCreateNestedOneWithoutRoleUserRoleRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserUserRoleRelationInput;
};

export type UserRoleCreateManyBusinessInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  roleId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type UserRoleCreateManyBusinessInputEnvelope = {
  data: Array<UserRoleCreateManyBusinessInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserRoleCreateManyRoleInput = {
  businessId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type UserRoleCreateManyRoleInputEnvelope = {
  data: Array<UserRoleCreateManyRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserRoleCreateManyUserInput = {
  businessId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  roleId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserRoleCreateManyUserInputEnvelope = {
  data: Array<UserRoleCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserRoleCreateNestedManyWithoutBusinessInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserRoleCreateOrConnectWithoutBusinessInput>
  >;
  create?: InputMaybe<Array<UserRoleCreateWithoutBusinessInput>>;
  createMany?: InputMaybe<UserRoleCreateManyBusinessInputEnvelope>;
};

export type UserRoleCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutRoleInput>>;
  createMany?: InputMaybe<UserRoleCreateManyRoleInputEnvelope>;
};

export type UserRoleCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyUserInputEnvelope>;
};

export type UserRoleCreateOrConnectWithoutBusinessInput = {
  create: UserRoleCreateWithoutBusinessInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleCreateOrConnectWithoutRoleInput = {
  create: UserRoleCreateWithoutRoleInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleCreateOrConnectWithoutUserInput = {
  create: UserRoleCreateWithoutUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleCreateWithoutBusinessInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  role: RoleCreateNestedOneWithoutRoleUserRoleRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserUserRoleRelationInput;
};

export type UserRoleCreateWithoutRoleInput = {
  business?: InputMaybe<BusinessCreateNestedOneWithoutBusinessUserRoleRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserUserRoleRelationInput;
};

export type UserRoleCreateWithoutUserInput = {
  business?: InputMaybe<BusinessCreateNestedOneWithoutBusinessUserRoleRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  role: RoleCreateNestedOneWithoutRoleUserRoleRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserRoleListRelationFilter = {
  every?: InputMaybe<UserRoleWhereInput>;
  none?: InputMaybe<UserRoleWhereInput>;
  some?: InputMaybe<UserRoleWhereInput>;
};

export type UserRoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserRoleOrderByWithRelationInput = {
  business?: InputMaybe<BusinessOrderByWithRelationInput>;
  businessId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  role?: InputMaybe<RoleOrderByWithRelationInput>;
  roleId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserRoleScalarFieldEnum {
  BusinessId = 'businessId',
  CreatedAt = 'createdAt',
  RoleId = 'roleId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type UserRoleScalarWhereInput = {
  AND?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  OR?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  businessId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  roleId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserRoleUpdateInput = {
  business?: InputMaybe<BusinessUpdateOneWithoutBusinessUserRoleRelationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutRoleUserRoleRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserUserRoleRelationNestedInput>;
};

export type UserRoleUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserRoleUpdateManyWithWhereWithoutBusinessInput = {
  data: UserRoleUpdateManyMutationInput;
  where: UserRoleScalarWhereInput;
};

export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
  data: UserRoleUpdateManyMutationInput;
  where: UserRoleScalarWhereInput;
};

export type UserRoleUpdateManyWithWhereWithoutUserInput = {
  data: UserRoleUpdateManyMutationInput;
  where: UserRoleScalarWhereInput;
};

export type UserRoleUpdateManyWithoutBusinessNestedInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserRoleCreateOrConnectWithoutBusinessInput>
  >;
  create?: InputMaybe<Array<UserRoleCreateWithoutBusinessInput>>;
  createMany?: InputMaybe<UserRoleCreateManyBusinessInputEnvelope>;
  delete?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  set?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  update?: InputMaybe<Array<UserRoleUpdateWithWhereUniqueWithoutBusinessInput>>;
  updateMany?: InputMaybe<
    Array<UserRoleUpdateManyWithWhereWithoutBusinessInput>
  >;
  upsert?: InputMaybe<Array<UserRoleUpsertWithWhereUniqueWithoutBusinessInput>>;
};

export type UserRoleUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutRoleInput>>;
  createMany?: InputMaybe<UserRoleCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  set?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  update?: InputMaybe<Array<UserRoleUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<UserRoleUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<UserRoleUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type UserRoleUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  set?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  update?: InputMaybe<Array<UserRoleUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserRoleUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserRoleUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserRoleUpdateWithWhereUniqueWithoutBusinessInput = {
  data: UserRoleUpdateWithoutBusinessInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
  data: UserRoleUpdateWithoutRoleInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
  data: UserRoleUpdateWithoutUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpdateWithoutBusinessInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutRoleUserRoleRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserUserRoleRelationNestedInput>;
};

export type UserRoleUpdateWithoutRoleInput = {
  business?: InputMaybe<BusinessUpdateOneWithoutBusinessUserRoleRelationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserUserRoleRelationNestedInput>;
};

export type UserRoleUpdateWithoutUserInput = {
  business?: InputMaybe<BusinessUpdateOneWithoutBusinessUserRoleRelationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutRoleUserRoleRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserRoleUpsertWithWhereUniqueWithoutBusinessInput = {
  create: UserRoleCreateWithoutBusinessInput;
  update: UserRoleUpdateWithoutBusinessInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
  create: UserRoleCreateWithoutRoleInput;
  update: UserRoleUpdateWithoutRoleInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
  create: UserRoleCreateWithoutUserInput;
  update: UserRoleUpdateWithoutUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUserIdRoleIdCompoundUniqueInput = {
  roleId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserRoleWhereInput = {
  AND?: InputMaybe<Array<UserRoleWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleWhereInput>>;
  OR?: InputMaybe<Array<UserRoleWhereInput>>;
  business?: InputMaybe<BusinessRelationFilter>;
  businessId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  role?: InputMaybe<RoleRelationFilter>;
  roleId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserRoleWhereUniqueInput = {
  userId_roleId?: InputMaybe<UserRoleUserIdRoleIdCompoundUniqueInput>;
};

export enum UserScalarFieldEnum {
  ArchivedAt = 'archivedAt',
  Auth0Id = 'auth0Id',
  Avatar = 'avatar',
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailNotificationsFlag = 'emailNotificationsFlag',
  FirstName = 'firstName',
  Id = 'id',
  IsActive = 'isActive',
  LastActivityAt = 'lastActivityAt',
  LastName = 'lastName',
  UpdatedAt = 'updatedAt',
}

export type UserSetting = {
  __typename?: 'UserSetting';
  createdAt: Scalars['DateTime'];
  setting: Setting;
  settingId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  value: Scalars['Boolean'];
};

export type UserSettingCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  setting: SettingCreateNestedOneWithoutSettingUserSettingRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserUserSettingRelationInput;
  value?: InputMaybe<Scalars['Boolean']>;
};

export type UserSettingCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  settingId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['Boolean']>;
};

export type UserSettingCreateManyUserInputEnvelope = {
  data: Array<UserSettingCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserSettingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserSettingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserSettingCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<UserSettingCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserSettingCreateManyUserInputEnvelope>;
};

export type UserSettingCreateOrConnectWithoutUserInput = {
  create: UserSettingCreateWithoutUserInput;
  where: UserSettingWhereUniqueInput;
};

export type UserSettingCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  setting: SettingCreateNestedOneWithoutSettingUserSettingRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['Boolean']>;
};

export type UserSettingListRelationFilter = {
  every?: InputMaybe<UserSettingWhereInput>;
  none?: InputMaybe<UserSettingWhereInput>;
  some?: InputMaybe<UserSettingWhereInput>;
};

export type UserSettingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserSettingOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  setting?: InputMaybe<SettingOrderByWithRelationInput>;
  settingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum UserSettingScalarFieldEnum {
  CreatedAt = 'createdAt',
  SettingId = 'settingId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Value = 'value',
}

export type UserSettingScalarWhereInput = {
  AND?: InputMaybe<Array<UserSettingScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserSettingScalarWhereInput>>;
  OR?: InputMaybe<Array<UserSettingScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  settingId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
  value?: InputMaybe<BoolFilter>;
};

export type UserSettingUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  setting?: InputMaybe<SettingUpdateOneRequiredWithoutSettingUserSettingRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserUserSettingRelationNestedInput>;
  value?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserSettingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserSettingUpdateManyWithWhereWithoutUserInput = {
  data: UserSettingUpdateManyMutationInput;
  where: UserSettingScalarWhereInput;
};

export type UserSettingUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserSettingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserSettingCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<UserSettingCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserSettingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserSettingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserSettingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserSettingWhereUniqueInput>>;
  set?: InputMaybe<Array<UserSettingWhereUniqueInput>>;
  update?: InputMaybe<Array<UserSettingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<
    Array<UserSettingUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<Array<UserSettingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserSettingUpdateWithWhereUniqueWithoutUserInput = {
  data: UserSettingUpdateWithoutUserInput;
  where: UserSettingWhereUniqueInput;
};

export type UserSettingUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  setting?: InputMaybe<SettingUpdateOneRequiredWithoutSettingUserSettingRelationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserSettingUpsertWithWhereUniqueWithoutUserInput = {
  create: UserSettingCreateWithoutUserInput;
  update: UserSettingUpdateWithoutUserInput;
  where: UserSettingWhereUniqueInput;
};

export type UserSettingUserIdSettingIdCompoundUniqueInput = {
  settingId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserSettingWhereInput = {
  AND?: InputMaybe<Array<UserSettingWhereInput>>;
  NOT?: InputMaybe<Array<UserSettingWhereInput>>;
  OR?: InputMaybe<Array<UserSettingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  setting?: InputMaybe<SettingRelationFilter>;
  settingId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  value?: InputMaybe<BoolFilter>;
};

export type UserSettingWhereUniqueInput = {
  userId_settingId?: InputMaybe<UserSettingUserIdSettingIdCompoundUniqueInput>;
};

export type UserUpdateInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  auth0Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driver?: InputMaybe<DriverUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailNotificationsFlag?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastActivityAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  userTokenRelation?: InputMaybe<TokenUpdateManyWithoutUserNestedInput>;
  userUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  userUserSettingRelation?: InputMaybe<UserSettingUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateOneRequiredWithoutDriverNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDriverInput>;
  create?: InputMaybe<UserCreateWithoutDriverInput>;
  update?: InputMaybe<UserUpdateWithoutDriverInput>;
  upsert?: InputMaybe<UserUpsertWithoutDriverInput>;
};

export type UserUpdateOneRequiredWithoutUserNotificationRelationNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserNotificationRelationInput>;
  create?: InputMaybe<UserCreateWithoutUserNotificationRelationInput>;
  update?: InputMaybe<UserUpdateWithoutUserNotificationRelationInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserNotificationRelationInput>;
};

export type UserUpdateOneRequiredWithoutUserUserRoleRelationNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserUserRoleRelationInput>;
  create?: InputMaybe<UserCreateWithoutUserUserRoleRelationInput>;
  update?: InputMaybe<UserUpdateWithoutUserUserRoleRelationInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserUserRoleRelationInput>;
};

export type UserUpdateOneRequiredWithoutUserUserSettingRelationNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserUserSettingRelationInput>;
  create?: InputMaybe<UserCreateWithoutUserUserSettingRelationInput>;
  update?: InputMaybe<UserUpdateWithoutUserUserSettingRelationInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserUserSettingRelationInput>;
};

export type UserUpdateOneWithoutUserTokenRelationNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserTokenRelationInput>;
  create?: InputMaybe<UserCreateWithoutUserTokenRelationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutUserTokenRelationInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserTokenRelationInput>;
};

export type UserUpdateWithoutDriverInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  auth0Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailNotificationsFlag?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastActivityAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  userTokenRelation?: InputMaybe<TokenUpdateManyWithoutUserNestedInput>;
  userUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  userUserSettingRelation?: InputMaybe<UserSettingUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserNotificationRelationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  auth0Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driver?: InputMaybe<DriverUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailNotificationsFlag?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastActivityAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userTokenRelation?: InputMaybe<TokenUpdateManyWithoutUserNestedInput>;
  userUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  userUserSettingRelation?: InputMaybe<UserSettingUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserTokenRelationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  auth0Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driver?: InputMaybe<DriverUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailNotificationsFlag?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastActivityAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  userUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  userUserSettingRelation?: InputMaybe<UserSettingUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserUserRoleRelationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  auth0Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driver?: InputMaybe<DriverUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailNotificationsFlag?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastActivityAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  userTokenRelation?: InputMaybe<TokenUpdateManyWithoutUserNestedInput>;
  userUserSettingRelation?: InputMaybe<UserSettingUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserUserSettingRelationInput = {
  archivedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  auth0Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  driver?: InputMaybe<DriverUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailNotificationsFlag?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastActivityAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotificationRelation?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  userTokenRelation?: InputMaybe<TokenUpdateManyWithoutUserNestedInput>;
  userUserRoleRelation?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
};

export type UserUpsertWithoutDriverInput = {
  create: UserCreateWithoutDriverInput;
  update: UserUpdateWithoutDriverInput;
};

export type UserUpsertWithoutUserNotificationRelationInput = {
  create: UserCreateWithoutUserNotificationRelationInput;
  update: UserUpdateWithoutUserNotificationRelationInput;
};

export type UserUpsertWithoutUserTokenRelationInput = {
  create: UserCreateWithoutUserTokenRelationInput;
  update: UserUpdateWithoutUserTokenRelationInput;
};

export type UserUpsertWithoutUserUserRoleRelationInput = {
  create: UserCreateWithoutUserUserRoleRelationInput;
  update: UserUpdateWithoutUserUserRoleRelationInput;
};

export type UserUpsertWithoutUserUserSettingRelationInput = {
  create: UserCreateWithoutUserUserSettingRelationInput;
  update: UserUpdateWithoutUserUserSettingRelationInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  auth0Id?: InputMaybe<StringNullableFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  driver?: InputMaybe<DriverRelationFilter>;
  email?: InputMaybe<StringFilter>;
  emailNotificationsFlag?: InputMaybe<BoolNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolFilter>;
  lastActivityAt?: InputMaybe<DateTimeNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userNotificationRelation?: InputMaybe<NotificationListRelationFilter>;
  userTokenRelation?: InputMaybe<TokenListRelationFilter>;
  userUserRoleRelation?: InputMaybe<UserRoleListRelationFilter>;
  userUserSettingRelation?: InputMaybe<UserSettingListRelationFilter>;
};

export type UserWhereUniqueInput = {
  auth0Id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};
