<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <van-tag>标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>
    

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text"  class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter" class="counter">去往Vuex示例页面</a>
    <p @click="goHome">goHome</p>
  </div>
</template>

<script>
import card from '@/components/card'

import { getUserById, formPostTest } from '@/api/index';
export default {
  mpType: 'page',
  //利用mpvue-config-loader插件，功能: 在vue文件中对小程序进行配置
  //https://github.com/F-loat/mpvue-config-loader
  //页面若无 config 属性，请指定 mpType: 'page' 以生成全局配置

  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '/packageA/logs'
      this.$router.push(url)
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    goHome() {
      //路由跳转，小程序中只支持query的放心进行携带参数
      this.$router.push({path: '/pages/Home/index', query: {name: 'love'}}) // wx.navigator()
      //this.$router.replace({path: ''}) 即 wx.redirectTo()
      //获取参数方式 this.$route.query.id (只能在mounted以后的生命周期中)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },

  async mounted() {
      const res = await getUserById({name: '王一扬', age: 28})
      console.log(res)

      const formRes = await formPostTest({name: '王一扬', age: 28})
      console.log(formRes)
  },
}
</script>

<style scoped lang="less">
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}


.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
  border-radius: 10px;
  background-color: aquamarine;
}
</style>
