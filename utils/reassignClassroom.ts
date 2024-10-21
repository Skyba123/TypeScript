import { schedule } from "../data/schedule";
import { validateLesson } from "./validateLesson";

import { findAvailableClassrooms } from '../utils/findAvailableClassrooms';

export function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
    const lessonIndex = schedule.findIndex(lesson => lesson.courseId === lessonId);
    
    if (lessonIndex === -1) {
        console.log(`Заняття з courseId ${lessonId} не знайдено.`);
        return false;
    }
    
    const currentLesson = schedule[lessonIndex];
    const updatedLesson = { ...currentLesson, classroomNumber: newClassroomNumber };


    const conflict = validateLesson(updatedLesson);
    
    if (conflict) {
        console.log("Конфлікт при зміні аудиторії:", conflict);

        const availableClassrooms = findAvailableClassrooms(currentLesson.timeSlot, currentLesson.dayOfWeek);
        console.log("Доступні аудиторії для даного часу та дня:", availableClassrooms.join(", "));
        return false;
    }

  
    schedule[lessonIndex] = updatedLesson;
    console.log(`Аудиторію для заняття з courseId ${lessonId} успішно змінено.`);
    return true;
}