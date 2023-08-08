import { generateDescription } from './repository'

import { GenerateDescription } from '../../interfaces/ia'

export default class UserController {
  /**
   * The function "generateDescription" takes a request body and returns a promise that resolves to a
   * string.
   * @param {GenerateDescription} requestBody - The `requestBody` parameter is an object of type
   * `GenerateDescription`. It is used as input to the `generateDescription` function.
   * @returns A string is being returned.
   */
  public async generateDescription(requestBody: GenerateDescription): Promise<string> {
    return await generateDescription(requestBody)
  }
}
