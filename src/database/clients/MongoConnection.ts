import { Collection, MongoClient } from 'mongodb';
import { keys } from '../config/keys';
import ConnectionDatabase from "./Connection";
import { getIdDB, getUpdateText, getValueText, toArray } from '../functions/proccesData';

export default class MongoConnection extends ConnectionDatabase {

    protected poolDatabase!: MongoClient;

    constructor() {
        super();
    }

    protected async connect(): Promise<void> {
        this.poolDatabase = new MongoClient(`mongodb://${keys.host}:${keys.port}`, { useUnifiedTopology: true });
        await this.poolDatabase.connect();
    }

    protected query(collection: string): any {
        return this.poolDatabase.db(keys.database).collection(collection);
    }

    public async getAll(table: string): Promise<any[]> {
        return await this.query(table).find().toArray();
    }

    public async get(id: number | string, table: string): Promise<any> {
        return await this.query(table).find({ id: id }).toArray()[0];
    }

    public async create(table: string, data: any): Promise<any> {
        return (await this.query(table).insertOne(data)).ops[0];
    }

    public async delete(id: number | string, table: string): Promise<any> {
        return (await this.query(table).findOneAndDelete({ id: id })).value;
    }

    public async update(data: any, table: string): Promise<any> {
        return (await this.query(table).findOneAndUpdate({ id: data.id }, { $set: data })).value;
    }

}