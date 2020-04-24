<template>
  <div v-show="legendData.length"
    :class="['ol-legend-box',{'legend-show-status': legendStatus},{'legend-double-mode': this.legendsAmount>=6}]">
    <div class="ol-legend-header">
      <span>图例</span>
      <i :class="['ol-legend-switch','cursor-pointer','icon-LSwitch',{'switch-active': legendStatus}]" @click="switchLegend"></i>
    </div>
    <div class="ol-legend-content">
      <span v-show="bhqfwLayerShow" title="保护区陆域">
        <i class="legend-rectangle"
          style="background:rgba(49, 239, 91, 1);border:1px solid rgba(255, 255, 255, 0.8); "></i>
        保护区陆域
      </span>
      <span v-show="bhqfwLayerShow" title="保护区水域">
        <i class="legend-rectangle" style="background:rgba(29, 3, 245, 1);border:1px solid rgba(29, 3, 245, 0.8); "></i>
        保护区水域
      </span>
      <span v-show="sgnqgjjLayerShow" title="保护区">
        <i class="legend-rectangle" style="background:rgba(78, 255, 78, 1);border:1px solid rgba(78, 255, 78, 1); "></i>
        保护区
      </span>
      <span v-show="sgnqgjjLayerShow" title="保留区">
        <i class="legend-rectangle" style="background:rgba(0, 0, 255, 1);border:1px solid rgba(0, 0, 255, 1); "></i>
        保留区
      </span>
      <span v-show="sgnqgjjLayerShow" title="开发利用区">
        <i class="legend-rectangle"
          style="background:rgba(255, 64, 64, 1);border:1px solid rgba(255, 64, 64, 0.8); "></i>
        开发利用区
      </span>
      <span v-show="sgnqgjjLayerShow" title="缓冲区">
        <i class="legend-rectangle"
          style="background:rgba(255, 255, 63, 1);border:1px solid rgba(255, 255, 63, 0.8); "></i>
        缓冲区
      </span>
      <template v-for="(item,index) in iconLegendList">
        <span :key="item.value+index" :title="item.title">
          <img :src="svgImg(item.value)">{{item.title}}
        </span>
      </template>
      <template v-for="item in wfsLayerList">
        <span v-html="item.content" :key="item.title" :title="item.title"></span>
      </template>
    </div>
  </div>
</template>
<script>
// import getSVGImage from '@/map/map2d/js/GetSvgImage.js'
export default {
  name: 'olLegend',
  components: {},
  props: {
    legendData: {
      type: Array,
      default() {
        return {
        }
      }
    }
  },
  data() {
    return {
      bhqfwLayerShow: false,
      sgnqgjjLayerShow: false,
      iconLegendList: [],
      legendStatus: true,
      wfsLayerList: [],
      legendsAmount: 0
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    //获取svg图片
    svgImg(type) {
      return getSVGImage(type)
    },
    //开关图例内容
    switchLegend() {
      this.legendStatus = !this.legendStatus
    },
    //筛出中文
    getChinese(strValue) {
      if (strValue != null && strValue !== '') {
        var reg = /[\u4e00-\u9fa5]/g
        if (strValue.match(reg) && strValue.match(reg).length) {
          return strValue.match(reg).join('')
        } else {
          return ''
        }
      } else {
        return ''
      }
    }
  },
  computed: {},
  watch: {
    legendData: {
      handler(newVal, oldVal) {
        console.log(newVal)
      },
      deep: true
    }
  }
}
</script>
<style scoped>
</style>
