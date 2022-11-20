import { useEffect, useState } from "react";
import { COURSE_URL } from "src/urls";

export type CourseItem = {
  /**
   * Guaranteed to be unique, used in url
   */
  name: string;
  title: string;
  type: "Lecture" | "Workshop";
  published?: boolean;
  links?: [string, string][];
  hidden?: boolean;
  shortSummary?: string;
  keyPoints?: string[];
  takeaways?: string[];
  youtube?: string;
  prerequisite?: string[];
  hometask?: string[];
};

export type CourseData = {
  title: string;
  lessons: CourseItem[];
};

export const useCourses = () => {
  const [data, setData] = useState<CourseData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(COURSE_URL)
      .then((x) => x.json())
      .then((data) => setData(data))
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};
