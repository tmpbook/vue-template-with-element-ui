<template lang="html">
  <el-menu default-active="1" id="nav-menu" theme="dark">
    <div class="logo">
      <router-link to="/">
        <!--<img src="../../assets/images/vector_space_illust.svg" />-->
        <p>tmpbook</p>
      </router-link>
    </div>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-menu"></i>导航一</template>
      <el-menu-item index="1-1"><router-link to="/question" class="nav-link">Ajax Demo</router-link></el-menu-item>
      <el-menu-item index="1-2"><router-link to="/user" class="nav-link">Vuex(User)</router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><router-link to="/page3" class="nav-link"><i class="el-icon-message"></i>导航二</router-link></el-menu-item>
  </el-menu>
</template>
