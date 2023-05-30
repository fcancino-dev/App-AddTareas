<script setup>
import Navbar from '../components/Navbar.vue';
import { useStoreItem } from '../store/index.js'
import { useRouter } from 'vue-router'
import { ArrowUpBold, Close  } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton, ElDatePicker } from 'element-plus'

const value1 = ref('')
const router = useRouter()
const newItemText = useStoreItem.newItemText;

const addItem = () => {
  useStoreItem.addItem(newItemText.value)
  router.push('/')
}

</script>

<template>
  <div>
    <el-card class="box-card">
      <Navbar class=" pb-6" />
      <div class=" ml-[285px]">
        <el-button  circle><router-link to="/"><el-icon><Close /></el-icon></router-link></el-button>
      </div>
      <div class="pb-[200px]"></div>
      <el-form>
        <el-form-item>
          <el-input type="text" v-model="newItemText" placeholder="Agregar nueva tarea" />
        </el-form-item>
        <!-- <div class=" date-picker"> -->
          <!-- <el-date-picker v-model="value1" type="date" placeholder="Hoy" :default-value="new Date(2023, 9, 1)" /> -->
        <!-- </div> -->
        <div class="pb-[318px]"></div>
        <div class="ml-[167px]">
          <el-button type="primary" @click.prevent="addItem" class="custom-button ">
            Nueva tarea <span class="mr-2"></span> <el-icon class="el-icon--right">
              <ArrowUpBold />
            </el-icon>
          </el-button>
        </div>
      </el-form>
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

.custom-button{
    /* font-size: 20px; */
    /* color: white; */
    width: 150px;
    height: 50px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 2rem;
    /* transition: all 0.3s ease; */
}

</style>

