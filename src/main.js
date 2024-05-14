import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";

// createApp(App).mount('#app')

const app = createApp(App);

app.component("Home", Home);
app.mount("#app");
