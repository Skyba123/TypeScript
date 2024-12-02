import { CourseType } from "../enums/CourseType";
import { Faculty } from "../enums/Faculty";
import { Semester } from "../enums/Semester";

export interface Course {
  id: number;
  name: string;
  type: CourseType;
  credits: number;
  semester: Semester;
  faculty: Faculty;
  maxStudents: number;
}