
 export class Credential{

    private userName:string;
    private password:string;

    constructor(){
     this.userName="ravi";
     this.password="seed";
    }
    public validate(name:string,pass:string):boolean{
        return true;
    }
}