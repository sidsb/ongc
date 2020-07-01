import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import db from '../data.json';

export class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
    }

    graph_label(arr, st, et) {

        let req_label = [];

        for (let i = st; i <= et; ++i) {
            req_label.push(arr[i]);
        }


        return req_label;
    }
    graph_data(arr, st, et) {
        let req_data = [];
        for (let i = st; i <= et; ++i) {
            req_data.push(arr[i]);
        }

        return req_data;
    }

    change_data_type(output_type, arr, start_val, end_val) {
        let newarr = [];
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] < start_val || arr[i] > end_val) {
                newarr.push(0);
            }
            else {
                newarr.push(parseInt(arr[i]));
            }
        };
        if (output_type === 2) {
            for (let i = 0; i < newarr.length; ++i) {
                newarr[i] = newarr[i] * 10;
            }
        }
        else if (output_type == 3) {
            for (let i = 0; i < newarr.length; ++i) {
                newarr[i] = Math.floor(Math.log10(newarr[i]) * 10);
            }
        }

        return newarr;
    }

    render() {

        let x = parseInt(this.props.field);
        let st = parseInt(this.props.start_time);
        let et = parseInt(this.props.end_time);
        let output_type = parseInt(this.props.output_type);
        let start_val = parseInt(this.props.start_val);
        let end_val = parseInt(this.props.end_val);
        console.log(start_val, end_val);


        let oil_arr = this.change_data_type(output_type, db[x].oil, start_val, end_val);
        let water_arr = this.change_data_type(output_type, db[x].water, start_val, end_val);
        let gr_labels = this.graph_label(db[x].labels, st, et);
        let oil_data = this.graph_data(oil_arr, st, et);
        let water_data = this.graph_data(water_arr, st, et);


        return (
            <div key={this.props.field} className="container-fluid" >
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <Line data={{
                                    labels: gr_labels,
                                    datasets: [{
                                        label: 'Oil',
                                        backgroundColor: 'rgba(255, 195, 0 ,0.4)',
                                        borderColor: [
                                            'rgba(85, 85, 84 , 0.6)',
                                        ],
                                        pointBackgroundColor: 'rgba(244, 89, 33,0.8)',
                                        pointHoverBackgroundColor: 'rgba(241, 251, 25,0.9)',
                                        pointHoverRadius: '5',
                                        data: oil_data
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
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <Line data={{
                                    labels: gr_labels,
                                    datasets: [{
                                        label: 'Water',
                                        backgroundColor: 'rgba(131, 243, 254 ,0.4)',
                                        borderColor: [
                                            'rgba(85, 85, 84 , 0.6)',
                                        ],
                                        pointBackgroundColor: 'rgba(244, 89, 33,0.8)',
                                        pointHoverBackgroundColor: 'rgba(241, 251, 25,0.9)',
                                        pointHoverRadius: '5',
                                        data: water_data
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
                    </div>
                </div>
            </div >
        );
    }
}


export default Chart
