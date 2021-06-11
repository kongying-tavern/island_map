import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";
//点位图标参数
var icon_info_list={
    chest_icon:L.Icon.extend({
        options: {
            shadowUrl: "https://yuanshen.site/imgs/loc_stonenot.svg",
            iconSize: [22, 22], // size of the icon
            shadowSize: [24, 24], // size of the shadow
            iconAnchor: [11, 11], // point of the icon which will correspond to marker's location
            shadowAnchor: [12, 11], // the same for the shadow
            popupAnchor: [0, -22] // point from which the popup should open relative to the iconAnch
        }
    })
}
export { icon_info_list }