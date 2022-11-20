import { Badge } from "src/ui/Badge";
import styled from "styled-components";
import { CourseInternalState } from "src/course/CourseList";
import { deepCopy } from "src/utils/objects";
import { BACKGROUND_ACCENTED } from "src/ui/colors";

const StyledForm = styled.form`
  background-color: ${BACKGROUND_ACCENTED};
  margin-top: 32px; // should not be in form
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Lesson = ({
  lesson,
  onLessonChange,
}: {
  lesson: CourseInternalState;
  onLessonChange: (newState: CourseInternalState) => void;
}) => {
  return (
    <div style={{ marginTop: "64px" }}>
      <h2>
        {lesson.title}{" "}
        <Badge
          style={{ verticalAlign: "middle" }}
          type={lesson.published ? "positive" : "negative"}
        >
          {lesson.published ? "Published" : "Unpublished"}
        </Badge>
      </h2>
      <dl>
        <dt>Short summary</dt>
        <dd>{lesson.shortSummary || <i>Not provided</i>}</dd>
      </dl>
      <a href={lesson.youtube} target="_blank">
        Youtube link
      </a>

      <StyledForm>
        <label>
          <input
            type="checkbox"
            /* Discuss changing to uncontrolled */
            checked={lesson?.completed || false}
            onChange={(e) => {
              onLessonChange({
                ...deepCopy(lesson),
                completed: e.target.checked,
              });
            }}
          />
          Completed
        </label>
        <label htmlFor={lesson.name + "_form"}>Note for the course</label>
        <textarea
          name="note"
          id={lesson.name + "_form"}
          rows={5}
          value={lesson.note || ""}
          onChange={(e) => {
            onLessonChange({
              ...deepCopy(lesson),
              note: e.target.value,
            });
          }}
        ></textarea>
      </StyledForm>
    </div>
  );
};
