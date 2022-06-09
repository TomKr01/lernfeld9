import React, { useEffect } from "react";
import './Components.css';


export default function GetDevices() {
    const [routers, setRouters] = React.useState([]);
    const [switches, setSwitches] = React.useState([]);
    const [hosts, setHosts] = React.useState([]);
    const [deviceCount, setDeviceCount] = React.useState([]);
    const [hostCount, setHostCount] = React.useState([]);

    useEffect(() => {
        console.log("mouncted");
        fetch('/network-device', {
            method: 'GET',
            headers: {
                'X-Auth-Token': 'NC-33-402adc62fd414a139e9c-nbi',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then(response => response.json())
            .then(data => {
                data.response.forEach((device) => {
                    if(device["type"] === "Router")    {
                        setRouters(routers => [...routers, device]);
                    }
                    else{
                        setSwitches(switches => [...switches, device]);
                    }
                })
            });

        fetch('/host', {
                method: 'GET',
                headers: {
                    'X-Auth-Token': 'NC-33-402adc62fd414a139e9c-nbi',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }})
                .then(response => response.json())
                .then(data => {
                    data.response.forEach((device) => {
                        console.log(device)
                        setHosts(hosts => [...hosts, device])
                    })
                });

        fetch('/host/count', {
            method: 'GET',
            headers: {
                'X-Auth-Token': 'NC-33-402adc62fd414a139e9c-nbi',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then(response => response.json())
            .then(data => {
                setHostCount(data.response)
            });    
            
        fetch('/network-device/count', {
            method: 'GET',
            headers: {
                'X-Auth-Token': 'NC-33-402adc62fd414a139e9c-nbi',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then(response => response.json())
            .then(data => {
                setDeviceCount(data.response)
            });        
      }, []);
        
  return (
    <ul className="elements-wrapper">
        <div>
            Devices: {deviceCount}
            <div className="list-wrapper">Routers:  
                {routers.map(router => (
                    <li key={router["hostname"]}>
                    <p>{router["hostname"]}</p>
                    </li>
                ))}
            </div>

            <div className="list-wrapper">Switches:
                {switches.map(device => (
                    <li key={device["hostname"]}>
                    <p>{device["hostname"]}</p>
                    </li>
                ))
                }
            </div>
        </div>
      <div className="list-wrapper-hosts">Hosts: {hostCount}
      {hosts.map(device => (
        <li key={device["hostName"]}>
          <p>{device["hostName"]}</p>
        </li>
      ))
      }
      </div>
    </ul>
  );
}