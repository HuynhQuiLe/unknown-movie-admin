import { getUser } from "../../controllers/userControllers.js";
import { fillUpdateForm } from "./userFormTasks.js";

const handleClickUpdateUser = async (id) => {
  const user = await getUser(id);
  fillUpdateForm(user);
  document.querySelector("#userUpdate .update-btn").setAttribute("data", id);
};

window.handleClickUpdateUser = handleClickUpdateUser;
