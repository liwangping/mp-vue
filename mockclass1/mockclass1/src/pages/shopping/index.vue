<template>
    <div>
        <div class="header">
            <view class="van-hairline--bottom"></view>
        </div>
        <van-checkbox-group :value="result" @change="onChange">
            <van-checkbox
                v-for="item in list"
                :key="item"
                :name="item"
                custom-class = "custom_class"
                icon-class="icon_class1"
            >
                <div class="Goods">
                    <div class="Goods_image"> 
                        <img src="../../../static/images/class_1.png" alt="">
                    </div>
                    <div class="Good_detail">
                        <div class="Good_title">
                            <view class="van-multi-ellipsis--l2">Node.js从零开发Web Server博客项目 前端晋升全栈工程师必备</view>
                        </div>
                        <div class="Good_Situation">
                            <div class="Good_price">￥288.00</div>
                            <div class="Good_Category">实战</div>
                        </div>
                    </div>
                </div>
            </van-checkbox>
        </van-checkbox-group>
        <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onClickButton"
        bar-class="bar_class"
        >
        <van-tag type="primary">
            <van-radio-group :value="radio" @change="all_onChange">
                <van-radio name="1">全选</van-radio>
            </van-radio-group>
        </van-tag>
        </van-submit-bar>
    </div>
</template>

<script>
export default {
 data() {
    return{
        list: ['a', 'b', 'c'],
        result: ['a', 'b'],
        radio: '1'
    }
  },
  computed: {
  },
  method: {
    onChange(event) {
        this.setData({
         result: event.detail
        });
    },

    toggle(event) {
        const { index } = event.currentTarget.dataset;
        const checkbox = this.selectComponent(`.checkboxes-${index}`);
        checkbox.toggle();
    },

    noop() {},
    all_onChange(event){
        this.setData({
        checked: event.detail
    });
    }
  }
  
  
}
</script>
<style>
.van-hairline--bottom{
    padding-bottom: 20px;
}
.custom_class{
    margin-top: 9px;
}
.icon_class1{
    height: 50px !important;
}
.value-class {
    flex: none !important;
}
.van-checkbox__icon-wrap{
    /* margin-top: 18px !important;
     */
    padding-top: 27px !important;
    padding-left: 8px !important;
}
.bar_class{
    padding-left: 17px;
}
</style>

<style scoped>

.Goods{
    height: 72px;
    display: flex;
}
.Goods_image img{
    width: 108px;
    height: 72px;
}
.Good_detail{
    margin: 11px 27px 0 14px;
}
.Good_detail .Good_title{
    font-size: 16px;
}
.Good_Situation{
    display: flex;
}
.Good_price{
    font-size: 11px;
    color: #f34646;
}
.Good_Category{
    margin-left: 12px;
    font-size: 11px;
    color: #a7abae;
}
</style>
