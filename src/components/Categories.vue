<script setup>
import { useStoreItem } from '../store';

const prop = defineProps({
    color: {
        type: String,
        // default: '#999999'
    }
})

</script>

<template>
    <p class=" text-xs text-gray-400 pb-2">CATEGORIES</p>
    <el-scrollbar>
        <div class="  scrollbar-flex-content">
            <li v-for="item in useStoreItem.categories" :key="item.id" class="scrollbar-demo-item box-card ">
                <el-card class=" card-item">
                    <div class=" text-sm text-gray-400">40 task</div>
                    <div class=" text-lg font-bold">{{ item.titulo }}</div>
                    <div class=" demo-progress " >
                        <el-progress :percentage="60" :show-text="false" :color="color"/>
                    </div>
                </el-card>
            </li>
        </div>
    </el-scrollbar>
</template>

<style scoped>

.scrollbar-flex-content {
    display: flex;
}

.scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    width: 150px;
    height: 100px;
    margin: 10px;
    /* text-align: center; */
    border-radius: 0.5em;
    /* background: var(--el-color-danger-light-9);
    color: var(--el-color-danger); */
}
 .box-card {
    width: 180px;
 }
 .card-item {
    border-radius: 1rem;
 }
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 140px;

}
.business{
    color:#d623d6
}
.personal{
    color:#53b6f8
}
</style>


