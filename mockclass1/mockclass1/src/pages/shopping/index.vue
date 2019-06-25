<template>
    <div>
        <div class="header">
            <view class="van-hairline--bottom"></view>
        </div>
        <!-- <van-checkbox-group :value="result" @change="onChange">
            <van-cell-group >
                <van-cell
                v-for="item in list"
                :key="item"
                :title="['复选框'+item]"
                value-class="value-class"
                clickable
                data-index="index"
                @click="toggle"
                >
                <van-checkbox catch:tap="noop" :class="['checkboxes-'+index]" :name="item" />
                </van-cell>
            </van-cell-group>
        </van-checkbox-group> -->
        <van-checkbox-group :value="result" @change="onChange">
            <van-checkbox
                v-for="item in list"
                :key="item"
                :name="item"
            >
                <div class="Goods">
                    <div class="Goods_image"> 
                        <img src="../../../static/images/class_1.png" alt="">
                    </div>
                    <div class="Good_detail">
                        <div class="Good_title"></div>
                        <div class="Good_Situation">
                            <div class="Good_price"></div>
                            <div class="Good_Category"></div>
                        </div>
                    </div>
                </div>
            </van-checkbox>
        </van-checkbox-group>
    </div>
</template>

<script>
export default {
 data() {
    return{
        list: ['a', 'b', 'c'],
        result: ['a', 'b']
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

    noop() {}
  }
  
  
}
</script>

<style>
.value-class {
  flex: none !important;
}
.Goods{
    height: 72px;
}
.Goods_image img{
    width: 108px;
    height: 72px;
}
</style>
