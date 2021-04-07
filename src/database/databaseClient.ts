import ConnectionDatabase from './clients/Connection';
import MysqlConnection from './clients/MysqlConnection';
import PostgresqlConnection from './clients/PostgresqlConnection';
import config from './config/databaseConfig';

export default class DatabaseClient {
    private database!: ConnectionDatabase;

    constructor() {
        this.setDatabaseClient(config);
    }

    public setDatabaseClient(client: string): void {
        switch(client) {
            case 'postgres':
            case 'postgresql':
                this.database = new PostgresqlConnection();
                break;

            case 'mariadb':
            case 'mysql':
            default:
                this.database = new MysqlConnection();
        }
    }

    public async getAll(table: string): Promise<any[]> {
        return await this.database.getAll(table);
    }

    public async get(id: number | string, table: string): Promise<any[]> {
        return await this.database.get(id, table);
    }

    public async create(data: any, table: string): Promise<any[]> {
        return await this.database.create(data, table);
    }

    public async delete(id: number | string, table: string): Promise<any[]> {
        return await this.database.delete(id, table);
    }

    public async update(data: any, table: string): Promise<any[]> {
        return await this.database.update(data, table);
    }

}