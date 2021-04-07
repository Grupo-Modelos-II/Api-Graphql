import Client from '../models/Client';
import Database from '../database/databaseClient';

const database = new Database();


export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => any }; } = {
    Query: {
        Client: async (_: any, {id}: {id: number | string}): Promise<any> => {
            return await database.get(id, "Cliente");
        },
        Clients: async (): Promise<any[]> => {
            return await database.getAll("Cliente");
        }
    },

    Mutation: {
        CreateClient: (_: any, {input}: {input: { id: number | string }}): Client => {
            return new Client(input.id);
        },
        UpdateClient: (_: any, {input}: {input: { id: number | string }}): Client => {
            return new Client(input.id);
        },
        DeleteClient: (_: any, {input}: {input: { id: number | string }}): Client => {
            return new Client(input.id);
        }
    }
};