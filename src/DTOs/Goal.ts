export class Goal {
    public currentCompletion = 0;
    constructor (
        public title: string,
        public description: string,
        public dateTime: Date,
        public type: string,
        public maxCompletion: number
    ) {}
}
