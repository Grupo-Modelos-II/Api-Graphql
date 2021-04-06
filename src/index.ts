//Dependencias necesarias
import express, { Express } from 'express';
import { graphqlHTTP } from 'express-graphql';
import morgan from 'morgan';

import schema from './GraphQL/typedef';

const app: Express = express();

app.use(morgan('dev'));

//Implementacion de graphql para la API
app.use('/', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), (): void => {
    console.log(`Ejecutando GraphQL en ${process.env.HOST || 'localhost'}:${app.get('port')}/`);
});