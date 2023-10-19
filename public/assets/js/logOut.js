const logOut = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};

window.logOut = logOut;
