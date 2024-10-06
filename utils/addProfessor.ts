import { Professor } from "../types/Professor";
import { professors } from "../data/professors";

export function addProfessor(professor: Professor): void {
    professors.push(professor);
}