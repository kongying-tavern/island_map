//初始化各个点位组
import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";
import { islanddata } from '../assets/localdata/test';
import { icon_info_list } from './icon_info';
var layerarray = {
    islandchest: L.layerGroup(),
}
function layergroup_register(){
    var markers = {};
    //点位绑定说明信息
    function onEachFeature(feature, layer) {
      layer.bindPopup(feature.properties.popupContent);
    }
    //生成点位
    L.geoJSON(islanddata.chestdata, {
        pointToLayer: function (feature, latlng) {
            var key = 1 + "_" + feature.id;
            var marker = L.marker([latlng.lng, latlng.lat], {
            icon:new icon_info_list[Object.keys(icon_info_list)[0]]({
                iconUrl: 'https://yuanshen.site/imgs/icon_26.svg'
            }),
            alt: `${latlng.lng},${latlng.lat}`
            }, );
            markers[key] = marker;
            return marker.addTo(layerarray.islandchest);
        },
        onEachFeature:onEachFeature
    });
}
export {layergroup_register,layerarray}