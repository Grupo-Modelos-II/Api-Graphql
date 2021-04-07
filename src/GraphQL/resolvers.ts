import Client from '../models/Client';
import Mysql from '../database/MysqlConnection';
import Postgres from '../database/PostgresqlConnection';


export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => any }; } = {
    Query: {
        Client: (_: any, {id}: {id: number | string}): Client => {
            return new Client(id);
        },
        Clients: async (): Promise<Client[]> => {
            const mysql = new Mysql();
            const postgres = new Postgres();
            console.log(await postgres.get(1, "Cliente"));
            console.log(await mysql.get(2, "Cliente"));
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