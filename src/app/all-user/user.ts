export class User {
    id : string="0";
    name : string="0";
    macs :string="0";
    ipaddresse : string="0";
    average : string="0";
    image : boolean = true;
    initialaddresse:string="127.0.0.1";
constructor(id,name,macs,ipaddresse,average,image,initialAdresse){
    this.id=id;
    this.name=name;
    this.macs=macs;
    this.ipaddresse=ipaddresse;
    this.average=average;
    this.image=image;
    this.initialaddresse=initialAdresse;
}
}