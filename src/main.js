import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
//! becarefull do not remove any commented lines
import "./assets/main.css";
// import "./styles/index.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
