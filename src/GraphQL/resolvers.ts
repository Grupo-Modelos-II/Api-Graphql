class Client {
    private id: number | string = 0;
    constructor(id: number | string) {this.id = id;}
};

export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => Client | Client[]; }; } = {
    Query: {
        Client: (_: any, {id}: {id: number | string}): Client => {
            return new Client(id);
        },
        Clients: (): Client[] => {
            console.log('Get Clients');
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