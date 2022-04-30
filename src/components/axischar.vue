<template>
  <div :class="className" :style="{ height: height, width: width }" />
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
      default: "300px",
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
      this.chart = echarts.init(this.$el, "macarons");
      let xLabel = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ];
      this.chart.setOption({
        color: ["#00F7FF"],
        animation: false,
        tooltip: {},
        xAxis: {
          data: xLabel,
          axisTick: {
            show: false, //隐藏X轴刻度
          },
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#11417a",
            },
          },
          axisLabel: {
            show: true,
            margin: 14,
            fontSize: 14,
            textStyle: {
              color: "#E2F9FF", //文字颜色
            },
          },
        },
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#113763",
                width: 0,
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#11417a",
              },
            },
            axisLabel: {
              show: true,
              margin: 14,
              fontSize: 14,
              textStyle: {
                color: "#E2F9FF", //文字颜色
              },
            },
          },
        ],
        series: [
          {
            name: "主营业务",
            type: "bar",
            barWidth: 14,
            // itemStyle: {
            //   normal: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       {
            //         offset: 0,
            //         color: "#07ecd9",
            //       },
            //       {
            //         offset: 1,
            //         color: "#034881",
            //       },
            //     ]),
            //   },
            // },
            data: [20, 80, 100, 40, 34, 90, 60,20, 80, 100, 40, 34],
            z: 5,
            zlevel: 0,
            label: {
              show: true,
              position: "top",
              distance: 10,
              fontSize: 12,
              color: "#C3FCFF",
            },
          },
          {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#0F375F",
              },
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [20, 2],
            symbolPosition: "start",
            symbolOffset: [0, -1],
            data: [20, 80, 100, 40, 34, 90, 60,20, 80, 100, 40, 34],
            width: 25,
            z: 0,
            zlevel: 1,
          },
        ],
      });
      window.onresize = this.chart.resize()
    },
  },
};
</script>
