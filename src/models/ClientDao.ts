import Client from './Client';

import ConnectionDatabase from "../database/clients/Connection";
import Mongo from "../database/clients/MongoConnection";
import Mysql from "../database/clients/MysqlConnection";
import Postgresql from "../database/clients/PostgresqlConnection";

import { getDatabaseType } from '../database/config/databaseConfig';

export default class ClientDao {
	private connection!: ConnectionDatabase;

	constructor(){
		switch(getDatabaseType()) {
			case 'postgres':
			case 'postgresql':
				this.setPostgresqlDB();
				break;

			case 'mongo':
			case 'mongodb':
				this.setMongoDB();
				break;

			case 'mariadb':
			case 'mysql':
			default:
				this.setMysqlDB();
		}
	}

	private newConnection(db: ConnectionDatabase) {
		db.connect();
	}

	private setMongoDB(): void {
		this.connection = new Mongo();
		this.newConnection(this.connection);
	}

	private setMysqlDB(): void {
		this.connection = new Mysql();
		this.newConnection(this.connection);
	}

	private setPostgresqlDB(): void {
		this.connection = new Postgresql();
		this.newConnection(this.connection);
	}

	public async createClients(data: any): Promise<Client> {
		return await this.connection.create("Cliente",data);
	}

	public async getClient(idClient: number|string): Promise<Client> {
		return await this.connection.get("Cliente",idClient);
	}

	public async getClients(): Promise<Client[]> {
		return await this.connection.getAll("Cliente");
	}

	public async editClient(data: any): Promise<Client> {
		return await this.connection.update("Cliente",data);
	}

	public async deleteClients(idClient: number|string): Promise<Client> {
		return await this.connection.delete("Cliente",idClient);
	}
}