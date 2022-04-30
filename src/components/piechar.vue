<template>
  <div id="map" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "220px",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      // this.chart = echarts.init(this.$el, "macarons");
      this.chart = echarts.init(document.getElementById("map"));
      var option = {
        color: ["#ff5754", "#ff6a29", "#ffc100", "#01d4db"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            selectedMode: "single",
            radius: [0, "16%"],
            avoidLabelOverlap: true,
            label: {
              position: "inner",
              fontSize: 14,
            },
            labelLine: {
              show: true,
            },
            data: [{ value: 1548 }],
          },
          {
            name: "Access From",
            type: "pie",
            radius: ["38%", "40%"],
            label: {
              show: false,
              position: "center",
            },
            data: [
              { value: 468 },
              { value: 735 },
              { value: 580 },
              { value: 2648 },
            ],
          },
          {
            name: "Access From",
            type: "pie",
            radius: ["50%", "70%"],
            label: {
              show: false,
              position: "center",
            },
            data: [
              { value: 468 },
              { value: 735 },
              { value: 580 },
              { value: 2648 },
            ],
          },
        ],
      };
      this.chart.setOption(option);
      window.onresize = function () {
        map.resize();
      };
    },
  },
};
</script>
