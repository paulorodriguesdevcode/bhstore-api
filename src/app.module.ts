import { Module } from '@nestjs/common';
import { StoreController } from './modules/store/controllers/store.controller';
import { StoreService } from './modules/store/services/store.service';
import { StoreModule } from './modules/store/store.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';


@Module({
  imports: [
    StoreModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }), AuthModule, UsersModule,    
    ],
  controllers: [StoreController],
  providers: [StoreService],

})
export class AppModule {} 
