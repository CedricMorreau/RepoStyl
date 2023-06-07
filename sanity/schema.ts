import { type SchemaTypeDefinition } from 'sanity'
import home from "./schemas/home"
import about from "./schemas/about"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, about],
}
