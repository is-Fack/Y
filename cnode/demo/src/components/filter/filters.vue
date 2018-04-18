<template>
  <div>
    <div class="am-g am-g-fixed">
      <div class=" am-u-sm-9">
        <div class="body-left">
          <div class="body-lefyNav">
            <router-link v-for="(val,key) in urls" :to="{path:'/filters',query:{url:val.url}}">{{val.name}}</router-link>
          </div>
          <ul style="padding:0;">
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
                <span class="body-left-TimeC">
                  <img src="" alt="">
                  <span class="body-leftTime">
                  {{time[key]}}
                </span>
                </span>
              </div>
            </li>
          </ul>
          <div>
            <am-pagination :total="yeshu"  v-model="pageNum1" @change="click()"></am-pagination>
          </div>
        </div>
      </div>
      <div class="bor zhong am-u-sm-3 ">
        <right>
          <div slot="grx">
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
        </right>
      </div>
    </div>
  </div>
</template>

<script>
  import right from '@/components/body/right'
  export default {
    name: "bodyer",
    components:{
      right
    },
    data(){
      return{
        data:"",
        time:[],//时间
        pageNum1: 1,//分页
        yeshu:500,//页数
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
        user:""//用户
      }
    },
    watch:{
      $route(){
        this.click();
      }
    },
    mounted(){
      this.fang();
      this.post();
    },
    methods:{
      click(){
        this.time= [];
        let ur = this.$route.query.url;
        this.axios.get(" https://cnodejs.org/api/v1/topics"+ur+"&page="+this.pageNum1).then((res)=>{
          this.data = res.data.data;
          if(this.data.length == 0){
            this.yeshu-=10;
          }
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
        let ur = this.$route.query.url;
        this.axios.get(" https://cnodejs.org/api/v1/topics"+ur).then((res)=>{
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
            this.time.push(val.last_reply_at);
          })
          console.log(res)
        })
      },//首页
      post(){
        this.axios.post(" https://cnodejs.org/api/v1/accesstoken",{
          accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
        })
          .then((req)=>{
            this.user = req.data;
            console.log(req)
            console.log(this.user);
          })

      },//登录
    }
  }
</script>

<style lang="scss" scoped>
  .am-u-sm-3{
    padding:0 !important;
  }
  .bodyer{
    padding:15px 65px 0 65px ;
  }
  .body-left li:hover {
    background:#f6f6f6;
  }
  .body-leftCon-a:hover{
    text-decoration: underline;
  }

  .body-left{
    width:100%;
    height:auto;
    background:white;
    li{
      overflow: hidden;
      position: relative;
      padding: 10px 0 10px 10px;
      font-size: 14px;
      height:51px;
      width:100%;
      display:flex;
      line-height: 40px;
      a{
        color:black;
      }
    }
  }

  .body-lefyNav{
    height:40px;
    width:100%;
    display: flex;
    box-sizing: border-box;
    padding-left: 10px;
    background-color: #f6f6f6;
    align-items: center;

    a{
      display: flex;
      align-items: center;
      margin:0 5px;
      padding:13px 5px 13px 5px;
      border:1px solid;
      height:20px;
      border-radius:3px;
      color:rgb(137,197,3);
    }

  }
  .bor{
    box-sizing:border-box;
  }
  .am-g-fixed{
    max-width: 1260px;
  }
  @media only screen and (max-width:950px ) {
    .zhong{
      display:none;
    }
    .am-u-sm-9{
      width:100%;
      padding:0;

    }
    .am-g-fixed{
      width: 100%;
    }
    .body-leftJs{
      position: absolute;
      bottom: -7px;
      left: 83px;
      text-align: left !important;
      line-height: 2em;
      font-size: 10px;
    }
    .body-leftCon a{
      font-size:14px !important;
    }
  }
  .body-leftImg{
    width:30px;
    display:flex;
    height:30px;
    img{
      width:100%;
      height:100%;
    }
  }
  .body-leftCon{
    width:80%;
    position:reletive;
    height:100%;
    a{
      max-width: 80%;
      width:80%;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
      line-height: 30px;
    }
  }
  .body-leftJs{
    width: 70px;
    display: inline-block;
    text-align: center;
  }
  .body-leftTop{
    background: #80bd01;
    padding: 2px 4px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin:0 0 0 5px;
  }
  .body-leftTop2{
    background-color: #e5e5e5;
    margin:0 0 0 5px;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
  }
  .body-leftTime{
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
  }
  .body-left-TimeC{
    position:absolute;
    right:0;
    top:18px;
    max-width:100px !important;
  }

</style>
