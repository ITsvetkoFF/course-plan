import { Lesson } from "src/course/Lesson";
import { CourseItem } from "src/course/useCourses";
import { useEffect, useState } from "react";
import { deepCopy } from "src/utils/objects";
import { useStorage } from "src/hooks/useStorage";

export type CourseInternalState = CourseItem & {
  completed?: boolean;
  note?: string;
};

export const CourseList = ({
  initialCourses,
}: {
  initialCourses: CourseItem[];
}) => {
  const { getCourseFromStorage, setCourseToStorage } = useStorage();

  const [courses, setCourses] = useState<CourseInternalState[]>(
    getCourseFromStorage() || initialCourses
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
