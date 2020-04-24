// hello.js
import Vue from 'vue';
import MapLegendVue from './MapLegend.vue';
class MapLegend {
  constructor() {
    this.init()
  }
  //创建overlay
  init() {
    // 使用extend方法创建vue的子类
    const MapLegendComponent = Vue.extend(MapLegendVue);
    // 实例化子组件，然后获取到DOM结构并挂载到body上
    this.MapLegendInstence = new MapLegendComponent({
      propsData: {
        legendData: []
      }
    });
    console.log(this.MapLegendInstence)
    this.MapLegendInstence.vm = this.MapLegendInstence.$mount();
    document.body.appendChild(this.MapLegendInstence.vm.$el);
  }
  setVal(data) {
    console.log(this.MapLegendInstence)
    this.MapLegendInstence.vm.legendData = data
  }
}
export default MapLegend;