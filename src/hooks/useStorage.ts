import { CourseInternalState } from "src/course/CourseList";

export type ALLOWED_LS_KEYS = "COURSES";

export const useLocalStorage = () => {
  return {
    getFromStorage: (key: ALLOWED_LS_KEYS): string | null => {
      return localStorage.getItem(key);
    },
    setToStorage: (key: ALLOWED_LS_KEYS, value: string) =>
      localStorage.setItem(key, value),
  };
};

export const useStorage = () => {
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
