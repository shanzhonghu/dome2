<template>
  <div>
    <div style="background-color: lightsteelblue">
      <el-input v-model="mohu" style="width:260px;margin-top: 10px; margin-left: 5px"   placeholder="请输入准客户名称、手机号、证件号码" /><el-button type="primary" icon="el-icon-search" @click="searcher()">搜索</el-button>
      <br>
      <br>
      <el-button style="width: 350px;margin-bottom: 10px;margin-left: 5px;height: 35px  " type="primary" @click="$router.push('/addClint')">增加</el-button>
    </div>
    <div>
      <ul style="border-bottom: #ccc 1px solid" v-for="clint in clints" @click="$router.push({ name: 'LCParticulars', query: {id: clint.cid }})">
        <li >{{clint.cname}}</li>
        <li>联系人 ：{{clint.tclientLinkmens[0].lname }}</li>
        <li><i class="el-icon-phone"></i>{{clint.tclientLinkmens[0].ltel }}</li>
        <br>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tpregrp",
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
        url: 'http://localhost:80/selectClient'
      }).then(function (repos) {
        vm.clints=repos.data
        console.log(repos);
      })
    },
    searcher(){
      var vm =this;
      this.axios({
        method: 'get',
        url: 'http://localhost:80/selectClient',
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
