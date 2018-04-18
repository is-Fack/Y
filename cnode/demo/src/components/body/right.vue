<template>
  <div id='sidebar'>
    <div class='panel'>
      <div class='inner'>
          <slot name="grx">
            <p>CNode：Node.js专业中文社区</p>
            <div>
              您可以
              <a href='/signin'>登录</a>
              或
              <a href='/signup'>注册</a>
              , 也可以
              <a href="/auth/github">
          <span class="span-info">
            <am-button color="primary"> 通过 GitHub 登录</am-button>
          </span>
              </a>
            </div>
          </slot>
      </div>

    </div>





    <div class='panel'>
      <div class='inner ads'>



        <a href="https://render.alipay.com/p/s/taobaonpm_click/image_click_25" target="_blank" class="banner sponsor_outlink"
           data-label="aliyun">
          <img src="//dn-cnode.qbox.me/Fu6b5DIbI_Va2i5oFjIByRGizFuP">
        </a>


        <div class="sep10"></div>

        <a href="http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc&utm_campaign=multicloud&utm_content=gift&ytag=cnodejs" target="_blank" class="banner sponsor_outlink"
           data-label="ucloud-banner">
          <img src="//dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG">
        </a>


        <div class="sep10"></div>

        <a href="https://0x7.me/UDyj" target="_blank" class="banner sponsor_outlink"
           data-label="qiniu-sidebar">
          <img src="//dn-cnode.qbox.me/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O">
        </a>


        <div class="sep10"></div>

        <a href="https://enhancer.io" target="_blank" class="banner sponsor_outlink"
           data-label="enhancer.io">
          <img src="//dn-cnode.qbox.me/Fq72q-0Z18wsDDuHAHsUik1PlIeK">
        </a>


        <div class="sep10"></div>

        <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" class="banner sponsor_outlink"
           data-label="alinode">
          <img src="//dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_">
        </a>

      </div>
    </div>




    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>无人回复的话题</span>
      </div>
      <div class='inner'>

        <ul class="unstyled">
          <li>
            <div><a class='dark topic_title' href="/topic/5acf0aa03edb2aff6be85747" title="The official MongoDB driver 是以一个什么样的机制去选择 连接池哪条连接 去发送CURD指令的？">The official MongoDB driver 是以一个什么样的机制去选择 连接池哪条连接 去发送CURD指令的？</a>
            </div>
          </li>
          <li>
            <div><a class='dark topic_title' href="/topic/5acdf701a7d228c16b9869d6" title="windows script host  800A138F 错误缺少对象 如何解决">windows script host  800A138F 错误缺少对象 如何解决</a>
            </div>
          </li>
          <li>
            <div><a class='dark topic_title' href="/topic/5acdb4f2a44b6a2f2aed72c8" title="mongoose的类型存储上限问题">mongoose的类型存储上限问题</a>
            </div>
          </li>
          <li>
            <div><a class='dark topic_title' href="/topic/5acdaa53f474e907e6f7b483" title="关于vscode egg调试出现： this socket has been ended by other party">关于vscode egg调试出现： this socket has been ended by other party</a>
            </div>
          </li>
          <li>
            <div><a class='dark topic_title' href="/topic/5acb8d6996f344940fbbaecc" title="使用 Node.js 的 Express 框架如何测试 ElasticSearch 查询比较好？">使用 Node.js 的 Express 框架如何测试 ElasticSearch 查询比较好？</a>
            </div>
          </li>

        </ul>

      </div>
    </div>



    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>积分榜</span>
        &nbsp;
        <a class='dark' href='/users/top100'>TOP 100 &gt;&gt;</a>
      </div>
      <div class='inner'>

        <ol>
          <li>
            <span class='top_score'>20935</span>
            <span class="user_name"><a href="/user/i5ting">i5ting</a></span>
          </li>
          <li>
            <span class='top_score'>14860</span>
            <span class="user_name"><a href="/user/alsotang">alsotang</a></span>
          </li>
          <li>
            <span class='top_score'>9345</span>
            <span class="user_name"><a href="/user/leapon">leapon</a></span>
          </li>
          <li>
            <span class='top_score'>8750</span>
            <span class="user_name"><a href="/user/jiyinyiyong">jiyinyiyong</a></span>
          </li>
          <li>
            <span class='top_score'>6880</span>
            <span class="user_name"><a href="/user/yakczh">yakczh</a></span>
          </li>
          <li>
            <span class='top_score'>6305</span>
            <span class="user_name"><a href="/user/im-here">im-here</a></span>
          </li>
          <li>
            <span class='top_score'>5975</span>
            <span class="user_name"><a href="/user/DevinXian">DevinXian</a></span>
          </li>
          <li>
            <span class='top_score'>5315</span>
            <span class="user_name"><a href="/user/atian25">atian25</a></span>
          </li>
          <li>
            <span class='top_score'>5315</span>
            <span class="user_name"><a href="/user/magicdawn">magicdawn</a></span>
          </li>
          <li>
            <span class='top_score'>4740</span>
            <span class="user_name"><a href="/user/captainblue2013">captainblue2013</a></span>
          </li>

        </ol>

      </div>
    </div>


    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>友情社区</span>
      </div>
      <div class='inner'>
        <ol class="friendship-community">
          <li>
            <a href="https://ruby-china.org/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png">
            </a>
          </li>
          <div class="sep10"></div>
          <li>
            <a href="http://golangtc.com/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png">
            </a>
          </li>
          <div class="sep10"></div>
          <li>
            <a href="http://phphub.org/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png">
            </a>
          </li>
          <div class="sep10"></div>
          <li>
            <a href="https://testerhome.com/" target="_blank">
              <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK">
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>客户端二维码</span>
      </div>
      <div class='inner cnode-app-download'>
        <img width='200' src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
        <br />
        <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/you.css'
  export default {
        name: "right"
    }
</script>

<style scoped>

</style>
