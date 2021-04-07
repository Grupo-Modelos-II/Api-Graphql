import { keys } from '../config/keys';
import { Pool } from 'pg';
import ConnectionDatabase from "./Connection";
import { getIdDB, getUpdateText, getValueText } from '../functions/proccesData';

export default class PostgresqlConnection extends ConnectionDatabase {

    private poolDatabase: any;

    constructor() {
        super();
    }

    public connect(): void {
        this.poolDatabase = new Pool(keys);
        this.poolDatabase.connect();
    }

    public async getAll(table: string): Promise<any[]> {
        const query: string = `SELECT * FROM ${table};`;
        return (await this.poolDatabase.query(query)).rows;
    };

    public async get(id: number, table: string): Promise<any> {
        const query: string = `SELECT * FROM ${table} WHERE ${getIdDB(table)} = $1;`;
        return (await this.poolDatabase.query(query, [id])).rows[0];
    };

    public async create(table: string, data: any): Promise<any> {
        const query: string = `INSERT INTO ${table}${getValueText(data)} RETURNING *;`;
        return (await this.poolDatabase.query(query, data.getArray())).rows[0];
    };

    public async delete(id: number, table: string): Promise<any> {
        const query: string = `DELETE FROM ${table} WHERE ${getIdDB(table)} = $1 RETURNING *;`;
        return (await this.poolDatabase.query(query, [id])).rows[0];
    };

    public async update(table: string, data: any): Promise<any> {
        const query: string = `UPDATE ${table} SET ${getUpdateText(table, data)} RETURNING *;`;
        return (await this.poolDatabase.query(query, data.getArray())).rows[0];
    };

    protected async query(query: string, array: any[] = []): Promise<any> {
        return (await this.poolDatabase.query(query, array)).rows;
    };
}