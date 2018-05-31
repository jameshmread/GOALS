import { DayCompletionState } from "../enums/DayCompletionState";

export class Day {
    public date: Date;

    private completionState: DayCompletionState;
    private goalsCreated = 0;
    private goalsCompleted = 0;
    private goalsInProgress = 0;
    private goalTitles: Array<string> = [];

    constructor () {}

    public getCompletionState () {
        return this.completionState;
    }

    public incrementGoalsCreated () {
        this.goalsCreated++;
        this.setCompletionState();
    }

    public decrementGoalsCreated () {
        this.goalsCreated--;
        this.setCompletionState();
    }

    public getGoalsCreated () {
        return this.goalsCreated;
    }

    public incrementGoalsCompleted () {
        this.goalsCompleted++;
        this.setCompletionState();
    }

    public decrementGoalsCompleted () {
        this.goalsCompleted--;
        this.setCompletionState();
    }

    public incrementGoalsInProgress () {
        this.goalsInProgress++;
        this.setCompletionState();
    }

    public decrementGoalsInProgress () {
        this.goalsInProgress--;
        this.setCompletionState();
    }

    public addGoalTitle (goalTitle: string) {
        this.goalTitles.push(goalTitle);
    }

    public getGoaltitles () {
        return this.goalTitles;
    }

    public setDate (date: Date) {
        this.date = date;
    }

    public getDate (): Date {
        return this.date;
    }

    private setCompletionState () {
        if (this.goalsCreated === this.goalsCompleted && this.goalsCreated > 0) {
            this.completionState = DayCompletionState.allComplete;
        } else if (this.goalsCompleted > 0) {
            this.completionState = DayCompletionState.partiallyComplete;
        } else {
            this.completionState = DayCompletionState.noneStarted;
        }
    }
}
