import Client from '../models/Client';


export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => any }; } = {
    Query: {
        Client: (_: any, {id}: {id: number | string}): Client => {
            return new Client(id);
        },
        Clients: async (): Promise<Client[]> => {
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