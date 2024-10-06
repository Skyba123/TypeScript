import { schedule } from "../data/schedule";
import { validateLesson } from "./validateLesson";

export function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
    const lessonIndex = schedule.findIndex(lesson => lesson.courseId === lessonId);
    
    if (lessonIndex !== -1) {
        // Створюємо нове заняття з новою аудиторією
        const updatedLesson = { ...schedule[lessonIndex], classroomNumber: newClassroomNumber };

        // Перевіряємо на конфлікти
        const conflict = validateLesson(updatedLesson);

        if (conflict === null) {
            // Якщо конфліктів немає, оновлюємо заняття
            schedule[lessonIndex] = updatedLesson;
            console.log(`Аудиторію для заняття з courseId ${lessonId} успішно змінено.`);
            return true;
        } else {
            console.log(`Конфлікт при зміні аудиторії:`, conflict);
            return false;
        }
    } else {
        console.log(`Заняття з courseId ${lessonId} не знайдено.`);
        return false;
    }
}