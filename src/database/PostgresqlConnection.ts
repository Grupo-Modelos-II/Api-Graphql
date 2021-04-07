import { keys } from '../config/keys';
import { Pool } from 'pg';
import Connection from "./Connection";
import { getIdDB, getUpdateText, getValueText } from '../functions/proccesData';

export default class PostgresqlConnection implements Connection {

    private poolDatabase: any;

    constructor() {
        this.connect();
    }

    connect(): void {
        this.poolDatabase = new Pool(keys);
        this.poolDatabase.connect();
    }

    disconnect(): void {}
    //Funciones internas de base de datos con las operaciones basicas a realizar

    async getAll(table: string): Promise<any[]> {
        const query: string = `SELECT * FROM ${table};`;
        return (await this.poolDatabase.query(query)).rows;
    };

    async get(id: number, table: string): Promise<any> {
        const query: string = `SELECT * FROM ${table} WHERE ${getIdDB(table)} = $1;`;
        return (await this.poolDatabase.query(query, [id])).rows[0];
    };

    async create(table: string, data: any): Promise<any> {
        const query: string = `INSERT INTO ${table}${getValueText(data)} RETURNING *;`;
        return (await this.poolDatabase.query(query, data.getArray())).rows[0];
    };

    async delete(id: number, table: string): Promise<any> {
        const query: string = `DELETE FROM ${table} WHERE ${getIdDB(table)} = $1 RETURNING *;`;
        return (await this.poolDatabase.query(query, [id])).rows[0];
    };

    async update(table: string, data: any): Promise<any> {
        const query: string = `UPDATE ${table} SET ${getUpdateText(table, data)} RETURNING *;`;
        return (await this.poolDatabase.query(query, data.getArray())).rows[0];
    };

    async query(query: string, array: any[] = []): Promise<any> {
        return (await this.poolDatabase.query(query, array)).rows;
    };
}