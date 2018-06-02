import { DayCompletionState } from "../enums/DayCompletionState";
import { IDay } from "../interfaces/IDay";
import { Goal } from "./Goal";

export class Day implements IDay {


    public date: Date;
    public completionState: DayCompletionState;
    public goals: Array<Goal> = [];

    public setCompletionState () {
        const completedGoals = this.getCompletedGoals();
        const incompleteGoals = this.getIncompleteGoals();
        if (completedGoals === this.goals.length && this.goals.length > 0) {
            this.completionState = DayCompletionState.allComplete;
        } else if (incompleteGoals > 0) {
            this.completionState = DayCompletionState.partiallyComplete;
        } else {
            this.completionState = DayCompletionState.noneStarted;
        }
    }

    private getCompletedGoals (): number {
        return this.goals.filter((goal) => goal.currentCompletion === goal.maxCompletion).length;
    }

    private getIncompleteGoals (): number {
        return this.goals.filter((goal) => goal.currentCompletion < goal.maxCompletion).length;
    }
}
