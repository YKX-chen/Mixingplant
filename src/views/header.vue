<template>
  <div class="new-header">
    <div class="header01">
      <img src="../assets/img/top.png" />
      <span>拌合站监管大屏</span>
    </div>
    <div class="header-left"></div>
    <div class="header-right"></div>
    <div class="header02">
      <div class="he-01">施工部位筛选</div>
      <div class="he-02">
        <el-select
          v-model="value"
          :popper-append-to-body="false"
          popper-class="select"
          placeholder="A施工部位"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="he-01">拌合站筛选</div>
      <div class="he-02">
        <el-select
          v-model="value"
          :popper-append-to-body="false"
          popper-class="select"
          placeholder="A拌合站"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      options: [
        {
          value: 1,
          label: "A施工部位",
        },
        {
          value: 2,
          label: "A施工部位2",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">

.el-input__icon {
  height: 100%;
  width: 35px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 22px;
}
.el-select-dropdown__item {
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    height: 34px;
    line-height: 34px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
}
.select {
  z-index: 3000 !important;
  background: rgba(7, 34, 52, 0.5);
  border: 1px solid rgba(7,215,222,0.3);
  border-right: 1px solid rgba(7,215,222,0.3) !important;
  box-shadow: 0px 0px 12px 1px rgba(255, 255, 255, 0.2);
  color: #D5F7FF;
  border-radius: 2px;
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: rgba(7, 34, 52,1);
    color: #D5F7FF;
}
.el-popper .popper__arrow {
  border-width: 6px;
  -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
}
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: none;
}
</style>
