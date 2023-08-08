import { ChatGPTAPI } from 'chatgpt'

import config from '../../config'

// TODO: Implement this function
export async function generateDescription (body: any): Promise<string> {
  const { content } = body

  const api = new ChatGPTAPI({
    apiKey: config.OPENAI_API_KEY,
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
