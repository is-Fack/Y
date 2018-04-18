<template>
  <div class="am-g am-g-fixed">
    <div class=" am-u-sm-9">
      <div class="body-left">
        <am-panel>
          <am-panel-header title="主页/发布话题" :title-level=4></am-panel-header>
          <am-panel-body>
            选择模板：<select @change="click"  id="a">
            <option value="#">请选择</option>
            <option value="ask">分享</option>
            <option value="share">问答</option>
            <option value="job">招聘</option>
            <option value="dev">客户端测试</option>
          </select>
            <span v-show="warnMsg !== null " v-html="warnMsg"></span>
            <p><input id="b" style="width:100%;" @change="tt"   placeholder="标题字数在十个字以上" type="text"></p>

            <hr>
            <p><textarea rows="15" id="c" style="width:100%;" @change="con"></textarea></p>
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
        name: "topicss",
    data() {
      return {
        types:"",//类型(tab)
        warnMsg:null,//显示效果(下拉菜单)
        txtval:"",//标题内容
        contents:""//内容
      };
    },
      methods:{
          post(){
            this.axios.post(" https://cnodejs.org/api/v1/topics",{
              accesstoken:"cbd76b8b-bd19-441d-9c2a-f73cfedb7a99",
              tab:"dev",
              title:this.txtval,
              content:this.contents,
            })
              .then((req)=>{
                console.log(req);
                this.$router.push({path:'/detailss',query:{id:req.data.topic_id}})
              })
          },//发送新建主题
          con(){
            this.contents =c.value;
            console.log(this.contents)
          },//内容
          tt(){
            this.txtval =b.value
            console.log(this.txtval);
          },//标题内容
      click() {
        let index = a.selectedIndex;
        let val = a.options[index].value;
        this.types = val;
        console.log(this.types);
        if (this.types === 'job') {
          this.warnMsg = '<strong>为避免被管理员删帖，发帖时请好好阅读<a href="http://cnodejs.org/topic/541ed2d05e28155f24676a12" target="_blank">《招聘帖规范》</a></strong>';
        } else if (this.types === 'ask') {
          this.warnMsg = '<strong>提问时，请遵循 <a href="https://gist.github.com/alsotang/f654af8b1fff220e63fcb44846423e6d" target="_blank">《提问的智慧》</a>中提及的要点，以便您更接收到高质量回复。</strong>';
        }else if( this.types !='ask'|| 'job'){
          this.warnMsg =null;
        }
      }//显示效果(warnMsg)
      }
    }
</script>

<style scoped>

</style>
