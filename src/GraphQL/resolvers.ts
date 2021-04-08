import ClientDao from '../models/ClientDao';

import { setDatabaseType, getDatabaseType } from '../database/config/databaseConfig';
import Client from '../models/Client';

let client: ClientDao = new ClientDao();


export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => any }; } = {
    Query: {
        Client: async (_: any, {id}: {id: number | string}): Promise<Client> => {
            return await client.getClient(id);
        },
        Clients: async (): Promise<Client[]> => {
            return await client.getClients();
        },

        DatabaseClient: (): string => {
            return getDatabaseType();
        }
    },

    Mutation: {
        CreateClient: async (_: any, {input}: {input: { [x: string]: string | number }}): Promise<Client> => {
            
            return await client.createClients(input);
        },
        UpdateClient: async (_: any, {input}: {input: { [x: string]: string | number }}): Promise<Client> => {
            return await client.editClient(input);
        },
        DeleteClient: async (_: any, {id}: {id: number | string }): Promise<Client> => {
            return await client.deleteClients(id);
        },

        DatabaseClient: (_: any, { name }: {name: string}): string => {
            setDatabaseType(name);
            client = new ClientDao();
            return getDatabaseType();
        }
    }
};