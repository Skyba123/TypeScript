import { Professor } from "../types/Professor";
import { professors } from "../data/professors";

export function addProfessor(professor: Professor): boolean {
    const exists = professors.some(p => p.id === professor.id);
    if (exists) {
        console.log(`Професор з ID ${professor.id} вже існує.`);
        return false;
    }
    professors.push(professor);
    return true; 
}