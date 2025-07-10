import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/", { hash: false });


function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
    ${header(state)}
    ${main(state)}
    ${footer()}
  `;
}

async function taskEventHandlers() {
      const form = document.querySelector("form");
      if (form) {
        form.addEventListener("submit", event => {
          event.preventDefault();

          const inputList = event.target.elements;
          const requestData = {
            name: inputList.taskName.value,
            isCompleted: false
          };

          axios
            //.post(`${process.env.DAILY_TASK_API_URL}/task`, requestData)
            .post("https://capstone-i4qs.onrender.com/task", requestData)
            .then(response => {
              store.dailytasks.tasks.push(response.data);
              router.navigate("/dailytasks");
            })
            .catch(err => console.error(err));
        });
      }

      const deleteBtns = document.querySelectorAll(".delete-btn")
      await deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener("click", () => {
          console.log("this happened")
          //const taskId = event.target.dataset.id;
          const taskId = deleteBtn.id
          console.log("taskId", taskId)
          axios
            //.delete(`${process.env.DAILY_TASK_API_URL}/task/${taskId}`)
            .delete(`https://capstone-i4qs.onrender.com/task/${taskId}`)
            .then((response) => {
              store.dailytasks.tasks = store.dailytasks.tasks.filter(task => task._id != taskId);
              console.log("navigate code line")
              router.navigate("/dailytasks");
            })
            .catch(err => console.error(err));
        });
      });
}

router.hooks({
  before: async (done, match) => {
    console.info("Before hook executing");

    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    switch (view) {
      case "home":
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`)
          .then(response => {
            store.home.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.error(err);
            done();
          });
        break;

      case "dailytasks":
        await axios
          //.get(`${process.env.DAILY_TASK_API_URL}/task`)
          .get("https://capstone-i4qs.onrender.com/task")
          .then(response => {
            store.dailytasks.tasks = response.data;
            console.log("dailytasks", store.dailytasks.tasks)
            done();
          })
          .catch(err => {
            console.error(err);
            done();
          });
        break;

      default:
        done();
    }
  },

  already: match => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    render(store[view]);
    if (view === "dailytasks") {
      taskEventHandlers()
    }
  },

  after: async (match) => {
    console.info("After hook executing");

    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view === "dailytasks") {
      taskEventHandlers()
    }

    router.updatePageLinks();

    const menuBtn = document.querySelector(".fa-bars");
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
      });
    }
  }
});

router
  .on({
    "/": () => render(),
    "/:view": match => {
      const view = match?.data?.view ? camelCase(match.data.view) : "home";

      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.error(`View "${view}" not defined in store.`);
      }
    }
  })
  .resolve();
