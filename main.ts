import { addProfessor } from "./utils/addProfessor";
import { addLesson } from "./utils/addLesson";
import { cancelLesson } from "./utils/cancelLesson";
import { findAvailableClassrooms } from "./utils/findAvailableClassrooms";
import { getProfessorSchedule } from "./utils/getProfessorSchedule";
import { getClassroomUtilization } from "./utils/getClassroomUtilization";
import { getMostPopularCourseType } from "./utils/getMostPopularCourseType";
import { reassignClassroom } from "./utils/reassignClassroom";
import { validateLesson } from "./utils/validateLesson";


import { DayOfWeek } from "./types/DayOfWeek";
import { Lesson } from "./types/Lesson";
import { Professor } from "./types/Professor";
import { TimeSlot } from "./types/TimeSlot";
import { Course } from "./types/Course";
import { CourseType } from "./types/CourseType";



import { professors } from "./data/professors";
import { classrooms } from "./data/classrooms";
import { courses } from "./data/courses";
import { schedule } from "./data/schedule";


console.log("Додаємо професора...");
addProfessor({ id: 6, name: "Dr. Sarah White", department: "History" });
console.log(professors);


console.log("\nДодаємо заняття...");
const newLesson = { courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Tuesday" as DayOfWeek, timeSlot: "8:30-10:00" as TimeSlot };
if (addLesson(newLesson)) {
    console.log("Заняття додано до розкладу:", newLesson);
} else {
    console.log("Заняття не додано через конфлікт.");
}


console.log("\nПошук вільних аудиторій на понеділок 8:30-10:00:");
const availableClassrooms = findAvailableClassrooms("8:30-10:00", "Monday");
console.log("Вільні аудиторії:", availableClassrooms);


console.log("\nРозклад Dr. John Doe:");
const professorSchedule = getProfessorSchedule(1);
console.log(professorSchedule);


console.log("\nСкасовуємо заняття...");
cancelLesson(1);
console.log("Оновлений розклад Dr. John Doe після скасування заняття:", getProfessorSchedule(1));


console.log("\nЗміна аудиторії для заняття...");
const reassigned = reassignClassroom(2, "105");
if (reassigned) {
    console.log("Оновлений розклад Dr. John Doe після зміни аудиторії:", getProfessorSchedule(1));
} else {
    console.log("Не вдалося змінити аудиторію через конфлікт.");
}


console.log("\nНайпопулярніший тип занять:");
const mostPopularCourseType = getMostPopularCourseType();
console.log("Найпопулярніший тип занять:", mostPopularCourseType);


console.log("\nПеревірка конфліктів...");
const conflict = validateLesson(newLesson);
if (conflict) {
    console.log("Конфлікт:", conflict);
} else {
    console.log("Конфліктів не знайдено.");
}