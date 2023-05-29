<script setup>
import {  Plus, ArrowUpBold } from '@element-plus/icons-vue'
import { ref, defineProps} from 'vue';
import { ElMessageBox } from 'element-plus'

const value1 = ref('')
const newItemText = ref('');
const dialogVisible = ref(false)
const prop =  defineProps({
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
    // Cerrar el modal
    closeDialog();
}
const closeDialog = () => {
  // Establecer dialogVisible como false utilizando el ref
  if (dialogVisible.value) {
    dialogVisible.value = false;
    // Limpia los campos del formulario
    clearForm();
  }
};
const clearForm = () => {
  newItemText.value = '';
};
const handleClose = (done) => {
    ElMessageBox.confirm('No desea agregar la tarea?', 'Mensaje', {
        confirmButtonText: 'No',
        cancelButtonText: 'Si',
    })
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

</script>

<template>
    <div class="flex pl-[270px] ">
        <div class=" ">
            <el-button type="primary" class="button-circle " size="large" @click="dialogVisible = true" circle :icon="Plus" />
        </div>
    </div>
    <el-dialog ref="dialog" v-model="dialogVisible" :before-close="handleClose" modal width="24%"
        class=" h-[550px] w-[200px] rounded-[100px]]" center @closed="closeDialog">
        <div class=" pt-[150px]">
            <el-form>
                <el-form-item>
                    <el-input type="text" v-model="newItemText" placeholder="Agregar nueva tarea" />
                </el-form-item>
                <div class=" date-picker">
                    <el-date-picker
                        
                        v-model="value1"
                        type="date"
                        placeholder="Hoy"
                        :default-value="new Date(2023, 9, 1)"
                    />
                </div>
                <div class="ml-[120px]">
                    <el-button type="primary" @click="addItem" round>
                        Agregar<el-icon class="el-icon--right">
                                    <ArrowUpBold />
                                </el-icon>
                </el-button>
                </div>
            </el-form>
        </div>
    </el-dialog>
</template>

<style scoped>

.date-picker {
    margin-bottom: 13rem;
}
.button-circle {
    height: 40px;
    padding: 0;
    font-size: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    /* transition: all 0.3s ease; */
}
.floating-button {
  position: absolute;
  right: 400px; /* Ajusta el valor para posicionar el botón horizontalmente */
  bottom: -10px; /* Ajusta el valor para posicionar el botón verticalmente */
  z-index: 999; /* Asegura que el botón esté por encima de otros elementos */
}
</style>
