<template>
  <div class="picker" :class="{ off: picker_state }">
    <!-- 侧边选择器区域 -->
    <div class="sidebar">
      <!-- 派蒙开关 -->
      <a
        href="javascript:;"
        class="switch_btn"
        @click="picker_switch"
        :class="{ off: picker_state }"
      ></a>
      <!-- 地区选择 -->
      <div class="region_picker">
        <li class="region_options" v-for="(i,index) in 7" :key="i" :class="{off:selected_region_index==index?false:true}" @click="region_select(index)">
          <a href="javascript:;" :class="`options${i}`"></a>
        </li>
      </div>
      <!-- 已选择项 -->
      <div class="selected_options">

      </div>
    </div>
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
    <chestselect :chestdata="chestdata"></chestselect>
    <!-- 物品筛选区域 -->
    <itemselect :itemtypedata="itemtypedata"></itemselect>

  </div>
</template>

<script>
//引入查询接口
import { options_type_select } from "../api/request";
//引入物品筛选面板
import itemselect from "./picker_component/item_select.vue";
//引入宝箱筛选面板
import chestselect from "./picker_component/chest_select.vue";

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
      picker_state: false,
      selected_region_index: 0,
      option_data: ""
    };
  },
  components: {
    chestselect,
    itemselect
  },
  methods: {
    //筛选器折叠
    picker_switch() {
      this.picker_state = !this.picker_state;
    },
    //查询点位信息
    options_query(region_id) {
      let that=this;
      options_type_select().then(function(res) {
        //记录宝箱数据
        that.chestdata = [
          {
            icon: res.data.data[region_id].types[7].icon,
            items: res.data.data[region_id].types[7].items,
            name: res.data.data[region_id].types[7].name
          },
          {
            icon: res.data.data[region_id].types[8].icon,
            items: res.data.data[region_id].types[8].items,
            name: res.data.data[region_id].types[8].name
          }
        ];
        //记录收集物数据
        that.itemtypedata = res.data.data[region_id].types.slice(0, 7);
      });
    },
    //切换地区
    region_select(index){
      if(index<=1)
      {
        this.selected_region_index=index;
      }
    }
  },
  watch: {
    //切换地区以更改点位信息
    selected_region: function(val) {
      options_query(val)
    }
  },
  mounted() {
    //初始化点位类型信息
    this.options_query(0);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/picker.scss";
</style>