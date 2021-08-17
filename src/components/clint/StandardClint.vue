<template>
  <div >
    <div style="background-color: lightsteelblue">
      <el-input v-model="mohu" style="width:260px;margin-top: 10px; margin-left: 5px;margin-bottom: 10px;"   placeholder="请输入准客户名称、手机号、证件号码" /><el-button type="primary" icon="el-icon-search" @click="searcher()">搜索</el-button>
    </div>
    <div >
      <ul style="border-bottom: #ccc 1px solid" v-for="clint in clints" @click="$router.push({ name: 'SCParticulars', query: {id: clint.cid }})">
        <li>{{clint.cname}}</li>
        <li>联系人 ：{{clint.tclientLinkmens[0].lname }}</li>
        <li><i class="el-icon-phone"></i>{{clint.tclientLinkmens[0].ltel }}</li>
        <p v-if="clint.tclientLinkmens.length == 1" align="center"  style=" float:right; margin-top:-45px;border-radius: 5px; font-size: 10px; color:sandybrown; line-height: 20px; border: 3px sandybrown solid; width: 70px;height: 20px">保护中</p>
        <p  v-if="clint.tclientLinkmens.length != 1" align="center"  style=" float:right; margin-top:-45px;border-radius: 5px; font-size: 10px; color:red; line-height: 20px; border: 3px red solid; width: 70px;height: 20px">即将到期</p>
        <br>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "StandardClint",
  data(){
    return{
      clints:[],
      mohu:null
    }
  },
  mounted() {
    this.show();
  },
  methods:{
    show(){
      var vm =this;
      this.axios({
        method: 'get',
        url: 'http://localhost:80/selectZhunClient'
      }).then(function (repos) {
        vm.clints=repos.data
        console.log(repos);
      })
    },
    searcher(){
      var vm =this;
      this.axios({
        method: 'get',
        url: 'http://localhost:80/selectZhunClient',
        params:{"cname":this.mohu}
      }).then(function (repos) {
        vm.clints=repos.data
        console.log(repos);
      })
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
li{
  text-align: left
}
</style>
