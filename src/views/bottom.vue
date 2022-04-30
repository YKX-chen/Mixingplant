<template>
  <div class="new-bottom">
    <div class="bom-01">
      <div class="b-01">
        <span>报警类型占比</span>
        <span>年</span>
      </div>
      <div class="b-02">
        <div class="b-left">
            <PieChart class="pichar" />
        </div>
        <div class="b-right">
          <div>
            <div class="one">
              <div>
                <span>1362</span>
                <span>起</span>
              </div>
              <div>驶入禁止路段</div>
            </div>
            <div class="one">
              <div>
                <span>455</span>
                <span>起</span>
              </div>
              <div>长时间停驶</div>
            </div>
          </div>
          <div>
            <div class="one">
              <div>
                <span>798</span>
                <span>起</span>
              </div>
              <div>频繁正反转</div>
            </div>
            <div class="one">
              <div>
                <span>241</span>
                <span>起</span>
              </div>
              <div>其他报警类型</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bom-02">
      <div class="b-01">
        <span>报警频率统计</span>
        <span>年</span>
      </div>
      <div class="b-02">
          <AxisChar class="axchar"/>
      </div>
    </div>
  </div>
</template>
<script>
import PieChart from '../components/piechar.vue'
import AxisChar from '../components/axischar.vue'
export default {
    data(){
        return{}
    },
    components:{
        PieChart,
        AxisChar
    }
}
</script>