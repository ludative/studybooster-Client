export const setTokenLocalStorage = (token: string): void => {
  localStorage.setItem("sb-token", token);
};

export const getTokenLocalStorage = (): string =>
  localStorage.getItem("sb-token") ?? "";

export const setEmailLocalStorage = (email: string): void => {
  localStorage.setItem("sb-email", email);
};

export const getEmailLocalStorage = (): string =>
  localStorage.getItem("sb-email") ?? "";
