import { type SchemaTypeDefinition } from 'sanity'
import home from "./schemas/home"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home],
}
