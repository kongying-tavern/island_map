<template>
  <div class="chestselect">
    <!-- 切换效果依赖于antd的走马图控件 -->
    <a-carousel :dots="false" ref="varousel">
      <div class="typeselect">
        <div class="selector_list">
          <li
            class="selector_list_option"
            :class="{ on: select_on }"
            @click="option_swtich"
          >
            <i class="options_icon"></i>
            <div class="options_info">
              <span class="options_name">普通宝箱</span>
              <!-- 通过设置进度条的宽度百分比来展现该点位的进度情况 -->
              <span class="options_count">1/100</span>
              <div class="progress">
                <div class="progress_finish"></div>
              </div>
            </div>
          </li>
          <li class="selector_list_option"></li>
          <li class="selector_list_option"></li>
          <li class="selector_list_option"></li>
          <li class="selector_list_option"></li>
          <li class="selector_list_option"></li>
          <li class="selector_list_option"></li>
          <li class="selector_list_option"></li>
        </div>
      </div>
      <div class="methodselect">2</div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  name: "chestselect",
  data() {
    return {
      select_on: false,
    };
  },
  props: ["btnindex"],
  methods: {
    option_swtich() {
      this.select_on = !this.select_on;
    },
  },
  computed: {},
  watch: {
    //宝箱选择界面的切换
    btnindex: function (val) {
      this.$refs.varousel.goTo(val);
    },
  },
  mounted() {
    console.log(this.btnindex);
    //请求所有点位类型
    this.$axios({
        method: 'get',
        url: 'http://8.129.180.37:8089/api/option',
    })
  },
};
</script>
<style lang="scss" scoped>
.chestselect {
  width: 408px;
  height: 110px;
  margin: 5px auto;
  .typeselect {
    position: relative;
    width: 100%;
    height: 100%;
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
        font-size: 12px;
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
}
</style>