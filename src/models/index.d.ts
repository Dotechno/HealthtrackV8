import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Practitioner {
  PHYSICIAN = "PHYSICIAN",
  NURSE = "NURSE",
  PHYSICIAN_ASSISTANT = "PHYSICIAN_ASSISTANT"
}

export enum AppointmentType {
  URGENT = "URGENT",
  ROUNTINE = "ROUNTINE",
  FOLLOW_UP_VISIT = "FOLLOW_UP_VISIT"
}

export enum Status {
  FINISHED = "FINISHED",
  IN_PROGRESS = "IN_PROGRESS",
  UNFINISHED = "UNFINISHED"
}

type EagerAppointmentPicker = {
  readonly eventID?: string | null;
  readonly isReserved?: boolean | null;
  readonly period?: number | null;
}

type LazyAppointmentPicker = {
  readonly eventID?: string | null;
  readonly isReserved?: boolean | null;
  readonly period?: number | null;
}

export declare type AppointmentPicker = LazyLoading extends LazyLoadingDisabled ? EagerAppointmentPicker : LazyAppointmentPicker

export declare const AppointmentPicker: (new (init: ModelInit<AppointmentPicker>) => AppointmentPicker)

type EagerWeekSchedule = {
  readonly weekDays?: Day | null;
}

type LazyWeekSchedule = {
  readonly weekDays?: Day | null;
}

export declare type WeekSchedule = LazyLoading extends LazyLoadingDisabled ? EagerWeekSchedule : LazyWeekSchedule

export declare const WeekSchedule: (new (init: ModelInit<WeekSchedule>) => WeekSchedule)

type EagerDay = {
  readonly id: string;
  readonly isReserved?: boolean | null;
  readonly periods: number;
  readonly number?: string | null;
}

type LazyDay = {
  readonly id: string;
  readonly isReserved?: boolean | null;
  readonly periods: number;
  readonly number?: string | null;
}

export declare type Day = LazyLoading extends LazyLoadingDisabled ? EagerDay : LazyDay

export declare const Day: (new (init: ModelInit<Day>) => Day)

type EagerServiceProvidedByClinic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceProvidedByClinic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly billableCostForService?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceProvidedByClinic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceProvidedByClinic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly billableCostForService?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceProvidedByClinic = LazyLoading extends LazyLoadingDisabled ? EagerServiceProvidedByClinic : LazyServiceProvidedByClinic

export declare const ServiceProvidedByClinic: (new (init: ModelInit<ServiceProvidedByClinic>) => ServiceProvidedByClinic) & {
  copyOf(source: ServiceProvidedByClinic, mutator: (draft: MutableModel<ServiceProvidedByClinic>) => MutableModel<ServiceProvidedByClinic> | void): ServiceProvidedByClinic;
}

type EagerLabTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LabTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly typeName?: string | null;
  readonly rangeOfNotNormalResults?: string | null;
  readonly laborderID: string;
  readonly rangeOfNormalResults?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLabTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LabTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly typeName?: string | null;
  readonly rangeOfNotNormalResults?: string | null;
  readonly laborderID: string;
  readonly rangeOfNormalResults?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LabTest = LazyLoading extends LazyLoadingDisabled ? EagerLabTest : LazyLabTest

export declare const LabTest: (new (init: ModelInit<LabTest>) => LabTest) & {
  copyOf(source: LabTest, mutator: (draft: MutableModel<LabTest>) => MutableModel<LabTest> | void): LabTest;
}

type EagerPrescription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prescription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicianName?: string | null;
  readonly prescribedMedication?: string | null;
  readonly medicineDosage?: string | null;
  readonly frequencyOfMedication?: string | null;
  readonly datePrescriptionFilled?: string | null;
  readonly pharmacistWhoFilledPrescription?: string | null;
  readonly medicalencounterID: string;
  readonly Prescription2ServiceProvidedByClinic?: ServiceProvidedByClinic | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly prescriptionPrescription2ServiceProvidedByClinicId?: string | null;
}

type LazyPrescription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prescription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicianName?: string | null;
  readonly prescribedMedication?: string | null;
  readonly medicineDosage?: string | null;
  readonly frequencyOfMedication?: string | null;
  readonly datePrescriptionFilled?: string | null;
  readonly pharmacistWhoFilledPrescription?: string | null;
  readonly medicalencounterID: string;
  readonly Prescription2ServiceProvidedByClinic: AsyncItem<ServiceProvidedByClinic | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly prescriptionPrescription2ServiceProvidedByClinicId?: string | null;
}

