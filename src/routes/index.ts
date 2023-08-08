import { Router, type NextFunction, type Request, type Response } from 'express'
// import swaggerUi from 'swagger-ui-express'

// // Component
import iaRouter from '../components/ia/routes'

// // Util
import type BaseError from '../utils/appError'
import { AppError } from '../utils/appError'

// // Type
import { HttpCode } from '../types/http-code'

const router = Router()

router.use('/api/ia', iaRouter)

router.get('/', function (req, res) {
  res.send('Node API is running!')
})

// router.use(
//   '/docs',
//   swaggerUi.serve,
//   swaggerUi.setup(undefined, {
//     swaggerOptions: {
//       url: '/swagger.json'
//     }
//   })
// )

router.all('*', (req: Request, res: Response, next: NextFunction): void => {
  next(AppError(HttpCode.NOT_FOUND, 'route_not_found', `Route ${req.originalUrl} not found`))
})

router.use((err: BaseError, req: Request, res: Response, next: NextFunction) => {
  const { message, error } = err

  res.status(error.code).json(AppError(error.code, error.name, message))
})

export default router
