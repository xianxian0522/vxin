<template>
  <div>
    <baidu-map style="width: 100%; height: 324px" class="map" ak="CBM8vmCtIunCrQBfjLCgTHuGVlUSMD6n" :zoom="20" :center="{lng: 121.524601, lat: 31.226841}"
               :scroll-wheel-zoom="true">
      <!--比例尺控件-->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!--缩放控件-->
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" ></bm-navigation>
      <bm-marker :position="{lng: 121.524601, lat: 31.226841}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
        <bm-label content="" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script >
import { BaiduMap, BmScale, BmNavigation, BmMarker, BmLabel } from 'vue-baidu-map'

export default {
  name: "MapComponent",
  components: {
    BaiduMap,
    BmScale,
    BmNavigation,
    BmMarker,
    BmLabel,
  },
}
</script>

<style scoped lang="less">

</style>
