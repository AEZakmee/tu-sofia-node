import { DataSource } from 'typeorm';
import { Universe } from './universe.entity';

export const universeProviders = [
  {
    provide: 'UNIVERSE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Universe),
    inject: ['DATA_SOURCE'],
  },
];
