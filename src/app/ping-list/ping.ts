export class Ping {
    average:string;
    date:string;
    loss:string;

    constructor(average,loss,date){
        this.average=average;
        this.date=date;
        this.loss=loss;
        
    }
}