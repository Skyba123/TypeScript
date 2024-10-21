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

import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const askQuestion = (query: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}


function showMenu(): void {
    console.log(`
    1. Додати заняття
    2. Пошук вільних аудиторій
    3. Перегляд розкладу викладача
    4. Зміна аудиторії для заняття
    5. Найпопулярніший тип заняття
    6. Завантаженість аудиторії
    7. Відмінити заняття
    8. Додати професора
    0. Вийти
    `);
}


async function main() {
    let running = true;

    while (running) {
        showMenu();
        const choice = await askQuestion("Оберіть дію: ");

        switch (choice) {
            case "1":
                const classroomInput = await askQuestion("Введіть номер аудиторії: ");
                
                
                if (classroomInput === null || classroomInput.trim() === "") {
                    console.error("Введення номера аудиторії скасовано.");
                    break;
                }
                
                const newLesson: Lesson = {
                    courseId: Number(await askQuestion("Введіть ID курсу: ")) || 0,
                    professorId: Number(await askQuestion("Введіть ID викладача: ")) || 0,
                    classroomNumber: classroomInput,
                    dayOfWeek: await askQuestion("Введіть день тижня (Monday-Friday): ") as DayOfWeek,
                    timeSlot: await askQuestion("Введіть час (8:30-10:00, 10:15-11:45, тощо): ") as TimeSlot,
                };

                if (addLesson(newLesson)) {
                    console.log("Заняття успішно додано.");
                } else {
                    console.log("Не вдалося додати заняття через конфлікт.");
                }
                break;
                
            case "2":
                const timeSlot = await askQuestion("Введіть час (8:30-10:00, 10:15-11:45, тощо): ") as TimeSlot;
                const dayOfWeek = await askQuestion("Введіть день тижня (Monday-Friday): ") as DayOfWeek;
                const availableClassrooms = findAvailableClassrooms(timeSlot, dayOfWeek);
                console.log("Вільні аудиторії:", availableClassrooms.join(", "));
                break;
                
            case "3":
                const professorId = Number(await askQuestion("Введіть ID викладача: "));
                const professorSchedule = getProfessorSchedule(professorId);
                console.log("Розклад викладача:", professorSchedule);
                break;
                
            case "4":
                const lessonId = Number(await askQuestion("Введіть ID курсу для зміни аудиторії: "));
                const newClassroom = await askQuestion("Введіть нову аудиторію: ");
                
                
                if (newClassroom !== null && newClassroom.trim() !== "") {
                    if (reassignClassroom(lessonId, newClassroom)) {
                        console.log("Аудиторію успішно змінено.");
                    } else {
                        console.log("Не вдалося змінити аудиторію.");
                    }
                } else {
                    console.log("Введення нової аудиторії скасовано.");
                }
                break;
                
            case "5":
                const popularType = getMostPopularCourseType();
                console.log("Найпопулярніший тип заняття:", popularType);
                break;
                
            case "6":
                const classroomNumber = await askQuestion("Введіть номер аудиторії: ");
                
                if (classroomNumber !== null && classroomNumber.trim() !== "") {
                    const utilization = getClassroomUtilization(classroomNumber);
                    console.log(`Завантаженість аудиторії ${classroomNumber}: ${utilization.toFixed(2)}%`);
                } else {
                    console.log("Введення номера аудиторії скасовано.");
                }
                break;
                
            case "7":
                const cancelLessonId = Number(await askQuestion("Введіть ID курсу для скасування: "));
                cancelLesson(cancelLessonId);
                console.log("Заняття скасовано.");
                break;
                
                case "8": 
                const newProfessorId = Number(await askQuestion("Введіть ID професора: "));
                const newProfessorName = await askQuestion("Введіть ім'я професора: ");
                const newProfessorDepartment = await askQuestion("Введіть кафедру професора: ");
                
                const newProfessor: Professor = {
                    id: newProfessorId,
                    name: newProfessorName,
                    department: newProfessorDepartment
                };
            
                if (addProfessor(newProfessor)) {
                    console.log("Професора успішно додано.");
                } else {
                    console.log("Не вдалося додати професора через конфлікт ID.");
                }
                break;

            case "0":
                running = false;
                console.log("Вихід з програми.");
                break;

            default:
                console.log("Неправильний вибір. Спробуйте ще раз.");
                break;
        }
    }

        rl.close();
}


main();

//для запуску використовувати запит в терміналі npx ts-node main.ts