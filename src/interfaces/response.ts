import type { HttpCode } from '../types/http-code'

export interface InternalErrorJSON {
  status: HttpCode.INTERNAL_SERVER_ERROR
  code: 'internal_server_error'
  message: 'Internal server error'
  error: string | null
}
export interface ValidationType {
  name: string | number
  path?: string | number
  code?: string
  message: string
}
export interface ErrorType {
  code: number
  name: string
  message: string
  details?: ValidationType[] | null
}
export interface PaginationType {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
export interface MetaType {
  pagination: PaginationType
}
export interface ResponseType {
  status?: boolean
  data?: object | string | null
  meta?: MetaType | object | null
  error?: ErrorType | object | null
}

interface ValidationErrorType {
  path: string
  message: string
}
export interface ValidateErrorJSON {
  status: HttpCode.BAD_REQUEST
  code: 'validation_error'
  message: 'User validation with erros'
  error: ValidationErrorType[]
}

export interface ForbiddenErrorJSON {
  status: HttpCode.FORBIDDEN
  code: 'internal_server_error'
  message: 'Internal server error'
  error: string | null
}
export interface Response<T> extends ResponseType {
  data: T[]
}
