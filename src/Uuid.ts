import {validate as validateUuid, v4 as uuidv4} from 'uuid'

export class Uuid{
    private value: string

    constructor(value:string){
        if (!validateUuid(value)){
            throw new Error("valor nao é valido pro uuid "+value)
        }
        this.value = value
    }
    static randomGenerate():Uuid{
        return new Uuid(uuidv4())
    }
}