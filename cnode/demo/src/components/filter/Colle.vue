<template>
  <div class="am-g am-g-fixed">
    <div class=" am-u-sm-9">
      <div class="body-left">
        <am-panel>
          <am-panel-header :title="'主页/'+name+'收藏的主题'" :title-level=4></am-panel-header>
          <am-panel-body>
            <ul style="padding:0;" class="uls" >
              <li  v-for="(val , key) in data">
                <router-link :to="{path:'/users',query:{id:val.author.loginname}}" :key="key" class="body-leftImg">
                  <img :src="val.author.avatar_url" alt="">
                </router-link>
                <span class="body-leftJs">
              <span style="color:#9e78c0;">{{val.reply_count}}</span>
              <span style="color:black">/</span>
              <span style="color:gray"> {{val.visit_count}}</span>
            </span>
                <div class="body-leftCon">
                  <span v-if="val.top== true" :class="{'body-leftTop':val.top}">置顶</span>
                  <span v-if="val.top == false&&val.good==false&&val.tab == 'ask'" :class="{'body-leftTop2':val.top ==false}">问答</span>
                  <span v-if="val.good == true&&val.top ==false" :class="{'body-leftTop':val.good}">精华</span>
                  <span v-if="val.tab == 'share'&&val.top ==false&&val.good == false" :class="{'body-leftTop2':val.tab == 'share'}">分享</span>
                  <router-link class="body-leftCon-a" exact :to="{path:'/detailss',query:{id:val.id}}" :key="key">
                    {{val.title}}
                  </router-link>
                  <router-link class="body-left-TimeC" to="#">
                    <img src="" alt="">
                    <span class="body-leftTime">
                </span>
                  </router-link>
                </div>
              </li>
            </ul>
          </am-panel-body>
          <am-panel-footer>
              <!--<am-button @click="post" color="primary">发布</am-button>-->
          </am-panel-footer>
        </am-panel>
      </div>
    </div>
    <div class="bor zhong am-u-sm-3 " id="body-you">
        <right>
          <div slot="grx">
            <div class="user-zhu-header">作者</div>
            <div class="user-touxiang">
              <img :src="data2.avatar_url" style="width:40px;height:40px" alt="">
              <span>{{data2.loginname}}</span>
            </div>
            <p>积分:{{data2.score}}</p>
            <p><router-link to="">"我是宇宙第一前端工程师：我叫刘予川"</router-link></p>
          </div>
        </right>
    </div>
  </div>
</template>

<script>
  import right from '@/components/body/right'
    export default {
        name: "colle",
      components:{
          right
      },
      data(){
          return{
            data:"",//用户所收藏的主题
            data2:"",//用户详情
            name:""//用户名字
          }
      },
      methods:{
        fang(){
          //用户详情
          let id= this.$route.query.id;//用户名字
          this.name=id;
          // console.log(id);
          this.axios.get(" https://cnodejs.org/api/v1/user/"+id).then((res)=>{
            this.data2 = res.data.data;
          })
        }//用户详情
      },
      mounted(){
          //用户所收藏的主题
        let id =this.$route.query.id;
        this.axios.get(" https://cnodejs.org/api/v1/topic_collect/"+id).then((res)=>{
          this.data = res.data.data;
          console.log("------------------------------------------")
          console.log(res);
          this.fang();
        })
      }//用户所收藏的主题
    }
</script>

<style scoped>

</style>
