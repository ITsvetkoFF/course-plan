import { useCourses } from "src/course/useCourses";
import { CourseList } from "src/course/CourseList";
import styled from "styled-components";
import { Loader } from "src/ui/Loader";

const Page = styled.main`
  box-sizing: border-box;
  padding: 0 36px;
  width: 100%;
`;

export const CoursePage = () => {
  const { data } = useCourses();
  return (
    <Page>
      {data?.title && <h1>{data?.title}</h1>}
      {data?.lessons ? (
        <CourseList initialCourses={data.lessons} />
      ) : (
        <Loader />
      )}
    </Page>
  );
};
