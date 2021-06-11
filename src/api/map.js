//地图初始化
import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";
import { layergroup_register,layerarray } from './layergroup';
function initmap(map){
    //初始化地图参数
    let t=L.latLngBounds([0, 0], [-66.5, 90]);
    let mapdata = L.map("map", {
      center: [-35, 45],
      zoomDelta: 0.5,
      zoomSnap: 0.5,
      maxZoom: 8,
      minZoom: 4,
      zoom: 4,
      maxBounds: t,
      attributionControl: false, 
      zoomControl: false
    });
    //挂载至VUE对象
    map = mapdata;
    //向地图添加缩放控件
    L.control.zoom({
      zoomInTitle: '+',
      zoomOutTitle: '-'
    }).addTo(map);
    //添加下方外链
    L.control.attribution({
      prefix: "<a href='https://bbs.mihoyo.com/ys/article/1328298' target='_blank'>使用说明/米游社空荧酒馆</a>",
      position: "bottomright"
    }).addTo(map);
    L.control.attribution({
      prefix: "<a href='/docs/disclaimer.html' target='_bal'>免责声明</a>",
      position: "bottomleft"
    }).addTo(map);
    L.control.attribution({
      prefix: "<a href='/docs/join.html' target='_bal'>招募</a>",
      position: "bottomleft"
    }).addTo(map);
    //添加地图切片
    L.TileLayer.T = L.TileLayer.extend({
      getTileUrl: function (coords) {
        let x = coords.x
        let y = coords.y
        return 'https://yuanshen.site/tiles_qd/' + coords.z + '/ppp' + x + '_' + y + '.jpg';
      },
      reuseTiles: true
    });
    L.tileLayer.t = function () {
      return new L.TileLayer.T();
    }
    map.addLayer(L.tileLayer.t());
    //生成各个点位
    layergroup_register(map);
    return map;
}
//切换点位的显示
function togglelayer(map){
  if(map.hasLayer(layerarray.islandchest)==false)
  {
    map.addLayer(layerarray.islandchest);
  }
  else
  {
    map.removeLayer(layerarray.islandchest);
  }

}
export {initmap,togglelayer}