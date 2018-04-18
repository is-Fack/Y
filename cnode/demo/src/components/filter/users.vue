<template>
  <div>
    <div class="am-g am-g-fixed">
      <div class=" am-u-sm-9">
        <div class="body-left">
            <div class="user-zhu">
                <div class="user-zhu-header">
                  <a style="color:green">主页</a>/
                </div>
                <div class="user-touxiang">
                  <img :src="data.avatar_url" style="width:40px;height:40px" alt="">
                  <span>{{data.loginname}}</span>
                </div>
                <p>{{data.score}}个积分</p>
              <p v-if="data2 != 0"><router-link :to="{path:'Colle',query:{id:data.loginname}}">{{data2}}收藏的话题</router-link></p>
              <p v-if="data2 == 0">{{data2}}收藏的话题</p>
                <p><img src="@/assets/github.png" alt=""><a href="#">@{{data.githubUsername}}</a></p>
                <p style="">注册时间10个月前</p>
            </div>
            <div class="user-zhu">
              <div class="user-zhu-header">
                最近创建的话题
              </div>
              <ul style="padding:0;" class="uls" >
                <li  v-for="(val , key) in data.recent_topics">
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
                  {{time[key]}}
                </span>
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
            <div class="user-zhu">
              <div class="user-zhu-header">
                最近参与的话题
              </div>
              <ul class="uls" style="padding:0;">
                <li  v-for="(val , key) in data.recent_replies">
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
                  {{time[key]}}
                </span>
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div class="bor zhong am-u-sm-3 " id="body-you">
        <right>
          <div slot="grx">
            <div class="user-zhu-header">作者</div>
            <div class="user-touxiang">
              <img :src="data.avatar_url" style="width:40px;height:40px" alt="">
              <span>{{data.loginname}}</span>
            </div>
            <p>积分:{{data.score}}</p>
            <p><router-link to="">"我是宇宙第一前端工程师：我叫刘予川"</router-link></p>
          </div>
        </right>
      </div>
    </div>
  </div>
</template>

<script>
  import right from '../body/right'
  import  '@/assets/css/user.css'
  export default {
    name: "bodyer",
    components:{
      right,
    },
    data(){
      return{
        data:"",//用户详情
        data2:"",//话题收藏总数
        time:[],//时间
      }
    },
    watch:{
      $route(){
        this.fang();//用户详情
      }
    },
    mounted(){
      this.fang();//用户详情
      this.hua();//用户收藏的主题总数；
    },
    methods:{
      fang(){
        //用户
        this.time= [];
        let id= this.$route.query.id;
        console.log(id);
        this.axios.get(" https://cnodejs.org/api/v1/user/"+id).then((res)=>{
          this.data = res.data.data;
          console.log(this.data);
        })
      },//用户详情
      hua(){
        //用户收藏的主题总数；
        let id =this.$route.query.id;
        this.axios.get(" https://cnodejs.org/api/v1/topic_collect/"+id).then((res)=>{
          console.log(res);
          this.data2 = res.data.data.length;
          console.log(this.data2);
        })
      }//用户收藏的主题总数；
    }
  }
</script>

<style lang="scss" scoped>

</style>
