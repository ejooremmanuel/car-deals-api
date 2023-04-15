import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ApiNotFoundResponse } from '@nestjs/swagger';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Mirabel',
    },
    {
      id: 2,
      name: 'Grace',
    },
    {
      id: 3,
      name: 'Daniel',
    },
  ];
  create(createUserDto: CreateUserDto): User {
    const userId = Math.random();
    const user = { id: userId, ...createUserDto };
    this.users.push(user);
    return user;
  }

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findOne(id: number) {
    if (!id) {
      throw new BadRequestException();
    }
    const findUsers = this.users.find((user) => user.id === id);
    if (!findUsers) {
      throw new NotFoundException();
    }
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.users.filter((user) => user.id !== id);
    return `user deleted`;
  }
}
