

import { department } from "./department";
import { Skill } from './skill';
export interface employee{

    id:number,
    name:string,
    salary:number,
    permanent:boolean,
    department : department,
    skills : Skill[]
}