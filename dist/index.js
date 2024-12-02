"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UniversityManagementSystem_1 = require("./src/classes/UniversityManagementSystem");
const Faculty_1 = require("./src/enums/Faculty");
const Semester_1 = require("./src/enums/Semester");
const GradeEnum_1 = require("./src/enums/GradeEnum");
const StudentStatus_1 = require("./src/enums/StudentStatus");
const CourseType_1 = require("./src/enums/CourseType");
// Ініціалізація системи управління університетом
const ums = new UniversityManagementSystem_1.UniversityManagementSystem();
// Додавання студентів
const student1 = ums.enrollStudent({
    fullName: "Іван Іваненко",
    faculty: Faculty_1.Faculty.Computer_Science,
    year: 1,
    status: StudentStatus_1.StudentStatus.Active,
    enrollmentDate: new Date("2023-09-01"),
    groupNumber: "CS-101",
});
const student2 = ums.enrollStudent({
    fullName: "Ольга Петрівна",
    faculty: Faculty_1.Faculty.Economics,
    year: 2,
    status: StudentStatus_1.StudentStatus.Active,
    enrollmentDate: new Date("2022-09-01"),
    groupNumber: "EC-201",
});
// Додавання курсів
ums["courses"] = [
    {
        id: 1,
        name: "Основи програмування",
        type: CourseType_1.CourseType.Mandatory,
        credits: 5,
        semester: Semester_1.Semester.First,
        faculty: Faculty_1.Faculty.Computer_Science,
        maxStudents: 30,
    },
    {
        id: 2,
        name: "Математичний аналіз",
        type: CourseType_1.CourseType.Mandatory,
        credits: 4,
        semester: Semester_1.Semester.Second,
        faculty: Faculty_1.Faculty.Computer_Science,
        maxStudents: 25,
    },
    {
        id: 3,
        name: "Економічна теорія",
        type: CourseType_1.CourseType.Optional,
        credits: 3,
        semester: Semester_1.Semester.First,
        faculty: Faculty_1.Faculty.Economics,
        maxStudents: 20,
    },
];
// Реєстрація студентів на курси
ums.registerForCourse(student1.id, 1); // Іван Іваненко реєструється на "Основи програмування"
ums.registerForCourse(student2.id, 3); // Ольга Петрівна реєструється на "Економічна теорія"
// Виставлення оцінок
ums.setGrade(student1.id, 1, GradeEnum_1.GradeEnum.Excellent); // Іван отримує "Відмінно" за "Основи програмування"
ums.setGrade(student2.id, 3, GradeEnum_1.GradeEnum.Good); // Ольга отримує "Добре" за "Економічну теорію"
// Виведення списку студентів за факультетом
console.log("Студенти факультету Комп'ютерних наук:");
console.log(ums.getStudentsByFaculty(Faculty_1.Faculty.Computer_Science));
// Виведення оцінок студента
console.log(`Оцінки студента ${student1.fullName}:`);
console.log(ums.getStudentGrades(student1.id));
// Обчислення середньої оцінки студента
console.log(`Середня оцінка студента ${student1.fullName}:`);
console.log(ums.calculateAverageGrade(student1.id));
// Оновлення статусу студента
ums.updateStudentStatus(student1.id, StudentStatus_1.StudentStatus.Academic_Leave);
console.log(`Новий статус студента ${student1.fullName}: ${student1.status}`);
// Виведення доступних курсів для факультету у певному семестрі
console.log("Доступні курси для факультету Computer Science, 1-й семестр:");
console.log(ums.getAvailableCourses(Faculty_1.Faculty.Computer_Science, Semester_1.Semester.First));
// Виведення відмінників по факультету
console.log("Список відмінників факультету Комп'ютерних наук:");
console.log(ums.getTopStudentsByFaculty(Faculty_1.Faculty.Computer_Science));
