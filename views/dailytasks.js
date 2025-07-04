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
    <p>Enter Task Name</p>
  <form>
      <label><input type="text" name="taskName"/></label>
      <input class="input" type="submit" value="Create Task"/>
  </form>
    <br />
  </div>
    ${state.tasks
      .map(task => {
        return `<tr>
          <td>${task.name}</td>
          <td>${task.isCompleted}</td>
        </tr>`;
      })
      .join("")}
`;


