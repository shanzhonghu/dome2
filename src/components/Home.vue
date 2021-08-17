<template>
  <div >
    <el-container>
      <el-header style="height: 40px"><i  class="el-icon-arrow-left"/>客户管理</el-header>
      <el-main>
        <el-menu  class="el-menu-demo" mode="horizontal" >
          <el-menu-item index="1" @click="$router.push('/home/tpregrp')">本地客户</el-menu-item>
          <el-menu-item index="2" @click="$router.push('/home/standardClint')">准客户</el-menu-item>
          <el-menu-item index="3" @click="$router.push('/home/clint')">客户</el-menu-item>
        </el-menu>
        <div style="margin-top: 20px">
          <router-view/>
        </div>
      </el-main>
    </el-container>


<!--    <div align="left"><el-button class="tou" @click="$router.push('/tpregrp')">本地客户</el-button ><el-button class="tou">准客户</el-button><el-button class="tou">客户</el-button></div>-->
<!--    <el-button class="tou" @click="$router.push('/threeLD')">联动</el-button >-->

<!--    <i class="el-icon-loading"></i>-->

  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
.el-icon-arrow-left:before {
  content: "\E6DE";
  margin-left: -300px;
}


.el-menu{
  width: 100%;
}
.el-menu-item{
  width: 33%;
  text-align: center;
  height: 26px;
  line-height: 10px;
}
.el-header{

  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 40px;
}

</style>
