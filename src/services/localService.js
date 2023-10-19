export const userLocalStorage = {
  get: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
  set: (value) => {
    localStorage.setItem("user", JSON.stringify(value));
  },
  remove: () => {
    localStorage.removeItem("user");
  },
};
