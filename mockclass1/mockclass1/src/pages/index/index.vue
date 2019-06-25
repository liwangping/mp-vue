<template>
    <div>
        <div class="home">
            <!-- 首页搜索框 -->
            <div class="home_search_box">
                <div class="home_search">毕设 React 面试</div>
            </div>      
             <!-- 首页导航栏 -->
            <div class="home_nav">
               <van-tabs 
                animated               
                swipeable 
                line-width="17" 
                border="false"
                nav-class="home_nav_tabs"
                >
                   <!-- 首页推荐分页 -->
                    <van-tab title="推荐">
                        <swiper class="swiper_rocommend" 
                            :indicator-dots="false"
                            :autoplay="true"
                            :interval="3000" 
                            :duration="1000"
                            :previous-margin="20"
                            :next-margin="20"
                            :circular="true"
                            >
                        <a v-for='img in imgUrls' :key="img">
                            <swiper-item>
                            <image 
                                :src="img" 
                                class="slide-image" 
                                width="346"
                                height="118"/>
                            </swiper-item>
                        </a>
                        </swiper>
                        <div class="combat_span">实战推荐</div>
                        <!-- 课程列表 -->
                        <div class="class_lists">
                            <div class="class">
                                <div class="class_photo">
                                    <img src="../../../static/images/class_1.png" alt="">
                                </div>
                                <div class="class_detail">
                                    <div class="class_title">Node.js从零开发Web Server博客项目 前端晋升全栈工程师必备</div>
                                    <div class="class_more">
                                        <div class="class_price">￥288</div>
                                        <div class="class_grade">中级</div>
                                        <div class="class_watch">
                                            <div class="class_watch_icon">
                                                <van-icon name="contact" size="12px" />
                                            </div>
                                            <div class="class_watch_number">&nbsp;993</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="class">
                                <div class="class_photo">
                                    <img src="../../../static/images/class_2.png" alt="">
                                </div>
                                <div class="class_detail">
                                    <div class="class_title">Google资深工程师深度讲解Go语言</div>
                                    <div class="class_more">
                                        <div class="class_price">￥399</div>
                                        <div class="class_grade">中级</div>
                                        <div class="class_watch">
                                            <div class="class_watch_icon">
                                                <van-icon name="contact" size="12px" />
                                            </div>
                                            <div class="class_watch_number">&nbsp;2543</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="class">
                                <div class="class_photo">
                                    <img src="../../../static/images/class_3.png" alt="">
                                </div>
                                <div class="class_detail">
                                    <div class="class_title">算法大神带你玩转数据结构 从入门到精通</div>
                                    <div class="class_more">
                                        <div class="class_price">￥288</div>
                                        <div class="class_grade">中级</div>
                                        <div class="class_watch">
                                            <div class="class_watch_icon">
                                                <van-icon name="contact" size="12px" />
                                            </div>
                                            <div class="class_watch_number">&nbsp;993</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            active: 1,
            imgUrls: [
            '../../static/images/s-1.png',
            '../../static/images/s-2.png',
            '../../static/images/s-3.png',           
            ],
            indicatorDots: false,
            autoplay: false,
            interval: 5000,
            duration: 1000
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

<style>
/* 对导航栏的样式进行设置 */
.home_nav_tabs{
    height: 72rpx !important;
}
/* 消去导航栏的上下边框 */
.van-hairline--top-bottom:after{
    border-width: 0 0 !important;
}

</style>

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
    .swiper_rocommend{
        height:128px;
    }
   /* 轮播图样式 */
    .slide-image{
        width: 346px;
        height: 118px;
        margin-left: 10px;
    }
    /* 实战推荐标签 */
    .combat_span{
        text-align: left;
        font-size: 15px;
        margin-left: 15px;
    }
    /* 课程列表 */
    .class{
        display: flex;
        margin-top: 10px;
    }
    .class_lists{
        margin: 8px 15px;
    }
    /* 课程图片 */
    .class_lists .class_photo img{
        height:68px;
        width: 103px;
    }
    .class_detail{
        margin-left: 13px;
        border-bottom: 1px solid #f8f8f9;
    }
    .class_detail .class_title{
        font-size: 16px;
    }
    .class_detail .class_more{
        display: flex;
        font-size: 10px;
        margin-top: 10px;
        color: #7e8389;
    }
    .class_detail .class_grade{
        margin-left: 13px;
    }
    .class_detail .class_watch{
        margin-left: 17px;
        display: flex;
    }
</style>
