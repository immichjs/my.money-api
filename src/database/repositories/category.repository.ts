import { DataSource } from 'typeorm';
import { Category } from 'src/database/entities/category.entity';

export const categoryRepository = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: ['DATA_SOURCE'],
  },
];
