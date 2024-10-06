import { Lesson } from "../types/Lesson";
import { schedule } from "../data/schedule";
import { validateLesson } from "./validateLesson";

export function addLesson(lesson: Lesson): boolean {
    if (validateLesson(lesson) === null) {
        schedule.push(lesson);
        return true;
    }
    return false;
}