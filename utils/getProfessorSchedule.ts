import { Lesson } from "../types/Lesson";
import { schedule } from "../data/schedule";

export function getProfessorSchedule(professorId: number): Lesson[] {
    return schedule.filter(lesson => lesson.professorId === professorId);
}