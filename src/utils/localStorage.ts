export const setTokenLocalStorage = (token: string): void => {
  localStorage.setItem("sb-token", token);
};

export const getTokenLocalStorage = () => {
  const token = localStorage.getItem("sb-token") ?? "";
  return token ? JSON.parse(token) : "";
};
