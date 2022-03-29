import { normalize, schema } from 'normalizr'

const coursesSchema = new schema.Entity('courses')

export default function coursesNormalizer(data) {
  return normalize(data, [coursesSchema])
}
