import { Lesson } from "../types/Lesson";
import { ScheduleConflict } from "../types/ScheduleConflict";
import { schedule } from "../data/schedule";

// Функція для перевірки конфліктів у розкладі
export function validateLesson(lesson: Lesson): ScheduleConflict | null {
    for (let existingLesson of schedule) {
        if (existingLesson.timeSlot === lesson.timeSlot && existingLesson.dayOfWeek === lesson.dayOfWeek) {
            if (existingLesson.professorId === lesson.professorId) {
                return { type: "ProfessorConflict", lessonDetails: existingLesson };
            }
            if (existingLesson.classroomNumber === lesson.classroomNumber) {
                return { type: "ClassroomConflict", lessonDetails: existingLesson };
            }
        }
    }
    return null;
}