import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入上面定义的组件
import Home from "../components/Home";
import Tpregrp from "../components/clint/LocalityClint";
import ThreeLD from "../components/ThreeLD";
import AddClint from "../components/AddClint";
import StandardClint from "../components/clint/StandardClint";
import Clint from "../components/clint/Clint";
import LCParticulars from "../components/particulars/LCParticulars";
import SCParticulars from "../components/particulars/SCParticulars";
import CParticulars from "../components/particulars/CParticulars";
import UpdateLCClint from "../components/update/UpdateLCClint";
import UpdateSCClint from "../components/update/UpdateSCClint";

// 安装路由
Vue.use(Router);

// 配置路由
export default new Router({
  //去除路劲中的#
  // mode:'history',
  routes: [
    {
      // 路由路径
      path: '/threeLD',
      // 路由名称
      name: 'ThreeLD',
      // 跳转到组件
      component: ThreeLD
    },
    {
      // 路由路径
      path: '/updateSCClint',
      // 路由名称
      name: 'UpdateSCClint',
      // 跳转到组件
      component: UpdateSCClint
    },
    {
      path: '/',
      redirect: '/home/tpregrp'
    },
    {
      // 路由路径
      path: '/updateLCClint',
      // 路由名称
      name: 'UpdateLCClint',
      // 跳转到组件
      component: UpdateLCClint
    },
    {
      // 路由路径
      path: '/lcParticulars',
      // 路由名称
      name: 'LCParticulars',
      // 跳转到组件
      component: LCParticulars,
      meta:{
        title:'本地客户资料',
        keepAlive:true
      }
    },
    {
      // 路由路径
      path: '/scParticulars',
      // 路由名称
      name: 'SCParticulars',
      // 跳转到组件
      component: SCParticulars,
      meta:{
        keepAlive:true
      }
    },
    {
      // 路由路径
      path: '/cParticulars',
      // 路由名称
      name: 'CParticulars',
      // 跳转到组件
      component: CParticulars,
      meta:{
        keepAlive:true
      }
    },
    {
      // 路由路径
      path: '/addClint',
      // 路由名称
      name: 'AddClint',
      // 跳转到组件
      component: AddClint,
    },
    {
      // 路由路径
      path: '/home',
      // 路由名称
      name: 'Home',
      // 跳转到组件
      component: Home,
      children:[
        {
          //传参
          path:'/home/tpregrp',
          name:'Tpregrp',
          component:Tpregrp,
        },{
          //传参
          path:'/home/standardClint',
          name:'StandardClint',
          component:StandardClint,
        },{
          //传参
          path:'/home/clint',
          name:'Clint',
          component:Clint,
        },
      ]
    }
  ]
});
