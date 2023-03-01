import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerMedicalEncounter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MedicalEncounter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly encounterDateTime?: string | null;
  readonly practitionerTypeSeen?: string | null;
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
  readonly employeeIDWhoSubmitted?: string | null;
  readonly patientID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedicalEncounter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MedicalEncounter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly encounterDateTime?: string | null;
  readonly practitionerTypeSeen?: string | null;
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
  readonly employeeIDWhoSubmitted?: string | null;
  readonly patientID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly patientName?: string | null;
  readonly telelphoneNumber?: string | null;
  readonly insuranceCarrierID?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly primaryCarePhysician?: string | null;
  readonly listCurrentMedications?: string | null;
  readonly listScheduledAppointments?: string | null;
  readonly MedicalEncounters?: (MedicalEncounter | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPatient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Patient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly patientName?: string | null;
  readonly telelphoneNumber?: string | null;
  readonly insuranceCarrierID?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly primaryCarePhysician?: string | null;
  readonly listCurrentMedications?: string | null;
  readonly listScheduledAppointments?: string | null;
  readonly MedicalEncounters: AsyncCollection<MedicalEncounter>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Patient = LazyLoading extends LazyLoadingDisabled ? EagerPatient : LazyPatient

export declare const Patient: (new (init: ModelInit<Patient>) => Patient) & {
  copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

type EagerVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly vendorName?: string | null;
  readonly vendorAddress?: string | null;
  readonly typeOfEquipment?: string | null;
  readonly preferredVendor?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly vendorName?: string | null;
  readonly vendorAddress?: string | null;
  readonly typeOfEquipment?: string | null;
  readonly preferredVendor?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vendor = LazyLoading extends LazyLoadingDisabled ? EagerVendor : LazyVendor

export declare const Vendor: (new (init: ModelInit<Vendor>) => Vendor) & {
  copyOf(source: Vendor, mutator: (draft: MutableModel<Vendor>) => MutableModel<Vendor> | void): Vendor;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}