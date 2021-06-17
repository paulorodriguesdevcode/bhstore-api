import { Module } from '@nestjs/common';
import { StoreController } from './store/controllers/store.controller';
import { StoreService } from './store/services/store.service';
import { StoreModule } from './store/store.module';

@Module({
  imports: [StoreModule],
  controllers: [StoreController],
  providers: [StoreService],
})
export class AppModule {}
