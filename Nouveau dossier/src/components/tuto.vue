<script>
import {
  ref,
  reactive,
  toRef,
  toRefs,
  computed,
  watch,
  watchEffect,
} from "vue";

export default {
  setup() {
    //Simple variable uses ref
    const message = ref("Wellcome");
    // const quantity = ref(0);
    // const increment = () => {
    //   quantity.value++;
    // };
    // const decrement = () => {
    //   quantity.value--;
    // };

    //objects uses reactive
    const item = reactive({
      name: "Product 1",
      price: 10,
      quantity: 1,
    });
    const incrementPrice = () => {
      item.price++;
    };
    const decrementPrice = () => {
      item.price--;
    };
    const incrementquantity = () => {
      item.quantity++;
    };
    const decrementquantity = () => {
      item.quantity--;
    };

    const RestItem = () => {
      (item.name = "Product 1"), (item.price = 10), (item.quantity = 1);
    };

    const totalPrice = computed(() => {
      return item.price * item.quantity;
    });

    watch(
      totalPrice,
      (newVal, oldVal) => {
        console.log("newVal: ", newVal);
        console.log("oldVal: ", oldVal);
      },
      { immediate: true }
    );

    watch(
      () => item.quantity,
      () => {
        console.log("item.quantity: ", item.quantity);
      },
      { immediate: true }
    );

    watchEffect(() => {
      console.log("item.quantity (watchEffect): ", item.quantity);
    });

    //toRef(objet, property)
    const nameRef = toRef(item, "name");
    // console.log("nameRef 1", nameRef.value);

    // item.name = "Product 2";
    // console.log("nameRef 2", nameRef.value);

    const itemRefs = toRefs(item);
    console.log("name", itemRefs.name.value);
    console.log("price", itemRefs.price.value);
    console.log("quantity", itemRefs.quantity.value);

    return {
      message,
      // quantity,
      // increment,
      // decrement,
      incrementquantity,
      decrementquantity,

      item,
      incrementPrice,
      decrementPrice,

      RestItem,
      totalPrice,
    };
  },
};
</script>

<template>
  <h1>{{ message }}</h1>
  <input type="text" v-model="message" />
  <br />

  <h1>{{ item.name }} : {{ item.price }}$</h1>
  <input type="text" v-model="item.name" />

  <div class="counter">
    <button class="btn" @click="decrementPrice">-</button>
    <span class="quantity_text">Price: </span>
    <h4 class="quantity_value">{{ item.price }}$</h4>
    <button class="btn" @click="incrementPrice">+</button>
  </div>
  <div class="counter">
    <button class="btn" @click="decrementquantity">-</button>
    <span class="quantity_text">Quantity: </span>
    <h4 class="quantity_value">{{ item.quantity }}$</h4>
    <button class="btn" @click="incrementquantity">+</button>
  </div>

  <h3>Total: {{ totalPrice }}$</h3>

  <button @click="RestItem">Rest Item</button>

  <br />

  <!-- <div class="counter">
    <button class="btn" @click="decrement">-</button>
    <span class="quantity_text">Quantity: </span>
    <h4 class="quantity_value">{{ quantity }}</h4>
    <button class="btn" @click="increment">+</button>
  </div> -->
</template>

<style>
.counter {
  display: flex;
  align-items: center;
}

.btn {
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  margin: 0 10px;
  color: #555555;
  font-weight: 400;
}

.quantity_text {
  font-size: 20px;
}

.quantity_value {
  font-size: 20px;
  margin-left: 10px;
}
</style>
