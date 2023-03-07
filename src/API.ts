/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateServiceProvidedByClinicInput = {
  id?: string | null,
  type?: string | null,
  description?: string | null,
  billableCostForService?: number | null,
  _version?: number | null,
};

export type ModelServiceProvidedByClinicConditionInput = {
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  billableCostForService?: ModelFloatInput | null,
  and?: Array< ModelServiceProvidedByClinicConditionInput | null > | null,
  or?: Array< ModelServiceProvidedByClinicConditionInput | null > | null,
  not?: ModelServiceProvidedByClinicConditionInput | null,
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

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ServiceProvidedByClinic = {
  __typename: "ServiceProvidedByClinic",
  id: string,
  type?: string | null,
  description?: string | null,
  billableCostForService?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateServiceProvidedByClinicInput = {
  id: string,
  type?: string | null,
  description?: string | null,
  billableCostForService?: number | null,
  _version?: number | null,
};

export type DeleteServiceProvidedByClinicInput = {
  id: string,
  _version?: number | null,
};

export type CreateLabTestInput = {
  id?: string | null,
  typeName?: string | null,
  rangeOfNotNormalResults?: string | null,
  laborderID: string,
  rangeOfNormalResults?: string | null,
  _version?: number | null,
};

export type ModelLabTestConditionInput = {
  typeName?: ModelStringInput | null,
  rangeOfNotNormalResults?: ModelStringInput | null,
  laborderID?: ModelIDInput | null,
  rangeOfNormalResults?: ModelStringInput | null,
  and?: Array< ModelLabTestConditionInput | null > | null,
  or?: Array< ModelLabTestConditionInput | null > | null,
  not?: ModelLabTestConditionInput | null,
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

export type LabTest = {
  __typename: "LabTest",
  id: string,
  typeName?: string | null,
  rangeOfNotNormalResults?: string | null,
  laborderID: string,
  rangeOfNormalResults?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateLabTestInput = {
  id: string,
  typeName?: string | null,
  rangeOfNotNormalResults?: string | null,
  laborderID?: string | null,
  rangeOfNormalResults?: string | null,
  _version?: number | null,
};

export type DeleteLabTestInput = {
  id: string,
  _version?: number | null,
};

export type CreatePrescriptionInput = {
  id?: string | null,
  physicianName?: string | null,
  prescribedMedication?: string | null,
  medicineDosage?: string | null,
  frequencyOfMedication?: string | null,
  datePrescriptionFilled?: string | null,
  pharmacistWhoFilledPrescription?: string | null,
  medicalencounterID: string,
  _version?: number | null,
  prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
};

export type ModelPrescriptionConditionInput = {
  physicianName?: ModelStringInput | null,
  prescribedMedication?: ModelStringInput | null,
  medicineDosage?: ModelStringInput | null,
  frequencyOfMedication?: ModelStringInput | null,
  datePrescriptionFilled?: ModelStringInput | null,
  pharmacistWhoFilledPrescription?: ModelStringInput | null,
  medicalencounterID?: ModelIDInput | null,
  and?: Array< ModelPrescriptionConditionInput | null > | null,
  or?: Array< ModelPrescriptionConditionInput | null > | null,
  not?: ModelPrescriptionConditionInput | null,
  prescriptionPrescription2ServiceProvidedByClinicId?: ModelIDInput | null,
};

export type Prescription = {
  __typename: "Prescription",
  id: string,
  physicianName?: string | null,
  prescribedMedication?: string | null,
  medicineDosage?: string | null,
  frequencyOfMedication?: string | null,
  datePrescriptionFilled?: string | null,
  pharmacistWhoFilledPrescription?: string | null,
  medicalencounterID: string,
  Prescription2ServiceProvidedByClinic?: ServiceProvidedByClinic | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
};

export type UpdatePrescriptionInput = {
  id: string,
  physicianName?: string | null,
  prescribedMedication?: string | null,
  medicineDosage?: string | null,
  frequencyOfMedication?: string | null,
  datePrescriptionFilled?: string | null,
  pharmacistWhoFilledPrescription?: string | null,
  medicalencounterID?: string | null,
  _version?: number | null,
  prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
};

export type DeletePrescriptionInput = {
  id: string,
  _version?: number | null,
};

export type CreateLabOrderInput = {
  id?: string | null,
  physicianName?: string | null,
  type?: string | null,
  date?: string | null,
  technician?: string | null,
  result?: string | null,
  medicalencounterID: string,
  _version?: number | null,
  labOrderLabOrder2ServiceProvideByClinicId?: string | null,
  labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
};

export type ModelLabOrderConditionInput = {
  physicianName?: ModelStringInput | null,
  type?: ModelStringInput | null,
  date?: ModelStringInput | null,
  technician?: ModelStringInput | null,
  result?: ModelStringInput | null,
  medicalencounterID?: ModelIDInput | null,
  and?: Array< ModelLabOrderConditionInput | null > | null,
  or?: Array< ModelLabOrderConditionInput | null > | null,
  not?: ModelLabOrderConditionInput | null,
  labOrderLabOrder2ServiceProvideByClinicId?: ModelIDInput | null,
  labOrderLabOrder2ServiceProvidedByClinicId?: ModelIDInput | null,
};

export type LabOrder = {
  __typename: "LabOrder",
  id: string,
  physicianName?: string | null,
  type?: string | null,
  date?: string | null,
  technician?: string | null,
  result?: string | null,
  medicalencounterID: string,
  LabOrder2ServiceProvideByClinic?: ServiceProvidedByClinic | null,
  LabOrder2ServiceProvidedByClinic?: ServiceProvidedByClinic | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  labOrderLabOrder2ServiceProvideByClinicId?: string | null,
  labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
};

export type UpdateLabOrderInput = {
  id: string,
  physicianName?: string | null,
  type?: string | null,
  date?: string | null,
  technician?: string | null,
  result?: string | null,
  medicalencounterID?: string | null,
  _version?: number | null,
  labOrderLabOrder2ServiceProvideByClinicId?: string | null,
  labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
};

export type DeleteLabOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateVitalSignInput = {
  id?: string | null,
  bodyTemperature?: string | null,
  pulseRate?: string | null,
  respirationRate?: string | null,
  bloodPressure?: string | null,
  _version?: number | null,
};

export type ModelVitalSignConditionInput = {
  bodyTemperature?: ModelStringInput | null,
  pulseRate?: ModelStringInput | null,
  respirationRate?: ModelStringInput | null,
  bloodPressure?: ModelStringInput | null,
  and?: Array< ModelVitalSignConditionInput | null > | null,
  or?: Array< ModelVitalSignConditionInput | null > | null,
  not?: ModelVitalSignConditionInput | null,
};

export type VitalSign = {
  __typename: "VitalSign",
  id: string,
  bodyTemperature?: string | null,
  pulseRate?: string | null,
  respirationRate?: string | null,
  bloodPressure?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateVitalSignInput = {
  id: string,
  bodyTemperature?: string | null,
  pulseRate?: string | null,
  respirationRate?: string | null,
  bloodPressure?: string | null,
  _version?: number | null,
};

export type DeleteVitalSignInput = {
  id: string,
  _version?: number | null,
};

export type CreateWorkScheduleInput = {
  id?: string | null,
  date?: Array< string | null > | null,
  time?: Array< boolean | null > | null,
  physicianID: string,
  appointmentScheduled?: Array< AppointmentPickerInput | null > | null,
  _version?: number | null,
};

export type AppointmentPickerInput = {
  eventID?: string | null,
  isReserved?: boolean | null,
  period?: number | null,
};

export type ModelWorkScheduleConditionInput = {
  date?: ModelStringInput | null,
  time?: ModelBooleanInput | null,
  physicianID?: ModelIDInput | null,
  and?: Array< ModelWorkScheduleConditionInput | null > | null,
  or?: Array< ModelWorkScheduleConditionInput | null > | null,
  not?: ModelWorkScheduleConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type WorkSchedule = {
  __typename: "WorkSchedule",
  id: string,
  date?: Array< string | null > | null,
  time?: Array< boolean | null > | null,
  physicianID: string,
  appointmentScheduled?:  Array<AppointmentPicker | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type AppointmentPicker = {
  __typename: "AppointmentPicker",
  eventID?: string | null,
  isReserved?: boolean | null,
  period?: number | null,
};

export type UpdateWorkScheduleInput = {
  id: string,
  date?: Array< string | null > | null,
  time?: Array< boolean | null > | null,
  physicianID?: string | null,
  appointmentScheduled?: Array< AppointmentPickerInput | null > | null,
  _version?: number | null,
};

export type DeleteWorkScheduleInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppointmentInput = {
  id?: string | null,
  date?: string | null,
  type?: AppointmentType | null,
  time?: Array< AppointmentPickerInput | null > | null,
  patientID: string,
  physicianID: string,
  _version?: number | null,
  appointmentAppointment2ServiceProvidedByClinicId?: string | null,
};

export enum AppointmentType {
  URGENT = "URGENT",
  ROUNTINE = "ROUNTINE",
  FOLLOW_UP_VISIT = "FOLLOW_UP_VISIT",
}


export type ModelAppointmentConditionInput = {
  date?: ModelStringInput | null,
  type?: ModelAppointmentTypeInput | null,
  patientID?: ModelIDInput | null,
  physicianID?: ModelIDInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
  appointmentAppointment2ServiceProvidedByClinicId?: ModelIDInput | null,
};

export type ModelAppointmentTypeInput = {
  eq?: AppointmentType | null,
  ne?: AppointmentType | null,
};

export type Appointment = {
  __typename: "Appointment",
  id: string,
  date?: string | null,
  type?: AppointmentType | null,
  time?:  Array<AppointmentPicker | null > | null,
  patientID: string,
  physicianID: string,
  Appointment2ServiceProvidedByClinic?: ServiceProvidedByClinic | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  appointmentAppointment2ServiceProvidedByClinicId?: string | null,
};

export type UpdateAppointmentInput = {
  id: string,
  date?: string | null,
  type?: AppointmentType | null,
  time?: Array< AppointmentPickerInput | null > | null,
  patientID?: string | null,
  physicianID?: string | null,
  _version?: number | null,
  appointmentAppointment2ServiceProvidedByClinicId?: string | null,
};

export type DeleteAppointmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateMedicationInput = {
  id?: string | null,
  name?: string | null,
  useOfMedication?: string | null,
  recommendedDosage?: string | null,
  recommendedFrequencyOfUse?: string | null,
  potentialSideEffect?: string | null,
  drugThatMayReactAdversely?: string | null,
  _version?: number | null,
};

export type ModelMedicationConditionInput = {
  name?: ModelStringInput | null,
  useOfMedication?: ModelStringInput | null,
  recommendedDosage?: ModelStringInput | null,
  recommendedFrequencyOfUse?: ModelStringInput | null,
  potentialSideEffect?: ModelStringInput | null,
  drugThatMayReactAdversely?: ModelStringInput | null,
  and?: Array< ModelMedicationConditionInput | null > | null,
  or?: Array< ModelMedicationConditionInput | null > | null,
  not?: ModelMedicationConditionInput | null,
};

export type Medication = {
  __typename: "Medication",
  id: string,
  name?: string | null,
  useOfMedication?: string | null,
  recommendedDosage?: string | null,
  recommendedFrequencyOfUse?: string | null,
  potentialSideEffect?: string | null,
  drugThatMayReactAdversely?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMedicationInput = {
  id: string,
  name?: string | null,
  useOfMedication?: string | null,
  recommendedDosage?: string | null,
  recommendedFrequencyOfUse?: string | null,
  potentialSideEffect?: string | null,
  drugThatMayReactAdversely?: string | null,
  _version?: number | null,
};

export type DeleteMedicationInput = {
  id: string,
  _version?: number | null,
};

export type CreatePhysicianScheduleInput = {
  id?: string | null,
  schedule?: WeekScheduleInput | null,
  _version?: number | null,
};

export type WeekScheduleInput = {
  weekDays?: DayInput | null,
};

export type DayInput = {
  id: string,
  isReserved?: boolean | null,
  periods: number,
  number?: string | null,
};

export type ModelPhysicianScheduleConditionInput = {
  and?: Array< ModelPhysicianScheduleConditionInput | null > | null,
  or?: Array< ModelPhysicianScheduleConditionInput | null > | null,
  not?: ModelPhysicianScheduleConditionInput | null,
};

export type PhysicianSchedule = {
  __typename: "PhysicianSchedule",
  id: string,
  schedule?: WeekSchedule | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type WeekSchedule = {
  __typename: "WeekSchedule",
  weekDays?: Day | null,
};

export type Day = {
  __typename: "Day",
  id: string,
  isReserved?: boolean | null,
  periods: number,
  number?: string | null,
};

export type UpdatePhysicianScheduleInput = {
  id: string,
  schedule?: WeekScheduleInput | null,
  _version?: number | null,
};

export type DeletePhysicianScheduleInput = {
  id: string,
  _version?: number | null,
};

export type CreatePhysicianInput = {
  id?: string | null,
  name?: string | null,
  cellPhoneNumber?: string | null,
  _version?: number | null,
  physicianScheduleId?: string | null,
};

export type ModelPhysicianConditionInput = {
  name?: ModelStringInput | null,
  cellPhoneNumber?: ModelStringInput | null,
  and?: Array< ModelPhysicianConditionInput | null > | null,
  or?: Array< ModelPhysicianConditionInput | null > | null,
  not?: ModelPhysicianConditionInput | null,
  physicianScheduleId?: ModelIDInput | null,
};

export type Physician = {
  __typename: "Physician",
  id: string,
  name?: string | null,
  cellPhoneNumber?: string | null,
  schedule?: PhysicianSchedule | null,
  Physician2Appointment?: ModelAppointmentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  physicianScheduleId?: string | null,
};

export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection",
  items:  Array<Appointment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdatePhysicianInput = {
  id: string,
  name?: string | null,
  cellPhoneNumber?: string | null,
  _version?: number | null,
  physicianScheduleId?: string | null,
};

export type DeletePhysicianInput = {
  id: string,
  _version?: number | null,
};

export type CreateInsuranceCarrierInput = {
  id?: string | null,
  name?: string | null,
  address?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type ModelInsuranceCarrierConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelInsuranceCarrierConditionInput | null > | null,
  or?: Array< ModelInsuranceCarrierConditionInput | null > | null,
  not?: ModelInsuranceCarrierConditionInput | null,
};

export type InsuranceCarrier = {
  __typename: "InsuranceCarrier",
  id: string,
  name?: string | null,
  address?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateInsuranceCarrierInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteInsuranceCarrierInput = {
  id: string,
  _version?: number | null,
};

export type CreateMedicalEncounterInput = {
  id?: string | null,
  encounterDateTime?: string | null,
  practitionerTypeSeen?: Practitioner | null,
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
  employeeIDWhoSubmitted?: number | null,
  patientID: string,
  _version?: number | null,
  medicalEncounterMedicalEncounter2VitalSignId?: string | null,
};

export enum Practitioner {
  PHYSICIAN = "PHYSICIAN",
  NURSE = "NURSE",
  PHYSICIAN_ASSISTANT = "PHYSICIAN_ASSISTANT",
}


export type ModelMedicalEncounterConditionInput = {
  encounterDateTime?: ModelStringInput | null,
  practitionerTypeSeen?: ModelPractitionerInput | null,
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
  employeeIDWhoSubmitted?: ModelIntInput | null,
  patientID?: ModelIDInput | null,
  and?: Array< ModelMedicalEncounterConditionInput | null > | null,
  or?: Array< ModelMedicalEncounterConditionInput | null > | null,
  not?: ModelMedicalEncounterConditionInput | null,
  medicalEncounterMedicalEncounter2VitalSignId?: ModelIDInput | null,
};

export type ModelPractitionerInput = {
  eq?: Practitioner | null,
  ne?: Practitioner | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type MedicalEncounter = {
  __typename: "MedicalEncounter",
  id: string,
  encounterDateTime?: string | null,
  practitionerTypeSeen?: Practitioner | null,
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
  employeeIDWhoSubmitted?: number | null,
  patientID: string,
  MedicalEncounter2VitalSign?: VitalSign | null,
  MedicalEncounter2LabOrder?: ModelLabOrderConnection | null,
  MedicalEncounter2Prescription?: ModelPrescriptionConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  medicalEncounterMedicalEncounter2VitalSignId?: string | null,
};

export type ModelLabOrderConnection = {
  __typename: "ModelLabOrderConnection",
  items:  Array<LabOrder | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPrescriptionConnection = {
  __typename: "ModelPrescriptionConnection",
  items:  Array<Prescription | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateMedicalEncounterInput = {
  id: string,
  encounterDateTime?: string | null,
  practitionerTypeSeen?: Practitioner | null,
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
  employeeIDWhoSubmitted?: number | null,
  patientID?: string | null,
  _version?: number | null,
  medicalEncounterMedicalEncounter2VitalSignId?: string | null,
};

export type DeleteMedicalEncounterInput = {
  id: string,
  _version?: number | null,
};

export type CreatePatientInput = {
  id?: string | null,
  name?: string | null,
  telephoneNumber?: string | null,
  insuranceCarrierID?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  primaryCarePhysician?: string | null,
  _version?: number | null,
  patientPatient2InsuranceCarrierId?: string | null,
  patientPatient2PhysicianId?: string | null,
};

export type ModelPatientConditionInput = {
  name?: ModelStringInput | null,
  telephoneNumber?: ModelStringInput | null,
  insuranceCarrierID?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  primaryCarePhysician?: ModelStringInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
  patientPatient2InsuranceCarrierId?: ModelIDInput | null,
  patientPatient2PhysicianId?: ModelIDInput | null,
};

export type Patient = {
  __typename: "Patient",
  id: string,
  name?: string | null,
  telephoneNumber?: string | null,
  insuranceCarrierID?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  primaryCarePhysician?: string | null,
  Patient2MedicalEncounters?: ModelMedicalEncounterConnection | null,
  Patient2InsuranceCarrier?: InsuranceCarrier | null,
  Patient2Physician?: Physician | null,
  Patient2Appointment?: ModelAppointmentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  patientPatient2InsuranceCarrierId?: string | null,
  patientPatient2PhysicianId?: string | null,
};

export type ModelMedicalEncounterConnection = {
  __typename: "ModelMedicalEncounterConnection",
  items:  Array<MedicalEncounter | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdatePatientInput = {
  id: string,
  name?: string | null,
  telephoneNumber?: string | null,
  insuranceCarrierID?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  primaryCarePhysician?: string | null,
  _version?: number | null,
  patientPatient2InsuranceCarrierId?: string | null,
  patientPatient2PhysicianId?: string | null,
};

export type DeletePatientInput = {
  id: string,
  _version?: number | null,
};

export type CreateEquipmentMaintenanceInput = {
  id?: string | null,
  type?: string | null,
  problem?: string | null,
  status?: Status | null,
  resolution?: string | null,
  equipmentID: string,
  _version?: number | null,
};

export enum Status {
  FINISHED = "FINISHED",
  IN_PROGRESS = "IN_PROGRESS",
  UNFINISHED = "UNFINISHED",
}


export type ModelEquipmentMaintenanceConditionInput = {
  type?: ModelStringInput | null,
  problem?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  resolution?: ModelStringInput | null,
  equipmentID?: ModelIDInput | null,
  and?: Array< ModelEquipmentMaintenanceConditionInput | null > | null,
  or?: Array< ModelEquipmentMaintenanceConditionInput | null > | null,
  not?: ModelEquipmentMaintenanceConditionInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type EquipmentMaintenance = {
  __typename: "EquipmentMaintenance",
  id: string,
  type?: string | null,
  problem?: string | null,
  status?: Status | null,
  resolution?: string | null,
  equipmentID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEquipmentMaintenanceInput = {
  id: string,
  type?: string | null,
  problem?: string | null,
  status?: Status | null,
  resolution?: string | null,
  equipmentID?: string | null,
  _version?: number | null,
};

export type DeleteEquipmentMaintenanceInput = {
  id: string,
  _version?: number | null,
};

export type CreateEquipmentInput = {
  id?: string | null,
  type?: string | null,
  description?: string | null,
  department?: string | null,
  owned?: boolean | null,
  startDate?: string | null,
  endDate?: string | null,
  leasingCompany?: string | null,
  datePurchased?: string | null,
  _version?: number | null,
};

export type ModelEquipmentConditionInput = {
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  department?: ModelStringInput | null,
  owned?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  leasingCompany?: ModelStringInput | null,
  datePurchased?: ModelStringInput | null,
  and?: Array< ModelEquipmentConditionInput | null > | null,
  or?: Array< ModelEquipmentConditionInput | null > | null,
  not?: ModelEquipmentConditionInput | null,
};

export type Equipment = {
  __typename: "Equipment",
  id: string,
  type?: string | null,
  description?: string | null,
  department?: string | null,
  owned?: boolean | null,
  startDate?: string | null,
  endDate?: string | null,
  leasingCompany?: string | null,
  datePurchased?: string | null,
  Equipment2EquipmentMaintenance?: ModelEquipmentMaintenanceConnection | null,
  Equipment2Vendor?: ModelVendorConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelEquipmentMaintenanceConnection = {
  __typename: "ModelEquipmentMaintenanceConnection",
  items:  Array<EquipmentMaintenance | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVendorConnection = {
  __typename: "ModelVendorConnection",
  items:  Array<Vendor | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Vendor = {
  __typename: "Vendor",
  id: string,
  name: string,
  address: string,
  equipment?: string | null,
  preferred?: boolean | null,
  equipmentID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateEquipmentInput = {
  id: string,
  type?: string | null,
  description?: string | null,
  department?: string | null,
  owned?: boolean | null,
  startDate?: string | null,
  endDate?: string | null,
  leasingCompany?: string | null,
  datePurchased?: string | null,
  _version?: number | null,
};

export type DeleteEquipmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateVendorInput = {
  id?: string | null,
  name: string,
  address: string,
  equipment?: string | null,
  preferred?: boolean | null,
  equipmentID: string,
  _version?: number | null,
};

export type ModelVendorConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  equipment?: ModelStringInput | null,
  preferred?: ModelBooleanInput | null,
  equipmentID?: ModelIDInput | null,
  and?: Array< ModelVendorConditionInput | null > | null,
  or?: Array< ModelVendorConditionInput | null > | null,
  not?: ModelVendorConditionInput | null,
};

export type UpdateVendorInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  equipment?: string | null,
  preferred?: boolean | null,
  equipmentID?: string | null,
  _version?: number | null,
};

export type DeleteVendorInput = {
  id: string,
  _version?: number | null,
};

export type ModelServiceProvidedByClinicFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  billableCostForService?: ModelFloatInput | null,
  and?: Array< ModelServiceProvidedByClinicFilterInput | null > | null,
  or?: Array< ModelServiceProvidedByClinicFilterInput | null > | null,
  not?: ModelServiceProvidedByClinicFilterInput | null,
};

export type ModelServiceProvidedByClinicConnection = {
  __typename: "ModelServiceProvidedByClinicConnection",
  items:  Array<ServiceProvidedByClinic | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLabTestFilterInput = {
  id?: ModelIDInput | null,
  typeName?: ModelStringInput | null,
  rangeOfNotNormalResults?: ModelStringInput | null,
  laborderID?: ModelIDInput | null,
  rangeOfNormalResults?: ModelStringInput | null,
  and?: Array< ModelLabTestFilterInput | null > | null,
  or?: Array< ModelLabTestFilterInput | null > | null,
  not?: ModelLabTestFilterInput | null,
};

export type ModelLabTestConnection = {
  __typename: "ModelLabTestConnection",
  items:  Array<LabTest | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPrescriptionFilterInput = {
  id?: ModelIDInput | null,
  physicianName?: ModelStringInput | null,
  prescribedMedication?: ModelStringInput | null,
  medicineDosage?: ModelStringInput | null,
  frequencyOfMedication?: ModelStringInput | null,
  datePrescriptionFilled?: ModelStringInput | null,
  pharmacistWhoFilledPrescription?: ModelStringInput | null,
  medicalencounterID?: ModelIDInput | null,
  and?: Array< ModelPrescriptionFilterInput | null > | null,
  or?: Array< ModelPrescriptionFilterInput | null > | null,
  not?: ModelPrescriptionFilterInput | null,
  prescriptionPrescription2ServiceProvidedByClinicId?: ModelIDInput | null,
};

export type ModelLabOrderFilterInput = {
  id?: ModelIDInput | null,
  physicianName?: ModelStringInput | null,
  type?: ModelStringInput | null,
  date?: ModelStringInput | null,
  technician?: ModelStringInput | null,
  result?: ModelStringInput | null,
  medicalencounterID?: ModelIDInput | null,
  and?: Array< ModelLabOrderFilterInput | null > | null,
  or?: Array< ModelLabOrderFilterInput | null > | null,
  not?: ModelLabOrderFilterInput | null,
  labOrderLabOrder2ServiceProvideByClinicId?: ModelIDInput | null,
  labOrderLabOrder2ServiceProvidedByClinicId?: ModelIDInput | null,
};

export type ModelVitalSignFilterInput = {
  id?: ModelIDInput | null,
  bodyTemperature?: ModelStringInput | null,
  pulseRate?: ModelStringInput | null,
  respirationRate?: ModelStringInput | null,
  bloodPressure?: ModelStringInput | null,
  and?: Array< ModelVitalSignFilterInput | null > | null,
  or?: Array< ModelVitalSignFilterInput | null > | null,
  not?: ModelVitalSignFilterInput | null,
};

export type ModelVitalSignConnection = {
  __typename: "ModelVitalSignConnection",
  items:  Array<VitalSign | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWorkScheduleFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  time?: ModelBooleanInput | null,
  physicianID?: ModelIDInput | null,
  and?: Array< ModelWorkScheduleFilterInput | null > | null,
  or?: Array< ModelWorkScheduleFilterInput | null > | null,
  not?: ModelWorkScheduleFilterInput | null,
};

export type ModelWorkScheduleConnection = {
  __typename: "ModelWorkScheduleConnection",
  items:  Array<WorkSchedule | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  type?: ModelAppointmentTypeInput | null,
  patientID?: ModelIDInput | null,
  physicianID?: ModelIDInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
  appointmentAppointment2ServiceProvidedByClinicId?: ModelIDInput | null,
};

export type ModelMedicationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  useOfMedication?: ModelStringInput | null,
  recommendedDosage?: ModelStringInput | null,
  recommendedFrequencyOfUse?: ModelStringInput | null,
  potentialSideEffect?: ModelStringInput | null,
  drugThatMayReactAdversely?: ModelStringInput | null,
  and?: Array< ModelMedicationFilterInput | null > | null,
  or?: Array< ModelMedicationFilterInput | null > | null,
  not?: ModelMedicationFilterInput | null,
};

export type ModelMedicationConnection = {
  __typename: "ModelMedicationConnection",
  items:  Array<Medication | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPhysicianScheduleFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelPhysicianScheduleFilterInput | null > | null,
  or?: Array< ModelPhysicianScheduleFilterInput | null > | null,
  not?: ModelPhysicianScheduleFilterInput | null,
};

export type ModelPhysicianScheduleConnection = {
  __typename: "ModelPhysicianScheduleConnection",
  items:  Array<PhysicianSchedule | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPhysicianFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  cellPhoneNumber?: ModelStringInput | null,
  and?: Array< ModelPhysicianFilterInput | null > | null,
  or?: Array< ModelPhysicianFilterInput | null > | null,
  not?: ModelPhysicianFilterInput | null,
  physicianScheduleId?: ModelIDInput | null,
};

export type ModelPhysicianConnection = {
  __typename: "ModelPhysicianConnection",
  items:  Array<Physician | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelInsuranceCarrierFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelInsuranceCarrierFilterInput | null > | null,
  or?: Array< ModelInsuranceCarrierFilterInput | null > | null,
  not?: ModelInsuranceCarrierFilterInput | null,
};

export type ModelInsuranceCarrierConnection = {
  __typename: "ModelInsuranceCarrierConnection",
  items:  Array<InsuranceCarrier | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMedicalEncounterFilterInput = {
  id?: ModelIDInput | null,
  encounterDateTime?: ModelStringInput | null,
  practitionerTypeSeen?: ModelPractitionerInput | null,
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
  employeeIDWhoSubmitted?: ModelIntInput | null,
  patientID?: ModelIDInput | null,
  and?: Array< ModelMedicalEncounterFilterInput | null > | null,
  or?: Array< ModelMedicalEncounterFilterInput | null > | null,
  not?: ModelMedicalEncounterFilterInput | null,
  medicalEncounterMedicalEncounter2VitalSignId?: ModelIDInput | null,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  telephoneNumber?: ModelStringInput | null,
  insuranceCarrierID?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  primaryCarePhysician?: ModelStringInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
  patientPatient2InsuranceCarrierId?: ModelIDInput | null,
  patientPatient2PhysicianId?: ModelIDInput | null,
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items:  Array<Patient | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEquipmentMaintenanceFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  problem?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  resolution?: ModelStringInput | null,
  equipmentID?: ModelIDInput | null,
  and?: Array< ModelEquipmentMaintenanceFilterInput | null > | null,
  or?: Array< ModelEquipmentMaintenanceFilterInput | null > | null,
  not?: ModelEquipmentMaintenanceFilterInput | null,
};

export type ModelEquipmentFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  department?: ModelStringInput | null,
  owned?: ModelBooleanInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  leasingCompany?: ModelStringInput | null,
  datePurchased?: ModelStringInput | null,
  and?: Array< ModelEquipmentFilterInput | null > | null,
  or?: Array< ModelEquipmentFilterInput | null > | null,
  not?: ModelEquipmentFilterInput | null,
};

export type ModelEquipmentConnection = {
  __typename: "ModelEquipmentConnection",
  items:  Array<Equipment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVendorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  equipment?: ModelStringInput | null,
  preferred?: ModelBooleanInput | null,
  equipmentID?: ModelIDInput | null,
  and?: Array< ModelVendorFilterInput | null > | null,
  or?: Array< ModelVendorFilterInput | null > | null,
  not?: ModelVendorFilterInput | null,
};

export type ModelSubscriptionServiceProvidedByClinicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  billableCostForService?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionServiceProvidedByClinicFilterInput | null > | null,
  or?: Array< ModelSubscriptionServiceProvidedByClinicFilterInput | null > | null,
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

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionLabTestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  typeName?: ModelSubscriptionStringInput | null,
  rangeOfNotNormalResults?: ModelSubscriptionStringInput | null,
  laborderID?: ModelSubscriptionIDInput | null,
  rangeOfNormalResults?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLabTestFilterInput | null > | null,
  or?: Array< ModelSubscriptionLabTestFilterInput | null > | null,
};

export type ModelSubscriptionPrescriptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  physicianName?: ModelSubscriptionStringInput | null,
  prescribedMedication?: ModelSubscriptionStringInput | null,
  medicineDosage?: ModelSubscriptionStringInput | null,
  frequencyOfMedication?: ModelSubscriptionStringInput | null,
  datePrescriptionFilled?: ModelSubscriptionStringInput | null,
  pharmacistWhoFilledPrescription?: ModelSubscriptionStringInput | null,
  medicalencounterID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPrescriptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionPrescriptionFilterInput | null > | null,
};

export type ModelSubscriptionLabOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  physicianName?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  technician?: ModelSubscriptionStringInput | null,
  result?: ModelSubscriptionStringInput | null,
  medicalencounterID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLabOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionLabOrderFilterInput | null > | null,
};

export type ModelSubscriptionVitalSignFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  bodyTemperature?: ModelSubscriptionStringInput | null,
  pulseRate?: ModelSubscriptionStringInput | null,
  respirationRate?: ModelSubscriptionStringInput | null,
  bloodPressure?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVitalSignFilterInput | null > | null,
  or?: Array< ModelSubscriptionVitalSignFilterInput | null > | null,
};

export type ModelSubscriptionWorkScheduleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionBooleanInput | null,
  physicianID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionWorkScheduleFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkScheduleFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAppointmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  physicianID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
};

export type ModelSubscriptionMedicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  useOfMedication?: ModelSubscriptionStringInput | null,
  recommendedDosage?: ModelSubscriptionStringInput | null,
  recommendedFrequencyOfUse?: ModelSubscriptionStringInput | null,
  potentialSideEffect?: ModelSubscriptionStringInput | null,
  drugThatMayReactAdversely?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMedicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicationFilterInput | null > | null,
};

export type ModelSubscriptionPhysicianScheduleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPhysicianScheduleFilterInput | null > | null,
  or?: Array< ModelSubscriptionPhysicianScheduleFilterInput | null > | null,
};

export type ModelSubscriptionPhysicianFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  cellPhoneNumber?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPhysicianFilterInput | null > | null,
  or?: Array< ModelSubscriptionPhysicianFilterInput | null > | null,
};

export type ModelSubscriptionInsuranceCarrierFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInsuranceCarrierFilterInput | null > | null,
  or?: Array< ModelSubscriptionInsuranceCarrierFilterInput | null > | null,
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
  employeeIDWhoSubmitted?: ModelSubscriptionIntInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMedicalEncounterFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicalEncounterFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPatientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  telephoneNumber?: ModelSubscriptionStringInput | null,
  insuranceCarrierID?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  primaryCarePhysician?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
};

export type ModelSubscriptionEquipmentMaintenanceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  problem?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  resolution?: ModelSubscriptionStringInput | null,
  equipmentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionEquipmentMaintenanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionEquipmentMaintenanceFilterInput | null > | null,
};

export type ModelSubscriptionEquipmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionStringInput | null,
  owned?: ModelSubscriptionBooleanInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  leasingCompany?: ModelSubscriptionStringInput | null,
  datePurchased?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEquipmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionEquipmentFilterInput | null > | null,
};

export type ModelSubscriptionVendorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  equipment?: ModelSubscriptionStringInput | null,
  preferred?: ModelSubscriptionBooleanInput | null,
  equipmentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionVendorFilterInput | null > | null,
  or?: Array< ModelSubscriptionVendorFilterInput | null > | null,
};

export type CreateServiceProvidedByClinicMutationVariables = {
  input: CreateServiceProvidedByClinicInput,
  condition?: ModelServiceProvidedByClinicConditionInput | null,
};

export type CreateServiceProvidedByClinicMutation = {
  createServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    billableCostForService?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateServiceProvidedByClinicMutationVariables = {
  input: UpdateServiceProvidedByClinicInput,
  condition?: ModelServiceProvidedByClinicConditionInput | null,
};

export type UpdateServiceProvidedByClinicMutation = {
  updateServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    billableCostForService?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteServiceProvidedByClinicMutationVariables = {
  input: DeleteServiceProvidedByClinicInput,
  condition?: ModelServiceProvidedByClinicConditionInput | null,
};

export type DeleteServiceProvidedByClinicMutation = {
  deleteServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    billableCostForService?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateLabTestMutationVariables = {
  input: CreateLabTestInput,
  condition?: ModelLabTestConditionInput | null,
};

export type CreateLabTestMutation = {
  createLabTest?:  {
    __typename: "LabTest",
    id: string,
    typeName?: string | null,
    rangeOfNotNormalResults?: string | null,
    laborderID: string,
    rangeOfNormalResults?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLabTestMutationVariables = {
  input: UpdateLabTestInput,
  condition?: ModelLabTestConditionInput | null,
};

export type UpdateLabTestMutation = {
  updateLabTest?:  {
    __typename: "LabTest",
    id: string,
    typeName?: string | null,
    rangeOfNotNormalResults?: string | null,
    laborderID: string,
    rangeOfNormalResults?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLabTestMutationVariables = {
  input: DeleteLabTestInput,
  condition?: ModelLabTestConditionInput | null,
};

export type DeleteLabTestMutation = {
  deleteLabTest?:  {
    __typename: "LabTest",
    id: string,
    typeName?: string | null,
    rangeOfNotNormalResults?: string | null,
    laborderID: string,
    rangeOfNormalResults?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePrescriptionMutationVariables = {
  input: CreatePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type CreatePrescriptionMutation = {
  createPrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName?: string | null,
    prescribedMedication?: string | null,
    medicineDosage?: string | null,
    frequencyOfMedication?: string | null,
    datePrescriptionFilled?: string | null,
    pharmacistWhoFilledPrescription?: string | null,
    medicalencounterID: string,
    Prescription2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type UpdatePrescriptionMutationVariables = {
  input: UpdatePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type UpdatePrescriptionMutation = {
  updatePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName?: string | null,
    prescribedMedication?: string | null,
    medicineDosage?: string | null,
    frequencyOfMedication?: string | null,
    datePrescriptionFilled?: string | null,
    pharmacistWhoFilledPrescription?: string | null,
    medicalencounterID: string,
    Prescription2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type DeletePrescriptionMutationVariables = {
  input: DeletePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type DeletePrescriptionMutation = {
  deletePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName?: string | null,
    prescribedMedication?: string | null,
    medicineDosage?: string | null,
    frequencyOfMedication?: string | null,
    datePrescriptionFilled?: string | null,
    pharmacistWhoFilledPrescription?: string | null,
    medicalencounterID: string,
    Prescription2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type CreateLabOrderMutationVariables = {
  input: CreateLabOrderInput,
  condition?: ModelLabOrderConditionInput | null,
};

export type CreateLabOrderMutation = {
  createLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    type?: string | null,
    date?: string | null,
    technician?: string | null,
    result?: string | null,
    medicalencounterID: string,
    LabOrder2ServiceProvideByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    LabOrder2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderLabOrder2ServiceProvideByClinicId?: string | null,
    labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type UpdateLabOrderMutationVariables = {
  input: UpdateLabOrderInput,
  condition?: ModelLabOrderConditionInput | null,
};

export type UpdateLabOrderMutation = {
  updateLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    type?: string | null,
    date?: string | null,
    technician?: string | null,
    result?: string | null,
    medicalencounterID: string,
    LabOrder2ServiceProvideByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    LabOrder2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderLabOrder2ServiceProvideByClinicId?: string | null,
    labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type DeleteLabOrderMutationVariables = {
  input: DeleteLabOrderInput,
  condition?: ModelLabOrderConditionInput | null,
};

export type DeleteLabOrderMutation = {
  deleteLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    type?: string | null,
    date?: string | null,
    technician?: string | null,
    result?: string | null,
    medicalencounterID: string,
    LabOrder2ServiceProvideByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    LabOrder2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderLabOrder2ServiceProvideByClinicId?: string | null,
    labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type CreateVitalSignMutationVariables = {
  input: CreateVitalSignInput,
  condition?: ModelVitalSignConditionInput | null,
};

export type CreateVitalSignMutation = {
  createVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    bodyTemperature?: string | null,
    pulseRate?: string | null,
    respirationRate?: string | null,
    bloodPressure?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateVitalSignMutationVariables = {
  input: UpdateVitalSignInput,
  condition?: ModelVitalSignConditionInput | null,
};

export type UpdateVitalSignMutation = {
  updateVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    bodyTemperature?: string | null,
    pulseRate?: string | null,
    respirationRate?: string | null,
    bloodPressure?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteVitalSignMutationVariables = {
  input: DeleteVitalSignInput,
  condition?: ModelVitalSignConditionInput | null,
};

export type DeleteVitalSignMutation = {
  deleteVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    bodyTemperature?: string | null,
    pulseRate?: string | null,
    respirationRate?: string | null,
    bloodPressure?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateWorkScheduleMutationVariables = {
  input: CreateWorkScheduleInput,
  condition?: ModelWorkScheduleConditionInput | null,
};

export type CreateWorkScheduleMutation = {
  createWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    date?: Array< string | null > | null,
    time?: Array< boolean | null > | null,
    physicianID: string,
    appointmentScheduled?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateWorkScheduleMutationVariables = {
  input: UpdateWorkScheduleInput,
  condition?: ModelWorkScheduleConditionInput | null,
};

export type UpdateWorkScheduleMutation = {
  updateWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    date?: Array< string | null > | null,
    time?: Array< boolean | null > | null,
    physicianID: string,
    appointmentScheduled?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteWorkScheduleMutationVariables = {
  input: DeleteWorkScheduleInput,
  condition?: ModelWorkScheduleConditionInput | null,
};

export type DeleteWorkScheduleMutation = {
  deleteWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    date?: Array< string | null > | null,
    time?: Array< boolean | null > | null,
    physicianID: string,
    appointmentScheduled?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type CreateAppointmentMutation = {
  createAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    type?: AppointmentType | null,
    time?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    patientID: string,
    physicianID: string,
    Appointment2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentAppointment2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentMutation = {
  updateAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    type?: AppointmentType | null,
    time?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    patientID: string,
    physicianID: string,
    Appointment2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentAppointment2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type DeleteAppointmentMutation = {
  deleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    type?: AppointmentType | null,
    time?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    patientID: string,
    physicianID: string,
    Appointment2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentAppointment2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type CreateMedicationMutationVariables = {
  input: CreateMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type CreateMedicationMutation = {
  createMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    useOfMedication?: string | null,
    recommendedDosage?: string | null,
    recommendedFrequencyOfUse?: string | null,
    potentialSideEffect?: string | null,
    drugThatMayReactAdversely?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMedicationMutationVariables = {
  input: UpdateMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type UpdateMedicationMutation = {
  updateMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    useOfMedication?: string | null,
    recommendedDosage?: string | null,
    recommendedFrequencyOfUse?: string | null,
    potentialSideEffect?: string | null,
    drugThatMayReactAdversely?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMedicationMutationVariables = {
  input: DeleteMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type DeleteMedicationMutation = {
  deleteMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    useOfMedication?: string | null,
    recommendedDosage?: string | null,
    recommendedFrequencyOfUse?: string | null,
    potentialSideEffect?: string | null,
    drugThatMayReactAdversely?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePhysicianScheduleMutationVariables = {
  input: CreatePhysicianScheduleInput,
  condition?: ModelPhysicianScheduleConditionInput | null,
};

export type CreatePhysicianScheduleMutation = {
  createPhysicianSchedule?:  {
    __typename: "PhysicianSchedule",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePhysicianScheduleMutationVariables = {
  input: UpdatePhysicianScheduleInput,
  condition?: ModelPhysicianScheduleConditionInput | null,
};

export type UpdatePhysicianScheduleMutation = {
  updatePhysicianSchedule?:  {
    __typename: "PhysicianSchedule",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePhysicianScheduleMutationVariables = {
  input: DeletePhysicianScheduleInput,
  condition?: ModelPhysicianScheduleConditionInput | null,
};

export type DeletePhysicianScheduleMutation = {
  deletePhysicianSchedule?:  {
    __typename: "PhysicianSchedule",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePhysicianMutationVariables = {
  input: CreatePhysicianInput,
  condition?: ModelPhysicianConditionInput | null,
};

export type CreatePhysicianMutation = {
  createPhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    schedule?:  {
      __typename: "PhysicianSchedule",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Physician2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    physicianScheduleId?: string | null,
  } | null,
};

export type UpdatePhysicianMutationVariables = {
  input: UpdatePhysicianInput,
  condition?: ModelPhysicianConditionInput | null,
};

export type UpdatePhysicianMutation = {
  updatePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    schedule?:  {
      __typename: "PhysicianSchedule",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Physician2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    physicianScheduleId?: string | null,
  } | null,
};

export type DeletePhysicianMutationVariables = {
  input: DeletePhysicianInput,
  condition?: ModelPhysicianConditionInput | null,
};

export type DeletePhysicianMutation = {
  deletePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    schedule?:  {
      __typename: "PhysicianSchedule",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Physician2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    physicianScheduleId?: string | null,
  } | null,
};

export type CreateInsuranceCarrierMutationVariables = {
  input: CreateInsuranceCarrierInput,
  condition?: ModelInsuranceCarrierConditionInput | null,
};

export type CreateInsuranceCarrierMutation = {
  createInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name?: string | null,
    address?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateInsuranceCarrierMutationVariables = {
  input: UpdateInsuranceCarrierInput,
  condition?: ModelInsuranceCarrierConditionInput | null,
};

export type UpdateInsuranceCarrierMutation = {
  updateInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name?: string | null,
    address?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteInsuranceCarrierMutationVariables = {
  input: DeleteInsuranceCarrierInput,
  condition?: ModelInsuranceCarrierConditionInput | null,
};

export type DeleteInsuranceCarrierMutation = {
  deleteInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name?: string | null,
    address?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
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
    practitionerTypeSeen?: Practitioner | null,
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
    employeeIDWhoSubmitted?: number | null,
    patientID: string,
    MedicalEncounter2VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      bodyTemperature?: string | null,
      pulseRate?: string | null,
      respirationRate?: string | null,
      bloodPressure?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MedicalEncounter2LabOrder?:  {
      __typename: "ModelLabOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounter2Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterMedicalEncounter2VitalSignId?: string | null,
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
    practitionerTypeSeen?: Practitioner | null,
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
    employeeIDWhoSubmitted?: number | null,
    patientID: string,
    MedicalEncounter2VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      bodyTemperature?: string | null,
      pulseRate?: string | null,
      respirationRate?: string | null,
      bloodPressure?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MedicalEncounter2LabOrder?:  {
      __typename: "ModelLabOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounter2Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterMedicalEncounter2VitalSignId?: string | null,
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
    practitionerTypeSeen?: Practitioner | null,
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
    employeeIDWhoSubmitted?: number | null,
    patientID: string,
    MedicalEncounter2VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      bodyTemperature?: string | null,
      pulseRate?: string | null,
      respirationRate?: string | null,
      bloodPressure?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MedicalEncounter2LabOrder?:  {
      __typename: "ModelLabOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounter2Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterMedicalEncounter2VitalSignId?: string | null,
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
    name?: string | null,
    telephoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    Patient2MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Patient2InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name?: string | null,
      address?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Patient2Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      physicianScheduleId?: string | null,
    } | null,
    Patient2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientPatient2InsuranceCarrierId?: string | null,
    patientPatient2PhysicianId?: string | null,
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
    name?: string | null,
    telephoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    Patient2MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Patient2InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name?: string | null,
      address?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Patient2Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      physicianScheduleId?: string | null,
    } | null,
    Patient2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientPatient2InsuranceCarrierId?: string | null,
    patientPatient2PhysicianId?: string | null,
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
    name?: string | null,
    telephoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    Patient2MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Patient2InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name?: string | null,
      address?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Patient2Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      physicianScheduleId?: string | null,
    } | null,
    Patient2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientPatient2InsuranceCarrierId?: string | null,
    patientPatient2PhysicianId?: string | null,
  } | null,
};

export type CreateEquipmentMaintenanceMutationVariables = {
  input: CreateEquipmentMaintenanceInput,
  condition?: ModelEquipmentMaintenanceConditionInput | null,
};

export type CreateEquipmentMaintenanceMutation = {
  createEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    problem?: string | null,
    status?: Status | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEquipmentMaintenanceMutationVariables = {
  input: UpdateEquipmentMaintenanceInput,
  condition?: ModelEquipmentMaintenanceConditionInput | null,
};

export type UpdateEquipmentMaintenanceMutation = {
  updateEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    problem?: string | null,
    status?: Status | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEquipmentMaintenanceMutationVariables = {
  input: DeleteEquipmentMaintenanceInput,
  condition?: ModelEquipmentMaintenanceConditionInput | null,
};

export type DeleteEquipmentMaintenanceMutation = {
  deleteEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    problem?: string | null,
    status?: Status | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEquipmentMutationVariables = {
  input: CreateEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type CreateEquipmentMutation = {
  createEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    leasingCompany?: string | null,
    datePurchased?: string | null,
    Equipment2EquipmentMaintenance?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Equipment2Vendor?:  {
      __typename: "ModelVendorConnection",
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

export type UpdateEquipmentMutationVariables = {
  input: UpdateEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type UpdateEquipmentMutation = {
  updateEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    leasingCompany?: string | null,
    datePurchased?: string | null,
    Equipment2EquipmentMaintenance?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Equipment2Vendor?:  {
      __typename: "ModelVendorConnection",
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

export type DeleteEquipmentMutationVariables = {
  input: DeleteEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type DeleteEquipmentMutation = {
  deleteEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    leasingCompany?: string | null,
    datePurchased?: string | null,
    Equipment2EquipmentMaintenance?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Equipment2Vendor?:  {
      __typename: "ModelVendorConnection",
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
    name: string,
    address: string,
    equipment?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    name: string,
    address: string,
    equipment?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    name: string,
    address: string,
    equipment?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetServiceProvidedByClinicQueryVariables = {
  id: string,
};

export type GetServiceProvidedByClinicQuery = {
  getServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    billableCostForService?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListServiceProvidedByClinicsQueryVariables = {
  filter?: ModelServiceProvidedByClinicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServiceProvidedByClinicsQuery = {
  listServiceProvidedByClinics?:  {
    __typename: "ModelServiceProvidedByClinicConnection",
    items:  Array< {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
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

export type SyncServiceProvidedByClinicsQueryVariables = {
  filter?: ModelServiceProvidedByClinicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncServiceProvidedByClinicsQuery = {
  syncServiceProvidedByClinics?:  {
    __typename: "ModelServiceProvidedByClinicConnection",
    items:  Array< {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
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

export type GetLabTestQueryVariables = {
  id: string,
};

export type GetLabTestQuery = {
  getLabTest?:  {
    __typename: "LabTest",
    id: string,
    typeName?: string | null,
    rangeOfNotNormalResults?: string | null,
    laborderID: string,
    rangeOfNormalResults?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLabTestsQueryVariables = {
  filter?: ModelLabTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLabTestsQuery = {
  listLabTests?:  {
    __typename: "ModelLabTestConnection",
    items:  Array< {
      __typename: "LabTest",
      id: string,
      typeName?: string | null,
      rangeOfNotNormalResults?: string | null,
      laborderID: string,
      rangeOfNormalResults?: string | null,
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

export type SyncLabTestsQueryVariables = {
  filter?: ModelLabTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLabTestsQuery = {
  syncLabTests?:  {
    __typename: "ModelLabTestConnection",
    items:  Array< {
      __typename: "LabTest",
      id: string,
      typeName?: string | null,
      rangeOfNotNormalResults?: string | null,
      laborderID: string,
      rangeOfNormalResults?: string | null,
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

export type LabTestsByLaborderIDQueryVariables = {
  laborderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLabTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LabTestsByLaborderIDQuery = {
  labTestsByLaborderID?:  {
    __typename: "ModelLabTestConnection",
    items:  Array< {
      __typename: "LabTest",
      id: string,
      typeName?: string | null,
      rangeOfNotNormalResults?: string | null,
      laborderID: string,
      rangeOfNormalResults?: string | null,
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

export type GetPrescriptionQueryVariables = {
  id: string,
};

export type GetPrescriptionQuery = {
  getPrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName?: string | null,
    prescribedMedication?: string | null,
    medicineDosage?: string | null,
    frequencyOfMedication?: string | null,
    datePrescriptionFilled?: string | null,
    pharmacistWhoFilledPrescription?: string | null,
    medicalencounterID: string,
    Prescription2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type ListPrescriptionsQueryVariables = {
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrescriptionsQuery = {
  listPrescriptions?:  {
    __typename: "ModelPrescriptionConnection",
    items:  Array< {
      __typename: "Prescription",
      id: string,
      physicianName?: string | null,
      prescribedMedication?: string | null,
      medicineDosage?: string | null,
      frequencyOfMedication?: string | null,
      datePrescriptionFilled?: string | null,
      pharmacistWhoFilledPrescription?: string | null,
      medicalencounterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPrescriptionsQueryVariables = {
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPrescriptionsQuery = {
  syncPrescriptions?:  {
    __typename: "ModelPrescriptionConnection",
    items:  Array< {
      __typename: "Prescription",
      id: string,
      physicianName?: string | null,
      prescribedMedication?: string | null,
      medicineDosage?: string | null,
      frequencyOfMedication?: string | null,
      datePrescriptionFilled?: string | null,
      pharmacistWhoFilledPrescription?: string | null,
      medicalencounterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PrescriptionsByMedicalencounterIDQueryVariables = {
  medicalencounterID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PrescriptionsByMedicalencounterIDQuery = {
  prescriptionsByMedicalencounterID?:  {
    __typename: "ModelPrescriptionConnection",
    items:  Array< {
      __typename: "Prescription",
      id: string,
      physicianName?: string | null,
      prescribedMedication?: string | null,
      medicineDosage?: string | null,
      frequencyOfMedication?: string | null,
      datePrescriptionFilled?: string | null,
      pharmacistWhoFilledPrescription?: string | null,
      medicalencounterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLabOrderQueryVariables = {
  id: string,
};

export type GetLabOrderQuery = {
  getLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    type?: string | null,
    date?: string | null,
    technician?: string | null,
    result?: string | null,
    medicalencounterID: string,
    LabOrder2ServiceProvideByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    LabOrder2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderLabOrder2ServiceProvideByClinicId?: string | null,
    labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type ListLabOrdersQueryVariables = {
  filter?: ModelLabOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLabOrdersQuery = {
  listLabOrders?:  {
    __typename: "ModelLabOrderConnection",
    items:  Array< {
      __typename: "LabOrder",
      id: string,
      physicianName?: string | null,
      type?: string | null,
      date?: string | null,
      technician?: string | null,
      result?: string | null,
      medicalencounterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      labOrderLabOrder2ServiceProvideByClinicId?: string | null,
      labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLabOrdersQueryVariables = {
  filter?: ModelLabOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLabOrdersQuery = {
  syncLabOrders?:  {
    __typename: "ModelLabOrderConnection",
    items:  Array< {
      __typename: "LabOrder",
      id: string,
      physicianName?: string | null,
      type?: string | null,
      date?: string | null,
      technician?: string | null,
      result?: string | null,
      medicalencounterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      labOrderLabOrder2ServiceProvideByClinicId?: string | null,
      labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type LabOrdersByMedicalencounterIDQueryVariables = {
  medicalencounterID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLabOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LabOrdersByMedicalencounterIDQuery = {
  labOrdersByMedicalencounterID?:  {
    __typename: "ModelLabOrderConnection",
    items:  Array< {
      __typename: "LabOrder",
      id: string,
      physicianName?: string | null,
      type?: string | null,
      date?: string | null,
      technician?: string | null,
      result?: string | null,
      medicalencounterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      labOrderLabOrder2ServiceProvideByClinicId?: string | null,
      labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVitalSignQueryVariables = {
  id: string,
};

export type GetVitalSignQuery = {
  getVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    bodyTemperature?: string | null,
    pulseRate?: string | null,
    respirationRate?: string | null,
    bloodPressure?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListVitalSignsQueryVariables = {
  filter?: ModelVitalSignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVitalSignsQuery = {
  listVitalSigns?:  {
    __typename: "ModelVitalSignConnection",
    items:  Array< {
      __typename: "VitalSign",
      id: string,
      bodyTemperature?: string | null,
      pulseRate?: string | null,
      respirationRate?: string | null,
      bloodPressure?: string | null,
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

export type SyncVitalSignsQueryVariables = {
  filter?: ModelVitalSignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVitalSignsQuery = {
  syncVitalSigns?:  {
    __typename: "ModelVitalSignConnection",
    items:  Array< {
      __typename: "VitalSign",
      id: string,
      bodyTemperature?: string | null,
      pulseRate?: string | null,
      respirationRate?: string | null,
      bloodPressure?: string | null,
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

export type GetWorkScheduleQueryVariables = {
  id: string,
};

export type GetWorkScheduleQuery = {
  getWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    date?: Array< string | null > | null,
    time?: Array< boolean | null > | null,
    physicianID: string,
    appointmentScheduled?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListWorkSchedulesQueryVariables = {
  filter?: ModelWorkScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkSchedulesQuery = {
  listWorkSchedules?:  {
    __typename: "ModelWorkScheduleConnection",
    items:  Array< {
      __typename: "WorkSchedule",
      id: string,
      date?: Array< string | null > | null,
      time?: Array< boolean | null > | null,
      physicianID: string,
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

export type SyncWorkSchedulesQueryVariables = {
  filter?: ModelWorkScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkSchedulesQuery = {
  syncWorkSchedules?:  {
    __typename: "ModelWorkScheduleConnection",
    items:  Array< {
      __typename: "WorkSchedule",
      id: string,
      date?: Array< string | null > | null,
      time?: Array< boolean | null > | null,
      physicianID: string,
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

export type WorkSchedulesByPhysicianIDQueryVariables = {
  physicianID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWorkScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WorkSchedulesByPhysicianIDQuery = {
  workSchedulesByPhysicianID?:  {
    __typename: "ModelWorkScheduleConnection",
    items:  Array< {
      __typename: "WorkSchedule",
      id: string,
      date?: Array< string | null > | null,
      time?: Array< boolean | null > | null,
      physicianID: string,
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

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    type?: AppointmentType | null,
    time?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    patientID: string,
    physicianID: string,
    Appointment2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentAppointment2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      date?: string | null,
      type?: AppointmentType | null,
      patientID: string,
      physicianID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appointmentAppointment2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppointmentsQuery = {
  syncAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      date?: string | null,
      type?: AppointmentType | null,
      patientID: string,
      physicianID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appointmentAppointment2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AppointmentsByPatientIDQueryVariables = {
  patientID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByPatientIDQuery = {
  appointmentsByPatientID?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      date?: string | null,
      type?: AppointmentType | null,
      patientID: string,
      physicianID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appointmentAppointment2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AppointmentsByPhysicianIDQueryVariables = {
  physicianID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByPhysicianIDQuery = {
  appointmentsByPhysicianID?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      date?: string | null,
      type?: AppointmentType | null,
      patientID: string,
      physicianID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appointmentAppointment2ServiceProvidedByClinicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMedicationQueryVariables = {
  id: string,
};

export type GetMedicationQuery = {
  getMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    useOfMedication?: string | null,
    recommendedDosage?: string | null,
    recommendedFrequencyOfUse?: string | null,
    potentialSideEffect?: string | null,
    drugThatMayReactAdversely?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMedicationsQueryVariables = {
  filter?: ModelMedicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicationsQuery = {
  listMedications?:  {
    __typename: "ModelMedicationConnection",
    items:  Array< {
      __typename: "Medication",
      id: string,
      name?: string | null,
      useOfMedication?: string | null,
      recommendedDosage?: string | null,
      recommendedFrequencyOfUse?: string | null,
      potentialSideEffect?: string | null,
      drugThatMayReactAdversely?: string | null,
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

export type SyncMedicationsQueryVariables = {
  filter?: ModelMedicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMedicationsQuery = {
  syncMedications?:  {
    __typename: "ModelMedicationConnection",
    items:  Array< {
      __typename: "Medication",
      id: string,
      name?: string | null,
      useOfMedication?: string | null,
      recommendedDosage?: string | null,
      recommendedFrequencyOfUse?: string | null,
      potentialSideEffect?: string | null,
      drugThatMayReactAdversely?: string | null,
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

export type GetPhysicianScheduleQueryVariables = {
  id: string,
};

export type GetPhysicianScheduleQuery = {
  getPhysicianSchedule?:  {
    __typename: "PhysicianSchedule",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPhysicianSchedulesQueryVariables = {
  filter?: ModelPhysicianScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPhysicianSchedulesQuery = {
  listPhysicianSchedules?:  {
    __typename: "ModelPhysicianScheduleConnection",
    items:  Array< {
      __typename: "PhysicianSchedule",
      id: string,
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

export type SyncPhysicianSchedulesQueryVariables = {
  filter?: ModelPhysicianScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPhysicianSchedulesQuery = {
  syncPhysicianSchedules?:  {
    __typename: "ModelPhysicianScheduleConnection",
    items:  Array< {
      __typename: "PhysicianSchedule",
      id: string,
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

export type GetPhysicianQueryVariables = {
  id: string,
};

export type GetPhysicianQuery = {
  getPhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    schedule?:  {
      __typename: "PhysicianSchedule",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Physician2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    physicianScheduleId?: string | null,
  } | null,
};

export type ListPhysiciansQueryVariables = {
  filter?: ModelPhysicianFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPhysiciansQuery = {
  listPhysicians?:  {
    __typename: "ModelPhysicianConnection",
    items:  Array< {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      physicianScheduleId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPhysiciansQueryVariables = {
  filter?: ModelPhysicianFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPhysiciansQuery = {
  syncPhysicians?:  {
    __typename: "ModelPhysicianConnection",
    items:  Array< {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      physicianScheduleId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetInsuranceCarrierQueryVariables = {
  id: string,
};

export type GetInsuranceCarrierQuery = {
  getInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name?: string | null,
    address?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListInsuranceCarriersQueryVariables = {
  filter?: ModelInsuranceCarrierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInsuranceCarriersQuery = {
  listInsuranceCarriers?:  {
    __typename: "ModelInsuranceCarrierConnection",
    items:  Array< {
      __typename: "InsuranceCarrier",
      id: string,
      name?: string | null,
      address?: string | null,
      status?: string | null,
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

export type SyncInsuranceCarriersQueryVariables = {
  filter?: ModelInsuranceCarrierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncInsuranceCarriersQuery = {
  syncInsuranceCarriers?:  {
    __typename: "ModelInsuranceCarrierConnection",
    items:  Array< {
      __typename: "InsuranceCarrier",
      id: string,
      name?: string | null,
      address?: string | null,
      status?: string | null,
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

export type GetMedicalEncounterQueryVariables = {
  id: string,
};

export type GetMedicalEncounterQuery = {
  getMedicalEncounter?:  {
    __typename: "MedicalEncounter",
    id: string,
    encounterDateTime?: string | null,
    practitionerTypeSeen?: Practitioner | null,
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
    employeeIDWhoSubmitted?: number | null,
    patientID: string,
    MedicalEncounter2VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      bodyTemperature?: string | null,
      pulseRate?: string | null,
      respirationRate?: string | null,
      bloodPressure?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MedicalEncounter2LabOrder?:  {
      __typename: "ModelLabOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounter2Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterMedicalEncounter2VitalSignId?: string | null,
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
      practitionerTypeSeen?: Practitioner | null,
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
      employeeIDWhoSubmitted?: number | null,
      patientID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      medicalEncounterMedicalEncounter2VitalSignId?: string | null,
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
      practitionerTypeSeen?: Practitioner | null,
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
      employeeIDWhoSubmitted?: number | null,
      patientID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      medicalEncounterMedicalEncounter2VitalSignId?: string | null,
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
      practitionerTypeSeen?: Practitioner | null,
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
      employeeIDWhoSubmitted?: number | null,
      patientID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      medicalEncounterMedicalEncounter2VitalSignId?: string | null,
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
    name?: string | null,
    telephoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    Patient2MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Patient2InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name?: string | null,
      address?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Patient2Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      physicianScheduleId?: string | null,
    } | null,
    Patient2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientPatient2InsuranceCarrierId?: string | null,
    patientPatient2PhysicianId?: string | null,
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
      name?: string | null,
      telephoneNumber?: string | null,
      insuranceCarrierID?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      primaryCarePhysician?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientPatient2InsuranceCarrierId?: string | null,
      patientPatient2PhysicianId?: string | null,
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
      name?: string | null,
      telephoneNumber?: string | null,
      insuranceCarrierID?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      primaryCarePhysician?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      patientPatient2InsuranceCarrierId?: string | null,
      patientPatient2PhysicianId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEquipmentMaintenanceQueryVariables = {
  id: string,
};

export type GetEquipmentMaintenanceQuery = {
  getEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    problem?: string | null,
    status?: Status | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEquipmentMaintenancesQueryVariables = {
  filter?: ModelEquipmentMaintenanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEquipmentMaintenancesQuery = {
  listEquipmentMaintenances?:  {
    __typename: "ModelEquipmentMaintenanceConnection",
    items:  Array< {
      __typename: "EquipmentMaintenance",
      id: string,
      type?: string | null,
      problem?: string | null,
      status?: Status | null,
      resolution?: string | null,
      equipmentID: string,
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

export type SyncEquipmentMaintenancesQueryVariables = {
  filter?: ModelEquipmentMaintenanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentMaintenancesQuery = {
  syncEquipmentMaintenances?:  {
    __typename: "ModelEquipmentMaintenanceConnection",
    items:  Array< {
      __typename: "EquipmentMaintenance",
      id: string,
      type?: string | null,
      problem?: string | null,
      status?: Status | null,
      resolution?: string | null,
      equipmentID: string,
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

export type EquipmentMaintenancesByEquipmentIDQueryVariables = {
  equipmentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEquipmentMaintenanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EquipmentMaintenancesByEquipmentIDQuery = {
  equipmentMaintenancesByEquipmentID?:  {
    __typename: "ModelEquipmentMaintenanceConnection",
    items:  Array< {
      __typename: "EquipmentMaintenance",
      id: string,
      type?: string | null,
      problem?: string | null,
      status?: Status | null,
      resolution?: string | null,
      equipmentID: string,
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

export type GetEquipmentQueryVariables = {
  id: string,
};

export type GetEquipmentQuery = {
  getEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    leasingCompany?: string | null,
    datePurchased?: string | null,
    Equipment2EquipmentMaintenance?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Equipment2Vendor?:  {
      __typename: "ModelVendorConnection",
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

export type ListEquipmentQueryVariables = {
  filter?: ModelEquipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEquipmentQuery = {
  listEquipment?:  {
    __typename: "ModelEquipmentConnection",
    items:  Array< {
      __typename: "Equipment",
      id: string,
      type?: string | null,
      description?: string | null,
      department?: string | null,
      owned?: boolean | null,
      startDate?: string | null,
      endDate?: string | null,
      leasingCompany?: string | null,
      datePurchased?: string | null,
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

export type SyncEquipmentQueryVariables = {
  filter?: ModelEquipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentQuery = {
  syncEquipment?:  {
    __typename: "ModelEquipmentConnection",
    items:  Array< {
      __typename: "Equipment",
      id: string,
      type?: string | null,
      description?: string | null,
      department?: string | null,
      owned?: boolean | null,
      startDate?: string | null,
      endDate?: string | null,
      leasingCompany?: string | null,
      datePurchased?: string | null,
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
    name: string,
    address: string,
    equipment?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      name: string,
      address: string,
      equipment?: string | null,
      preferred?: boolean | null,
      equipmentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
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
      name: string,
      address: string,
      equipment?: string | null,
      preferred?: boolean | null,
      equipmentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type VendorsByEquipmentIDQueryVariables = {
  equipmentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VendorsByEquipmentIDQuery = {
  vendorsByEquipmentID?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      name: string,
      address: string,
      equipment?: string | null,
      preferred?: boolean | null,
      equipmentID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateServiceProvidedByClinicSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProvidedByClinicFilterInput | null,
};

export type OnCreateServiceProvidedByClinicSubscription = {
  onCreateServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    billableCostForService?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateServiceProvidedByClinicSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProvidedByClinicFilterInput | null,
};

export type OnUpdateServiceProvidedByClinicSubscription = {
  onUpdateServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    billableCostForService?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteServiceProvidedByClinicSubscriptionVariables = {
  filter?: ModelSubscriptionServiceProvidedByClinicFilterInput | null,
};

export type OnDeleteServiceProvidedByClinicSubscription = {
  onDeleteServiceProvidedByClinic?:  {
    __typename: "ServiceProvidedByClinic",
    id: string,
    type?: string | null,
    description?: string | null,
    billableCostForService?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateLabTestSubscriptionVariables = {
  filter?: ModelSubscriptionLabTestFilterInput | null,
};

export type OnCreateLabTestSubscription = {
  onCreateLabTest?:  {
    __typename: "LabTest",
    id: string,
    typeName?: string | null,
    rangeOfNotNormalResults?: string | null,
    laborderID: string,
    rangeOfNormalResults?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLabTestSubscriptionVariables = {
  filter?: ModelSubscriptionLabTestFilterInput | null,
};

export type OnUpdateLabTestSubscription = {
  onUpdateLabTest?:  {
    __typename: "LabTest",
    id: string,
    typeName?: string | null,
    rangeOfNotNormalResults?: string | null,
    laborderID: string,
    rangeOfNormalResults?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLabTestSubscriptionVariables = {
  filter?: ModelSubscriptionLabTestFilterInput | null,
};

export type OnDeleteLabTestSubscription = {
  onDeleteLabTest?:  {
    __typename: "LabTest",
    id: string,
    typeName?: string | null,
    rangeOfNotNormalResults?: string | null,
    laborderID: string,
    rangeOfNormalResults?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePrescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionPrescriptionFilterInput | null,
};

export type OnCreatePrescriptionSubscription = {
  onCreatePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName?: string | null,
    prescribedMedication?: string | null,
    medicineDosage?: string | null,
    frequencyOfMedication?: string | null,
    datePrescriptionFilled?: string | null,
    pharmacistWhoFilledPrescription?: string | null,
    medicalencounterID: string,
    Prescription2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type OnUpdatePrescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionPrescriptionFilterInput | null,
};

export type OnUpdatePrescriptionSubscription = {
  onUpdatePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName?: string | null,
    prescribedMedication?: string | null,
    medicineDosage?: string | null,
    frequencyOfMedication?: string | null,
    datePrescriptionFilled?: string | null,
    pharmacistWhoFilledPrescription?: string | null,
    medicalencounterID: string,
    Prescription2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type OnDeletePrescriptionSubscriptionVariables = {
  filter?: ModelSubscriptionPrescriptionFilterInput | null,
};

export type OnDeletePrescriptionSubscription = {
  onDeletePrescription?:  {
    __typename: "Prescription",
    id: string,
    physicianName?: string | null,
    prescribedMedication?: string | null,
    medicineDosage?: string | null,
    frequencyOfMedication?: string | null,
    datePrescriptionFilled?: string | null,
    pharmacistWhoFilledPrescription?: string | null,
    medicalencounterID: string,
    Prescription2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    prescriptionPrescription2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type OnCreateLabOrderSubscriptionVariables = {
  filter?: ModelSubscriptionLabOrderFilterInput | null,
};

export type OnCreateLabOrderSubscription = {
  onCreateLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    type?: string | null,
    date?: string | null,
    technician?: string | null,
    result?: string | null,
    medicalencounterID: string,
    LabOrder2ServiceProvideByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    LabOrder2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderLabOrder2ServiceProvideByClinicId?: string | null,
    labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type OnUpdateLabOrderSubscriptionVariables = {
  filter?: ModelSubscriptionLabOrderFilterInput | null,
};

export type OnUpdateLabOrderSubscription = {
  onUpdateLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    type?: string | null,
    date?: string | null,
    technician?: string | null,
    result?: string | null,
    medicalencounterID: string,
    LabOrder2ServiceProvideByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    LabOrder2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderLabOrder2ServiceProvideByClinicId?: string | null,
    labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type OnDeleteLabOrderSubscriptionVariables = {
  filter?: ModelSubscriptionLabOrderFilterInput | null,
};

export type OnDeleteLabOrderSubscription = {
  onDeleteLabOrder?:  {
    __typename: "LabOrder",
    id: string,
    physicianName?: string | null,
    type?: string | null,
    date?: string | null,
    technician?: string | null,
    result?: string | null,
    medicalencounterID: string,
    LabOrder2ServiceProvideByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    LabOrder2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    labOrderLabOrder2ServiceProvideByClinicId?: string | null,
    labOrderLabOrder2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type OnCreateVitalSignSubscriptionVariables = {
  filter?: ModelSubscriptionVitalSignFilterInput | null,
};

export type OnCreateVitalSignSubscription = {
  onCreateVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    bodyTemperature?: string | null,
    pulseRate?: string | null,
    respirationRate?: string | null,
    bloodPressure?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateVitalSignSubscriptionVariables = {
  filter?: ModelSubscriptionVitalSignFilterInput | null,
};

export type OnUpdateVitalSignSubscription = {
  onUpdateVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    bodyTemperature?: string | null,
    pulseRate?: string | null,
    respirationRate?: string | null,
    bloodPressure?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteVitalSignSubscriptionVariables = {
  filter?: ModelSubscriptionVitalSignFilterInput | null,
};

export type OnDeleteVitalSignSubscription = {
  onDeleteVitalSign?:  {
    __typename: "VitalSign",
    id: string,
    bodyTemperature?: string | null,
    pulseRate?: string | null,
    respirationRate?: string | null,
    bloodPressure?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateWorkScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionWorkScheduleFilterInput | null,
};

export type OnCreateWorkScheduleSubscription = {
  onCreateWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    date?: Array< string | null > | null,
    time?: Array< boolean | null > | null,
    physicianID: string,
    appointmentScheduled?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateWorkScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionWorkScheduleFilterInput | null,
};

export type OnUpdateWorkScheduleSubscription = {
  onUpdateWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    date?: Array< string | null > | null,
    time?: Array< boolean | null > | null,
    physicianID: string,
    appointmentScheduled?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteWorkScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionWorkScheduleFilterInput | null,
};

export type OnDeleteWorkScheduleSubscription = {
  onDeleteWorkSchedule?:  {
    __typename: "WorkSchedule",
    id: string,
    date?: Array< string | null > | null,
    time?: Array< boolean | null > | null,
    physicianID: string,
    appointmentScheduled?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    type?: AppointmentType | null,
    time?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    patientID: string,
    physicianID: string,
    Appointment2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentAppointment2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type OnUpdateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    type?: AppointmentType | null,
    time?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    patientID: string,
    physicianID: string,
    Appointment2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentAppointment2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type OnDeleteAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    date?: string | null,
    type?: AppointmentType | null,
    time?:  Array< {
      __typename: "AppointmentPicker",
      eventID?: string | null,
      isReserved?: boolean | null,
      period?: number | null,
    } | null > | null,
    patientID: string,
    physicianID: string,
    Appointment2ServiceProvidedByClinic?:  {
      __typename: "ServiceProvidedByClinic",
      id: string,
      type?: string | null,
      description?: string | null,
      billableCostForService?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appointmentAppointment2ServiceProvidedByClinicId?: string | null,
  } | null,
};

export type OnCreateMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnCreateMedicationSubscription = {
  onCreateMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    useOfMedication?: string | null,
    recommendedDosage?: string | null,
    recommendedFrequencyOfUse?: string | null,
    potentialSideEffect?: string | null,
    drugThatMayReactAdversely?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnUpdateMedicationSubscription = {
  onUpdateMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    useOfMedication?: string | null,
    recommendedDosage?: string | null,
    recommendedFrequencyOfUse?: string | null,
    potentialSideEffect?: string | null,
    drugThatMayReactAdversely?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnDeleteMedicationSubscription = {
  onDeleteMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    useOfMedication?: string | null,
    recommendedDosage?: string | null,
    recommendedFrequencyOfUse?: string | null,
    potentialSideEffect?: string | null,
    drugThatMayReactAdversely?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePhysicianScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionPhysicianScheduleFilterInput | null,
};

export type OnCreatePhysicianScheduleSubscription = {
  onCreatePhysicianSchedule?:  {
    __typename: "PhysicianSchedule",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePhysicianScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionPhysicianScheduleFilterInput | null,
};

export type OnUpdatePhysicianScheduleSubscription = {
  onUpdatePhysicianSchedule?:  {
    __typename: "PhysicianSchedule",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePhysicianScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionPhysicianScheduleFilterInput | null,
};

export type OnDeletePhysicianScheduleSubscription = {
  onDeletePhysicianSchedule?:  {
    __typename: "PhysicianSchedule",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePhysicianSubscriptionVariables = {
  filter?: ModelSubscriptionPhysicianFilterInput | null,
};

export type OnCreatePhysicianSubscription = {
  onCreatePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    schedule?:  {
      __typename: "PhysicianSchedule",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Physician2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    physicianScheduleId?: string | null,
  } | null,
};

export type OnUpdatePhysicianSubscriptionVariables = {
  filter?: ModelSubscriptionPhysicianFilterInput | null,
};

export type OnUpdatePhysicianSubscription = {
  onUpdatePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    schedule?:  {
      __typename: "PhysicianSchedule",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Physician2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    physicianScheduleId?: string | null,
  } | null,
};

export type OnDeletePhysicianSubscriptionVariables = {
  filter?: ModelSubscriptionPhysicianFilterInput | null,
};

export type OnDeletePhysicianSubscription = {
  onDeletePhysician?:  {
    __typename: "Physician",
    id: string,
    name?: string | null,
    cellPhoneNumber?: string | null,
    schedule?:  {
      __typename: "PhysicianSchedule",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Physician2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    physicianScheduleId?: string | null,
  } | null,
};

export type OnCreateInsuranceCarrierSubscriptionVariables = {
  filter?: ModelSubscriptionInsuranceCarrierFilterInput | null,
};

export type OnCreateInsuranceCarrierSubscription = {
  onCreateInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name?: string | null,
    address?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateInsuranceCarrierSubscriptionVariables = {
  filter?: ModelSubscriptionInsuranceCarrierFilterInput | null,
};

export type OnUpdateInsuranceCarrierSubscription = {
  onUpdateInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name?: string | null,
    address?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteInsuranceCarrierSubscriptionVariables = {
  filter?: ModelSubscriptionInsuranceCarrierFilterInput | null,
};

export type OnDeleteInsuranceCarrierSubscription = {
  onDeleteInsuranceCarrier?:  {
    __typename: "InsuranceCarrier",
    id: string,
    name?: string | null,
    address?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    practitionerTypeSeen?: Practitioner | null,
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
    employeeIDWhoSubmitted?: number | null,
    patientID: string,
    MedicalEncounter2VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      bodyTemperature?: string | null,
      pulseRate?: string | null,
      respirationRate?: string | null,
      bloodPressure?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MedicalEncounter2LabOrder?:  {
      __typename: "ModelLabOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounter2Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterMedicalEncounter2VitalSignId?: string | null,
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
    practitionerTypeSeen?: Practitioner | null,
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
    employeeIDWhoSubmitted?: number | null,
    patientID: string,
    MedicalEncounter2VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      bodyTemperature?: string | null,
      pulseRate?: string | null,
      respirationRate?: string | null,
      bloodPressure?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MedicalEncounter2LabOrder?:  {
      __typename: "ModelLabOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounter2Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterMedicalEncounter2VitalSignId?: string | null,
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
    practitionerTypeSeen?: Practitioner | null,
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
    employeeIDWhoSubmitted?: number | null,
    patientID: string,
    MedicalEncounter2VitalSign?:  {
      __typename: "VitalSign",
      id: string,
      bodyTemperature?: string | null,
      pulseRate?: string | null,
      respirationRate?: string | null,
      bloodPressure?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    MedicalEncounter2LabOrder?:  {
      __typename: "ModelLabOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    MedicalEncounter2Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    medicalEncounterMedicalEncounter2VitalSignId?: string | null,
  } | null,
};

export type OnCreatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    telephoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    Patient2MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Patient2InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name?: string | null,
      address?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Patient2Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      physicianScheduleId?: string | null,
    } | null,
    Patient2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientPatient2InsuranceCarrierId?: string | null,
    patientPatient2PhysicianId?: string | null,
  } | null,
};

export type OnUpdatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    telephoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    Patient2MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Patient2InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name?: string | null,
      address?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Patient2Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      physicianScheduleId?: string | null,
    } | null,
    Patient2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientPatient2InsuranceCarrierId?: string | null,
    patientPatient2PhysicianId?: string | null,
  } | null,
};

export type OnDeletePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    id: string,
    name?: string | null,
    telephoneNumber?: string | null,
    insuranceCarrierID?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    primaryCarePhysician?: string | null,
    Patient2MedicalEncounters?:  {
      __typename: "ModelMedicalEncounterConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Patient2InsuranceCarrier?:  {
      __typename: "InsuranceCarrier",
      id: string,
      name?: string | null,
      address?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Patient2Physician?:  {
      __typename: "Physician",
      id: string,
      name?: string | null,
      cellPhoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      physicianScheduleId?: string | null,
    } | null,
    Patient2Appointment?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    patientPatient2InsuranceCarrierId?: string | null,
    patientPatient2PhysicianId?: string | null,
  } | null,
};

export type OnCreateEquipmentMaintenanceSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentMaintenanceFilterInput | null,
};

export type OnCreateEquipmentMaintenanceSubscription = {
  onCreateEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    problem?: string | null,
    status?: Status | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEquipmentMaintenanceSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentMaintenanceFilterInput | null,
};

export type OnUpdateEquipmentMaintenanceSubscription = {
  onUpdateEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    problem?: string | null,
    status?: Status | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEquipmentMaintenanceSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentMaintenanceFilterInput | null,
};

export type OnDeleteEquipmentMaintenanceSubscription = {
  onDeleteEquipmentMaintenance?:  {
    __typename: "EquipmentMaintenance",
    id: string,
    type?: string | null,
    problem?: string | null,
    status?: Status | null,
    resolution?: string | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentFilterInput | null,
};

export type OnCreateEquipmentSubscription = {
  onCreateEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    leasingCompany?: string | null,
    datePurchased?: string | null,
    Equipment2EquipmentMaintenance?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Equipment2Vendor?:  {
      __typename: "ModelVendorConnection",
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

export type OnUpdateEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentFilterInput | null,
};

export type OnUpdateEquipmentSubscription = {
  onUpdateEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    leasingCompany?: string | null,
    datePurchased?: string | null,
    Equipment2EquipmentMaintenance?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Equipment2Vendor?:  {
      __typename: "ModelVendorConnection",
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

export type OnDeleteEquipmentSubscriptionVariables = {
  filter?: ModelSubscriptionEquipmentFilterInput | null,
};

export type OnDeleteEquipmentSubscription = {
  onDeleteEquipment?:  {
    __typename: "Equipment",
    id: string,
    type?: string | null,
    description?: string | null,
    department?: string | null,
    owned?: boolean | null,
    startDate?: string | null,
    endDate?: string | null,
    leasingCompany?: string | null,
    datePurchased?: string | null,
    Equipment2EquipmentMaintenance?:  {
      __typename: "ModelEquipmentMaintenanceConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Equipment2Vendor?:  {
      __typename: "ModelVendorConnection",
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
  owner?: string | null,
};

export type OnCreateVendorSubscription = {
  onCreateVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    address: string,
    equipment?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
  owner?: string | null,
};

export type OnUpdateVendorSubscription = {
  onUpdateVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    address: string,
    equipment?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteVendorSubscriptionVariables = {
  filter?: ModelSubscriptionVendorFilterInput | null,
  owner?: string | null,
};

export type OnDeleteVendorSubscription = {
  onDeleteVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    address: string,
    equipment?: string | null,
    preferred?: boolean | null,
    equipmentID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
