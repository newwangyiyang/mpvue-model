<script>
export default {
  globalConfig: {
    usingComponents: {
      'van-cell': 'vant-weapp/dist/cell/index',
      'van-cell-group': 'vant-weapp/dist/cell-group/index',
      'van-tag': 'vant-weapp/dist/tag/index',
      'van-field': 'vant-weapp/dist/field/index'
    }
  },
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
@import "colorui/main.css";
@import "colorui/icon.css";
</style>
