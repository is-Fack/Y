<template>
  <div id="app">
    <am-topbar>
      <am-topbar-brand> <img width="120px"  src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""></am-topbar-brand>
      <am-topbar-toggle></am-topbar-toggle>
      <am-topbar-collapse>
        <am-topbar-form>
          <am-form-group size="sm">
            <am-input placement="请输入要查询的内容"></am-input>
          </am-form-group>
        </am-topbar-form>
        <am-nav :pill="true" :topbar="true">
          <am-nav-item  :active="true":to="'/'">首页</am-nav-item>
          <am-nav-item v-if="data !==0" :to="'/unread'"><am-badge :round="true" color="success">{{data}}</am-badge>未读消息</am-nav-item>
          <am-nav-item v-if="data ===0" :to="'/unread'"><am-badge :round="true" color="success"></am-badge>未读消息</am-nav-item>
          <am-nav-item :to="'/getstart'">新手入门</am-nav-item>
          <am-nav-item :to="'/api'">API</am-nav-item>
          <am-nav-item :to="'/about'">关于</am-nav-item>
          <!--<am-nav-item  :to="'/signup'">注册</am-nav-item>-->
          <!--<am-nav-item :to="'/signin'">登录</am-nav-item>-->
          <am-nav-item  :to="'/signup'">设置</am-nav-item>
          <am-nav-item  :to="'/signup'">退出</am-nav-item>

        </am-nav>
      </am-topbar-collapse>
    </am-topbar>
    <div>
      <!--<keep-alive>-->
        <router-view></router-view>
      <!--</keep-alive>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      data:"",
    }
  },
  created(){
    //未读的总数
      this.axios.get("https://cnodejs.org/api/v1/message/count",{
        params:{
          accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
        }
      }).then((res)=>{
        this.data = res.data.data;
      })

  },//未读的总数
}
</script>

<style lang="scss" >
#app {
    background:rgb(225,225,225);
}
  *{
    padding:0;
    margin:0;
    list-style:none;
  }
ul{
  margin:0 ;
}
.am-topbar-nav {
  float: right;
}
@media only screen and (max-width:775px ) {
  .am-topbar-nav {
    float: left;
  }
}
.am-topbar-collapse {
  background:#403838;

}
.am-collapse{
  background:#403838;
}
.am-form-field{
  border-radius:30px ;
  background:grey;
  border:none;
}
  .am-topbar{
    background:#403838;
  }
</style>
