import PostgresqlConnection from '../database/clients/PostgresqlConnection';

const database = new PostgresqlConnection();


export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => any }; } = {
    Query: {
        Client: async (_: any, {id}: {id: number | string}): Promise<any> => {
            return await database.get('Cliente', id);
        },
        Clients: async (): Promise<any[]> => {
            return await database.getAll('Cliente');
        }
    },

    Mutation: {
        CreateClient: async (_: any, {input}: {input: { [x: string]: string | number }}): Promise<any> => {
            
            return await database.create('Cliente', input);
        },
        UpdateClient: async (_: any, {input}: {input: { [x: string]: string | number }}): Promise<any> => {
            return await database.update('Cliente', input);
        },
        DeleteClient: async (_: any, {id}: {id: number | string }): Promise<any> => {
            return await database.delete('Cliente', id);
        }
    }
};