<template>
  <div class="new-main">
    <div class="main-top">
      <div class="top-01">
        <span>概况统计</span>
        <span>日</span>
      </div>
      <div class="top-02">
        <div class="t-01">
          <img src="../assets/img/gencar.png" />
          <div>
            <span>车辆统计(总):</span>
            <span>245</span>
            <span>辆</span>
          </div>
        </div>
        <div class="t-02">
          <div>
            <span>已出:</span>
            <span>200</span>
          </div>
          <div>
            <span>闲置:</span>
            <span>45</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-mid">
      <div class="mid-01">报警统计</div>
      <div class="mid-02">
        <div class="new-table-layout table-header">
          <div>报警类型</div>
          <div>车牌号码</div>
          <div>驾驶员</div>
          <div>报警时间</div>
          <div>操作</div>
        </div>
        <vue-seamless-scroll
          :data="policeData"
          class="seamless-warp"
          :class-option="classOption"
        >
          <div
            class="new-table-layout"
            v-for="(item, index) in policeData"
            :key="index"
          >
            <div>{{ item.type }}</div>
            <div>{{ item.code }}</div>
            <div>{{ item.name }}</div>
            <div>{{ item.date }}</div>
            <div>{{ item.right }}</div>
          </div>
        </vue-seamless-scroll>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      policeData: [
        {
          type: "驶入禁止路段",
          code: "京A20011",
          name: "张三",
          date: "2021-11-24",
          right: "操作",
        },
        {
          type: "驶入禁止路段",
          code: "京A20011",
          name: "张三",
          date: "2021-11-24",
          right: "操作",
        },
        {
          type: "驶入禁止路段",
          code: "京A20011",
          name: "张三",
          date: "2021-11-24",
          right: "操作",
        },
        {
          type: "驶入禁止路段",
          code: "京A20011",
          name: "张三",
          date: "2021-11-24",
          right: "操作",
        },
        {
          type: "驶入禁止路段",
          code: "京A20011",
          name: "张三",
          date: "2021-11-24",
          right: "操作",
        },
      ],
    };
  },
  computed: {
    classOption() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted() {
   // this.login();
  },
  methods: {
    login() {
      this.$axios({
        url: this.url + "/login",
        method: "post",
        data: {
          // account: "1142506813@qq.com",
          // password: "123456",
          account:"cs001",
          password: "lasting888",
        },
      }).then((res) => {
        sessionStorage.setItem("token", res.data.data);
      });
    },
  },
};
</script>
<style lang="scss">
.seamless-warp
{
    overflow: hidden;

    width: 100%;
    height: calc(100% - 36px);
}

</style>