<script setup>
import { Menu, Search, Bell } from '@element-plus/icons-vue'

</script>

<template>
    <div class=" flex space-x-[240px]">
        <div>
            <el-icon :size="20" color="#636466" >
                <Menu />
            </el-icon>
        </div>
        <div class=" flex space-x-5">
            <div>
                <el-icon :size="20" color="#636466">
                    <Search />
                </el-icon>
            </div>
            <div>
                <el-icon :size="20" color="#636466">
                    <Bell />
                </el-icon>
            </div>
        </div>
</div>
</template>


