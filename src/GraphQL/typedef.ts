import { GraphQLSchema } from 'graphql';
import { loadSchemaSync, GraphQLFileLoader, addResolversToSchema } from 'graphql-tools';
import { join } from 'path';
import { resolvers } from './resolvers';

const schema: GraphQLSchema = loadSchemaSync(join(__dirname, './schema.graphql'), {
    loaders: [
        new GraphQLFileLoader()
    ]
});

const graphQL_Schema: GraphQLSchema = addResolversToSchema({
    schema,
    resolvers
});

export default graphQL_Schema;