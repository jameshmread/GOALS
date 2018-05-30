import { DayCompletionState } from "../enums/DayCompletionState";

export class Day {
    private completionState: DayCompletionState;
    private goalsCreated = 0;
    private goalsCompleted = 0;
    private goalsInProgress = 0;
    private goalTitles: Array<string>;
    private date: Date;

    constructor () {}

    public setCompletionState (state: DayCompletionState) {
        this.completionState = state;
    }

    public getCompletionState () {
        return this.completionState;
    }

    public incrementGoalsCreated () {
        this.goalsCreated++;
    }

    public decrementGoalsCreated () {
        this.goalsCreated--;
    }

    public getGoalsCreated () {
        return this.goalsCreated;
    }

    public incrementGoalsCompleted () {
        this.goalsCompleted++;
    }

    public decrementGoalsCompleted () {
        this.goalsCompleted--;
    }

    public incrementGoalsInProgress () {
        this.goalsInProgress++;
    }

    public decrementGoalsInProgress () {
        this.goalsInProgress--;
    }

    public setGoaltitles (goalTitles: Array<string>) {
        this.goalTitles = goalTitles;
    }

    public getGoaltitles () {
        return this.goalTitles;
    }

    public setDate (date: Date) {
        this.date = date;
    }

    public getDate () {
        return this.date;
    }
}
