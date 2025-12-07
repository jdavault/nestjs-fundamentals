import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key.guard';

@Module({
  imports: [CommonModule],
  providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
  exports: [],
})
export class CommonModule {}
