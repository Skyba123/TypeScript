import { schedule } from "../data/schedule";
import { validateLesson } from "./validateLesson";
import { Lesson } from "../types/Lesson";

export function addLesson(lesson: Lesson): boolean {
    const conflict = validateLesson(lesson);
    if (conflict) {
        console.log("Конфлікт при додаванні заняття:", conflict);
        return false;
    }
    schedule.push(lesson);
    return true;
}