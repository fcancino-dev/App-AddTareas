<script setup>

</script>

<template>
    <p class=" text-xs text-gray-400 pb-2">CATEGORIES</p>
    <el-scrollbar>
        <div class="  scrollbar-flex-content">
            <el-card class=" box-card scrollbar-demo-item card-item ">
                <div class=" text-sm text-gray-400">40 task</div>
                <div class=" text-lg font-bold">Business</div>
                <div class=" demo-progress " >
                    <el-progress :percentage="60" :show-text="false" color="#d623d6"/>
                </div>
            </el-card>
            <el-card class=" box-card scrollbar-demo-item card-item ">
                <div class=" text-sm text-gray-400">18 task</div>
                <div class=" text-lg font-bold">Personal</div>
                <div class=" demo-progress">
                    <el-progress :percentage="60" :show-text="false"/>
                </div>
            </el-card>
            <!-- <el-card class=" w-[150px]  scrollbar-demo-item card-item ">
                <div>40 task</div>
                <div>Businness</div>
            </el-card>
            <el-card class=" w-[150px]  scrollbar-demo-item card-item ">
                <div>40 task</div>
                <div>Businness</div>
            </el-card>
            <el-card class=" w-[150px]  scrollbar-demo-item  card-item ">
                <div>40 task</div>
                <div>Businness</div>
            </el-card> -->
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
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 140px;

}
.color{
    color:#d623d6
}
</style>


