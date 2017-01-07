<template lang="html">
  <el-menu default-active="1" id="nav-menu" theme="dark">
    <div class="logo">
      <router-link to="/">
        <!--<img src="../../assets/images/vector_space_illust.svg" />-->
        <p>tmpbook</p>
      </router-link>
    </div>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-plus"></i>导航一</template>
      <el-menu-item index="1-1"><router-link to="/question" class="nav-link"><i class="el-icon-document"></i>Ajax Demo</router-link></el-menu-item>
      <el-menu-item index="1-2"><router-link to="/user" class="nav-link"><i class="el-icon-document"></i>Vuex(User)</router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><router-link to="/table" class="nav-link"><i class="el-icon-document"></i>表格</router-link></el-menu-item>
  </el-menu>
</template>
