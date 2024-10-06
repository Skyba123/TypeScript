import { TimeSlot } from "../types/TimeSlot";
import { DayOfWeek } from "../types/DayOfWeek";
import { schedule } from "../data/schedule";
import { classrooms } from "../data/classrooms";

export function findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[] {
    // Отримуємо список зайнятих аудиторій у вказаний день і час
    const occupiedClassrooms = schedule
        .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
        .map(lesson => lesson.classroomNumber);
        
    // Повертаємо список номерів аудиторій, які не зайняті у цей день і час
    return classrooms
        .filter(classroom => !occupiedClassrooms.includes(classroom.number))
        .map(classroom => classroom.number);
}