<script setup>
import { ref, defineProps, } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import Navbar from '../components/Navbar.vue';

const router = useRouter();
const newItemText = ref('');
const prop = defineProps({
  itemI: {
    id: Number,
    text: String,
    complete: Boolean,
    categories: String,
  },
})
const addItem = () => {
  prop.itemI.push({
    id: Date.now(),
    text: newItemText.value,
    complete: false,
  })
  newItemText.value = '';
}



</script>

<template>
  <div>
    <el-card class="box-card">
      <Navbar class=" pb-6" />
      <div class="pb-[200px]"></div>
      <form @submit.prevent="addItem">
        <input type="text" placeholder="Ingrese nueva tarea" v-model="newItemText">
        <button type="submit">Agregar</button>
      </form>
      <el-button><router-link to="/">x</router-link></el-button>
      <div class="pb-[415px]"></div>
    </el-card>
  </div>
</template>

<style scoped>
.box-card {
  width: 400px;
  margin: 30px auto;
  border-radius: 3em;
  /* background: var(--el-color-danger-light-9); */
  background-color: rgb(250, 252, 253);
  padding: 20px 20px 20px 20px;
}
</style>

