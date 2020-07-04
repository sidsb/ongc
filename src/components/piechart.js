import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { colors } from '../colorArray';

export class Piechart extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <Pie
                data={{
                    labels: this.props.labels,
                    datasets: [{
                        label: this.props.datatype,
                        backgroundColor: colors,
                        data: this.props.data,
                        hoverBackgroundColor: 'rgba( 251, 45, 17,0.8)',
                        hoverBorderColor: 'rgba( 241, 230, 13,0.8)',
                        hoverBorderWidth: '9'
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
                    legend: {
                        display: false
                    },
                    rotation: Math.PI,
                    animation: {
                        animateScale: true
                    }
                }}
            />
        )
    }
}

export default Piechart
