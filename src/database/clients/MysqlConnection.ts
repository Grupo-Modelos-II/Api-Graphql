import { createPool, Pool, QueryFunction, Query } from 'mysql';
import { keys } from '../config/keys';
import { promisify } from 'util';
import ConnectionDatabase from './Connection';
import  { getIdDB, getUpdateText,getValueText, toArray } from '../functions/proccesData';

export default class MysqlConnection extends ConnectionDatabase {

    protected poolDatabase!: Pool;

    constructor(){
        super();
    }

    protected connect(): void {
        this.poolDatabase = createPool(keys);
        this.poolDatabase.query = promisify(this.poolDatabase.query) as unknown as QueryFunction;
    }

    protected async query(queryString: string, data: any[] = []): Promise<any> {
        return await this.poolDatabase.query(queryString, data);
    }

    public async getAll(table: string): Promise<any> {
        return await this.query(`SELECT * FROM ${table};`);
    }

    public async get(id: number | string, table: string): Promise<any> {
        return (await this.query(`SELECT * FROM ${table} WHERE ${getIdDB(table)} = ?;`, [id]))[0];
    }

    public async create(data: any[], table: string): Promise<any> {
        return (await this.query(`INSERT INTO ${table} ${getValueText(table, data)} RETURNING *;`, data))[0];
    }

    public async delete(id: number | string, table: string): Promise<any> {
        return (await this.query(`DELETE FROM ${table} WHERE ${getIdDB(table)} = ?;`, [id]))[0];
    }

    public async update(data: any, table: string): Promise<any> {
        return (await this.query(`UPDATE ${table} SET ${getUpdateText(table,data)} WHERE id = ? RETURNING *;`, toArray(table, data)))[0];
    }

}



