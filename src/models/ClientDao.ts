import ConnectionDatabase from "../database/clients/Connection";
import Mongo from "../database/clients/MongoConnection";
import Mysql from "../database/clients/MysqlConnection";
import Postgresql from "../database/clients/PostgresqlConnection";

export default class ClientDao {
	private connection: ConnectionDatabase = null;

	constructor(){
		this.getMongoDB();
	}

	private newConnection(db: ConnectionDatabase) {
		db.connect();
	}

	public getMongoDB(){
		this.connection = new Mongo();
		this.newConnection(this.connection);
	}

	public getMysqlDB(){
		this.connection = new Mysql();
		this.newConnection(this.connection);
	}

	public getPostgresqlDB(){
		this.connection = new Postgresql();
		this.newConnection(this.connection);
	}

	async createClients(data: any): Promise<Client|any> {
		return await this.connection.create("Cliente",data);
	}

	async getClient(idClient: number|string): Promise<Client|any> {
		return await this.connection.get("Cliente",idClient);
	}

	async getClients(): Promise<any> {
		return await this.connection.getAll("Cliente");
	}

	async editClient(data: any): Promise<Client|any> {
		return await this.connection.create("Cliente",data);
	}

	async deleteClients(idClient: number|string): Promise<Client|any> {
		return await this.connection.delete("Cliente",idClient);
	}
}