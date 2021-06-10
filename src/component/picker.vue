<template>
  <div class="picker">
      <div class="picker_header">
          <div class="avatar">
              <img src="../assets/Content_img/Content_img/Avatar.png" class="avatar_img">
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
      <div class="picker_area1">
          <div style="width:100%;height:1px"></div>
          <div class="picker_area1_cover"></div>
          <div class="picker_area1_containor">
              <div class="picker_area1_header">
                  <h3>
                      <i class="picker_area1_header_icon"></i>
                      <span>宝箱筛选</span>
                  </h3>
                  <div class="switch_btn">
                    <div :class="switch_btn_class"></div>
                    <span :class="{'selected_span':selected_span}" @click="swtich_class">宝箱种类</span>
                    <span :class="{'selected_span':!selected_span}" @click="swtich_class">获取方式</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'picker',
    data() {
        return {
            show:true,
            switch_btn_class:"switch_btn_normal",
            selected_span:true
        }
    },
    methods: {
        //按钮样式切换
        swtich_class(){
            this.selected_span=!this.selected_span;
            if(this.switch_btn_class=="switch_btn_normal"||this.switch_btn_class=="switch_btn_off")
            {
                this.switch_btn_class="switch_btn_on"
            }
            else
            {
                this.switch_btn_class="switch_btn_off"
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/picker.scss";
</style>