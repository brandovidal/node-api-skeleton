import type { NextFunction, Request, Response } from 'express'

import { HttpCode } from '../../types/http-code'

import UserController from './controller'

import { AppSuccess } from '../../utils/appSuccess'
import { logger } from '../../utils/logger'

const controller = new UserController()

// create user
export async function generateDescription (req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await controller.generateDescription(req.body)

    res.status(HttpCode.CREATED).json(AppSuccess(data))
  } catch (err) {
    logger.error(err)
    next(err)
  }
}
