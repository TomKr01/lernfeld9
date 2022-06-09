import React, { useEffect } from "react";
import { VictoryPie } from "victory-pie";

export default function NetworkHealth() {
    const [healthy, setHealthy] = React.useState(0);
    const [unhealthy, setUnhealthy] = React.useState(0);


    useEffect(() => {
        console.log("mouncted");
        fetch('/assurance/health', {
            method: 'GET',
            headers: {
                'X-Auth-Token': 'NC-33-402adc62fd414a139e9c-nbi',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then(response => response.json())
            .then(data => {
                let health = data.response[0];
                setHealthy(health["totalPercentage"])
                setUnhealthy(100 - health["totalPercentage"])
            });
      }, []);

    
        return (
            <div>
                <VictoryPie
                    data={[
                        { x: "Healthy", y: 80 },
                        { x: "Unhealthy", y: 20 }
                      ]}
                    colorScale={["green", "red"]}
                    radius={100}
                />
            </div>
        )
}