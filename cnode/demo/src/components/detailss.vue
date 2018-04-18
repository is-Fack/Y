<template>
    <div>
      <div class="am-g am-g-fixed">
        <div class=" am-u-sm-9">
          <div class="body-left">
            <div>
                <h1>
                  <span v-if="data.top== true" :class="{'body-leftTop':data.top}">置顶</span>
                  <span v-if="data.top == false&&data.good==false" :class="{'body-leftTop2':data.top ==false}">问答</span>
                  <span v-if="data.good == true&&data.top ==false" :class="{'body-leftTop':data.good}">精华</span>
                  {{data.title}}
                </h1>

                <ul class="xin" style="display:flex;width:100%;">
                  <li>发布于</li>
                  <li>作者{{name}}</li>
                  <li>{{data.visit_count}}次浏览</li>
                  <li v-if="data.tab == 'dev'">来自客户端测试</li>
                  <p v-if="">
                    <am-button v-if="shouc ==false " @click="shoucang" color="success">收藏</am-button>
                    <am-button v-if="shouc ==true " @click="unshoucang" >取消收藏</am-button>
                  </p>
                  <p >
                  </p>
                </ul>
              <hr>
                <p v-if="name == data3">
                  <router-link :to="{path:'/edit',query:{id:data.id}}">
                    <am-button  color="success">编辑</am-button>
                  </router-link>
                  <am-button color="success">删除</am-button>
                </p>
            </div>
            <div v-html="data.content"></div>
            <div>
              <am-comment  v-for="(val ,index) in data.replies">
                <a :name="'detailss?id='+data.id+'#'+val.id"></a>
                <am-comment-content>
                  <am-comment-header>
                    <am-comment-header-meta class="dz2">
                      <am-comment-avatar :src="val.author.avatar_url"></am-comment-avatar>
                      <am-comment-author>{{val.author.loginname}}</am-comment-author>
                      <a :href="'#detailss?id='+data.id+'#'+val.id">{{index}}楼,好几天前</a>
                    </am-comment-header-meta>
                    <div style="height:15px;"  @click="clicks(val)">
                      <am-icon   v-if="" type="bug"  ></am-icon>
                      <span v-if="val.is_uped == true" >{{val.ups.length}}</span>
                      <span v-if="val.is_uped == false && val.ups.length !=0" >{{val.ups.length}}</span>
                    </div>
                    <span @click="clickss(index,val)"><am-icon type="leaf" color="secondary"></am-icon></span>
                  </am-comment-header>
                  <am-comment-body>
                    <p v-html="val.content"></p>
                    <p v-if=" xian == index "  >
                      <textarea rows="5" v-model="inde " style="width:100%" ></textarea>
                      {{inde}}
                      <am-button @click="pinglun2(val)" color="primary">回复</am-button>
                    </p>
                  </am-comment-body>
                </am-comment-content>
              </am-comment>
            </div>
            <am-panel>
              <am-panel-header title="回复" :title-level=4></am-panel-header>
              <am-panel-body>
                {{pingn}}
                <p><textarea rows="15" v-model="pingn" style="width:100%" ></textarea></p>
              </am-panel-body>
              <am-panel-footer>
                <am-button @click="pinglun" color="primary">发布</am-button>
              </am-panel-footer>
            </am-panel>

          </div>

        </div>
        <div class="bor zhong am-u-sm-3 ">
          <right>
              <div slot="grx">
                <div class="user-zhu-header">作者</div>
                <div class="user-touxiang">
                  <router-link :to="{path:'/users',query:{id:data2.loginname}}" >
                    <img :src="data2.avatar_url" style="width:40px;height:40px" alt="">
                  </router-link>
                  <span>{{data2.loginname}}</span>
                </div>
                <p>积分:{{data2.score}}</p>
                <p><router-link to="">"我是宇宙第一前端工程师：我叫刘予川"</router-link></p>
              </div>
          </right>
        </div>
      </div>
    </div>
</template>

<script>
  import right from './body/right'
  import '@/assets/css/detailss.css'
  export default {
        name: "detailss",
    components:{
      right
    },
      data(){
          return{
            data:"",//主题详情
            data2:"",//用户详情
            data3:"",//我的名字
            data4:"",//我的收藏
            name:"",//详情名字
            shouc:"",//收藏按钮样式
            num:0,//定义0
            pingn:"",//新建评论
            inde:-1,//评论回复下标
            yongid:"",//用户id
            xian:-9//评论回复下标
          }
      },
    methods:{
      get(){
            //用户详情
            this.axios.get(" https://cnodejs.org/api/v1/user/"+this.name).then((res)=>{
              this.data2 = res.data.data;
            })
          },//用户详情
      clicks(val){
            //点赞
            this.axios.post(" https://cnodejs.org/api/v1//reply/"+val.id+"/ups",{
              accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
            })
              .then((req)=>{
                console.log(req);
                this.zhuti();
              })
          },//点赞
      topics(){
            //登录
        this.axios.post(" https://cnodejs.org/api/v1/accesstoken",{
          accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
        })
          .then((req)=>{
           this.data3 =req.data.loginname;
          })
      },//登录
      shoucang(){
            //收藏
        this.shouc=true;
        this.axios.post(" https://cnodejs.org/api/v1/topic_collect/collect",{
          accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99",
             topic_id:this.data.id
        })
          .then((req)=>{
              console.log("收藏"+req);
          })
      },//收藏
      unshoucang(){
            //取消收藏
        this.shouc=false;
        this.axios.post(" https://cnodejs.org/api/v1/topic_collect/de_collect",{
          accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99",
          topic_id:this.data.id
        })
          .then((req)=>{
            console.log("取消收藏"+req);
          })
      },//取消收藏
      zhuti(){
        let id = this.$route.query.id;
        this.axios.get(" https://cnodejs.org/api/v1/topic/"+id,{
          params:{
            accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
          }
        }).then((res)=>{
          this.data = res.data.data;
          this.shouc = this.data.is_collect;
          this.name = this.data.author.loginname;
          this.pingn = "";
          console.log(this.data);
          this.get();
        });
      },//主题详情
      pinglun(){
        this.axios.post(" https://cnodejs.org/api/v1/topic/"+this.data.id+"/replies",{
          accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99",
          content:this.pingn,
          // reply_id:
        })
          .then((req)=>{
            this.zhuti();
            console.log(req);
          })
      },//新建评论
      pinglun2(val){
        this.axios.post(" https://cnodejs.org/api/v1/topic/"+this.data.id+"/replies",{
          accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99",
          content:this.inde,
          reply_id:val.id,
        })
          .then((req)=>{
            this.zhuti();
          })
      },//评论回复
      clickss(key,val){
        this.inde = "@"+val.author.loginname;
        if( this.xian == key){
          this.xian = null
        }else{
          this.xian = key;
        }
      },
    },
      mounted(){
          //详情
          this.zhuti();
          this.topics();
      }//主题详情;
    }
</script>

<style lang="scss" scoped>
  .txtx{
    display:none
  }
</style>
