import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class Linechart extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <Line data={{
                labels: this.props.labels,
                datasets: [{
                    label: this.props.datatype,
                    backgroundColor: this.props.datatype === "Oil" ? 'rgba(238, 209, 51, 0.6)' : 'rgba(51, 238, 209, 0.6)',
                    borderColor: [
                        'rgba(85, 85, 84 , 0.6)',
                    ],
                    pointBackgroundColor: 'rgba(244, 89, 33,0.8)',
                    pointHoverBackgroundColor: 'rgba(241, 251, 25,0.9)',
                    pointHoverRadius: '5',
                    data: this.props.data
                }
                ]
            }}
                options={{
                    responsive: true,
                    title: {
                        display: true,
                        text: this.props.datatype + " in Field:" + (parseInt(this.props.field) + 1),
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
                                labelString: this.props.datatype,
                                fontColor: "green"
                            }
                        }]
                    },
                }}
            />
        )
    }
}
