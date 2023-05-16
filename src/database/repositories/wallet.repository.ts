import { DataSource } from 'typeorm';
import { Wallet } from 'src/database/entities/wallet.entity';

export const walletRepository = [
  {
    provide: 'WALLET_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Wallet),
    inject: ['DATA_SOURCE'],
  },
];
