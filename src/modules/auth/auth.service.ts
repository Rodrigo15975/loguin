import { Injectable } from '@nestjs/common'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
  login(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth'
  }
}
