import { createConnection } from 'mysql';
import { keys } from '../config/keys';
import { promisify } from 'util';
import Connection from './Connection';
import  { getUpdateText,getValueText } from '../functions/proccesData';

export default class MysqlConnection implements Connection{

    private poolDatabase:any;

    constructor(){
        this.connect();
    }

    connect(): void {
        this.poolDatabase = createConnection(keys);
        this.poolDatabase.query = promisify(this.poolDatabase.query);
    }

    disconnect(): void {
        this.poolDatabase.disconnect();
    }

    async query(queryString: string,data:any[] = []): Promise<any> {
        return await this.poolDatabase.query(queryString,data);
    }

    async getAll(table: string): Promise<any> {
        return await this.query(`SELECT * FROM ${table};`);
    }

    async get(id: number, table: string): Promise<any> {
        return await this.query(`SELECT * FROM ${table} WHERE id = ?;`,[id]);
    }

    async create(data: any[], table: string): Promise<any> {
        return await this.query(`INSERT INTO ${table} ${getValueText(data)}`,data);
    }

    async delete(id: number, table: string): Promise<any> {
        return await this.query(`DELETE FROM ${table} WHERE id = ?;`,[id]);
    }

    async update(data: any, table: string, id: number): Promise<any> {
        return await this.query(`UPDATE ${table} SET ${getUpdateText(table,data)} WHERE id = ?;`,[id]);
    }

}



