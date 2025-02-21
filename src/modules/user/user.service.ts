import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    await this.prismaService.user.create({
      data: {
        password: '123456',
        role: {
          connect: {
            id: 1,
          },
        },
        username: '12345',
      },
    })
  }

  async findAll() {
    return await this.prismaService.user.findMany({
      orderBy: {
        created_at: 'desc',
      },
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto)
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
