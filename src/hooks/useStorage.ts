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
