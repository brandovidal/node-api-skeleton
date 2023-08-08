import { ChatGPTAPI } from 'chatgpt'

import isEmpty from 'just-is-empty'

import config from '../../config'
import BaseError from '../../utils/appError'

// TODO: Implement this function
export async function generateDescription(body: any): Promise<string> {
  const { content } = body

  const apiKey = config.OPENAI_API_KEY as string

  if (isEmpty(apiKey)) {
    throw new BaseError(403, 'api_key_not_found', 'API key not found')
  }

  const api = new ChatGPTAPI({
    apiKey,
    debug: true,
    completionParams: {
      model: 'gpt-3.5-turbo', // 'gpt-4' // 'gpt-3.5-turbo'
      temperature: 0.5,
      top_p: 0.8
    }
  })

  const response = await api.sendMessage(content)
  console.log('🚀 ~ file: repository.ts:26 ~ generateDescription ~ response:', response)

  return response.text
}

export async function removeBackgroundImage(body: any): Promise<any> {
  return Promise.resolve('removeBackgroundImage')
}

export async function recognitionObjectsImage(body: any): Promise<any> {
  return Promise.resolve('recognitionObjectsImage')
}
