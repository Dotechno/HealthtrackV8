// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MedicalEncounter, Patient, Vendor, Todo } = initSchema(schema);

export {
  MedicalEncounter,
  Patient,
  Vendor,
  Todo
};