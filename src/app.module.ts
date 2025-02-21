import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { PrismaModule } from 'nestjs-prisma'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [UserModule, PrismaModule.forRoot(), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
