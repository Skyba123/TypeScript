import { Student } from "../interfaces/Student";
import { Course } from "../interfaces/Course";
import { Grade } from "../interfaces/Grade";
import { StudentStatus } from "../enums/StudentStatus";
import { Faculty } from "../enums/Faculty";
import { Semester } from "../enums/Semester";
import { GradeEnum } from "../enums/GradeEnum";

export class UniversityManagementSystem {
    private students: Student[] = [];
    private courses: Course[] = [];
    private grades: Grade[] = [];
    private studentCounter = 1;
    private courseRegistrations: Map<number, Set<number>> = new Map();
  
    enrollStudent(student: Omit<Student, "id">): Student {
      const newStudent: Student = { id: this.studentCounter++, ...student };
      this.students.push(newStudent);
      return newStudent;
    }
  
    registerForCourse(studentId: number, courseId: number): void {
      const student = this.students.find((s) => s.id === studentId);
      const course = this.courses.find((c) => c.id === courseId);
  
      if (!student) throw new Error("Студента не знайдено.");
      if (!course) throw new Error("Курс не знайдено.");
      if (student.faculty !== course.faculty)
        throw new Error("Студент не належить до факультету цього курсу.");
      if (!this.courseRegistrations.has(courseId)) {
        this.courseRegistrations.set(courseId, new Set());
      }
  
      const registeredStudents = this.courseRegistrations.get(courseId)!;
      if (registeredStudents.size >= course.maxStudents) {
        throw new Error("Максимальна кількість студентів на курсі досягнута.");
      }
  
      registeredStudents.add(studentId);
    }
  
    setGrade(studentId: number, courseId: number, grade: GradeEnum): void {
      if (!this.courseRegistrations.get(courseId)?.has(studentId)) {
        throw new Error("Студент не зареєстрований на курс.");
      }
  
      const course = this.courses.find((c) => c.id === courseId);
      if (!course) throw new Error("Курс не знайдено.");
  
      this.grades.push({
        studentId,
        courseId,
        grade,
        date: new Date(),
        semester: course.semester, // Додаємо семестр курсу
      });
    }
  
    getStudentsByFaculty(faculty: Faculty): Student[] {
      return this.students.filter((student) => student.faculty === faculty);
    }
  
    getStudentGrades(studentId: number): Grade[] {
      return this.grades.filter((grade) => grade.studentId === studentId);
    }
  
    calculateAverageGrade(studentId: number): number {
      const studentGrades = this.getStudentGrades(studentId);
      if (studentGrades.length === 0) return 0;
  
      const total = studentGrades.reduce((sum, grade) => sum + grade.grade, 0);
      return total / studentGrades.length;
    }
  
    updateStudentStatus(studentId: number, newStatus: StudentStatus): void {
      const student = this.students.find((s) => s.id === studentId);
      if (!student) throw new Error("Студента не знайдено.");
  
      student.status = newStatus;
    }
  
    getTopStudentsByFaculty(faculty: Faculty): Student[] {
      const students = this.getStudentsByFaculty(faculty);
      return students.filter(
        (student) => this.calculateAverageGrade(student.id) === GradeEnum.Excellent
      );
    }
  
    getAvailableCourses(faculty: Faculty, semester: Semester): Course[] {
      return this.courses.filter(
        (course) => course.faculty === faculty && course.semester === semester
      );
    }
  }