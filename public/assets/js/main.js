import { getAllUsers } from "../../controllers/userControllers.js";

const BASE_URI = "http://localhost:3000";
const user = JSON.parse(localStorage.getItem("user"));

// getAllUsers();

// const renderUser = (users) => {
//   let innerHTML = "";
//   users.map((user, index) => {
//     let statusInnerHTML = "";
//     if (user.status === "Active") {
//       statusInnerHTML = "<div class='badge badge-outline-success'>Active</div>";
//     } else if (user.status === "Deactive") {
//       statusInnerHTML =
//         "<div class='badge badge-outline-danger'>Deactive</div>";
//     } else {
//       statusInnerHTML =
//         "<div class='badge badge-outline-warning'>Pending</div>";
//     }
//     innerHTML += `
//         <tr>
//             <td>
//                 <div class="form-check form-check-muted m-0">
//                     <label class="form-check-label"></label>
//                     <input
//                         type="checkbox"
//                         class="form-check-input"
//                     />
//                 </div>
//             </td>
//             <td>
//                 <img
//                     src=${user.avatar}
//                     alt="image"
//                 />
//                 <span class="pl-2">${user.name}</span>
//             </td>
//             <td>${user.email}</td>
//             <td>${user.role}</td>
//             <td>${user.balance}</td>
//             <td>${user.created_at.slice(0, 10)}</td>
//             <td>${statusInnerHTML}</td>
//             <td>
//                 <span style="cursor:pointer; color:#0090e7; font-size: 25px; margin-right: 10px" data-toggle="modal" data-target="#userUpdate" onclick="handleClickUpdateUser('${
//                   user._id
//                 }')" ><i class="fa fa-pen-square"></i></span>
//                 <span style="cursor:pointer; color:#fc424a; font-size: 25px" data-toggle="modal" data-target="#exampleModal" onclick="handleDeleteBtnClick('${
//                   user._id
//                 }', '${user.account}')"><i class="fa fa-trash"></i></span>
//             </td>
//         </tr>`;
//   });

//   document.querySelector("#tbody-user").innerHTML = innerHTML;
// };

const handleDeleteBtnClick = (id, account) => {
  document.querySelector(
    "#delete-text"
  ).innerHTML = `Are you sure to delete account <b class="text-danger">${account}</b>? <br/>You can not undo this step.`;
  document.querySelector("#delete-confirm-btn").setAttribute("data", id);
};

window.renderUser = renderUser;
window.handleDeleteBtnClick = handleDeleteBtnClick;
