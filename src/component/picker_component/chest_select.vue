<template>
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
            style="margin-left:3px"
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
        <!-- 切换效果依赖于antd的走马图控件 -->
        <a-carousel
          :dots="false"
          ref="varousel"
          :before-change="beforechange"
          :after-change="afterchange"
        >
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
                v-for="(i, index) in chestdata[0].items"
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
                v-for="i in chestdata[1].items"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "chestselect",
  data() {
    return {
      btn_index: 0,
      isoff: false,
      switch_btn_class: "switch_btn_normal",
      selected_span: true,
      select_on: false,
      option_type: [],
      chest_type: [],
      selected_type: [],
      selected_area: 0,
      animate_state: true,
    };
  },
  props: ["chestdata","itemtypedata"],
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
    //按钮样式切换
    swtich_class(check, btn_index) {
      if (check == false && this.animate_state == true) {
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
    //记录动画的完成状态，避免在动画过程中操作切换按钮导致轮播失效
    beforechange() {
      this.animate_state = false;
    },
    afterchange() {
      this.animate_state = true;
    },
    //折叠面板
    panel_fold() {
      this.isoff = !this.isoff;
    }
  },
  watch: {
    //宝箱选择界面的切换
    btn_index: function(val) {
      this.$refs.varousel.goTo(val);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/picker_chest.scss";
</style>