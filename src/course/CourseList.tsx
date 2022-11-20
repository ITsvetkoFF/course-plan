import { Lesson } from "src/course/Lesson";
import { CourseItem } from "src/course/useCourses";
import { useEffect, useState } from "react";
import { deepCopy } from "src/utils/objects";
import { useCourseStorage } from "src/course/useCourseStorage";

export type CourseInternalState = CourseItem & {
  completed?: boolean;
  note?: string;
};

export const CourseList = ({
  initialCourses,
}: {
  initialCourses: CourseItem[];
}) => {
  const { getCourseFromStorage, setCourseToStorage } = useCourseStorage();

  const [courses, setCourses] = useState<CourseInternalState[]>(
    getCourseFromStorage() ?? initialCourses
  );

  useEffect(() => {
    setCourseToStorage(courses);
  }, [courses]);

  return (
    <div>
      {courses.map((lesson, index) =>
        lesson.hidden ? null : (
          <Lesson
            key={lesson.name}
            lesson={lesson}
            onLessonChange={(newState) => {
              setCourses((prev) => {
                const nextState = deepCopy(prev);
                nextState[index] = newState;
                return nextState;
              });
            }}
          />
        )
      )}
    </div>
  );
};
