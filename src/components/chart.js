import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Linechart from './linechart';
import db from '../data.json';
import Piechart from './piechart';
import Areachart from './areachart';

export class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            is_area_open: false,
        };
        this.area_Chart_Toggle = this.area_Chart_Toggle.bind(this);
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

        return newarr;
    }

    area_Chart_Toggle() {
        this.setState({ is_area_open: !this.state.is_area_open });
    }

    render() {

        let x = parseInt(this.props.field);
        let st = parseInt(this.props.start_time);
        let et = parseInt(this.props.end_time);
        let output_type = parseInt(this.props.output_type);
        let start_val = parseInt(this.props.start_val);
        let end_val = parseInt(this.props.end_val);
        console.log('output_type', output_type);



        let oil_arr = this.change_data_type(output_type, db[x].oil, start_val, end_val);
        let water_arr = this.change_data_type(output_type, db[x].water, start_val, end_val);
        let gr_labels = this.graph_label(db[x].labels, st, et);
        let oil_data = this.graph_data(oil_arr, st, et);
        let water_data = this.graph_data(water_arr, st, et);


        return (
            <div key={this.props.field} className="container-fluid" >
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-primary btn-block" onClick={this.area_Chart_Toggle}>Click to see Area Chart</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row ">
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-body " style={{ backgroundColor: this.props.dark ? 'rgb(107, 107, 107)' : 'rgb(247, 245, 245)' }}>
                                        <Linechart labels={gr_labels} data={oil_data} datatype="Oil" field={this.props.field} dark={this.props.dark} ot={output_type} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-body" style={{ backgroundColor: this.props.dark ? 'rgb(107, 107, 107)' : 'rgb(247, 245, 245)' }}>
                                        <Piechart labels={gr_labels} data={oil_data} datatype="Oil" field={this.props.field} dark={this.props.dark} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-body" style={{ backgroundColor: this.props.dark ? 'rgb(107, 107, 107)' : 'rgb(247, 245, 245)' }}>
                                        <Linechart labels={gr_labels} data={water_data} datatype="Water" field={this.props.field} dark={this.props.dark} ot={output_type} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-body" style={{ backgroundColor: this.props.dark ? 'rgb(107, 107, 107)' : 'rgb(247, 245, 245)' }}>
                                        <Piechart labels={gr_labels} data={water_data} datatype="Water" field={this.props.field} dark={this.props.dark} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.is_area_open} className="modal-dialog modal-lg" >
                    <div className="card" >
                        <button type="button" className="btn btn-primary btn-block" data-dismiss="modal" aria-label="Close" onClick={this.area_Chart_Toggle}>
                            &times;
                        </button>
                        <div className="area">
                            <Areachart labels={gr_labels} oildata={oil_data} waterdata={water_data} field={this.props.field} />
                        </div>
                    </div>
                </Modal>
            </div >
        );
    }
}


export default Chart
