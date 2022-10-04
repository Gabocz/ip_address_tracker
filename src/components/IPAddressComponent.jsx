function IPAddressComponent({ipAddress}) {
    return (
        <div id="ip" className="dashboard_item">
            <p className="title">Ip Address</p>
            <p className="result">{ipAddress}</p>
        </div>
    )
}

export default IPAddressComponent
