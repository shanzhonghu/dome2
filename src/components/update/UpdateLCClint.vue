<template>
  <div>
    <el-container>
      <el-header style="height: 40px"><i @click="$router.back()"  class="el-icon-arrow-left"/>编辑本地客户资料</el-header>
      <el-main>
        <div style="border-bottom: #ccc 5px solid">
          <img style="margin-left: 140px; margin-bottom: 20px" width="70px" height="70px" src="static/touxiang.png" >
        </div>


        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top: 20px">
          <el-form-item label="客户名称" prop="cname" >
            <el-input placeholder="请输入客户名称"  v-model="ruleForm.cname"></el-input>
          </el-form-item>

          <el-form-item label="客户星级" prop="qqq">
            <el-input v-model="ruleForm.starLevel" :disabled="true" />
          </el-form-item>

          <el-form-item label="投保意向" prop="delivery">
            <el-select v-model="ruleForm.intention" placeholder="请选择投保意向">
              <el-option label="意外险" value="意外险"></el-option>
              <el-option label="医疗险" value="医疗险"></el-option>
              <el-option label="年金险" value="年金险"></el-option>
              <el-option label="重疾险" value="重疾险"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>

          <div style="width: 100%; height: 30px;background-color: #ccc;line-height: 30px" >
            <span style="margin-left: 10px;font-size: 10px;">|&nbsp;&nbsp;&nbsp;基本信息</span>
          </div>

          <el-form-item label="证件类型" prop="delivery" style="margin-top: 20px">
            <el-select v-model="ruleForm.codeType" placeholder="请选择证件类型">
              <el-option label="营业执照" value="营业执照"></el-option>
              <el-option label="组织机构代码证" value="组织机构代码证"></el-option>
              <el-option label="税务登记证" value="税务登记证"></el-option>
              <el-option label="社保保险登记证" value="社保保险登记证"></el-option>
              <el-option label="办学许可证" value="办学许可证"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="行业类型" prop="hylx">
            <el-select v-model="ruleForm.industryType" placeholder="请选择行业类型">
              <el-option label="政府机关" value="政府机关"></el-option>
              <el-option label="事业单位" value="事业单位"></el-option>
              <el-option label="国有企业" value="国有企业"></el-option>
              <el-option label="民营企业" value="民营企业"></el-option>
              <el-option label="外资企业" value="外资企业"></el-option>
              <el-option label="股份制企业" value="股份制企业"></el-option>
              <el-option label="合资企业" value="合资企业"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="单位性质" prop="dwxz">
            <el-select v-model="ruleForm.unitType" placeholder="请选择单位性质">
              <el-option label="农业" value="农业"></el-option>
              <el-option label="林业" value="林业"></el-option>
              <el-option label="畜牧业" value="畜牧业"></el-option>
              <el-option label="渔业" value="渔业"></el-option>
              <el-option label="农、林、牧、渔服务业" value="农、林、牧、渔服务业"></el-option>
              <el-option label="煤炭开采与洗选业" value="煤炭开采与洗选业"></el-option>
              <el-option label="石油和天然气开采业" value="石油和天然气开采业"></el-option>
              <el-option label="黑色金属矿采选业" value="黑色金属矿采选业"></el-option>
              <el-option label="有色金属矿采选业" value="有色金属矿采选业"></el-option>
              <el-option label="非金属矿采选业" value="非金属矿采选业"></el-option>
              <el-option label="其他矿采选业" value="其他矿采选业"></el-option>
              <el-option label="农副食品加工业" value="农副食品加工业"></el-option>
              <el-option label="食品制造业" value="食品制造业"></el-option>
              <el-option label="食品制造业" value="食品制造业"></el-option>
              <el-option label="饮料制造业" value="饮料制造业"></el-option>
              <el-option label="烟草制品业" value="烟草制品业"></el-option>
              <el-option label="纺织业" value="纺织业"></el-option>
              <el-option label="纺织服装、鞋、帽制造业" value="纺织服装、鞋、帽制造业"></el-option>
              <el-option label="皮革、毛皮、羽毛（绒）及其制品业" value="皮革、毛皮、羽毛（绒）及其制品业"></el-option>
              <el-option label="木材加工及木、竹、藤、棕、草制品业" value="木材加工及木、竹、藤、棕、草制品业"></el-option>
              <el-option label="家具制造业" value="家具制造业"></el-option>
              <el-option label="造纸及纸制品业" value="造纸及纸制品业"></el-option>
              <el-option label="印刷业、记录媒介的复制" value="印刷业、记录媒介的复制"></el-option>
              <el-option label="文教体育用品制造业" value="文教体育用品制造业"></el-option>
              <el-option label="石油加工、炼焦及核燃料加工业" value="石油加工、炼焦及核燃料加工业"></el-option>
              <el-option label="化学原料及化学制品制造业" value="化学原料及化学制品制造业"></el-option>
              <el-option label="医药制造业" value="医药制造业"></el-option>
              <el-option label="化学纤维制造业" value="化学纤维制造业"></el-option>
              <el-option label="橡胶制品业" value="橡胶制品业"></el-option>
              <el-option label="塑料制品业" value="塑料制品业"></el-option>
              <el-option label="非金属矿物制品业" value="非金属矿物制品业"></el-option>
              <el-option label="黑色金属冶炼及压延加工业" value="黑色金属冶炼及压延加工业"></el-option>
              <el-option label="有色金属冶炼及压延加工业" value="有色金属冶炼及压延加工业"></el-option>
              <el-option label="金属制品业" value="金属制品业"></el-option>
              <el-option label="通用设备制造业" value="通用设备制造业"></el-option>
              <el-option label="专业设备制造业" value="专业设备制造业"></el-option>
              <el-option label="交通运输设备制造业" value="交通运输设备制造业"></el-option>
              <el-option label="电气机械及器材制造业" value="电气机械及器材制造业"></el-option>
              <el-option label="通信设备、计算机及其他电子设备制造业" value="通信设备、计算机及其他电子设备制造业"></el-option>
              <el-option label="仪器仪表及文化、办公用机械制造业" value="仪器仪表及文化、办公用机械制造业"></el-option>
              <el-option label="工艺品及其他制造业" value="工艺品及其他制造业"></el-option>
              <el-option label="废弃资源和废旧材料回收加工业" value="废弃资源和废旧材料回收加工业"></el-option>
              <el-option label="电力、热力的生产和供应业" value="电力、热力的生产和供应业"></el-option>
              <el-option label="燃气生产和供应业" value="燃气生产和供应业"></el-option>
              <el-option label="水的生产和供应业" value="水的生产和供应业"></el-option>
              <el-option label="房屋和土木工程建筑业" value="房屋和土木工程建筑业"></el-option>
              <el-option label="建筑安装业" value="建筑安装业"></el-option>
              <el-option label="建筑装饰业" value="建筑装饰业"></el-option>
              <el-option label="其他建筑业" value="其他建筑业"></el-option>
              <el-option label="铁路运输业" value="铁路运输业"></el-option>
              <el-option label="道路运输业" value="道路运输业"></el-option>
              <el-option label="城市公共交通业" value="城市公共交通业"></el-option>
              <el-option label="水上运输业" value="水上运输业"></el-option>
              <el-option label="航空运输业" value="航空运输业"></el-option>
              <el-option label="管道运输业" value="管道运输业"></el-option>
              <el-option label="装卸搬运和其他运输服务业" value="装卸搬运和其他运输服务业"></el-option>
              <el-option label="仓储业" value="仓储业"></el-option>
              <el-option label="邮政业" value="邮政业"></el-option>
              <el-option label="电信和其他信息传输服务业" value="电信和其他信息传输服务业"></el-option>
              <el-option label="计算机服务业" value="计算机服务业"></el-option>
              <el-option label="软件业" value="软件业"></el-option>
              <el-option label="批发业" value="批发业"></el-option>
              <el-option label="零售业" value="零售业"></el-option>
              <el-option label="住宿业" value="住宿业"></el-option>
              <el-option label="餐饮业" value="餐饮业"></el-option>
              <el-option label="银行业" value="银行业"></el-option>
              <el-option label="证券业" value="证券业"></el-option>
              <el-option label="保险业" value="保险业"></el-option>
              <el-option label="其他金融活动" value="其他金融活动"></el-option>
              <el-option label="房地产业" value="房地产业"></el-option>
              <el-option label="租赁业" value="租赁业"></el-option>
              <el-option label="商务服务业" value="商务服务业"></el-option>
              <el-option label="研究与试验发展" value="研究与试验发展"></el-option>
              <el-option label="专业技术服务业" value="专业技术服务业"></el-option>
              <el-option label="科技交流和推广服务业" value="科技交流和推广服务业"></el-option>
              <el-option label="地质勘查业" value="地质勘查业"></el-option>
              <el-option label="水利管理业" value="水利管理业"></el-option>
              <el-option label="环境管理业" value="环境管理业"></el-option>
              <el-option label="公共设施管理业" value="公共设施管理业"></el-option>
              <el-option label="居民服务业" value="居民服务业"></el-option>
              <el-option label="其他服务业" value="其他服务业"></el-option>
              <el-option label="教育" value="教育"></el-option>
              <el-option label="卫生" value="卫生"></el-option>
              <el-option label="社会保障业" value="社会保障业"></el-option>
              <el-option label="社会福利业" value="社会福利业"></el-option>
              <el-option label="新闻出版业" value="新闻出版业"></el-option>
              <el-option label="广播、电视、电影和音像业" value="广播、电视、电影和音像业"></el-option>
              <el-option label="文化艺术业" value="文化艺术业"></el-option>
              <el-option label="体育" value="体育"></el-option>
              <el-option label="娱乐业" value="娱乐业"></el-option>
              <el-option label="中国共产党机关" value="中国共产党机关"></el-option>
              <el-option label="国家机构" value="国家机构"></el-option>
              <el-option label="人民政协和民主党派" value="人民政协和民主党派"></el-option>
              <el-option label="群众团体、社会团体和宗教组织" value="群众团体、社会团体和宗教组织"></el-option>
              <el-option label="基层群众自治组织" value="基层群众自治组织"></el-option>
              <el-option label="国际组织" value="国际组织"></el-option>
              <el-option label="楼宇" value="楼宇"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="证件号码" prop="delivery">
            <el-input  placeholder="请输入证件号码" v-model="ruleForm.codeId"></el-input>
          </el-form-item>

          <el-form-item label="单位总人数" prop="delivery">
            <el-input  placeholder="请输入证件号码" v-model="ruleForm.unitCount"></el-input>
          </el-form-item>

          <el-form-item label="预计投保人数" prop="delivery">
            <el-input  placeholder="请输入证件号码" v-model="ruleForm.insureCount"></el-input>
          </el-form-item>

          <el-form-item label="单位地址" prop="delivery">
            <el-cascader ref="qq"
                         size="large"
                         :options="options"
                         v-model="selectedOptions"
                         @change="handleChange">
            </el-cascader>
            <el-input style="margin-top: 10px"  placeholder="请输入单位地址" v-model="ruleForm.address"></el-input>
          </el-form-item>




          <!--          联系人信息-->
          <div v-for="(linkmen,index) in ruleForm.tclientLinkmens" :key="index">
            <div style="width: 100%; height: 30px;background-color: #ccc;line-height: 30px" >
              <span v-if="index == 0"  style="margin-left: 10px; font-size: 10px; float: left">|&nbsp;&nbsp;&nbsp;主联系人信息</span>
              <span v-if="index != 0"  style="margin-left: 10px; font-size: 10px; float: left">|&nbsp;&nbsp;&nbsp;副联系人信息</span>
              <span v-if="index == 0" @click="addlinkmen" style="margin-right: 20px; font-size: 10px;float: right"><i class="el-icon-circle-plus-outline" />&nbsp;&nbsp;&nbsp;添加联系人</span>
              <span v-if="index != 0" @click="deletelinkmen(index)" style="margin-right: 20px; font-size: 10px;float: right"><i class="el-icon-delete" />&nbsp;&nbsp;&nbsp;删除联系人</span>
            </div>


            <el-form-item label="姓名" prop="name" style="margin-top: 20px" >
              <el-input placeholder="请输入联系人姓名"  v-model="linkmen.lname"></el-input>
            </el-form-item>


            <el-form-item label="手机" prop="delivery">
              <el-input  placeholder="请输入联系人手机" v-model="linkmen.ltel"></el-input>
            </el-form-item>

            <el-form-item label="办公电话" prop="delivery">
              <el-input  placeholder="请输入办公电话" v-model="linkmen.officePhone"></el-input>
            </el-form-item>

            <el-form-item label="出生日期" prop="delivery">
              <el-date-picker
                format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                v-model="linkmen.hiredate"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>


            <el-form-item label="部门" prop="name" style="margin-top: 20px" >
              <el-input placeholder="请输入部门"  v-model="linkmen.dept"></el-input>
            </el-form-item>

            <el-form-item label="职位" rop="name" style="margin-top: 20px" >
              <el-input placeholder="请输入职位"  v-model="linkmen.job"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" rop="name" style="margin-top: 20px" >
              <el-input placeholder="请输入邮箱"  v-model="linkmen.email"></el-input>
            </el-form-item>
          </div>



          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import {CodeToText, regionData} from "element-china-area-data";

