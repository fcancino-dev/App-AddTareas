<script setup>
import { ref,  } from 'vue';
// import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Categories from '../components/Categories.vue';
import Modal from '../components/Modal.vue';
// import { ElMessageBox } from 'element-plus'
import { Close } from '@element-plus/icons-vue'

// const route = useRoute();
// const newItemText = ref('');
// const dialogVisible = ref(false)
const itemI = ref([
    { id: 1, text: 'Dayly meeting with team', complete: false, Categories: 'business' },
    { id: 2, text: 'Pay for rent', complete: false, Categories: 'personal' },
    { id: 3, text: 'Check emails', complete: false, Categories: 'business' },
    { id: 4, text: 'Lunch with Emma', complete: false, Categories: 'personal' },
    { id: 5, text: 'meditation', complete: false, Categories: 'personal' },
])
// const addItem = () => {
//     itemI.value.push({
//         id: Date.now(),
//         text: newItemText.value,
//         complete: false,
//     })
//     newItemText.value = '';
//     // Cerrar el modal
//     closeDialog();
// }
// const closeDialog = () => {
//   // Establecer dialogVisible como false utilizando el ref
//   if (dialogVisible.value) {
//     dialogVisible.value = false;
//     // Limpia los campos del formulario
//     clearForm();
//   }
// };
// const clearForm = () => {
//   newItemText.value = '';
// };
const toggleComplete = (item) => {
    item.completed = !item.completed;
    if (item.completed) {
        setTimeout(() => {
            removeItem(item)
        }, 2000);
    }
}
const removeItem = (item) => {
    const index = itemI.value.indexOf(item);
    itemI.value.splice(index, 1);
    // if (index !== -1) {
    //     itemI.value.splice(index, 1);

    // };
}


// const handleClose = (done) => {
//     ElMessageBox.confirm('No desea agregar la tarea?', 'Mensaje', {
//         confirmButtonText: 'No',
//         cancelButtonText: 'Si',
//     })
//         .then(() => {
//             done()
//         })
//         .catch(() => {
//             // catch error
//         })
// }

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
                            <li v-for="items in itemI" :key="items.id" class="scrollbar-demo-item">
                                <div class=" custom-card">
                                    <div class="w-[240px]">
                                        <label class="custom-radio  " :class="items.Categories">
                                            <input type="radio" class="pl-[-10px]" v-model="items.complete" :checked="items.complete"
                                                @change="toggleComplete(items)">
                                            <span :class="[items.complete ? items.Categories : '']"></span>
                                        </label>
                                        <span class="pl-4 font-semibold" :class="{ 'line-through': items.complete }">{{
                                            items.text }}
                                        </span>
                                    </div>
                                    <div class=" ">
                                        <span></span>
                                        <el-button type="danger" @click="removeItem(items)" circle :icon="Close"
                                            size="small" />
                                    </div>
                                </div>
                            </li>
                    </el-scrollbar>
                    <el-button><router-link to="/addtask">Add</router-link></el-button>
                </section>
            </div>
            <Modal :itemI="itemI" />
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

.custom-card {
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 0 5px rgba(218, 218, 218, 0.3);
    padding: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/* .card-header { */
/* display: flex; */
/* justify-content: space-between;     */
/* align-items: center; */
/* padding: -50px; */
/* margin-left: 50px; */
/* } */

.button-circle {
    height: 40px;
    padding: 0;
    font-size: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

/* .card-item {
    border-radius: 1em;
    border-color: white
    
    
} */
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
