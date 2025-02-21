import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useLogger(
    process.env.NODE_ENV === 'development'
      ? ['log', 'debug', 'error', 'warn', 'verbose']
      : ['error', 'warn', 'log'],
  )
  app.enableCors({
    origin: true,
    credentials: true,
  })
  const PORT = process.env.PORT || 3000
  await app.listen(PORT)
}
bootstrap()
  .then(() => {
    if (process.env.NODE_ENV === 'development')
      return Logger.verbose(
        'Server running on: ',
        process.env.PORT,
        'NODE_ENV: ',
        process.env.NODE_ENV,
      )
    Logger.log(
      'Server running on: ',
      process.env.PORT,
      'NODE_ENV: ',
      process.env.NODE_ENV,
    )
  })
  .catch((err) => Logger.error(err))
