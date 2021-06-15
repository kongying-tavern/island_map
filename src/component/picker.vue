<template>
  <div class="picker">
    <!-- 头部区域 -->
    <div class="picker_header">
      <div class="avatar">
        <img
          src="../assets/Content_img/Content_img/Avatar.png"
          class="avatar_img"
        />
      </div>
      <div class="info_part">
        <a href="javascript:;" class="user_link">注册/登录</a>
        <div class="info_part-links">
          <a href="javascript:;" class="link_btn1">
            <i class="icon1"></i>
            <span>数据云同步</span>
          </a>
          <a href="javascript:;" class="link_btn2">
            <i class="icon2"></i>
            <span>信息反馈</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 宝箱筛选区域 -->
    <div class="picker_area1">
      <div style="width: 100%; height: 1px"></div>
      <div class="picker_area1_cover"></div>
      <div class="picker_area1_containor">
        <div class="picker_area1_header">
          <h3>
            <i class="picker_area1_header_icon"></i>
            <span>宝箱筛选</span>
          </h3>
          <div class="switch_btn">
            <div :class="switch_btn_class"></div>
            <span
              :class="{ selected_span: selected_span }"
              @click="swtich_class(selected_span, 0)"
              >宝箱种类</span
            >
            <span
              :class="{ selected_span: !selected_span }"
              @click="swtich_class(!selected_span, 1)"
              >获取方式</span
            >
          </div>
          <a
            href="javascript:;"
            class="fold_btn"
            @click="panel_fold"
            :class="{ off: isoff }"
          ></a>
        </div>
        <div class="picker_area1_main" :class="{ off: !isoff }">
          <chestselect
            v-show="!isoff"
            :btnindex="btn_index"
            :chesttype="chest_type"
            @changestate="changestate"
          ></chestselect>
        </div>
      </div>
    </div>
    <!-- 地图要素筛选 -->
    <!-- <div class="picker_area2">
        <div style="width: 100%; height: 1px"></div>
        <div class="picker_area2_cover"></div>
        <div class="picker_area2_containor">
            <div style="width: 100%; height: 1px"></div>
            <div class="item-selector-options">
            </div>
            <regionselect></regionselect>
        </div>
      </div> -->
  </div>
</template>

<script>
import { options_type_select } from "../api/request";
//引入地区切换面板
import regionselect from "./picker_component/region_select.vue";
//引入宝箱筛选面板
import chestselect from "./picker_component/chest_select.vue";
//引入物品筛选面板
export default {
  name: "picker",
  data() {
    return {
      show: true,
      switch_btn_class: "switch_btn_normal",
      selected_span: true,
      isoff: false,
      btn_index: 0,
      chest_type: "",
      animate_state: true,
      option_type: ""
    };
  },
  components: {
    chestselect,
    regionselect
  },
  methods: {
    //按钮样式切换
    swtich_class(check, btn_index) {
      if (check == false && this.animate_state==true) {
        this.selected_span = !this.selected_span;
        if (
          this.switch_btn_class == "switch_btn_normal" ||
          this.switch_btn_class == "switch_btn_off"
        ) {
          this.switch_btn_class = "switch_btn_on";
          this.btn_index = btn_index;
        } else {
          this.switch_btn_class = "switch_btn_off";
          this.btn_index = btn_index;
        }
      }
    },
    //折叠面板
    panel_fold() {
      this.isoff = !this.isoff;
    },
		//监听轮播的动画状态，避免在动画过程中操作切换按钮导致轮播失效
    changestate(val) {
      this.animate_state = val;
    }
  },
  mounted() {
    let that = this;
    //查询点位类型信息
    options_type_select().then(function(res) {
      that.option_type = res.data.data;
      that.chest_type = res.data.data[0].types[7].items;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/picker.scss";
</style>