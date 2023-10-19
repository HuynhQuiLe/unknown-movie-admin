export const getValueInputUserForm = () => {
  const inputs = document.querySelectorAll("#myModal input");
  let user = {};
  inputs.forEach((input) => {
    user[input.name] = input.value;
  });
  return user;
};

export const getValueInputUserUpdateForm = () => {
  const inputs = document.querySelectorAll("#userUpdate input");
  const selects = document.querySelectorAll("#userUpdate select");

  let user = {};
  inputs.forEach((input) => {
    user[input.name] = input.value;
  });
  selects.forEach((select) => {
    user[select.name] = select.value;
  });

  return user;
};

export const fillUpdateForm = (user) => {
  const inputs = document.querySelectorAll("#userUpdate input");
  inputs.forEach((input) => {
    for (const key in user) {
      if (key === input.name) {
        input.value = user[key];
      }
    }
  });
  const selects = document.querySelectorAll("#userUpdate select");
  selects.forEach((select) => {
    for (const key in user) {
      if (key === select.name) {
        select.value = user[key];
      }
    }
  });
};
