import React, { Component } from 'react';
import { Line, Radar } from 'react-chartjs-2';

export default class Areachart extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }
    render() {
        return (

            <Radar data={{
                labels: this.props.labels,
                datasets: [{
                    label: "Oil",
                    fill: true,
                    backgroundColor: 'rgba(238, 209, 51, 0.6)',
                    data: this.props.oildata
                },
                {
                    label: "Water",
                    fill: true,
                    backgroundColor: 'rgba(51, 238, 209, 0.6)',
                    data: this.props.waterdata
                }
                ]
            }}
                options={{
                    title: {
                        display: true,
                        text: "Data in Field:" + (parseInt(this.props.field) + 1),
                        fontSize: 25
                    },
                }}
            />

        )
    }
}

