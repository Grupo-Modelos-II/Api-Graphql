import { createPool } from 'mysql';
import { keys } from '../config/keys';
import { promisify } from 'util';
import ConnectionDatabase from './Connection';
import  { getUpdateText,getValueText } from '../functions/proccesData';

export default class MysqlConnection extends ConnectionDatabase{

    private poolDatabase:any;

    constructor(){
        super();
    }

    public connect(): void {
        this.poolDatabase = createPool(keys);
        this.poolDatabase.query = promisify(this.poolDatabase.query);
    }

    protected async query(queryString: string,data:any[] = []): Promise<any> {
        return await this.poolDatabase.query(queryString,data);
    }

    public async getAll(table: string): Promise<any[]> {
        return await this.query(`SELECT * FROM ${table};`);
    }

    public async get(id: number, table: string): Promise<any> {
        return await this.query(`SELECT * FROM ${table} WHERE id = ?;`,[id]);
    }

    public async create(data: any[], table: string): Promise<any> {
        return await this.query(`INSERT INTO ${table} ${getValueText(data)}`,data);
    }

    public async delete(id: number, table: string): Promise<any> {
        return await this.query(`DELETE FROM ${table} WHERE id = ?;`,[id]);
    }

    public async update(data: any, table: string, id: number): Promise<any> {
        return await this.query(`UPDATE ${table} SET ${getUpdateText(table,data)} WHERE id = ?;`,[id]);
    }

}



