import { DataSource } from 'typeorm';
import { CoffeeRefactor1724636289408 } from './src/migrations/1724636289408-CoffeeRefactor';
import { SchemaSync1724637304692 } from './src/migrations/1724637304692-SchemaSync';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { Coffee } from 'src/coffees/entities/coffee.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgresdb',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1724636289408, SchemaSync1724637304692],
});
