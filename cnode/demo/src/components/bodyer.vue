<template>
  <div>
    <div class="am-g am-g-fixed">
      <div class=" am-u-sm-9">
        <div class="body-left">
          <div class="body-lefyNav">
            <router-link v-for="(val,key) in urls" :to="{path:'/filters',query:{url:val.url}}">{{val.name}}</router-link>
          </div>
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
                  {{val.last_reply_at}}
                </span>
                </router-link>
              </div>
            </li>
          </ul>
          <div>
            <am-pagination :total="4000"  v-model="pageNum1" @change="click()"></am-pagination>
          </div>
        </div>
      </div>
      <div class="bor zhong am-u-sm-3 " id="body-you">
        <right>
          <div v-if="user != ''" slot="grx">
            <div class="user-zhu-header">作者</div>
            <div class="user-touxiang">
              <router-link :to="{path:'/users',query:{id:user.loginname}}" >
                <img :src="user.avatar_url" style="width:40px;height:40px" alt="">
              </router-link>
              <span>{{user.loginname}}</span>
            </div>
            <p>积分:{{user.score}}</p>
            <p><router-link to="">"我是你哥"</router-link></p>
            <router-link to="/topicss">
              <am-button color="success">发布话题</am-button>
            </router-link>
          </div>
          <div v-if="user == ''" slot="grx">
            <p>CNode：Node.js专业中文社区</p>
            <div>
              您可以
              <a href='/signin'>登录</a>
              或
              <a href='/signup'>注册</a>
              , 也可以
          <span class="span-info">
            <am-button @click="post()" color="primary"> 通过 GitHub 登录</am-button>
          </span>
            </div>
          </div>
        </right>
      </div>
    </div>
  </div>
</template>

<script>
  import right from './body/right'
  import '@/assets/css/bodyer.css'
    export default {
        name: "bodyer",
      components:{
        right,
      },
      data(){
          return{
              data:"",//主页
            pageNum1: 1,//分页
            urls:[
                {
                  name:"首页",
                  url:"/?tab=all"
                },
                {
                  name:"精华",
                  url:"/?tab=good"
                },
                {
                  name:"分享",
                  url:"/?tab=share"
                },
                {
                  name:"问答",
                  url:"/?tab=ask"
                },
                {
                  name:"招聘",
                  url:"/?tab=job"
                },
                {
                  name:"客户端测试",
                  url:"/?tab=dev"
                }
              ],//过滤(tab)
            user:"",//用户登录
          }
      },
      watch:{
        $route(){
          this.fang();
        }
      },
      mounted(){
          this.fang();
      },
      methods:{
        click(){
          //分页
          this.time= [];
          this.axios.get(" https://cnodejs.org/api/v1/topics/?tab=all&page="+this.pageNum1).then((res)=>{
            this.data = res.data.data;
            this.data.forEach((val , key)=>{
              let times = new Date() - new Date(val.last_reply_at.replace(/-/,"-"));
              var fen = parseInt((times % (1000 * 60 * 60)) / (1000 * 60));
              let hours = parseInt((times % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              let days = parseInt(times / (1000 * 60 * 60 * 24));
              let yues = parseInt(times / (1000 * 60 * 60 * 24 *30));
              let nians = parseInt(times / (1000 * 60 * 60 * 24 *30 * 12));
              if(nians >=1){
                val.last_reply_at = nians +"年前";
              }else if(yues >=1){
                val.last_reply_at = yues +"月前";
              }else if(days >=1){
                val.last_reply_at = days +"天前";
              }else if(hours >=1){
                val.last_reply_at = hours +"小时前";
              }else if(fen >=1){
                val.last_reply_at = fen +"分钟前";
              }
              this.time.push(val.last_reply_at);
            })
            console.log(res)
          })
        },//分页
          fang(){
            //主页
            this.time= [];
            let ur = this.$route.query.url;
            this.axios.get(" https://cnodejs.org/api/v1/topics").then((res)=>{
              this.data = res.data.data;
              this.data.forEach((val , key)=>{
                let times = new Date() - new Date(val.last_reply_at.replace(/-/,"-"));
                var fen = parseInt((times % (1000 * 60 * 60)) / (1000 * 60));
                let hours = parseInt((times % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let days = parseInt(times / (1000 * 60 * 60 * 24));
                if(days >=1){
                  val.last_reply_at = days +"天前";
                }else if(hours >=1){
                  val.last_reply_at = hours +"小时前";
                }else if(fen >=1){
                  val.last_reply_at = fen +"分钟前";
                }
              })
            })
          },//首页
        post(){
          //登录
          this.axios.post(" https://cnodejs.org/api/v1/accesstoken",{
            accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
          }).then((req)=>{
            var a =confirm("您确定登录"+req.data.loginname+"吗？");
            if(a == true){
              this.user = req.data;
              console.log(this.user);
            }
          })
        },//登录

      }
    }
</script>

<style lang="scss" scoped>
</style>
