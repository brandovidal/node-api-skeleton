import { Router } from 'express'

// Schemas
import { createSchema } from './schema'

// Middlewarea
import { validate } from '../../middlewares/validate'

// Handler
import { generateDescription } from './handler'

const router = Router()

router.post('/chatgpt/generate-description', [validate(createSchema)], generateDescription)

export default router
