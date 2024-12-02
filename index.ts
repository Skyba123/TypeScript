import { UniversityManagementSystem } from "./src/classes/UniversityManagementSystem";
import { Faculty } from "./src/enums/Faculty";
import { Semester } from "./src/enums/Semester";
import { GradeEnum } from "./src/enums/GradeEnum";
import { StudentStatus } from "./src/enums/StudentStatus";
import { CourseType } from "./src/enums/CourseType";

const ums = new UniversityManagementSystem();

//Додавання студентів
const student1 = ums.enrollStudent({
  fullName: "Іван Іваненко",
  faculty: Faculty.Computer_Science,
  year: 1,
  status: StudentStatus.Active,
  enrollmentDate: new Date("2023-09-01"),
  groupNumber: "CS-101",
});

const student2 = ums.enrollStudent({
  fullName: "Ольга Петрівна",
  faculty: Faculty.Economics,
  year: 2,
  status: StudentStatus.Active,
  enrollmentDate: new Date("2022-09-01"),
  groupNumber: "EC-201",
});

//Додавання курсів
ums["courses"] = [
  {
    id: 1,
    name: "Основи програмування",
    type: CourseType.Mandatory,
    credits: 5,
    semester: Semester.First,
    faculty: Faculty.Computer_Science,
    maxStudents: 30,
  },
  {
    id: 2,
    name: "Математичний аналіз",
    type: CourseType.Mandatory,
    credits: 4,
    semester: Semester.Second,
    faculty: Faculty.Computer_Science,
    maxStudents: 25,
  },
  {
    id: 3,
    name: "Економічна теорія",
    type: CourseType.Optional,
    credits: 3,
    semester: Semester.First,
    faculty: Faculty.Economics,
    maxStudents: 20,
  },
];

//Реєстрація студентів на курси
ums.registerForCourse(student1.id, 1); 
ums.registerForCourse(student2.id, 3); 

//Виставлення оцінок
ums.setGrade(student1.id, 1, GradeEnum.Excellent); 
ums.setGrade(student2.id, 3, GradeEnum.Good); 

console.log("Студенти факультету Комп'ютерних наук:");
console.log(ums.getStudentsByFaculty(Faculty.Computer_Science));

console.log(`Оцінки студента ${student1.fullName}:`);
console.log(ums.getStudentGrades(student1.id));

console.log(`Середня оцінка студента ${student1.fullName}:`);
console.log(ums.calculateAverageGrade(student1.id));

ums.updateStudentStatus(student1.id, StudentStatus.Academic_Leave);
console.log(`Новий статус студента ${student1.fullName}: ${student1.status}`);

console.log("Доступні курси для факультету Computer Science, 1-й семестр:");
console.log(ums.getAvailableCourses(Faculty.Computer_Science, Semester.First));

console.log("Список відмінників факультету Комп'ютерних наук:");
console.log(ums.getTopStudentsByFaculty(Faculty.Computer_Science));