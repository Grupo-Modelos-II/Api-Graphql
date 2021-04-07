export default interface Connection {

    connect():void;
    disconnect():void;
    query(query:string):Promise<any>;
    getAll(table:string):Promise<any>;
    get(id:number,table:string):Promise<any>;
    create(data:any,table:string):Promise<any>;
    delete(id:number,table:string):Promise<any>;
    update(data:any,table:string,id:number):Promise<any>;

}