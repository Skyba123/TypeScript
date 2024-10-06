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


console.log("Додаємо професорів...");
addProfessor({ id: 1, name: "Dr. John Doe", department: "Computer Science" });
addProfessor({ id: 2, name: "Dr. Jane Smith", department: "Mathematics" });


console.log("Додаємо заняття...");
addLesson({
    courseId: 1,
    professorId: 1,
    classroomNumber: "101",
    dayOfWeek: "Monday",
    timeSlot: "8:30-10:00",
});

addLesson({
    courseId: 2,
    professorId: 2,
    classroomNumber: "102",
    dayOfWeek: "Monday",
    timeSlot: "8:30-10:00",
});


console.log("Пошук вільних аудиторій...");
const availableClassrooms = findAvailableClassrooms("8:30-10:00", "Monday");
console.log("Вільні аудиторії на понеділок 8:30-10:00:", availableClassrooms);


console.log("Розклад Dr. John Doe:");
const professorSchedule = getProfessorSchedule(1);
console.log(professorSchedule);


console.log("Валідація заняття для конфліктів...");
const newLesson: Lesson = {
    courseId: 1,
    professorId: 1,
    classroomNumber: "101",
    dayOfWeek: "Monday" as DayOfWeek, 
    timeSlot: "8:30-10:00" as TimeSlot, 
};

const conflict = validateLesson(newLesson);
if (conflict) {
    console.log("Конфлікт:", conflict);
} else {
    console.log("Немає конфліктів");
}


console.log("Скасування заняття...");
cancelLesson(1);
console.log("Оновлений розклад Dr. John Doe після скасування заняття:", getProfessorSchedule(1));


console.log("Зміна аудиторії для заняття...");
const reassigned = reassignClassroom(2, "105");
if (reassigned) {
    console.log("Оновлений розклад Dr. John Doe після зміни аудиторії:", getProfessorSchedule(1));
} else {
    console.log("Не вдалося змінити аудиторію через конфлікт.");
}


console.log("Перевірка найпопулярнішого типу заняття...");
const mostPopularCourseType = getMostPopularCourseType();
console.log("Найпопулярніший тип занять:", mostPopularCourseType);


console.log("Аналіз використання аудиторії...");
const utilization = getClassroomUtilization("101");
console.log("Використання аудиторії 101:", utilization, "%");