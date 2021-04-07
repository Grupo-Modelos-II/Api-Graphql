export default class Client{

    private nombre:string = '';
    private id: number | string = 0;

    constructor(id: number | string) {
        this.id = id;
    }

    public getId():number | string {
        return this.id;
    }

    public getNombre():string{
        return this.nombre;
    }
}