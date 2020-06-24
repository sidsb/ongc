import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Line
                            data={this.props.data}
                            options={{
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Chart;
