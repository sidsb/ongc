import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import db from '../data.json';

export class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
    }


    render() {

        console.log(this.props.field);


        return (
            <div key={this.props.field} className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Line data={{
                            labels: db[parseInt(this.props.field)].labels,
                            datasets: [{
                                label: 'Oil',
                                backgroundColor: 'rgba(255, 195, 0 ,0.4)',
                                borderColor: [
                                    'rgba(85, 85, 84 , 0.6)',
                                ],
                                pointBackgroundColor: 'rgba(244, 89, 33,0.8)',
                                pointHoverBackgroundColor: 'rgba(241, 251, 25,0.9)',
                                pointHoverRadius: '5',
                                data: db[parseInt(this.props.field)].oil
                            }
                            ]
                        }}
                            options={{
                                responsive: true,
                                title: {
                                    display: true,
                                    text: "Oil in Field:" + (parseInt(this.props.field) + 1),
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
                                            labelString: "Oil",
                                            fontColor: "green"
                                        }
                                    }]
                                },
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <Line data={{
                            labels: db[parseInt(this.props.field)].labels,
                            datasets: [{
                                label: 'Water',
                                backgroundColor: 'rgba(131, 243, 254 ,0.4)',
                                borderColor: [
                                    'rgba(85, 85, 84 , 0.6)',
                                ],
                                pointBackgroundColor: 'rgba(244, 89, 33,0.8)',
                                pointHoverBackgroundColor: 'rgba(241, 251, 25,0.9)',
                                pointHoverRadius: '5',
                                data: db[parseInt(this.props.field)].water
                            }
                            ]
                        }}
                            options={{
                                responsive: true,
                                title: {
                                    display: true,
                                    text: "Water in Field:" + (parseInt(this.props.field) + 1),
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
                                            labelString: "Water",
                                            fontColor: "green"
                                        }
                                    }]
                                },
                            }}
                        />
                    </div>
                </div>
            </div >
        );
    }
}


export default Chart
