function TimezoneComponent({timezone}) {
    return (
        <div id="timezone" className="dashboard_item">
            <p className="title">Timezone</p>
            <p className="result">UTC {timezone}</p>
        </div>
    )
}

export default TimezoneComponent
