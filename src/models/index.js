// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Practitioner = {
  "PHYSICIAN": "PHYSICIAN",
  "NURSE": "NURSE",
  "PHYSICIAN_ASSISTANT": "PHYSICIAN_ASSISTANT"
};

const AppointmentType = {
  "URGENT": "URGENT",
  "ROUNTINE": "ROUNTINE",
  "FOLLOW_UP_VISIT": "FOLLOW_UP_VISIT"
};

const Status = {
  "FINISHED": "FINISHED",
  "IN_PROGRESS": "IN_PROGRESS",
  "UNFINISHED": "UNFINISHED"
};

const { ServiceProvidedByClinic, LabTest, Prescription, LabOrder, VitalSign, WorkSchedule, Appointment, Medication, PhysicianSchedule, Physician, InsuranceCarrier, MedicalEncounter, Patient, EquipmentMaintenance, Equipment, Vendor, AppointmentPicker, WeekSchedule, Day } = initSchema(schema);

export {
  ServiceProvidedByClinic,
  LabTest,
  Prescription,
  LabOrder,
  VitalSign,
  WorkSchedule,
  Appointment,
  Medication,
  PhysicianSchedule,
  Physician,
  InsuranceCarrier,
  MedicalEncounter,
  Patient,
  EquipmentMaintenance,
  Equipment,
  Vendor,
  Practitioner,
  AppointmentType,
  Status,
  AppointmentPicker,
  WeekSchedule,
  Day
};