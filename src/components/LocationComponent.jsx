function LocationComponent({location}) {
    return (
        <div id="location" className="dashboard_item">
            <p className="title">Location</p>
            <p className="result">{location}</p>
        </div>
    )
}

export default LocationComponent
