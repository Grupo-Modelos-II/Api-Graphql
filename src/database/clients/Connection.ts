export default abstract class ConnectionDatabase {

    protected poolDatabase: any;

    public abstract connect(): void;
    protected abstract query(query: string): Promise<any>;
    public abstract getAll(table: string): Promise<any[]>;
    public abstract get(table: string, id: number | string): Promise<any>;
    public abstract create(table: string, data: any): Promise<any>;
    public abstract delete(table: string, id: number | string): Promise<any>;
    public abstract update(table: string, data: any): Promise<any>;

}