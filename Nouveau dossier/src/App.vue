<script>
import { ref } from "vue";
import CardItem from "./components/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  setup() {
    const items = ref([
      {
        id: 1,
        name: "Product 1",
        price: 10,
        quantity: 1,
      },
      {
        id: 2,
        name: "Product 2",
        price: 20,
        quantity: 4,
      },
    ]);
    return { items };
  },
};
</script>

<template>
  <CardItem v-for="item in items" :cardItem="item" :key="item.id" />
</template>

<style></style>
