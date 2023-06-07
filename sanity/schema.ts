import { type SchemaTypeDefinition } from 'sanity'
import home from "./schemas/home"
import projectOverview from "./schemas/projectOverview"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, projectOverview],
}
