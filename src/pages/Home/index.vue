<template>
    <div class="Home">
        <van-cell-group>
            <van-field
                :value="value"
                placeholder="请输入用户名"
                :border="false"
                @change="onChange"
                
            />
        </van-cell-group>
        <p>{{value}}</p>
    </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
    mpType: 'page',
    name: 'Home',
    data() {
        return {
            value: '',
            date: dayjs(1550296556425).format('YYYY-MM-DD HH:mm:ss') 
        }
    },
    mounted() {
        console.log(this.$route.query.name);
    },
    methods: {
        onChange(e) {
            this.value = e.mp.detail
        }
    },
}
</script>

<style scoped lang="less">
@import '../../assets/less/public.less';
.Home {

}
</style>