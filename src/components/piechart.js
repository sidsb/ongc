import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { colors } from '../colorArray';
import { Modal } from 'reactstrap';

export class Piechart extends Component {

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

        return (
            <>
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
                            fontSize: 25,
                            fontColor: this.props.dark ? 'rgba(233, 247, 246,0.8)' : 'rgba(101, 102, 101,0.9)'
                        },
                        legend: {
                            display: false
                        },
                        rotation: Math.PI,
                        animation: {
                            animateScale: true
                        }
                    }}
                    onElementsClick={this.modal_Show}
                />
                <Modal isOpen={this.state.modalClick} className="modal-dialog modal-lg" >
                    <div className="card" >
                        <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close" onClick={this.modal_Show}>
                            Close
                        </button>
                        <div className="pie-modal">
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
                                        fontSize: 25,
                                        fontColor: 'rgba(101, 102, 101,0.9)'
                                    },
                                    legend: {
                                        display: this.state.modalClick
                                    },
                                    rotation: Math.PI,
                                    animation: {
                                        animateScale: true
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

export default Piechart
