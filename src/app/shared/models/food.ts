export class Foods{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean=false;
    review:number=0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
}