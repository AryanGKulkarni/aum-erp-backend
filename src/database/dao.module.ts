import { Module, Global } from '@nestjs/common';
import { DAO_PROVIDERS } from './dao-providers';

@Global()
@Module({
  providers: DAO_PROVIDERS,
  exports: DAO_PROVIDERS,
})
export class DaoModule {}
