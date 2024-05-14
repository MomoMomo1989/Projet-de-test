<script setup>
defineProps({
  pHolder: String,
});
</script>

<script>
export default {
  data() {
    return {
      Products: [],
      newProduct: "",
    };
  },

  methods: {
    addProduct() {
      if (this.newProduct) {
        this.Products.push(this.newProduct);
        this.newProduct = "";
      }
    },

    removeProduct(index) {
      this.Products.splice(index, 1);
    },

    removeLatestProduct() {
      this.Products.pop();
    },
  },
};
</script>

<template>
  <!-- <div v-if="Products.length">{{ Products }}</div> -->
  <!-- <div v-if="!Products.length">no product in th list</div> -->
  <!-- <div v-text="Products"></div>
  <div v-text="Products.length"></div> -->
  <div v-for="(product, index) in Products">
    {{ index + " : " + product }}
    <a @click.prevent="removeProduct(index)" href="#">&times;</a>
  </div>
  <!-- <input
    class="input_product"
    type="text"
    v-bind:value="newProduct"
    placeholder="New Product"
  /> -->

  <!-- <input
    class="input_product"
    type="text"
    :value="newProduct"  // one-way binding
    v-model="newProduct" // two-ways binding
    placeholder="New Product"
    v-on:keydown.enter="Products.push($event.target.value)"
    @keydown.tab.prevent="Products.push($event.target.value)"
  /> -->

  <div v-text="newProduct"></div>
  <input
    class="input_product"
    type="text"
    v-model.trim="newProduct"
    :placeholder="pHolder"
    v-on:keydown.enter="addProduct()"
    @keydown.delete="removeLatestProduct()"
    @keydown.tab.prevent="addProduct()"
    :style="
      Products.includes(newProduct)
        ? { color: 'red', 'text-decoration': 'line-through' }
        : {}
    "
  />
  <!-- <button @click="Products.push(newProduct)">Add</button> -->
</template>

<style scoped>
h2 {
  font-size: 20px;
  font-weight: 300;
}
.input_product {
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}
</style>
