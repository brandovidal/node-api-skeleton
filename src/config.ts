import dotenv from 'dotenv'

dotenv.config()

const NODE_ENV = process.env.NODE_ENV ?? 'development'
const isProduction = NODE_ENV === 'production' ?? false

const config = {
  isProduction,
  NODE_ENV,
  PORT: process.env.PORT,
  CHATGPT_API_KEY: process.env.CHATGPT_API_KEY ?? ''
}

export default config
