export const setTokenLocalStorage = (token: string): void => {
  localStorage.setItem("sb-token", token);
};

export const getTokenLocalStorage = (): string =>
  localStorage.getItem("sb-token") ?? "";

export const removeTokenLocalStorage = (): void => {
  localStorage.removeItem("sb-token");
};
