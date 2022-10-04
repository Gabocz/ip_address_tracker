import IPAddressComponent from "./IPAddressComponent"
import ISPComponent from "./ISPComponent"
import LocationComponent from "./LocationComponent"
import TimezoneComponent from "./TimezoneComponent"

function Dashboard({ipAddress, location, timezone, isp}) {
    return (
        <div className="dashboard">
           <IPAddressComponent ipAddress={ipAddress}/>
           <LocationComponent location={location}/>
           <TimezoneComponent timezone={timezone}/>
           <ISPComponent isp={isp}/>
        </div>
    )
}

export default Dashboard

