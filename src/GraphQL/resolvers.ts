import Client from '../models/Client';
import mysql from '../database/MysqlConnection';
import postgres from '../database/PostgresqlConnection';


export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => Client | Client[]; }; } = {
    Query: {
        Client: (_: any, {id}: {id: number | string}): Client => {
            new mysql();
            new postgres();
            return new Client(id);
        },
        Clients: (): Client[] => {
            
            return [new Client(0)];
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