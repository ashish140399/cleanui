<template>
  <div class="card-body position-relative overflow-hidden">
    <div class="font-size-28 font-weight-bold text-white mb-n1">230,023,023 <span style="color:#858AB0;font-weight:400">USD</span></div>
    <div style="color:#858AB0">Daily Volume</div>
    <div :class="$style.chartContainer">
      <vue-chartist
        :class="$style.chart"
        class="ct-hidden-points"
        :data="chartData"
        :options="chartOptions"
        type="Line"
      />
    </div>
  </div>
</template>
<script>
import VueChartist from 'v-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

export default {
  name: 'KitChart11v1',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    return {
      chartOptions: {
        axisX: {
          showLabel: false,
          showGrid: false,
          offset: 0,
        },
        axisY: {
          showLabel: false,
          showGrid: false,
          offset: 0,
        },
        showArea: true,
        high: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        fullWidth: true,
        height: '110px',
        showPoint: true,
        plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
      },
      chartData: {
        series: [
          [
            20,
            80,
            67,
            120,
            132,
            66,
            97,
          ],
        ],
      },
    }
  },
}
</script>
<style lang="scss" module>
@import "./style.module.scss";
</style>
