import { useEffect, useState } from "react";
import { COURSE_URL } from "src/urls";

export const useCourses = () => {
  const [data, setData] = useState();
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
