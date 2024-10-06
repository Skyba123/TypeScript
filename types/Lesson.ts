import { DayOfWeek } from "./DayOfWeek";
import { TimeSlot } from "./TimeSlot";

export type Lesson = {
    courseId: number;
    professorId: number;
    classroomNumber: string;
    dayOfWeek: DayOfWeek;
    timeSlot: TimeSlot;
};