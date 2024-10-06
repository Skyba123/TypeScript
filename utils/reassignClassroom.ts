import { schedule } from "../data/schedule";
import { validateLesson } from "./validateLesson";

export function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
    const lesson = schedule.find(l => l.courseId === lessonId);
    if (!lesson) return false;

    const conflict = validateLesson({ ...lesson, classroomNumber: newClassroomNumber });
    if (conflict === null) {
        lesson.classroomNumber = newClassroomNumber;
        return true;
    }
    return false;
}