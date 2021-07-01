export class Investment{
    constructor(
		public userId: number,
		public startupId: number,
		public amount: string,
		public years: number,
		public period: string,
		public paymentType: string,
	) { }
}