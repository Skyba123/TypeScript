import { addProfessor } from "./utils/addProfessor";
import { addLesson } from "./utils/addLesson";
import { getProfessorSchedule } from "./utils/getProfessorSchedule";

addProfessor({ id: 1, name: "Dr. John Doe", department: "Computer Science" });

addLesson({ 
    courseId: 1, 
    professorId: 1, 
    classroomNumber: "101", 
    dayOfWeek: "Monday", 
    timeSlot: "8:30-10:00" 
});

console.log(getProfessorSchedule(1));