import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";
import "../assets/leaflet-markercluster/leaflet.markercluster-src"
import "../assets/leaflet-markercluster/MarkerCluster.css"
import "../assets/leaflet-markercluster/MarkerCluster.Default.css"
import {JS_FST} from '../assets/localdata/test';

function initmap(map){
    let json=JS_FST
    console.log(json)
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
    map = mapdata;　　　　//data上需要挂载
    L.control.zoom({
      zoomInTitle: '+',
      zoomOutTitle: '-'
    }).addTo(map);
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
    var LayerMap = {
      Layer_FST: L.layerGroup(),
    }
    var typearray = [
      [LayerMap["Layer_FST"], JS_FST],
    ];
    //初始化各个坐标
    var markers = {};
    for (let i = 0; i < typearray.length; i++) {
      L.geoJSON(typearray[i][1], {
        pointToLayer: function (feature, latlng) {
          var key = i + "_" + feature.id;
          var marker = L.marker([latlng.lng, latlng.lat], {
            alt: `${latlng.lng},${latlng.lat}`
          }, );
          markers[key] = marker;
          return marker.addTo(typearray[i][0]);
        },
      })
    };
}
export {initmap}