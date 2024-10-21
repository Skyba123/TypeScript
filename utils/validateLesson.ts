import { Lesson } from "../types/Lesson";
import { ScheduleConflict } from "../types/ScheduleConflict";
import { schedule } from "../data/schedule";
import { professors } from "../data/professors";

export function validateLesson(lesson: Lesson): ScheduleConflict | null {
    // Спочатку перевіряємо, чи існує професор
    const professorExists = professors.some(professor => professor.id === lesson.professorId);
    if (!professorExists) {
        console.log(`Професора з ID ${lesson.professorId} не знайдено.`);
        return { type: "ProfessorConflict", lessonDetails: lesson }; 
    }

    for (let existingLesson of schedule) {
        if (
            existingLesson.timeSlot === lesson.timeSlot &&
            existingLesson.dayOfWeek === lesson.dayOfWeek
        ) {
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