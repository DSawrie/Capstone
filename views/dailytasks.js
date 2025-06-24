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

export default () => html`
  <h1 class="archivo-black-regular">
    <a href="/home" data-navigo>Return To Home Page</a>
  </h1>
  <div style="text-align: center;">
    <p>Enter Task Name</p>
  <form>
      <label><input type="text"/></label>
  </form>
    <input type="datetime-local" />
    <br />
    <button>Create Task</button><br /><br /><br />
    <div style="align-items: center;">
      <input type="checkbox" />
      <p>Saved Task 1 Name</p>
      <p>Task 1 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 2 Name</p>
      <p>Task 2 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 3 Name</p>
      <p>Task 3 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 4 Name</p>
      <p>Task 4 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 5 Name</p>
      <p>Task 5 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 6 Name</p>
      <p>Task 6 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 7 Name</p>
      <p>Task 7 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 8 Name</p>
      <p>Task 8 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 9 Name</p>
      <p>Task 9 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 10 Name</p>
      <p>Task 10 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 11 Name</p>
      <p>Task 11 datetime</p>
      <br />
      <input type="checkbox" />
      <p>Saved Task 12 Name</p>
      <p>Task 12 datetime</p>
    </div>
  </div>
`;
