export default abstract class ConnectionDatabase {

    protected poolDatabase: any;

    constructor(){
        this.connect();
    }

    protected abstract connect(): void;
    protected abstract query(query: string): Promise<any>;
    public abstract getAll(table: string): Promise<any[]>;
    public abstract get(id: number | string, table: string): Promise<any>;
    public abstract create(data: any, table: string): Promise<any>;
    public abstract delete(id: number | string, table: string): Promise<any>;
    public abstract update(data: any, table: string): Promise<any>;

}