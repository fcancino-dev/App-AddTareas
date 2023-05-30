<script setup>
import Navbar from '../components/Navbar.vue';
import Categories from '../components/Categories.vue';
// import Modal from '../components/Modal.vue';
import { Close, Plus } from '@element-plus/icons-vue'
import { useStoreItem } from '../store/index.js'


</script>

<template>
    <div>
        <el-card class="box-card">
            <div>
                <Navbar class=" pb-6" />
                <div class="text-3xl pb-6 font-bold">What´s up Joy!</div>
                <section>
                    <Categories />
                </section>
                <br>
                <section>
                    <p class=" text-xs text-gray-400 pb-4">TODAY´S TASK</p>
                    <el-scrollbar height="340px">
                            <li v-for="item in useStoreItem.items" :key="item.id" class="scrollbar-demo-item">
                                <div class=" custom-card">
                                    <div class="w-[240px]">
                                        <label class="custom-radio  " :class="item.Categories">
                                            <input type="radio" class="pl-[-10px]" v-model="item.complete" :checked="item.complete"
                                                @change="useStoreItem.toggleComplete(item)">
                                            <span :class="[item.complete ? item.Categories : '']"></span>
                                        </label>
                                        <span class="pl-4 font-semibold" :class="{ 'line-through': item.complete }">{{
                                            item.text }}
                                        </span>
                                    </div>
                                    <div class=" ">
                                        <span></span>
                                        <el-button type="danger" @click="useStoreItem.removeItem(item)" circle :icon="Close"
                                            size="small" />
                                    </div>
                                </div>
                            </li>
                    </el-scrollbar>
                    <router-link to="/addtask" class="">
                        <el-button circle type="primary" class="custom-button" :icon="Plus"></el-button>
                    </router-link>
                </section>
            </div>
            <!-- <Modal :itemI="itemI" /> -->
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
    font-size: 20px;
    /* color: white; */
    width: 50px;
    height: 50px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    /* transition: all 0.3s ease; */
}

.custom-card {
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 0 5px rgba(218, 218, 218, 0.3);
    padding: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;    
}
.custom-radio input[type="radio"] {
    display: none;
}

.custom-radio span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid #53b6f8;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
}

.custom-radio .business {
    border-color: rgb(214, 35, 214);
    background-color: rgb(214, 35, 214);
}

.custom-radio .personal {
    border-color: rgb(64, 158, 255);
    background-color: rgb(64, 158, 255);
}

.scrollbar-demo-item {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    height: 50px;
    margin: 15px;
    /* text-align: center; */
    border-radius: 4px;
    /* background: var(--el-color-primary-light-9); */
    /* color: var(--el-color-primary); */
}
</style>
