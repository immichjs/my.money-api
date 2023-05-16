import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { userRepository } from './database/repositories/user.repository';
import { categoryRepository } from './database/repositories/category.repository';
import { walletRepository } from './database/repositories/wallet.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    ...userRepository,
    ...categoryRepository,
    ...walletRepository,
  ],
})
export class AppModule {}
