import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import db from '../data.json';
import { Button } from 'reactstrap';

export default function Chart() {
    const [chartData, setChartData] = useState({});


    const chart = () => {
        let ndata = [];
        for (let i = 1; i <= 24; ++i) {
            let val = Math.floor(Math.random() * (60 - 20)) + 20;
            ndata.push(val.toString(10));
        }
        setChartData({
            labels: db[0].labels,
            datasets: [{
                label: 'Output',
                backgroundColor: 'rgba(249, 161, 104 ,0.4)',
                borderColor: [
                    'rgba(85, 85, 84 , 0.6)',
                ],
                pointBackgroundColor: 'rgba(244, 89, 33,0.8)',
                pointHoverBackgroundColor: 'rgba(241, 251, 25,0.9)',
                pointHoverRadius: '5',
                data: db[0].oil
            }
            ]
        })
    }


    useEffect(() => {
        chart()
    }, [])



    return (
        <div className="container">
            <Button className="primary" onClick={chart}>Click</Button>
            <Line data={chartData}
                options={{
                    responsive: true,
                    title: {
                        display: true,
                        text: "What Ever It Is!!",
                        fontSize: 25
                    },
                    scales: {
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "Time",
                                fontColor: "red"
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "Output",
                                fontColor: "green"
                            }
                        }]
                    },
                }}
            />
        </div >
    )
}
