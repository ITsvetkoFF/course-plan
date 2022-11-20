import { useCourses } from "src/course/useCourses";
import { CourseList } from "src/course/CourseList";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0 36px;
`;

export const CoursePage = () => {
  const { data } = useCourses();
  return data ? (
    <StyledMain>
      <h1>{data.title}</h1>
      <CourseList initialCourses={data.lessons} />
    </StyledMain>
  ) : (
    <span>Loading...</span>
  );
};
