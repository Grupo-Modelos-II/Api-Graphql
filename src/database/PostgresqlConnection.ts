import { keys } from '../config/keys';
import { Pool } from 'pg';
import Connection from "./Connection";
import {  } from '../'

export default class PostgresqlConnection implements Connection {

    private poolDatabase: Pool;

    constructor() {
        this.connect();
    }

    connect(): void {
        this.poolDatabase = new Pool(keys);
        this.poolDatabase.connect();
    }

    disconnect(): void {}
    //Funciones internas de base de datos con las operaciones basicas a realizar

    async getAll(table: string): Promise<{ [x: string]: any; }[]> {
        const query: string = `SELECT * FROM ${table};`;
        return (await this.poolDatabase.query(query)).rows;
    };

    async getById(table: string, id: number | string): Promise<{ [x: string]: any; }> {
        const query: string = `SELECT * FROM ${table} WHERE ${getIdDB(table)} = $1;`;
        return (await this.poolDatabase.query(query, [id])).rows[0];
    };

    async createReg(table: string, object: General): Promise<{ [x: string]: any; }> {
        const query: string = `INSERT INTO ${table}${getValueText(object)} RETURNING *;`;
        return (await this.poolDatabase.query(query, object.getArray())).rows[0];
    };

    async deleteReg(table: string, id: number | string): Promise<{ [x: string]: any; }> {
        const query: string = `DELETE FROM ${table} WHERE ${getIdDB(table)} = $1 RETURNING *;`;
        return (await this.poolDatabase.query(query, [id])).rows[0];
    };

    async updateReg(table: string, object: General): Promise<{ [x: string]: any; }> {
        const query: string = `UPDATE ${table} SET ${getUpdateText(table, object)} RETURNING *;`;
        return (await this.poolDatabase.query(query, object.getArray())).rows[0];
    };

    async query(query: string, array: any[] = []): Promise<{ [x: string]: any; }[]> {
        return (array.length > 0) ? (await this.poolDatabase.query(query, array)).rows : (await this.poolDatabase.query(query)).rows;
    };
}