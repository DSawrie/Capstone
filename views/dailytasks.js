//import html from "html-literal";

//export default () => html`
  // <h1 class="archivo-black-regular"><a href="/home" data-navigo>Return To Home Page</a></h1>
  //<form><label><input type="checkbox"><input type="text"></label></form>
  //<form><label><input type="checkbox"><input type="text"></label></form>
  //<form><label><input type="checkbox"><input type="text"></label></form>
  //<form><label><input type="checkbox"><input type="text"></label></form>
  //<form><label><input type="checkbox"><input type="text"></label></form>
  //<form><label><input type="checkbox"><input type="text"></label></form>
  //<form><label><input type="checkbox"><input type="text"></label></form>
  //<form><label><input type="checkbox"><input type="text"></label></form>
  //<form><label><input type="checkbox"><input type="text"></label></form>
  //<form><label><input type="checkbox"><input type="text"></label></form>
//`;
import html from "html-literal";

export default (state) => html`
  <h1 class="archivo-black-regular">
    <a href="/home" data-navigo>Return To Home Page</a>
  </h1>
  <div style="text-align: center;">
    <p class="archivo-black-regular">Enter Task Name</p>
  <form>
      <label><input type="text" name="taskName"/></label>
      <input class="input" type="submit" value="Create Task"/>
  </form>
    <br />
  </div>
  <table style="margin: 0 auto; border-collapse: collapse;">
    <tbody>
    ${state.tasks
      .map(task => {
        return `<form data-id="${task.id}"><tr>
          <td>
          <input type="checkbox" ${task.isCompleted ? "checked" : ""} data-id="${task.id}" />
          ${task.name}
          <button id="${task._id}" class="delete-btn">Delete</button>
          </td>
          </tr></form>`
        })
        .join("")}
      </tbody>
  </table>
`

// add back under <td>${task.name}</td> if necessary
//<td>${task.isCompleted}</td>
