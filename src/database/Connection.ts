export default abstract class ConnectionDatabase {

    constructor(){
        this.connect();
    }

    public abstract connect():void;
    protected abstract query(query:string):Promise<any>;
    public abstract getAll(table:string):Promise<any[]>;
    public abstract get(id:number,table:string):Promise<any>;
    public abstract create(data:any,table:string):Promise<any>;
    public abstract delete(id:number,table:string):Promise<any>;
    public abstract update(data:any,table:string,id:number):Promise<any>;

}