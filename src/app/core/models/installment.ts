export class Installment{
    id:number;
    investment:number
    payDate:string
    amount:string
    paid:boolean
    interestPaid:string
    constructor(){
        this.id=0;
        this.investment=0
        this.payDate=''
        this.amount=''
        this.paid=false
        this.interestPaid=''
    }
}