import { GradeEnum } from "../enums/GradeEnum";
import { Semester } from "../enums/Semester";

export interface Grade {
  studentId: number;
  courseId: number;
  grade: GradeEnum;
  date: Date;
  semester: Semester;
}