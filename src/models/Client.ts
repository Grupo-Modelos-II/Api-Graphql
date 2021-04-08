export default class Client {

    private nombre: string = '';
    private apellido: string = '';
    private id: number | string = 0;
    private edad: number = 0;

    constructor({id, nombre, apellido, edad}: {id: number | string, nombre: string, apellido: string, edad: number}) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    public getId():number | string {
        return this.id;
    }

    public getNombre():string {
        return this.nombre;
    }

    public getApellido():string {
        return this.apellido;
    }

    public getEdad():number {
        return this.edad;
    }
}