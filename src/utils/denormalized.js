import { denormalize, schema } from 'normalizr';

export const denormalized = (entities, ids, fields) => {
  const words = new schema.Entity(fields);
  const mySchema = { [fields]: [words] };
  const data = { [fields]: entities };
  return denormalize({ [fields]: ids }, mySchema, data);
};
