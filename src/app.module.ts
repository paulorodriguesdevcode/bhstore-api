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
    TypeOrmModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: false,      
      migrationsRun: false,
      logging: true,
    }),
    inject: [ConfigService],
  }),],
  controllers: [StoreController],
  providers: [StoreService],
})
export class AppModule {}
