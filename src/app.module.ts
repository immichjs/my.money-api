import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './modules/users/users.module'
import { User } from './entities/user'
import { Phone } from './entities/phone'
import { Asset } from './entities/asset'
import { Benefits } from './entities/benefits'
import { Category } from './entities/category'
import { Contribution } from './entities/contribution'
import { Expense } from './entities/expense'
import { Income } from './entities/income'
import { Payment } from './entities/payment'
import { TypeOfExpense } from './entities/typeOfExpense'
import { TypeOfIncome } from './entities/typeOfIncome'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'my.money',
      entities: [
        User,
        Phone,
        Asset,
        Benefits,
        Category,
        Contribution,
        Expense,
        Income,
        Payment,
        TypeOfExpense,
        TypeOfIncome,
      ],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