export default {
  name: "UpdateLCClint",
  data() {
    return {
      options: regionData,
      selectedOptions: [],
      id:this.$route.query.id,
      linkmen:{
        cid: '',
        lname: '',
        ltel: '',
        officePhone: '',
        hiredate: '',
        dept: '',
        job: '',
        email: '',
        flag: 0
      },
      ruleForm: {
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
            id:'',
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
      },
      rules: {
        // cname: [
        //   {required: true, message: '请输入活动名称', trigger: 'blur'},
        //   {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        // ],
        // region: [
        //   {required: true, message: '请选择活动区域', trigger: 'change'}
        // ],
        // date1: [
        //   {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        // ],
        // date2: [
        //   {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
        // ],
        // type: [
        //   {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
        // ],
        // resource: [
        //   {required: true, message: '请选择活动资源', trigger: 'change'}
        // ],
        // desc: [
        //   {required: true, message: '请填写活动形式', trigger: 'blur'}
        // ]
      }
    }
  },
  methods: {
    deletelinkmen(id) {
        this.ruleForm.tclientLinkmens.splice(id,1)
    },
    addlinkmen() {
      var data ={
        cid: '',
        lname: '',
        ltel: '',
        officePhone: '',
        hiredate: '',
        dept: '',
        job: '',
        email: '',
        flag: 0
      }
      this.ruleForm.tclientLinkmens.push(data)
    },
    handleChange(value) {
      var zz = ''
      zz += CodeToText[value[0]]
      zz += CodeToText[value[1]]
      zz += CodeToText[value[2]]
      this.ruleForm.address = zz
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = this.ruleForm
          console.log(data)
          this.axios.put('http://localhost:80/updateClient',
            this.$qs.stringify(data,{arrayFormat: 'indices', allowDots: true})).
          then(res=>{
            if (res.data.flag == true){
              this.$message({
                message: res.data.msg,
                type: 'success'
              });
              this.$router.push('/home/tpregrp')
            }else{
              this.$message({
                message: res.data.msg,
                type: 'error'
              });
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    show(){
      this.axios.get('http://localhost:80/selectClientById',{params:{cid:this.id}}).then(res=>{
          console.log(res);
          this.ruleForm = res.data
        }
      )
    },
  },
  mounted() {
    this.show()
  }
}
</script>

<style scoped>

.el-icon-arrow-left:before {
  content: "\E6DE";
  margin-left: -255px;
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
