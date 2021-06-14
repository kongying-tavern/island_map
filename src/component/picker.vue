<template>
  <div class="picker">
    <div style="min-height:500px">
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
              @click="swtich_class(0)"
              >宝箱种类</span
            >
            <span
              :class="{ selected_span: !selected_span }"
              @click="swtich_class(1)"
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
          <chestselect v-show="!isoff" :btnindex="btn_index"></chestselect>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
//引入宝箱筛选面板
import chestselect from "./picker_component/chestselect.vue";
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
    };
  },
  components: {
    chestselect,
  },
  methods: {
    //按钮样式切换
    swtich_class(btn_index) {
      this.btn_index = btn_index;
      this.selected_span = !this.selected_span;
      if (
        this.switch_btn_class == "switch_btn_normal" ||
        this.switch_btn_class == "switch_btn_off"
      ) {
        this.switch_btn_class = "switch_btn_on";
      } else {
        this.switch_btn_class = "switch_btn_off";
      }
    },
    //折叠面板
    panel_fold() {
      this.isoff = !this.isoff;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/picker.scss";
</style>