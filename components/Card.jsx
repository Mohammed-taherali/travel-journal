import React from "react"

export default function Card(props) {
    // console.log(props)
    return (
        <section className="card">
            <div className="col1">
                <img className="main-photo" src={props.info.coverImg} />
            </div>
            <div className="col2">
                <p className="section-header"><img className="location-tag" src="location-tag.svg" /> <span className="location">{props.info.location}</span> <span><a className="maplink" target="_blank" href={props.info.mapLink}>View on Google Maps</a></span></p>
                <h1 className="title">{props.info.title}</h1>
                <h4 className="duration">{props.info.startDate} - {props.info.endDate}</h4>
                <p className="desc">{props.info.description}</p>
            </div>
        </section>
    )
}