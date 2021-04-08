import MongoConnection from '../database/clients/MongoConnection';
import Client from '../models/Client';

const database = new MongoConnection();


export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => any }; } = {
    Query: {
        Client: async (_: any, {id}: {id: number | string}): Promise<any> => {
            return await database.get(id, 'Cliente');
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
            return await null;
        },
        DeleteClient: async (_: any, {id}: {id: number | string }): Promise<any> => {
            return await null;
        }
    }
};