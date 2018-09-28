export class Instruction {
    id : string="0";
    sender : string="0";
    add :string="0";
    type:string=" ";
    result:string=" ";
    
constructor(id,sender,add,type,result){
    this.id=id;
    this.sender=sender;
    this.add=add;
    this.type=type;
    this.result=result;
}
}