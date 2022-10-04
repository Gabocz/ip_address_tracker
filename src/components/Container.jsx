import { getData } from "../helpers"
import Map from "./Map"
import SearchInput from "./SearchInput"
import Dashboard from "./Dashboard"
import { useState } from 'react'


function Container() {
    
    const [searchTerm, setSearchTerm] = useState('')
    const [ipAddress, setIpAddress] = useState('192.212.174.101')
    const [location, setLocation] = useState('Brooklyn, NY 10001')
    const [timezone, setTimezone] = useState('-05:00')
    const [isp, setIsp] = useState('SpaceX Starlink')
    const [latitude, setLatitude] = useState('40.65')
    const [longitude, setLongitude] = useState('-73.94')

    const setData = async () => {
       const data =  await getData(searchTerm)
       setIpAddress(data.ip)
       setLocation(data.location.city)
       setTimezone(data.location.timezone)
       setIsp(data.isp)
       setLatitude(data.location.lat)
       setLongitude(data.location.lng)
    }
    
    

    return (
        <div className="main_container">
            <div className="pattern">
            <h1 className="appTitle">IP Address Tracker</h1>
            <SearchInput 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setData={setData}
              />
            </div>
            <Dashboard
              ipAddress={ipAddress}
              location={location}
              timezone={timezone}
              isp={isp}
            />
            <Map 
              latitude={latitude}
              longitude={longitude}
            />
        </div>
    )
}

export default Container
