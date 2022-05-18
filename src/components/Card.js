import React from "react"
import {ImLocation} from "react-icons/im"


export default function Card(props){
    return(
        <div className="card">
            <div className="pic-div">
                <img src = {props.item.content} className = "pic" alt = "img"/>
            </div>
            <div className="card-info">
                <div className="card-title">
                    <ImLocation className="card-local-icon" />
                    <h4 className="card-location">{props.item.location}</h4>
                    <a href = {props.item.map} className = "google-map">View on Google Maps </a>
                </div>
                <div className="card-details">
                    <h3 className="card-local-name">{props.item.name}</h3>
                    <h3 className="date">{props.item.date}</h3>
                    <p className="card-detail">{props.item.desc}</p>
                </div>
            </div>
        </div>
    )
}