"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversityManagementSystem = void 0;
const GradeEnum_1 = require("../enums/GradeEnum");
class UniversityManagementSystem {
    constructor() {
        this.students = [];
        this.courses = [];
        this.grades = [];
        this.studentCounter = 1;
        this.courseRegistrations = new Map();
    }
    enrollStudent(student) {
        const newStudent = Object.assign({ id: this.studentCounter++ }, student);
        this.students.push(newStudent);
        return newStudent;
    }
    registerForCourse(studentId, courseId) {
        const student = this.students.find((s) => s.id === studentId);
        const course = this.courses.find((c) => c.id === courseId);
        if (!student)
            throw new Error("Студента не знайдено.");
        if (!course)
            throw new Error("Курс не знайдено.");
        if (student.faculty !== course.faculty)
            throw new Error("Студент не належить до факультету цього курсу.");
        if (!this.courseRegistrations.has(courseId)) {
            this.courseRegistrations.set(courseId, new Set());
        }
        const registeredStudents = this.courseRegistrations.get(courseId);
        if (registeredStudents.size >= course.maxStudents) {
            throw new Error("Максимальна кількість студентів на курсі досягнута.");
        }
        registeredStudents.add(studentId);
    }
    setGrade(studentId, courseId, grade) {
        var _a;
        if (!((_a = this.courseRegistrations.get(courseId)) === null || _a === void 0 ? void 0 : _a.has(studentId))) {
            throw new Error("Студент не зареєстрований на курс.");
        }
        const course = this.courses.find((c) => c.id === courseId);
        if (!course)
            throw new Error("Курс не знайдено.");
        this.grades.push({
            studentId,
            courseId,
            grade,
            date: new Date(),
            semester: course.semester, // Додаємо семестр курсу
        });
    }
    getStudentsByFaculty(faculty) {
        return this.students.filter((student) => student.faculty === faculty);
    }
    getStudentGrades(studentId) {
        return this.grades.filter((grade) => grade.studentId === studentId);
    }
    calculateAverageGrade(studentId) {
        const studentGrades = this.getStudentGrades(studentId);
        if (studentGrades.length === 0)
            return 0;
        const total = studentGrades.reduce((sum, grade) => sum + grade.grade, 0);
        return total / studentGrades.length;
    }
    updateStudentStatus(studentId, newStatus) {
        const student = this.students.find((s) => s.id === studentId);
        if (!student)
            throw new Error("Студента не знайдено.");
        student.status = newStatus;
    }
    getTopStudentsByFaculty(faculty) {
        const students = this.getStudentsByFaculty(faculty);
        return students.filter((student) => this.calculateAverageGrade(student.id) === GradeEnum_1.GradeEnum.Excellent);
    }
    getAvailableCourses(faculty, semester) {
        return this.courses.filter((course) => course.faculty === faculty && course.semester === semester);
    }
}
exports.UniversityManagementSystem = UniversityManagementSystem;
