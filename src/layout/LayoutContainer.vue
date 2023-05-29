<script setup>
import Home from '../views/Home.vue';
</script>
<template>
    <div class="common-layout bg-gray-500">
      <el-container>
        <!-- <el-header>Header</el-header>] -->
        <el-main>
            <router-view ></router-view>
            </el-main>
      </el-container>
    </div>
  </template>