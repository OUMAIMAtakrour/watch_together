import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/STREAM',{
    autoCreate:true,
  }), RoomsModule, AuthModule, PlaylistModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
