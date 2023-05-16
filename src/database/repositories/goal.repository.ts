import { DataSource } from 'typeorm';
import { Goal } from 'src/database/entities/goal.entity';

export const goalRepository = [
  {
    provide: 'GOAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Goal),
    inject: ['DATA_SOURCE'],
  },
];
