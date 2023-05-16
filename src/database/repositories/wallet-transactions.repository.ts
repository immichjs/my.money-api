import { DataSource } from 'typeorm';
import { WalletTransaction } from 'src/database/entities/wallet-transaction.entity';

export const walletTransactionRepository = [
  {
    provide: 'WALLET_TRANSACATION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(WalletTransaction),
    inject: ['DATA_SOURCE'],
  },
];
