import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { createBicycleModule } from './bicycle/infra/injection';
import { createUserModule } from './user/infra/injection';

const container = new Container();

container.load(createBicycleModule());
container.load(createUserModule());

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

const app = server.build();

app.listen(3000, () => {
  console.log('server is running');
});