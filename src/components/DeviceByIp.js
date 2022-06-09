import React, { useEffect } from "react";

export default function DeviceByIp() {
    const [ip, setIp] = React.useState([]);
    const [device, setDevice] = React.useState([]);

    function handleChange(event) {
        setIp(event.target.value)
    };
    
    function fetchDeviceData() {
        console.log("mounted");
        fetch('network-device/ip-address/' + ip, {
            method: 'GET',
            headers: {
                'X-Auth-Token': 'NC-33-402adc62fd414a139e9c-nbi',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then(response => response.json())
            .then(data => {
                setDevice(data)
            });
      };

    
        return (
            <div>
                <div >
                    <label>
                        IP-Adresse:
                        <input type="text" value={ip} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" onClick={fetchDeviceData}/>
                    <label>Name: {device["hostname"]} Type: {device["type"]}</label>
                </div>
            </div>
        )
}