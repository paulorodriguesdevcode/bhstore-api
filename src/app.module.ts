import { Module } from '@nestjs/common';
import { StoreController } from './store/controllers/store.controller';
import { StoreService } from './store/services/store.service';
import { StoreModule } from './store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    StoreModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),    
    ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class AppModule {}
