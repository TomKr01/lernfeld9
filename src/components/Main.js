import React, {Component} from 'react';
import DeviceByIp from "./DeviceByIp";
import GetAllDevices from './GetAllDevices';

export default class Main extends React.Component {
    render() {
        return (
            <div> 
                <DeviceByIp></DeviceByIp>
                <GetAllDevices></GetAllDevices>
            </div>
        )
    }
}