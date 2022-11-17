import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UniverseController } from './universe.controller';
import { universeProviders } from './universe.providers';
import { UniverseService } from './universe.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UniverseController],
  providers: [...universeProviders, UniverseService],
  exports: [],
})
export class UniverseModule {}
