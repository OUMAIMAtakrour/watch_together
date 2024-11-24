import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User, UserDocument } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private authModel:Model<UserDocument>){}

  async create(createAuthDto: CreateAuthDto):Promise<UserDocument> {
    const createdUser=new this.authModel(createAuthDto);
    return createdUser.save();
  }

  findAll():Promise<UserDocument[]> {
    return this.authModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  login(email:string):Promise<User>{
    return this.authModel.findOne({email})
  }
}
