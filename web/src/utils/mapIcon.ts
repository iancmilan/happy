import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68], //29 eixo x (metade do 58 pra ficar na metade), 68 eixo y(pra marcar com a parte de baixo)
    popupAnchor: [170, 2]
});

export default mapIcon;