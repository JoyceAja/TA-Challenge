import React, { Component } from "react";
import Layout from "./tempPerDay";

export default class Page extends Component{
    constructor(props){
        super(props)

        this.state = {
            toggleTemp: false
        }
    }

    toggle = () => {
        const { toggleTemp } = this.state
        this.setState({
            toggleTemp: !toggleTemp
        })
    }

    render(){
        const { data } = this.props
        const { toggleTemp } = this.state
        return(
            <div className="container">
                <div className="temp-box">
                {data? data.map((el,idx) => <Layout key = {idx} data={el} tempType ={toggleTemp}/>): ""}
                </div>
                <button onClick={this.toggle}>{toggleTemp? "Show Celcuis" : "Show Farenheit"}</button>
            </div>
        )
    }
}