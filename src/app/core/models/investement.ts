export class Investment{
    userId:number;
    startupId:number;
    amount:string;
    years:number;
    period:string
    paymentType:string;
    constructor(){
        this.userId=0;
        this.startupId=0;
        this.amount=''
        this.years=0;
        this.period=''
        this.paymentType='';

    }
}