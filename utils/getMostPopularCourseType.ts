import { courses } from "../data/courses";
import { schedule } from "../data/schedule";
import { CourseType } from "../types/CourseType";

/*
  Функція визначає найпопулярніший тип занять 
  на основі наявних занять у розкладі. Вона проходить по всіх заняттях,
  підраховує кількість занять кожного типу і повертає той тип, який зустрічається найчастіше.
 */
export function getMostPopularCourseType(): CourseType {
    const courseTypeCount: { [key in CourseType]?: number } = {};

    for (let lesson of schedule) {
        const course = courses.find(c => c.id === lesson.courseId);
        if (course) {
            courseTypeCount[course.type] = (courseTypeCount[course.type] || 0) + 1;
        }
    }

    let mostPopularType: CourseType = "Lecture";
    let maxCount = 0;

    for (let [type, count] of Object.entries(courseTypeCount)) {
        if (count! > maxCount) {
            mostPopularType = type as CourseType;
            maxCount = count!;
        }
    }

    return mostPopularType;
}