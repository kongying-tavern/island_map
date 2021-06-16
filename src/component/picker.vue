<template>
  <div class="picker" :class="{ off: picker_state }">
    <!-- 开关 -->
    <a
      href="javascript:;"
      class="switch_btn"
      @click="picker_switch"
      :class="{ off: picker_state }"
    ></a>
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
    <chestselect :chestdata="chestdata" ></chestselect>
    <!-- 物品筛选区域 -->
    <regionselect :itemtypedata="itemtypedata"></regionselect>
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
      chestdata: [
        {
          icon: "",
          items: [],
          name: ""
        },
        {
          icon: "",
          items: [],
          name: ""
        }
      ],
      itemtypedata: {
        icon: "",
        items: [],
        name: ""
      },
      btn_switch: "",
      picker_state: false
    };
  },
  components: {
    chestselect,
    regionselect
  },
  methods: {
    //筛选器折叠
    picker_switch() {
      this.picker_state = !this.picker_state;
    }
  },
  mounted() {
    let that = this;
    //查询点位类型信息
    options_type_select().then(function(res) {
      //记录宝箱数据
      that.chestdata = [
        {
          icon: res.data.data[0].types[7].icon,
          items: res.data.data[0].types[7].items,
          name: res.data.data[0].types[7].name
        },
        {
          icon: res.data.data[0].types[8].icon,
          items: res.data.data[0].types[8].items,
          name: res.data.data[0].types[8].name
        }
      ];
      //记录收集物数据
      that.itemtypedata = res.data.data[0].types.slice(0,7);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/picker.scss";
</style>