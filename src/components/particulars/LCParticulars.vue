<template>
    <div>
      <el-container>
        <el-header style="height: 40px"><i @click="$router.back()"  class="el-icon-arrow-left"/>{{ $route.meta.title }}</el-header>
        <el-main>
          <div style="border-bottom: #ccc 5px solid">
            <img style="margin-left: 140px; margin-bottom: 20px" width="70px" height="70px" src="static/touxiang.png" >
          </div>
          <ul>
            <table>
              <tr>
                <td><li style="display: inline-block;">客户名称</li></td>
                <td><li style="display: inline-block;margin-left: 83px">{{item.cname}}</li></td>
              </tr>
              <tr>
                <td><li style="display: inline-block">准客户号</li></td>
                <td><li style="display: inline-block;margin-left: 83px">{{item.cid}}</li></td>
              </tr>
              <tr>
                <td><li style="display: inline-block">客户星级</li></td>
                <td><li style="display: inline-block;margin-left: 83px">{{item.starLevel}}星用户</li></td>
              </tr>
              <tr>
                <td><li style="display: inline-block">投保意向</li></td>
                <td><li style="display: inline-block;margin-left: 83px">{{item.intention}}</li></td>
              </tr>
            </table>
          </ul>

          <div style="width: 100%; height: 30px;background-color: #ccc;line-height: 30px" >
            <span style="margin-left: 10px;font-size: 10px;">|&nbsp;&nbsp;&nbsp;基本信息</span>
          </div>

          <ul>
            <table>
              <tr>
                <td><li style="display: inline-block;">证件类型</li></td>
                <td><li style="display: inline-block;margin-left: 50px">{{item.codeType}}</li></td>
              </tr>
              <tr>
                <td><li style="display: inline-block">行业类型</li></td>
                <td><li style="display: inline-block;margin-left: 50px">{{item.industryType}}</li></td>
              </tr>
              <tr>
                <td><li style="display: inline-block">单位性质</li></td>
                <td><li style="display: inline-block;margin-left: 50px">{{item.unitType}}</li></td>
              </tr>
              <tr>
                <td><li style="display: inline-block">证件号码</li></td>
                <td><li style="display: inline-block;margin-left: 50px">{{item.codeId}}</li></td>
              </tr>
              <tr>
                <td><li style="display: inline-block">单位总人数</li></td>
                <td><li style="display: inline-block;margin-left: 50px">{{item.unitCount}}人</li></td>
              </tr>
              <tr>
                <td><li style="display: inline-block">预计投保人数</li></td>
                <td><li style="display: inline-block;margin-left: 50px">{{item.insureCount}}人</li></td>
              </tr>
              <tr>
                <td><li style="display: inline-block">单位地址</li></td>
                <td><li style="display: inline-block;margin-left: 50px">{{item.address}}</li></td>
              </tr>
            </table>
          </ul>


          <div v-for="(linkmen,index) in item.tclientLinkmens" :key="index">
            <div style="width: 100%; height: 30px;background-color: #ccc;line-height: 30px" >
              <span v-if="index == 0"  style="margin-left: 10px; font-size: 10px; float: left">|&nbsp;&nbsp;&nbsp;主联系人信息</span>
              <span v-if="index != 0"  style="margin-left: 10px; font-size: 10px; float: left">|&nbsp;&nbsp;&nbsp;副联系人信息</span>
            </div>

            <ul>
              <table>
                <tr>
                  <td><li style="display: inline-block;">姓名</li></td>
                  <td><li style="display: inline-block;margin-left: 83px">{{linkmen.lname}}</li></td>
                </tr>
                <tr>
                  <td><li style="display: inline-block">手机</li></td>
                  <td><li style="display: inline-block;margin-left: 83px">{{linkmen.ltel}}</li></td>
                </tr>
                <tr>
                  <td><li style="display: inline-block">办公电话</li></td>
                  <td><li style="display: inline-block;margin-left: 83px">{{linkmen.officePhone}}</li></td>
                </tr>
                <tr>
                  <td><li style="display: inline-block">出生日期</li></td>
                  <td><li style="display: inline-block;margin-left: 83px">{{linkmen.hiredate}}&nbsp;&nbsp;&nbsp;{{new Date().getFullYear() - linkmen.hiredate.substr(0,4)}}岁</li></td>
                </tr>
                <tr>
                  <td><li style="display: inline-block">部门</li></td>
                  <td><li style="display: inline-block;margin-left: 83px">{{linkmen.dept}}</li></td>
                </tr>
                <tr>
                  <td><li style="display: inline-block">职位</li></td>
                  <td><li style="display: inline-block;margin-left: 83px">{{linkmen.job}}</li></td>
                </tr>
                <tr>
                  <td><li style="display: inline-block">邮箱</li></td>
                  <td><li style="display: inline-block;margin-left: 83px">{{linkmen.email}}</li></td>
                </tr>
              </table>
            </ul>
          </div>
          <div style="background-color: #ccc ">
            <el-button style="margin-left: 70px;margin-top: 10px;margin-bottom: 10px" icon="el-icon-edit" type="primary" @click="$router.push({name:'UpdateLCClint',query:{id:item.cid}})">编辑</el-button>
            <el-button icon="el-icon-delete" @click="deleteClint(item.cid)" type="danger">删除</el-button>
          </div>
        </el-main>
      </el-container>
    </div>
</template>

<script>

export default {
  name: "LCParticulars",
  data() {
    return {
      id:this.$route.query.id,
      item: {
        id: '',
        cid: '',
        cname: '',
        intention: '',
        codeType: '',
        industryType: '',
        unitType: '',
        codeId: '',
        unitCount: null,
        insureCount: null,
        address: '',
        starLevel: '',
        tclientLinkmens: [
          {
            cid: '',
            lname: '',
            ltel: '',
            officePhone: '',
            hiredate: '',
            dept: '',
            job: '',
            email: '',
            flag: 1
          }
        ]
      }
    }
  },
  methods:{
    show(){
      this.axios.get('http://localhost:80/selectClientById',{params:{cid:this.id}}).then(res=>{
          console.log(res);
          this.item = res.data
        }
      )
    },
    deleteClint(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('http://localhost:80/deleteClient',{params:{cid:id}}).then(res=>{
            if (res.data.flag == true){
              this.$message({
                message: res.data.msg,
                type: 'success'
              });
              this.$router.push('/home/standardClint')
            }else {
              this.$message({
                message: res.data.msg,
                type: 'error'
              });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
  },
  mounted() {
    this.show();
  }

}
</script>

<style scoped>
div{
  font-size: 14px;
}

.el-icon-arrow-left:before {
  content: "\E6DE";
  margin-left: -286px;
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
