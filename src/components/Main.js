import React, {Component} from 'react';
import DeviceByIp from "./DeviceByIp";
import GetDevices from './GetDevices';
import NetworkHealth from './NetworkHealth';

export default class Main extends React.Component {
    render() {
        return (
            <div> 
                <DeviceByIp></DeviceByIp>
                <GetDevices></GetDevices>
                <NetworkHealth></NetworkHealth>
            </div>
        )
    }
}