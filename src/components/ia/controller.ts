import { generateDescription } from './repository'

import { Post, Route, Body, SuccessResponse, Response, OperationId, Tags } from 'tsoa'

import type { ForbiddenErrorJSON, InternalErrorJSON, ValidateErrorJSON } from '../../interfaces/response'
import { GenerateDescription } from '../../interfaces/ia'

@Tags('IA')
@Route('/api/ia')
export default class UserController {
  /**
   * The function "generateDescription" takes a request body as input and returns a promise that
   * resolves to a string.
   * @param {GenerateDescription} requestBody - The `requestBody` parameter is of type `any`, which means it can accept
   * any data type. It is passed as an argument to the `generateDescription` function.
   * @returns a Promise that resolves to a string.
   */
  @Response<InternalErrorJSON>(500, 'Internal Server Error')
  @Response<ForbiddenErrorJSON>(403, 'Validation Failed')
  @Response<ValidateErrorJSON>(400, 'Validation Failed')
  @SuccessResponse('201', 'Created')
  @Post('/')
  @OperationId('generateDescription')
  public async generateDescription(@Body() requestBody: GenerateDescription): Promise<string> {
    return await generateDescription(requestBody)
  }
}
