<template>
    <div>
        <div class="home">
            <!-- 首页搜索框 -->
            <div class="home_search_box">
                <div class="home_search">毕设 React 面试</div>
            </div>      
             <!-- 首页导航栏 -->
            <div class="home_nav">
               <van-tabs animated swipeable>
                   <!-- 首页推荐分页 -->
                    <van-tab title="推荐">
                        推荐1111
                    </van-tab>
                    <!-- 首页实战分页 -->
                    <van-tab title="实战">
                        实战
                    </van-tab>
                </van-tabs>   
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data (){
        return {
            active: 1
        }
    },
    methods: {
        onChange(event) {
        wx.showToast({
        title: `切换到标签 ${event.detail.index + 1}`,
        icon: 'none'
        });
        } 
    }
}
</script>

<style scoped>
    .home_search_box{
        display: flex;
        justify-content: center;
    }
    .home_search{
        border: 1px solid #d9dde1;
        border-radius: 100rpx;
        height: 69rpx;
        width: 660rpx;
        text-align: center;
        line-height: 69rpx;
        color: #d9dde1;
        font-size: 30rpx;
    }
</style>
