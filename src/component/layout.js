import React, { Component } from "react";

export default class extends Component{
    render(){
        const { data, tempType } = this.props
        var deg = String.fromCharCode(176)
        return(
        <div>
            <div className="day">
                <div className="date">{data.dateTimeISO.substring(0, 10)}</div>
                <div className="icon">{<img src={`/icons/${data.icon}`} alt={data.icon}/>}</div>
                <div className="maxTemp">{tempType? `Low: ${data.maxTempF} ${deg}F` : `Low: ${data.maxTempC} ${deg}C`}</div>
                <div className="minTemp">{tempType? `High: ${data.minTempF} ${deg}F` : `High: ${data.minTempC} ${deg}C`}</div>
                
            </div>
        </div>
    )
    }
}