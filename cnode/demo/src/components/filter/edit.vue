<template>
  <div class="am-g am-g-fixed">
    <div class=" am-u-sm-9">
      <div class="body-left">
        <am-panel>
          <am-panel-header title="主页/发布话题" :title-level=4></am-panel-header>
          <am-panel-body>
            选择模板：<select v-model="types" >
            <option value="#">请选择</option>
            <option value="ask">分享</option>
            <option value="share">问答</option>
            <option value="job">招聘</option>
            <option value="dev">客户端测试</option>
          </select>
            <span v-show="warnMsg !== null " v-html="warnMsg"></span>
            <p><input style="width:100%;" v-model="title" placeholder="标题字数在十个字以上" type="text"></p>

            <hr>
            <p><textarea rows="15" v-model="content" style="width:100%"></textarea></p>
          </am-panel-body>
          <am-panel-footer>
            <am-button @click="post" color="primary">发布</am-button>
          </am-panel-footer>
        </am-panel>
      </div>
    </div>
    <div class="bor zhong am-u-sm-3 " id="body-you">
      <div solt="grx" id='sidebar'>
        <div class='panel'>
          <div class='header'>
            <span class='col_fade'>Markdown 语法参考</span>
          </div>
          <div class='inner'>
            <ol>
              <li><tt>### 单行的标题</tt></li>
              <li><tt>**粗体**</tt></li>
              <li><tt>`console.log('行内代码')`</tt></li>
              <li><tt>```js\n code \n```</tt> 标记代码块</li>
              <li><tt>[内容](链接)</tt></li>
              <li><tt>![文字说明](图片链接)</tt></li>
            </ol>
            <span><a href='https://segmentfault.com/markdown' target='_blank'>Markdown 文档</a></span>
          </div>
        </div>

        <div class='panel'>
          <div class='header'>
            <span class='col_fade'>话题发布指南</span>
          </div>
          <div class='inner'>
            <ol>
              <li>尽量把话题要点浓缩到标题里</li>
              <li>代码含义和报错可在 <a href="http://segmentfault.com/t/node.js">SegmentFault</a> 提问</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "edit",
    data() {
      return {
        types:"",//类型(tab)
        data:"",//主题详情
        warnMsg:null,//显示效果(下拉菜单)
        title:"",//标题内容
        content:""//内容
      };
    },
    methods:{
      post(){
        //编辑主题
        this.axios.post(" https://cnodejs.org/api/v1/topics/update",{
          accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99",
          topic_id:this.data.id,
          tab:"dev",
          title:this.title,
          content:this.content,
        })
          .then((req)=>{
            console.log(req)
            this.$router.push({path:'/detailss',query:{id:req.data.topic_id}})
          })
      },//编辑主题
      click() {
        if (this.types === 'job') {
          this.warnMsg = '<strong>为避免被管理员删帖，发帖时请好好阅读<a href="http://cnodejs.org/topic/541ed2d05e28155f24676a12" target="_blank">《招聘帖规范》</a></strong>';
        } else if (this.types === 'ask') {
          this.warnMsg = '<strong>提问时，请遵循 <a href="https://gist.github.com/alsotang/f654af8b1fff220e63fcb44846423e6d" target="_blank">《提问的智慧》</a>中提及的要点，以便您更接收到高质量回复。</strong>';
        }else if( this.types !='ask'|| 'job'){
          this.warnMsg =null;
        }
      },//显示效果(warnMsg)
      zhut(){
        //主题详情
        let id = this.$route.query.id;
        console.log(id);
        this.axios.get(" https://cnodejs.org/api/v1/topic/"+id,{
          params:{
            accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99",
            mdrender: false
          },

        }).then((res)=>{
          this.data = res.data.data;
          console.log(this.data);
          this.types = this.data.tab;
          this.title = this.data.title;
          this.content = this.data.content;
        });
      }//主题详情
    },
    mounted(){
      this.zhut();
    }
  }
</script>

<style scoped>

</style>
