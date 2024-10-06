import { schedule } from "../data/schedule";

export function getClassroomUtilization(classroomNumber: string): number {
    const totalLessons = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
    const totalSlots = 5 * 5; 
    return (totalLessons / totalSlots) * 100;
}