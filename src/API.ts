/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMedicalEncounterInput = {
  id?: string | null,
  encounterDateTime?: string | null,
  practitionerTypeSeen?: string | null,
  patientComplaints?: string | null,
  vitalSigns?: string | null,
  practionerNotes?: string | null,
  labOrders?: string | null,
  pharmacyOrders?: string | null,
  diagnosis?: string | null,
  treatmentPlan?: string | null,
  referralToSpecialists?: string | null,
  recommendedFollowUp?: string | null,
  dataTimeEncounterSubmitted?: string | null,
  employeeIDWhoSubmitted?: string | null,
  patientID: string,
  _version?: number | null,
};

export type ModelMedicalEncounterConditionInput = {
  encounterDateTime?: ModelStringInput | null,
  practitionerTypeSeen?: ModelStringInput | null,
  patientComplaints?: ModelStringInput | null,
  vitalSigns?: ModelStringInput | null,
  practionerNotes?: ModelStringInput | null,
  labOrders?: ModelStringInput | null,
  pharmacyOrders?: ModelStringInput | null,
  diagnosis?: ModelStringInput | null,
  treatmentPlan?: ModelStringInput | null,
  referralToSpecialists?: ModelStringInput | null,
  recommendedFollowUp?: ModelStringInput | null,
  dataTimeEncounterSubmitted?: ModelStringInput | null,
  employeeIDWhoSubmitted?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  and?: Array< ModelMedicalEncounterConditionInput | null > | null,
  or?: Array< ModelMedicalEncounterConditionInput | null > | null,
  not?: ModelMedicalEncounterConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type MedicalEncounter = {
  __typename: "MedicalEncounter",
  id: string,
  encounterDateTime?: string | null,
  practitionerTypeSeen?: string | null,
  patientComplaints?: string | null,
  vitalSigns?: string | null,
  practionerNotes?: string | null,
  labOrders?: string | null,
  pharmacyOrders?: string | null,
  diagnosis?: string | null,
  treatmentPlan?: string | null,
  referralToSpecialists?: string | null,
  recommendedFollowUp?: string | null,
  dataTimeEncounterSubmitted?: string | null,
  employeeIDWhoSubmitted?: string | null,
  patientID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMedicalEncounterInput = {
  id: string,
  encounterDateTime?: string | null,
  practitionerTypeSeen?: string | null,
  patientComplaints?: string | null,
  vitalSigns?: string | null,
  practionerNotes?: string | null,
  labOrders?: string | null,
  pharmacyOrders?: string | null,
  diagnosis?: string | null,
  treatmentPlan?: string | null,
  referralToSpecialists?: string | null,
  recommendedFollowUp?: string | null,
  dataTimeEncounterSubmitted?: string | null,
  employeeIDWhoSubmitted?: string | null,
  patientID?: string | null,
  _version?: number | null,
};

export type DeleteMedicalEncounterInput = {
  id: string,
  _version?: number | null,
};

export type CreatePatientInput = {
  id?: string | null,
  patientName?: string | null,
  telelphoneNumber?: string | null,
  insuranceCarrierID?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  primaryCarePhysician?: string | null,
  listCurrentMedications?: string | null,
  listScheduledAppointments?: string | null,
  _version?: number | null,
};

export type ModelPatientConditionInput = {
  patientName?: ModelStringInput | null,
  telelphoneNumber?: ModelStringInput | null,
  insuranceCarrierID?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  primaryCarePhysician?: ModelStringInput | null,
  listCurrentMedications?: ModelStringInput | null,
  listScheduledAppointments?: ModelStringInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
};

export type Patient = {
  __typename: "Patient",
  id: string,
  patientName?: string | null,
  telelphoneNumber?: string | null,
  insuranceCarrierID?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  primaryCarePhysician?: string | null,
  listCurrentMedications?: string | null,
  listScheduledAppointments?: string | null,
  MedicalEncounters?: ModelMedicalEncounterConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMedicalEncounterConnection = {
  __typename: "ModelMedicalEncounterConnection",
  items:  Array<MedicalEncounter | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdatePatientInput = {
  id: string,
  patientName?: string | null,
  telelphoneNumber?: string | null,
  insuranceCarrierID?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  primaryCarePhysician?: string | null,
  listCurrentMedications?: string | null,
  listScheduledAppointments?: string | null,
  _version?: number | null,
};

export type DeletePatientInput = {
  id: string,
  _version?: number | null,
};

export type CreateVendorInput = {
  id?: string | null,
  vendorName?: string | null,
  vendorAddress?: string | null,
  typeOfEquipment?: string | null,
  preferredVendor?: boolean | null,
  _version?: number | null,
};

export type ModelVendorConditionInput = {
  vendorName?: ModelStringInput | null,
  vendorAddress?: ModelStringInput | null,
  typeOfEquipment?: ModelStringInput | null,
  preferredVendor?: ModelBooleanInput | null,
  and?: Array< ModelVendorConditionInput | null > | null,
  or?: Array< ModelVendorConditionInput | null > | null,
  not?: ModelVendorConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Vendor = {
  __typename: "Vendor",
  id: string,
  vendorName?: string | null,
  vendorAddress?: string | null,
  typeOfEquipment?: string | null,
  preferredVendor?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateVendorInput = {
  id: string,
  vendorName?: string | null,
  vendorAddress?: string | null,
  typeOfEquipment?: string | null,
  preferredVendor?: boolean | null,
  _version?: number | null,
};

export type DeleteVendorInput = {
  id: string,
  _version?: number | null,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTodoInput = {
  id: string,
  _version?: number | null,
};

export type ModelMedicalEncounterFilterInput = {
  id?: ModelIDInput | null,
  encounterDateTime?: ModelStringInput | null,
  practitionerTypeSeen?: ModelStringInput | null,
  patientComplaints?: ModelStringInput | null,
  vitalSigns?: ModelStringInput | null,
  practionerNotes?: ModelStringInput | null,
  labOrders?: ModelStringInput | null,
  pharmacyOrders?: ModelStringInput | null,
  diagnosis?: ModelStringInput | null,
  treatmentPlan?: ModelStringInput | null,
  referralToSpecialists?: ModelStringInput | null,
  recommendedFollowUp?: ModelStringInput | null,
  dataTimeEncounterSubmitted?: ModelStringInput | null,
  employeeIDWhoSubmitted?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  and?: Array< ModelMedicalEncounterFilterInput | null > | null,
  or?: Array< ModelMedicalEncounterFilterInput | null > | null,
  not?: ModelMedicalEncounterFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  patientName?: ModelStringInput | null,
  telelphoneNumber?: ModelStringInput | null,
  insuranceCarrierID?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  primaryCarePhysician?: ModelStringInput | null,
  listCurrentMedications?: ModelStringInput | null,
  listScheduledAppointments?: ModelStringInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items:  Array<Patient | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVendorFilterInput = {
  id?: ModelIDInput | null,
  vendorName?: ModelStringInput | null,
  vendorAddress?: ModelStringInput | null,
  typeOfEquipment?: ModelStringInput | null,
  preferredVendor?: ModelBooleanInput | null,
  and?: Array< ModelVendorFilterInput | null > | null,
  or?: Array< ModelVendorFilterInput | null > | null,
  not?: ModelVendorFilterInput | null,
};

export type ModelVendorConnection = {
  __typename: "ModelVendorConnection",
  items:  Array<Vendor | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionMedicalEncounterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  encounterDateTime?: ModelSubscriptionStringInput | null,
  practitionerTypeSeen?: ModelSubscriptionStringInput | null,
  patientComplaints?: ModelSubscriptionStringInput | null,
  vitalSigns?: ModelSubscriptionStringInput | null,
  practionerNotes?: ModelSubscriptionStringInput | null,
  labOrders?: ModelSubscriptionStringInput | null,
  pharmacyOrders?: ModelSubscriptionStringInput | null,
  diagnosis?: ModelSubscriptionStringInput | null,
  treatmentPlan?: ModelSubscriptionStringInput | null,
  referralToSpecialists?: ModelSubscriptionStringInput | null,
  recommendedFollowUp?: ModelSubscriptionStringInput | null,
  dataTimeEncounterSubmitted?: ModelSubscriptionStringInput | null,
  employeeIDWhoSubmitted?: ModelSubscriptionStringInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMedicalEncounterFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicalEncounterFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPatientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  patientName?: ModelSubscriptionStringInput | null,
  telelphoneNumber?: ModelSubscriptionStringInput | null,
  insuranceCarrierID?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  primaryCarePhysician?: ModelSubscriptionStringInput | null,
  listCurrentMedications?: ModelSubscriptionStringInput | null,
  listScheduledAppointments?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
};

export type ModelSubscriptionVendorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  vendorName?: ModelSubscriptionStringInput | null,
  vendorAddress?: ModelSubscriptionStringInput | null,
  typeOfEquipment?: ModelSubscriptionStringInput | null,
  preferredVendor?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionVendorFilterInput | null > | null,
  or?: Array< ModelSubscriptionVendorFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type CreateMedicalEncounterMutationVariables = {
  input: CreateMedicalEncounterInput,
  condition?: ModelMedicalEncounterConditionInput | null,
};

export type CreateMedicalEncounterMutation = {
  createMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    encounterDateTime?: string | null,
    practitionerTypeSeen?: string | null,
    patientComplaints?: string | null,
    vitalSigns?: string | null,
    practionerNotes?: string | null,
    labOrders?: string | null,
    pharmacyOrders?: string | null,
    diagnosis?: string | null,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    recommendedFollowUp?: string | null,
    dataTimeEncounterSubmitted?: string | null,
    employeeIDWhoSubmitted?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMedicalEncounterMutationVariables = {
  input: UpdateMedicalEncounterInput,
  condition?: ModelMedicalEncounterConditionInput | null,
};

export type UpdateMedicalEncounterMutation = {
  updateMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    encounterDateTime?: string | null,
    practitionerTypeSeen?: string | null,
    patientComplaints?: string | null,
    vitalSigns?: string | null,
    practionerNotes?: string | null,
    labOrders?: string | null,
    pharmacyOrders?: string | null,
    diagnosis?: string | null,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    recommendedFollowUp?: string | null,
    dataTimeEncounterSubmitted?: string | null,
    employeeIDWhoSubmitted?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMedicalEncounterMutationVariables = {
  input: DeleteMedicalEncounterInput,
  condition?: ModelMedicalEncounterConditionInput | null,
};

export type DeleteMedicalEncounterMutation = {
  deleteMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    encounterDateTime?: string | null,
    practitionerTypeSeen?: string | null,
    patientComplaints?: string | null,
    vitalSigns?: string | null,
    practionerNotes?: string | null,
    labOrders?: string | null,
    pharmacyOrders?: string | null,
    diagnosis?: string | null,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    recommendedFollowUp?: string | null,
    dataTimeEncounterSubmitted?: string | null,
    employeeIDWhoSubmitted?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePatientMutationVariables = {
  input: CreatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type CreatePatientMutation = {
  createPatient?:  {
    __typename: "Patient",
    id: string,
    patientName?: string | null,
    telelphoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    listCurrentMedications?: string | null,
    listScheduledAppointments?: string | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePatientMutationVariables = {
  input: UpdatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type UpdatePatientMutation = {
  updatePatient?:  {
    __typename: "Patient",
    id: string,
    patientName?: string | null,
    telelphoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    listCurrentMedications?: string | null,
    listScheduledAppointments?: string | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePatientMutationVariables = {
  input: DeletePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type DeletePatientMutation = {
  deletePatient?:  {
    __typename: "Patient",
    id: string,
    patientName?: string | null,
    telelphoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    listCurrentMedications?: string | null,
    listScheduledAppointments?: string | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateVendorMutationVariables = {
  input: CreateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type CreateVendorMutation = {
  createVendor?:  {
    __typename: "Vendor",
    id: string,
    vendorName?: string | null,
    vendorAddress?: string | null,
    typeOfEquipment?: string | null,
    preferredVendor?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateVendorMutationVariables = {
  input: UpdateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type UpdateVendorMutation = {
  updateVendor?:  {
    __typename: "Vendor",
    id: string,
    vendorName?: string | null,
    vendorAddress?: string | null,
    typeOfEquipment?: string | null,
    preferredVendor?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteVendorMutationVariables = {
  input: DeleteVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type DeleteVendorMutation = {
  deleteVendor?:  {
    __typename: "Vendor",
    id: string,
    vendorName?: string | null,
    vendorAddress?: string | null,
    typeOfEquipment?: string | null,
    preferredVendor?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetMedicalEncounterQueryVariables = {
  id: string,
};

export type GetMedicalEncounterQuery = {
  getMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    encounterDateTime?: string | null,
    practitionerTypeSeen?: string | null,
    patientComplaints?: string | null,
    vitalSigns?: string | null,
    practionerNotes?: string | null,
    labOrders?: string | null,
    pharmacyOrders?: string | null,
    diagnosis?: string | null,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    recommendedFollowUp?: string | null,
    dataTimeEncounterSubmitted?: string | null,
    employeeIDWhoSubmitted?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMedicalEncountersQueryVariables = {
  filter?: ModelMedicalEncounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicalEncountersQuery = {
  listMedicalEncounters?:  {
    __typename: "ModelMedicalEncounterConnection",
    items:  Array< {
      __typename: "MedicalEncounter",
      id: string,
      encounterDateTime?: string | null,
      practitionerTypeSeen?: string | null,
      patientComplaints?: string | null,
      vitalSigns?: string | null,
      practionerNotes?: string | null,
      labOrders?: string | null,
      pharmacyOrders?: string | null,
      diagnosis?: string | null,
      treatmentPlan?: string | null,
      referralToSpecialists?: string | null,
      recommendedFollowUp?: string | null,
      dataTimeEncounterSubmitted?: string | null,
      employeeIDWhoSubmitted?: string | null,
      patientID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMedicalEncountersQueryVariables = {
  filter?: ModelMedicalEncounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMedicalEncountersQuery = {
  syncMedicalEncounters?:  {
    __typename: "ModelMedicalEncounterConnection",
    items:  Array< {
      __typename: "MedicalEncounter",
      id: string,
      encounterDateTime?: string | null,
      practitionerTypeSeen?: string | null,
      patientComplaints?: string | null,
      vitalSigns?: string | null,
      practionerNotes?: string | null,
      labOrders?: string | null,
      pharmacyOrders?: string | null,
      diagnosis?: string | null,
      treatmentPlan?: string | null,
      referralToSpecialists?: string | null,
      recommendedFollowUp?: string | null,
      dataTimeEncounterSubmitted?: string | null,
      employeeIDWhoSubmitted?: string | null,
      patientID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MedicalEncountersByPatientIDQueryVariables = {
  patientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicalEncounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicalEncountersByPatientIDQuery = {
  medicalEncountersByPatientID?:  {
    __typename: "ModelMedicalEncounterConnection",
    items:  Array< {
      __typename: "MedicalEncounter",
      id: string,
      encounterDateTime?: string | null,
      practitionerTypeSeen?: string | null,
      patientComplaints?: string | null,
      vitalSigns?: string | null,
      practionerNotes?: string | null,
      labOrders?: string | null,
      pharmacyOrders?: string | null,
      diagnosis?: string | null,
      treatmentPlan?: string | null,
      referralToSpecialists?: string | null,
      recommendedFollowUp?: string | null,
      dataTimeEncounterSubmitted?: string | null,
      employeeIDWhoSubmitted?: string | null,
      patientID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPatientQueryVariables = {
  id: string,
};

export type GetPatientQuery = {
  getPatient?:  {
    __typename: "Patient",
    id: string,
    patientName?: string | null,
    telelphoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    listCurrentMedications?: string | null,
    listScheduledAppointments?: string | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      patientName?: string | null,
      telelphoneNumber?: string | null,
      insuranceCarrierID?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      primaryCarePhysician?: string | null,
      listCurrentMedications?: string | null,
      listScheduledAppointments?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPatientsQuery = {
  syncPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      id: string,
      patientName?: string | null,
      telelphoneNumber?: string | null,
      insuranceCarrierID?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      primaryCarePhysician?: string | null,
      listCurrentMedications?: string | null,
      listScheduledAppointments?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVendorQueryVariables = {
  id: string,
};

export type GetVendorQuery = {
  getVendor?:  {
    __typename: "Vendor",
    id: string,
    vendorName?: string | null,
    vendorAddress?: string | null,
    typeOfEquipment?: string | null,
    preferredVendor?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVendorsQuery = {
  listVendors?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      vendorName?: string | null,
      vendorAddress?: string | null,
      typeOfEquipment?: string | null,
      preferredVendor?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVendorsQuery = {
  syncVendors?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      vendorName?: string | null,
      vendorAddress?: string | null,
      typeOfEquipment?: string | null,
      preferredVendor?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateMedicalEncounterSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalEncounterFilterInput | null,
};

export type OnCreateMedicalEncounterSubscription = {
  onCreateMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    encounterDateTime?: string | null,
    practitionerTypeSeen?: string | null,
    patientComplaints?: string | null,
    vitalSigns?: string | null,
    practionerNotes?: string | null,
    labOrders?: string | null,
    pharmacyOrders?: string | null,
    diagnosis?: string | null,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    recommendedFollowUp?: string | null,
    dataTimeEncounterSubmitted?: string | null,
    employeeIDWhoSubmitted?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMedicalEncounterSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalEncounterFilterInput | null,
};

export type OnUpdateMedicalEncounterSubscription = {
  onUpdateMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    encounterDateTime?: string | null,
    practitionerTypeSeen?: string | null,
    patientComplaints?: string | null,
    vitalSigns?: string | null,
    practionerNotes?: string | null,
    labOrders?: string | null,
    pharmacyOrders?: string | null,
    diagnosis?: string | null,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    recommendedFollowUp?: string | null,
    dataTimeEncounterSubmitted?: string | null,
    employeeIDWhoSubmitted?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMedicalEncounterSubscriptionVariables = {
  filter?: ModelSubscriptionMedicalEncounterFilterInput | null,
};

export type OnDeleteMedicalEncounterSubscription = {
  onDeleteMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    encounterDateTime?: string | null,
    practitionerTypeSeen?: string | null,
    patientComplaints?: string | null,
    vitalSigns?: string | null,
    practionerNotes?: string | null,
    labOrders?: string | null,
    pharmacyOrders?: string | null,
    diagnosis?: string | null,
    treatmentPlan?: string | null,
    referralToSpecialists?: string | null,
    recommendedFollowUp?: string | null,
    dataTimeEncounterSubmitted?: string | null,
    employeeIDWhoSubmitted?: string | null,
    patientID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    id: string,
    patientName?: string | null,
    telelphoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    listCurrentMedications?: string | null,
    listScheduledAppointments?: string | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    id: string,
    patientName?: string | null,
    telelphoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    listCurrentMedications?: string | null,
    listScheduledAppointments?: string | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    id: string,
    patientName?: string | null,
    telelphoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    listCurrentMedications?: string | null,
    listScheduledAppointments?: string | null,
    MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
};

export type OnCreateVendorSubscription = {
  onCreateVendor?:  {
    __typename: "Vendor",
    id: string,
    vendorName?: string | null,
    vendorAddress?: string | null,
    typeOfEquipment?: string | null,
    preferredVendor?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
};

export type OnUpdateVendorSubscription = {
  onUpdateVendor?:  {
    __typename: "Vendor",
    id: string,
    vendorName?: string | null,
    vendorAddress?: string | null,
    typeOfEquipment?: string | null,
    preferredVendor?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
};

export type OnDeleteVendorSubscription = {
  onDeleteVendor?:  {
    __typename: "Vendor",
    id: string,
    vendorName?: string | null,
    vendorAddress?: string | null,
    typeOfEquipment?: string | null,
    preferredVendor?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
