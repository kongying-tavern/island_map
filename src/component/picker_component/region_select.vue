<template>
  <div class="picker_area2">
    <div style="width: 100%; height: 1px"></div>
    <div class="picker_area2_cover"></div>
    <div class="picker_area2_containor">
      <div style="width: 100%; height: 1px"></div>
      <div class="picker_area2_header">
        <li class="item_type" v-for="(i, index) in itemtypedata" :key="i.name" @click="swtich_item(index)">
          <img
            :src="i.icon"
            class="item_type_icon"
          />
          <span
            class="item_type_name"
            :class="{ on: checkitem == index ? true : false }"
            >{{ i.name }}</span
          >
        </li>
      </div>
      <div class="picker_area2_main_cover">
        <div class="picker_area2_main">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "regionselect",
  data() {
    return {
      option_type: "",
      checkitem: 0
    };
  },
  props: ["itemtypedata"],
  mounted() {},
  methods: {
    swtich_item(index)
    {
      this.checkitem=index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/picker_item.scss";
</style>