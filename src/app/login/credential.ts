 export class Credential {
    
    private userName:string;
    private password:string;

    constructor (){
        this.userName="ganesh"
        this.password="seed"
    }

    public validate(userName:string, password:string):boolean{
        return true;
    }
}

