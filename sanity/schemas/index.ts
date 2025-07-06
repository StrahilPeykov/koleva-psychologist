import { type SchemaTypeDefinition } from 'sanity'
import article from './article'
import event from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, event],
}