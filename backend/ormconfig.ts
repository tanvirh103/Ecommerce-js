import { Category } from "src/entity/category.entity";
import { Product } from "src/entity/product.entity";
import { User } from "src/entity/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'test',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aa',
    entities: [User,Product,Category],
    synchronize: true,
  };
  
  export default config;