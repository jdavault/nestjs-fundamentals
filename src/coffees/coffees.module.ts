/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

// class ConfigService {}
// class DevelopmentConfigService {}
// class ProductionConfigService {}

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['My Brand New Buddy Brew', 'The Newest Nescafe'];
  }
}

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeeBrandsFactory,
    CoffeesService,
    // {
    //   provide: ConfigService,
    //   useClass:
    //     process.env.NODE_ENV === 'development'
    //       ? DevelopmentConfigService
    //       : ProductionConfigService,
    // },
    {
      provide: COFFEE_BRANDS,
      useFactory: () => ['My Buddy Brew', 'Nescafe'],
      scope: Scope.TRANSIENT,
    },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: (coffeeBrandsFactory: CoffeeBrandsFactory) =>
    //     coffeeBrandsFactory.create(),
    //   inject: [CoffeeBrandsFactory], // any array of providers
    // },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: async (connection: Connection): Promise<string[]> => {
    //     // const coffeeBrands = await connection.query('SELECT * ...');
    //     const coffeeBrands = await Promise.resolve(['Buddy Brew', 'Nescafe']);
    //     console.log('[!] Async Factory');
    //     return coffeeBrands;
    //   },
    //   inject: [Connection], // any array of provider
    // },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
