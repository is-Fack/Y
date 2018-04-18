<template>
  <div class="am-g am-g-fixed">
    <div class=" am-u-sm-9">
      <div class="body-left">
        <am-panel>
          <am-panel-header :title="'主页/新消息'" :title-level=4></am-panel-header>
          <am-panel-body>
            <ul style="padding:0;" class="uls" >
              <li v-if="data.length != num &&val.type == 'at'" v-for="(val , key) in data">
                <router-link style="color:#005580;" :to="{path:'/users',query:{id:val.author.loginname}}" >
                  <span @click="click(val.id)">{{val.author.loginname}}</span>
                </router-link>
                回复了你的话题
                <router-link style="color:#005580;" @click="click(val.id)" :to="{path:'/detailss',query:{id:val.topic.id}}" >
                  <span @click="click(val.id)">&nbsp;{{val.topic.title}}</span>
                </router-link>
              </li>
              <li v-if="val.type == 'reply' && data.length != num " v-for="(val , key) in data">
                <router-link style="color:#005580;" :to="{path:'/users',query:{id:val.author.loginname}}" >
                  <span @click="click(val.id)">{{val.author.loginname}}</span>
                </router-link>
                在话题
                <router-link style="color:#005580;" @click="click(val.id)" :to="{path:'/detailss',query:{id:val.topic.id}}" >
                  <span @click="click(val.id)">&nbsp;{{val.topic.title}}</span>
                </router-link>
                中@了你
              </li>
              <li v-if="data.length == num" >
                无消息
              </li>
            </ul>
          </am-panel-body>
          <am-panel-footer>
          </am-panel-footer>
        </am-panel>
        <am-panel>
          <am-panel-header :title="'过往消息'" :title-level=4></am-panel-header>
          <am-panel-body>
            <ul style="padding:0;" class="uls" >
              <li v-if="data2.length != num &&val.type == 'at'" v-for="(val , key) in data2">
                <router-link style="color:#005580;" :to="{path:'/users',query:{id:val.author.loginname}}" >
                  <span @click="click(val.id)">{{val.author.loginname}}</span>
                </router-link>
                回复了你的话题
                <router-link style="color:#005580;" @click="click(val.id)" :to="{path:'/detailss',query:{id:val.topic.id}}" >
                  <span @click="click(val.id)">&nbsp;{{val.topic.title}}</span>
                </router-link>
              </li>
              <li v-if="val.type == 'reply' && data2.length != num " v-for="(val , key) in data2">
                <router-link style="color:#005580;" :to="{path:'/users',query:{id:val.author.loginname}}" >
                  <span @click="click(val.id)">{{val.author.loginname}}</span>
                </router-link>
                在话题
                <router-link style="color:#005580;" @click="click(val.id)" :to="{path:'/detailss',query:{id:val.topic.id}}" >
                  <span @click="click(val.id)">&nbsp;{{val.topic.title}}</span>
                </router-link>
                中@了你
              </li>
              <li v-if="data2.length ==num" >
                无消息
              </li>
            </ul>
          </am-panel-body>
          <am-panel-footer>
          </am-panel-footer>
        </am-panel>
      </div>
    </div>
    <div class="bor zhong am-u-sm-3 " id="body-you">
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
</template>

<script>
  import right from '@/components/body/right'
    export default {
        name: "unread",
      components:{
          right
      },
      data(){
        return{
          data:"",//未读
          data2:"",//已读
          num:0,//随意
          user:"",//用户
        }
      },
      created(){
        this.post2();//已读、未读
        // this.post3();//全标记为已读
        this.post();//用户
      },
      methods:{
        post(){
          this.axios.post(" https://cnodejs.org/api/v1/accesstoken",{
            accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
          })
            .then((req)=>{
              this.user = req.data;
            })

        },//用户
        post2(){
          this.axios.get("https://cnodejs.org/api/v1/messages",{
            params:{
              accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
            }
          }).then((res)=>{
            this.data = res.data.data.hasnot_read_messages;
            this.data2 = res.data.data.has_read_messages;
            console.log("------未读的-------------")
            console.log(this.data);
            console.log("------已读的-------------")
            console.log(this.data2);
          })
        },//已读、未读
        post3(){
          this.axios.post("https://cnodejs.org/api/v1/message/mark_all",{
              accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
          }).then((res)=>{
            console.log("--------全部已读------------")
            console.log(res);
          })
        },//全标记为已读
        click(val){
              this.axios.post("https://cnodejs.org/api/v1/message/mark_one/"+val,{
                accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99"
              }).then((res)=>{
                console.log(res);
              })
            }//标记单个已读
        }
      }
</script>

<style scoped>

</style>
