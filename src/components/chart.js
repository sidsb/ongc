import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import db from '../data.json';
import { Button } from 'reactstrap';

export class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                labels: db.labels,
                datasets: [
                    {
                        label: "Output",
                        backgroundColor: 'rgba(249, 161, 104 ,0.4)',
                        borderColor: [
                            'rgba(85, 85, 84 , 0.6)',
                        ],
                        pointBackgroundColor: 'rgba(244, 89, 33,0.8)',
                        pointHoverBackgroundColor: 'rgba(241, 251, 25,0.9)',
                        pointHoverRadius: '5',
                        data: db.data
                    }
                ]
            },

        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        let ndata = [];
        for (let i = 1; i <= 24; ++i) {
            let val = Math.floor(Math.random() * (60 - 20)) + 20;
            ndata.push(val.toString(10));
        }
        console.log(ndata);



    }


    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">

                        <Button color="primary" onClick={this.handleClick}>Change Data</Button>
                        <Line
                            data={this.state.data}
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Chart;
