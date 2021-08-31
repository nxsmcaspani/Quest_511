import { Skill } from './skill.model';

export class Developper {
    lastname:string;
    firstname:string;
    age:number;
    sex:string;
    bio:string;
    skills:Skill[];

    constructor(lastname:string, firstname:string, age:number, sex:string, bio:string, skills:Skill[]){
        this.lastname=lastname;
        this.firstname=firstname;
        this.age=age;
        this.sex=sex;
        this.bio=bio;
        this.skills=skills;
    }
}