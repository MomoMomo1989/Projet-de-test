import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import CardItem from "./components/CardItem.vue";

const app = createApp(App);
// app.component("CardItem", CardItem);
app.mount("#app");
