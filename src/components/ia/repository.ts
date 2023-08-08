import { ChatGPTAPI } from 'chatgpt'

import config from '../../config'

const CHATGPT_URL = new URL('https://api.openai.com/v1/chat/completions')
const OPENAI_API_KEY = config.CHATGPT_API_KEY

// TODO: Implement this function
export async function generateDescription (content: any): Promise<string> {
  console.log("🚀 ~ file: repository.ts:10 ~ generateDescription ~ content:", content)
  const api = new ChatGPTAPI({
    apiKey: OPENAI_API_KEY,
    debug: true,
    // completionParams: {
    //   model: 'gpt-3.5-turbo', // 'gpt-4'
    //   // temperature: 0.5,
    //   // top_p: 0.8
    // }
  })

  const response = await api.sendMessage(content)
  console.log('🚀 ~ file: repository.ts:26 ~ generateDescription ~ response:', response)

  const message = Promise.resolve('Hello World')

  return message
}
