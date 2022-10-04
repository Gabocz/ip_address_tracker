import L from 'leaflet';
import LocationIcon from '../assets/images/icon-location.svg'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import ChangeMapView from './ChangeMapView'

const customIcon = new L.Icon({
    iconUrl: LocationIcon,
    iconRetinaUrl: LocationIcon,
    iconSize: [35,45],     
})


function Map({latitude, longitude}) {
    return (
        <MapContainer className='map_container' center={[latitude, longitude]} zoom={13}>
        <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />
           <Marker position={[latitude, longitude]} icon={customIcon}>
           </Marker>
           <ChangeMapView latitude={latitude} longitude={longitude}/>
    </MapContainer>
    )
}

export default Map


