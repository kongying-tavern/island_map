<template>
  <div class="chestselect">
    <!-- 切换效果依赖于antd的走马图控件 -->
    <a-carousel :dots="false" ref="varousel" :before-change="beforechange" :after-change="afterchange">
      <div class="typeselect">
        <div class="selector_list">
          <li
            class="selector_list_option"
            :class="{
              on:
                //检测当前option的index是否已存在于数组中（即该项是否已被选中），根据其选中状态切换样式
                selected_type.find(item => item == index) == undefined
                  ? select_on
                  : !select_on
            }"
            @click="option_swtich(index)"
            v-for="(i, index) in chesttype"
            :key="i.name"
          >
            <i class="options_icon"></i>
            <div class="options_info">
              <span class="options_name">{{ i.name }}</span>
              <span class="options_count">1/{{ i.count }}</span>
              <!-- 通过设置进度条的宽度百分比来展现该点位的进度情况 -->
              <div class="progress">
                <div class="progress_finish"></div>
              </div>
            </div>
          </li>
        </div>
      </div>
      <div class="methodselect">
        <div class="selector_list">
          <li
            class="selector_list_option"
            :class="{
              on:
                //检测当前option的id是否已存在于数组中（即该项是否已被选中），根据其选中状态切换样式
                selected_type.find(item => item == i.id) == undefined
                  ? select_on
                  : !select_on
            }"
            @click="option_swtich(i.id)"
            v-for=" i in chesttype"
            :key="i.name"
          >
            <i class="options_icon"></i>
            <div class="options_info">
              <span class="options_name">{{ i.name }}</span>
              <span class="options_count">1/{{ i.count }}</span>
              <!-- 通过设置进度条的宽度百分比来展现该点位的进度情况 -->
              <div class="progress">
                <div class="progress_finish"></div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  name: "chestselect",
  data() {
    return {
      select_on: false,
      option_type: [],
      chest_type: [],
      selected_type: [],
      selected_area: 0
    };
  },
  props: ["btnindex", "chesttype"],
  methods: {
    //将选择项的索引存入数组，以实现样式切换和点位渲染
    option_swtich(index) {
      if (this.selected_type.includes(index) == false) {
        this.selected_type.push(index);
      } else {
        let cancel_typeindex = this.selected_type.findIndex(
          item => item == index
        );
        this.selected_type.splice(cancel_typeindex, 1);
      }
    },
    //向父组件传递动画的完成状态，避免在动画过程中操作切换按钮导致轮播失效
    beforechange(){
      this.$emit('changestate',false)
    },
    afterchange(){
      this.$emit('changestate',true)
    }
  },
  watch: {
    //宝箱选择界面的切换
    btnindex: function(val) {
      this.$refs.varousel.goTo(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.chestselect {
  width: 418px;
  height: 110px;
  margin: 5px auto;
  .methodselect {
    padding-right: 5px;
  }
  .typeselect,
  .methodselect {
    position: relative;
    width: 100%;
    height: 120px;
    overflow: hidden scroll;
    .selector_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .selector_list_option {
      position: relative;
      width: 190px;
      height: 50px;
      background: url(../../assets/Content_img/item_normal.png) no-repeat;
      background-size: 100% 100%;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .options_icon {
      display: block;
      position: absolute;
      background: url(../../assets/Content_img/Content_img/icon1.png) no-repeat;
      width: 35px;
      height: 35px;
      background-size: 100% 100%;
      top: 7px;
      left: 3.4px;
    }
    .options_info {
      width: 100px;
      height: 96%;
      margin: 2px 0 0 38px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      transform: scale(0.85);
      span {
        display: block;
      }
      .options_name {
        height: 22px;
        line-height: 22px;
        font-size: 18px;
        color: #8d807d;
      }
      .options_count {
        height: 16px;
        font-size: 13px;
        line-height: 16px;
        color: #817472;
      }
      .progress {
        width: 100%;
        height: 3px;
        margin-top: 2px;
        background: #817472;
        border-radius: 2px;
      }
      .progress_finish {
        width: 40%;
        height: 3px;
        background: #00f5ff;
        border-radius: 2px;
      }
    }
    .selector_list_option.on {
      background: url(../../assets/Content_img/item_selected.png) no-repeat;
      .options_name,
      .options_count {
        color: #fffade;
      }
    }
  }
  .typeselect::-webkit-scrollbar {
    width: 8px;
    background: none;
    border-radius: 4px;
  }
  .methodselect::-webkit-scrollbar {
    width: 8px;
    background: #f0e9e2;
    border-radius: 4px;
  }
  .typeselect::-webkit-scrollbar-thumb,
  .methodselect::-webkit-scrollbar-thumb {
    width: 8px;
    height: 10px;
    background: #685e5c;
    border-radius: 4px;
  }
}
</style>