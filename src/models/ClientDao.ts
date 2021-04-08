import ConnectionDatabase from "../database/clients/Connection";
import Mongo from "../database/clients/MongoConnection";
import Mysql from "../database/clients/MysqlConnection";
import Postgresql from "../database/clients/PostgresqlConnection";

export default class ClientDao {
	private connection!: ConnectionDatabase;

	constructor(){
		this.setMongoDB();
	}

	private newConnection(db: ConnectionDatabase) {
		db.connect();
	}

	public setMongoDB(): void {
		this.connection = new Mongo();
		this.newConnection(this.connection);
	}

	public setMysqlDB(): void {
		this.connection = new Mysql();
		this.newConnection(this.connection);
	}

	public setPostgresqlDB(): void {
		this.connection = new Postgresql();
		this.newConnection(this.connection);
	}

	public getConnection(): string {
		if(this.connection instanceof Mongo) {
			return "Mongo"
		} else if(this.connection instanceof Mysql) {
			return "Mysql"
		} else {
			return "Postgres"
		}
	}

	public async createClients(data: any): Promise<any> {
		return await this.connection.create("Cliente",data);
	}

	public async getClient(idClient: number|string): Promise<any> {
		return await this.connection.get("Cliente",idClient);
	}

	public async getClients(): Promise<any> {
		return await this.connection.getAll("Cliente");
	}

	public async editClient(data: any): Promise<any> {
		return await this.connection.create("Cliente",data);
	}

	public async deleteClients(idClient: number|string): Promise<any> {
		return await this.connection.delete("Cliente",idClient);
	}
}