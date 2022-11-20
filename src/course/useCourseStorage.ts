import { CourseInternalState } from "src/course/CourseList";
import { useLocalStorage } from "../hooks/useStorage";

export const useCourseStorage = () => {
  const { getFromStorage, setToStorage } = useLocalStorage();

  return {
    getCourseFromStorage: (): CourseInternalState[] | undefined => {
      const course = getFromStorage("COURSES");
      return course ? JSON.parse(course) : undefined;
    },
    setCourseToStorage: (value: CourseInternalState[]) =>
      setToStorage("COURSES", JSON.stringify(value)),
  };
};
