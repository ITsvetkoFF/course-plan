import { useCourses } from "src/course/useCourses";

export const CoursePage = () => {
  const { data } = useCourses();

  console.log(data);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
