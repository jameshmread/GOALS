import { DayCompletionState } from "../enums/DayCompletionState";
import { Goal } from "../DTOs/Goal";

export interface IDay {
    date: Date;
    completionState: DayCompletionState;
    goals: Array<Goal>;

    setCompletionState (): void;
}
