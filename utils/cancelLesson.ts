import { schedule } from "../data/schedule";

export function cancelLesson(lessonId: number): void {
    const lessonIndex = schedule.findIndex(lesson => lesson.courseId === lessonId);
    if (lessonIndex !== -1) {
        schedule.splice(lessonIndex, 1);  // Видаляємо елемент з масиву без переприсвоєння
    }
}