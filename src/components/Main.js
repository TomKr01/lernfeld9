import React, {Component} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import DeviceByIp from "./DeviceByIp";

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <PieChart
                    data={[
                        { title: 'One', ip: 10, color: '#7FFF00' },
                        { title: 'Two', ip: 15, color: '#FF0000' },
                    ]}
                />
                <DeviceByIp></DeviceByIp>
            </div>
        )
    }
}