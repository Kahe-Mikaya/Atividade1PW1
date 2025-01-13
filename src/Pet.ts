import { Uuid } from "./Uuid";


export class Pet{
    id: Uuid; // precisa ser um uuid
	name: string;
	type: string;
	description:  string;
	vaccinated:  boolean;
	deadline_vaccination: Date;
	created_at: Date

    constructor(id: Uuid, name:string,type:string,description:string,vaccinated:boolean,deadline_vaccination,created_at){
        this.id = id
        this.type = type;
        this.description = description;
        this.vaccinated = vaccinated;
        this.deadline_vaccination = deadline_vaccination;
        this.created_at = created_at;
    }
}