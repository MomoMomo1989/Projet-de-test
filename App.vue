<script>
import { ref,reactive } from 'vue'
export default {
  setup() {
    const message = ref('azul');
    const message2 = ref(0);
    const humain = reactive({
      names : " rostom",
      age : 25,
      proffesion : "doc",
    });

    const increment = () => {
      message2.value++
    };
    const decrement = () => {
      message2.value--
    }
    const decrementTB = () => {
      humain.age++
    }
    const renis = () => {
      humain.names = " rostom",
      humain.age = 25,
      humain.proffesion = "doc"
    };
    return { 
      message,
      message2,
      decrement,
      increment,
      humain,
      decrementTB,
      renis
    }
  },
};
</script>
<template>
  <div class="az">
    {{ message }}
  
  <br/>
<input type="text" name="" id="" v-model="message">
<h2>{{ message2 }}</h2>
<br/>
<button @click="increment">inc</button>
<button @click="decrement">dec</button>
<br/>
<br/>

<h1>{{ humain.names }}</h1>
<h1>{{ humain.age }}</h1>
<h1>{{ humain.proffesion }}</h1>

<button @click="decrementTB">dec</button>
<button @click="renis">Renit</button>

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
      <th>proffesion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{humain.names}}</td>
      <td>{{humain.age}}</td>
      <td>{{humain.proffesion}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>
<style >
</style>