// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vendor, Todo } = initSchema(schema);

export {
  Vendor,
  Todo
};