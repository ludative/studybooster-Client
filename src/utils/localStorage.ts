export const setTokenLocalStorage = (token: string): void => {
  localStorage.setItem("sb-token", token);
};

export const getTokenLocalStorage = (): string =>
  localStorage.getItem("sb-token") ?? "";