export declare type Prescription = LazyLoading extends LazyLoadingDisabled ? EagerPrescription : LazyPrescription

export declare const Prescription: (new (init: ModelInit<Prescription>) => Prescription) & {
  copyOf(source: Prescription, mutator: (draft: MutableModel<Prescription>) => MutableModel<Prescription> | void): Prescription;
}

type EagerLabOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LabOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicianName?: string | null;
  readonly type?: string | null;
  readonly date?: string | null;
  readonly technician?: string | null;
  readonly result?: string | null;
  readonly medicalencounterID: string;
  readonly LabOrder2ServiceProvideByClinic?: ServiceProvidedByClinic | null;
  readonly LabOrder2ServiceProvidedByClinic?: ServiceProvidedByClinic | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly labOrderLabOrder2ServiceProvideByClinicId?: string | null;
  readonly labOrderLabOrder2ServiceProvidedByClinicId?: string | null;
}

type LazyLabOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LabOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly physicianName?: string | null;
  readonly type?: string | null;
  readonly date?: string | null;
  readonly technician?: string | null;
  readonly result?: string | null;
  readonly medicalencounterID: string;
  readonly LabOrder2ServiceProvideByClinic: AsyncItem<ServiceProvidedByClinic | undefined>;
  readonly LabOrder2ServiceProvidedByClinic: AsyncItem<ServiceProvidedByClinic | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly labOrderLabOrder2ServiceProvideByClinicId?: string | null;
  readonly labOrderLabOrder2ServiceProvidedByClinicId?: string | null;
}

export declare type LabOrder = LazyLoading extends LazyLoadingDisabled ? EagerLabOrder : LazyLabOrder

export declare const LabOrder: (new (init: ModelInit<LabOrder>) => LabOrder) & {
  copyOf(source: LabOrder, mutator: (draft: MutableModel<LabOrder>) => MutableModel<LabOrder> | void): LabOrder;
}

type EagerVitalSign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VitalSign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bodyTemperature?: string | null;
  readonly pulseRate?: string | null;
  readonly respirationRate?: string | null;
  readonly bloodPressure?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVitalSign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VitalSign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bodyTemperature?: string | null;
  readonly pulseRate?: string | null;
  readonly respirationRate?: string | null;
  readonly bloodPressure?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VitalSign = LazyLoading extends LazyLoadingDisabled ? EagerVitalSign : LazyVitalSign

export declare const VitalSign: (new (init: ModelInit<VitalSign>) => VitalSign) & {
  copyOf(source: VitalSign, mutator: (draft: MutableModel<VitalSign>) => MutableModel<VitalSign> | void): VitalSign;
}

type EagerWorkSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: (string | null)[] | null;
  readonly time?: (boolean | null)[] | null;
  readonly physicianID: string;
  readonly appointmentScheduled?: (AppointmentPicker | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: (string | null)[] | null;
  readonly time?: (boolean | null)[] | null;
  readonly physicianID: string;
  readonly appointmentScheduled?: (AppointmentPicker | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WorkSchedule = LazyLoading extends LazyLoadingDisabled ? EagerWorkSchedule : LazyWorkSchedule

export declare const WorkSchedule: (new (init: ModelInit<WorkSchedule>) => WorkSchedule) & {
  copyOf(source: WorkSchedule, mutator: (draft: MutableModel<WorkSchedule>) => MutableModel<WorkSchedule> | void): WorkSchedule;
}

type EagerAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly type?: AppointmentType | keyof typeof AppointmentType | null;
  readonly time?: (AppointmentPicker | null)[] | null;
  readonly patientID: string;
  readonly physicianID: string;
  readonly Appointment2ServiceProvidedByClinic?: ServiceProvidedByClinic | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointmentAppointment2ServiceProvidedByClinicId?: string | null;
}

type LazyAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly type?: AppointmentType | keyof typeof AppointmentType | null;
  readonly time?: (AppointmentPicker | null)[] | null;
  readonly patientID: string;
  readonly physicianID: string;
  readonly Appointment2ServiceProvidedByClinic: AsyncItem<ServiceProvidedByClinic | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointmentAppointment2ServiceProvidedByClinicId?: string | null;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

type EagerMedication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly useOfMedication?: string | null;
  readonly recommendedDosage?: string | null;
  readonly recommendedFrequencyOfUse?: string | null;
  readonly potentialSideEffect?: string | null;
  readonly drugThatMayReactAdversely?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly useOfMedication?: string | null;
  readonly recommendedDosage?: string | null;
  readonly recommendedFrequencyOfUse?: string | null;
  readonly potentialSideEffect?: string | null;
  readonly drugThatMayReactAdversely?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Medication = LazyLoading extends LazyLoadingDisabled ? EagerMedication : LazyMedication

export declare const Medication: (new (init: ModelInit<Medication>) => Medication) & {
  copyOf(source: Medication, mutator: (draft: MutableModel<Medication>) => MutableModel<Medication> | void): Medication;
}

type EagerPhysicianSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PhysicianSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly schedule?: WeekSchedule | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhysicianSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PhysicianSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly schedule?: WeekSchedule | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PhysicianSchedule = LazyLoading extends LazyLoadingDisabled ? EagerPhysicianSchedule : LazyPhysicianSchedule

export declare const PhysicianSchedule: (new (init: ModelInit<PhysicianSchedule>) => PhysicianSchedule) & {
  copyOf(source: PhysicianSchedule, mutator: (draft: MutableModel<PhysicianSchedule>) => MutableModel<PhysicianSchedule> | void): PhysicianSchedule;
}

type EagerPhysician = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Physician, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly cellPhoneNumber?: string | null;
  readonly schedule?: PhysicianSchedule | null;
  readonly Physician2Appointment?: (Appointment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly physicianScheduleId?: string | null;
}

type LazyPhysician = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Physician, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly cellPhoneNumber?: string | null;
  readonly schedule: AsyncItem<PhysicianSchedule | undefined>;
  readonly Physician2Appointment: AsyncCollection<Appointment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly physicianScheduleId?: string | null;
}

export declare type Physician = LazyLoading extends LazyLoadingDisabled ? EagerPhysician : LazyPhysician

export declare const Physician: (new (init: ModelInit<Physician>) => Physician) & {
  copyOf(source: Physician, mutator: (draft: MutableModel<Physician>) => MutableModel<Physician> | void): Physician;
}

type EagerInsuranceCarrier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InsuranceCarrier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInsuranceCarrier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InsuranceCarrier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InsuranceCarrier = LazyLoading extends LazyLoadingDisabled ? EagerInsuranceCarrier : LazyInsuranceCarrier

export declare const InsuranceCarrier: (new (init: ModelInit<InsuranceCarrier>) => InsuranceCarrier) & {
  copyOf(source: InsuranceCarrier, mutator: (draft: MutableModel<InsuranceCarrier>) => MutableModel<InsuranceCarrier> | void): InsuranceCarrier;
}

type EagerMedicalEncounter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MedicalEncounter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly encounterDateTime?: string | null;
  readonly practitionerTypeSeen?: Practitioner | keyof typeof Practitioner | null;
  readonly patientComplaints?: string | null;
  readonly vitalSigns?: string | null;
  readonly practionerNotes?: string | null;
  readonly labOrders?: string | null;
  readonly pharmacyOrders?: string | null;
  readonly diagnosis?: string | null;
  readonly treatmentPlan?: string | null;
  readonly referralToSpecialists?: string | null;
  readonly recommendedFollowUp?: string | null;
  readonly dataTimeEncounterSubmitted?: string | null;
  readonly employeeIDWhoSubmitted?: number | null;
  readonly patientID: string;
  readonly MedicalEncounter2VitalSign?: VitalSign | null;
  readonly MedicalEncounter2LabOrder?: (LabOrder | null)[] | null;
  readonly MedicalEncounter2Prescription?: (Prescription | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly medicalEncounterMedicalEncounter2VitalSignId?: string | null;
}

type LazyMedicalEncounter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MedicalEncounter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly encounterDateTime?: string | null;
  readonly practitionerTypeSeen?: Practitioner | keyof typeof Practitioner | null;
  readonly patientComplaints?: string | null;
  readonly vitalSigns?: string | null;
  readonly practionerNotes?: string | null;
  readonly labOrders?: string | null;
  readonly pharmacyOrders?: string | null;
  readonly diagnosis?: string | null;
  readonly treatmentPlan?: string | null;
  readonly referralToSpecialists?: string | null;
  readonly recommendedFollowUp?: string | null;
  readonly dataTimeEncounterSubmitted?: string | null;
  readonly employeeIDWhoSubmitted?: number | null;
  readonly patientID: string;
  readonly MedicalEncounter2VitalSign: AsyncItem<VitalSign | undefined>;
  readonly MedicalEncounter2LabOrder: AsyncCollection<LabOrder>;
  readonly MedicalEncounter2Prescription: AsyncCollection<Prescription>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly medicalEncounterMedicalEncounter2VitalSignId?: string | null;
}

