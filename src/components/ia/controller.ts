
import { generateDescription } from './repository'

// import { Post, Route, Body, SuccessResponse, Response, OperationId, Tags } from 'tsoa'

// import type { ForbiddenErrorJSON, InternalErrorJSON, ValidateErrorJSON } from '../../interfaces/response'

// @Tags('IA')
// @Route('/api/ia')
export default class UserController {
//   /**
//    * The `generateDescription` function takes in a `User` object and returns a promise of a User object
//    * @param {User} requestBody - User
//    * @returns A promise of a user object
//    */
//   @Response<InternalErrorJSON>(500, 'Internal Server Error')
//   @Response<ForbiddenErrorJSON>(403, 'Validation Failed')
//   @Response<ValidateErrorJSON>(400, 'Validation Failed')
//   @SuccessResponse('201', 'Created')
//   @Post('/')
//   @OperationId('generateDescription')
  // public async generateDescription (@Body() requestBody: any): Promise<string> {
  public async generateDescription (requestBody: any): Promise<string> {
    return await generateDescription(requestBody)
  }
}
