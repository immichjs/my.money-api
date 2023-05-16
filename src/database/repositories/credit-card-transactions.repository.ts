import { DataSource } from 'typeorm';
import { CreditCardTransactions } from 'src/database/entities/credit-card-transaction.entity';

export const creditCardTransactionRepository = [
  {
    provide: 'CREDIT_CARD_TRANSACTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CreditCardTransactions),
    inject: ['DATA_SOURCE'],
  },
];