export declare type MedicalEncounter = LazyLoading extends LazyLoadingDisabled ? EagerMedicalEncounter : LazyMedicalEncounter

export declare const MedicalEncounter: (new (init: ModelInit<MedicalEncounter>) => MedicalEncounter) & {
  copyOf(source: MedicalEncounter, mutator: (draft: MutableModel<MedicalEncounter>) => MutableModel<MedicalEncounter> | void): MedicalEncounter;
}

type EagerPatient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly telephoneNumber?: string | null;
  readonly insuranceCarrierID?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly primaryCarePhysician?: string | null;
  readonly Patient2MedicalEncounters?: (MedicalEncounter | null)[] | null;
  readonly Patient2InsuranceCarrier?: InsuranceCarrier | null;
  readonly Patient2Physician?: Physician | null;
  readonly Patient2Appointment?: (Appointment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly patientPatient2InsuranceCarrierId?: string | null;
  readonly patientPatient2PhysicianId?: string | null;
}

type LazyPatient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly telephoneNumber?: string | null;
  readonly insuranceCarrierID?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly primaryCarePhysician?: string | null;
  readonly Patient2MedicalEncounters: AsyncCollection<MedicalEncounter>;
  readonly Patient2InsuranceCarrier: AsyncItem<InsuranceCarrier | undefined>;
  readonly Patient2Physician: AsyncItem<Physician | undefined>;
  readonly Patient2Appointment: AsyncCollection<Appointment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly patientPatient2InsuranceCarrierId?: string | null;
  readonly patientPatient2PhysicianId?: string | null;
}

export declare type Patient = LazyLoading extends LazyLoadingDisabled ? EagerPatient : LazyPatient

export declare const Patient: (new (init: ModelInit<Patient>) => Patient) & {
  copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

type EagerEquipmentMaintenance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentMaintenance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly problem?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly resolution?: string | null;
  readonly equipmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipmentMaintenance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EquipmentMaintenance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly problem?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly resolution?: string | null;
  readonly equipmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EquipmentMaintenance = LazyLoading extends LazyLoadingDisabled ? EagerEquipmentMaintenance : LazyEquipmentMaintenance

export declare const EquipmentMaintenance: (new (init: ModelInit<EquipmentMaintenance>) => EquipmentMaintenance) & {
  copyOf(source: EquipmentMaintenance, mutator: (draft: MutableModel<EquipmentMaintenance>) => MutableModel<EquipmentMaintenance> | void): EquipmentMaintenance;
}

type EagerEquipment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly department?: string | null;
  readonly owned?: boolean | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly leasingCompany?: string | null;
  readonly datePurchased?: string | null;
  readonly Equipment2EquipmentMaintenance?: (EquipmentMaintenance | null)[] | null;
  readonly Equipment2Vendor?: (Vendor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly department?: string | null;
  readonly owned?: boolean | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly leasingCompany?: string | null;
  readonly datePurchased?: string | null;
  readonly Equipment2EquipmentMaintenance: AsyncCollection<EquipmentMaintenance>;
  readonly Equipment2Vendor: AsyncCollection<Vendor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Equipment = LazyLoading extends LazyLoadingDisabled ? EagerEquipment : LazyEquipment

export declare const Equipment: (new (init: ModelInit<Equipment>) => Equipment) & {
  copyOf(source: Equipment, mutator: (draft: MutableModel<Equipment>) => MutableModel<Equipment> | void): Equipment;
}

type EagerVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly equipment?: string | null;
  readonly preferred?: boolean | null;
  readonly equipmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly equipment?: string | null;
  readonly preferred?: boolean | null;
  readonly equipmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vendor = LazyLoading extends LazyLoadingDisabled ? EagerVendor : LazyVendor

export declare const Vendor: (new (init: ModelInit<Vendor>) => Vendor) & {
  copyOf(source: Vendor, mutator: (draft: MutableModel<Vendor>) => MutableModel<Vendor> | void): Vendor;
}