import React from "react";

function Movcard({share}){
    return(
        <div>
            <div className="card">
                <div className="card-img">
                    <img src={share.images.jpg.image_url} alt="" />
                </div>
                <div className="card-header fw-bold">{share.title}</div>
                
                <div className="card-body">
                    <p>Duration : {share.duration}</p>
                    <p>Broadcast : {share.broadcast.day}</p>
                    <p>Episodes : {share.status}</p>
                </div>
                <div className="play"><span>Play Now</span></div>
            </div>
        </div>
    )
}

export default Movcard