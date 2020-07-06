import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Modal } from 'reactstrap';

export default class Linechart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalClick: false
        }
        this.modal_Show = this.modal_Show.bind(this);
    }
    modal_Show() {
        this.setState({ modalClick: !this.state.modalClick })
    }


    render() {
        let yaxestype = parseInt(this.props.ot) === 3 ? 'logarithmic' : 'linear';


        return (
            <>
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
                            fontSize: 25,
                            fontColor: this.props.dark ? 'rgba(233, 247, 246,0.8)' : 'rgba(101, 102, 101,0.9)'
                        },
                        scales: {
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: "Time",
                                    fontColor: this.props.dark ? 'rgba(233, 247, 246,0.8)' : 'rgba(101, 102, 101,0.9)'
                                },
                                ticks: {
                                    fontColor: this.props.dark ? 'rgba(233, 247, 246,0.8)' : 'rgba(101, 102, 101,0.9)'
                                }
                            }],
                            yAxes: [{
                                type: yaxestype,
                                scaleLabel: {
                                    display: true,
                                    labelString: this.props.datatype,
                                    fontColor: this.props.dark ? 'rgba(233, 247, 246,0.8)' : 'rgba(101, 102, 101,0.9)'
                                },
                                ticks: {
                                    fontColor: this.props.dark ? 'rgba(233, 247, 246,0.8)' : 'rgba(101, 102, 101,0.9)'
                                }
                            }]

                        },
                        legend: {
                            labels: {
                                fontColor: this.props.dark ? 'rgba(233, 247, 246,0.8)' : 'rgba(101, 102, 101,0.9)'
                            }
                        }
                    }}
                    onElementsClick={this.modal_Show}
                />
                <Modal isOpen={this.state.modalClick} className="modal-dialog modal-lg" >
                    <div className="card" >
                        <button type="button" className="btn btn-primary btn-block" data-dismiss="modal" aria-label="Close" onClick={this.modal_Show}>
                            &times;
                        </button>
                        <div className="pie-modal">
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
                                        fontSize: 25,
                                        fontColor: 'rgba(101, 102, 101,0.9)'
                                    },
                                    scales: {
                                        xAxes: [{
                                            scaleLabel: {
                                                display: true,
                                                labelString: "Time",
                                                fontColor: 'rgba(101, 102, 101,0.9)'
                                            },
                                            ticks: {
                                                fontColor: 'rgba(101, 102, 101,0.9)'
                                            }
                                        }],
                                        yAxes: [{
                                            type: yaxestype,
                                            scaleLabel: {
                                                display: true,
                                                labelString: this.props.datatype,
                                                fontColor: 'rgba(101, 102, 101,0.9)'
                                            },
                                            ticks: {
                                                fontColor: 'rgba(101, 102, 101,0.9)'
                                            }
                                        }]

                                    },
                                    legend: {
                                        labels: {
                                            fontColor: 'rgba(101, 102, 101,0.9)'
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}

