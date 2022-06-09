import React, {Component} from 'react';

export default class DeviceByIp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ip: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ip: event.target.value});
        console.log(this.state.ip)
    }
    fetchDeviceData()   {
        /*fetch('http://localhost:58000/api/v1/network-device/ip-address/' + this.state.ip)
            .then(response => response.json())
            .then(data => console.log("Data" + data));*/
    }

    render() {
        return (
            <div>
                <form onSubmit={this.fetchDeviceData}>
                    <label>
                        IP-Adresse:
                        <input type="text" value={this.state.ip} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    <label>{this.state.ip}</label>
                </form>
            </div>
        )
    }
}