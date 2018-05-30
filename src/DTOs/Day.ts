import { DayCompletionState } from "../enums/DayCompletionState";

export class Day {
    private completionState: DayCompletionState;
    private goalsCreated: number;
    private goalsCompleted: number;
    private goalsInProgress: number;

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
}
