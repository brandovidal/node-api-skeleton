import { object, string } from 'zod'

export const createSchema = object({
  body: object({
    content: string({
      required_error: 'content is required'
    })
  })
})
