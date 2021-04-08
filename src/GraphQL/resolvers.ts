import ClientDao from '../models/ClientDao';

const client: ClientDao = new ClientDao();


export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => any }; } = {
    Query: {
        Client: async (_: any, {id}: {id: number | string}): Promise<any> => {
            return await client.getClient(id);
        },
        Clients: async (): Promise<any[]> => {
            return await client.getClients();
        },

        DatabaseClient: (): string => {
            return client.getConnection();
        }
    },

    Mutation: {
        CreateClient: async (_: any, {input}: {input: { [x: string]: string | number }}): Promise<any> => {
            
            return await client.createClients(input);
        },
        UpdateClient: async (_: any, {input}: {input: { [x: string]: string | number }}): Promise<any> => {
            return await client.editClient(input);
        },
        DeleteClient: async (_: any, {id}: {id: number | string }): Promise<any> => {
            return await client.deleteClients(id);
        },

        DatabaseClient: (_: any, { name }: {name: string}): boolean => {
            switch(name) {
                case 'postgres':
                case 'postgresql':
                    client.setPostgresqlDB();
                    return true;

                case 'mongo':
                case 'mongodb':
                    client.setMongoDB();
                    return true;
    
                case 'mariadb':
                case 'mysql':
                    client.setMysqlDB();
                    return true;
                
                default:
                    return false;
            }
        }
    }
};