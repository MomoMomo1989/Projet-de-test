<script>
import { reactive, computed } from "vue";

export default {
  props: {
    cardItem: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    // console.log(props.cardItem);
    const item = reactive(props.cardItem);
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
    
 const removeitem = () =>{}
    return {
      item,
      incrementPrice,
      decrementPrice,
      incrementquantity,
      decrementquantity,
      RestItem,
      totalPrice,
      removeitem,
    };
  },
};

</script>

<template>
  <div class="card">
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
  <button @click="removeitem">Remove Item</button>
  <button @click="RestItem">Rest Item</button>
</div>
</template>

<style>
.card{
  padding: 25px;
  height: 400px;
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom:10px ;
}
.counter {
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
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
