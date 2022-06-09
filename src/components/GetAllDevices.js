import React, {Component} from 'react';

export default class GetAllDevices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ip: ''};

        this.fetchClients();
    }

    fetchClients()   {
        
        fetch('http://localhost:58000/api/v1/network-device', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true',
                "Accept": "application/json",
                'X-Auth-Token': 'NC-33-402adc62fd414a139e9c-nbi' 
            }})
            .then(response => response.json())
            .then(data => console.log("Data" + data));
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}