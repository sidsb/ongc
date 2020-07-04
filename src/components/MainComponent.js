import React, { Component } from 'react';
import Chart from './chart';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0',
            start_time: 0,
            end_time: 23,
            start_val: 0,
            end_val: 1000,
            output_type: "1",
            sidebar_width: 0,

        };

        this.handleChange = this.handleChange.bind(this);
        this.start_timechange = this.start_timechange.bind(this);
        this.end_timechange = this.end_timechange.bind(this);
        this.start_val_change = this.start_val_change.bind(this);
        this.end_val_change = this.end_val_change.bind(this);
        this.output_type = this.output_type.bind(this);
        this.open_nav = this.open_nav.bind(this);
        this.close_nav = this.close_nav.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    start_timechange(event) {

        this.setState({ start_time: event.target.value });
    }

    end_timechange(event) {

        this.setState({ end_time: event.target.value });
    }

    start_val_change(event) {
        this.setState({ start_val: event.target.value });
    }
    end_val_change(event) {
        this.setState({ end_val: event.target.value });
    }

    output_type(event) {
        this.setState({ output_type: event.target.value });
    }
    open_nav() {

        this.setState({
            sidebar_width: 300,
        });

    }
    close_nav() {

        this.setState({
            sidebar_width: 0,
        });


    }
    render() {
        return (
            <>
                <div id="mySidebar" className="sidebar" style={{ width: this.state.sidebar_width }} >
                    <button className="closebtn" onClick={this.close_nav}>×</button>
                    <div className="btn-group dropright user_ip_item">
                        <button type="button" className="btn btn-secondary">Select Field:</button>
                        <select className="btn btn-secondary dropdown-toggle dropdown-toggle-split" value={this.state.value} onChange={this.handleChange}>
                            <option value="0">Field 1</option>
                            <option value="1">Field 2</option>
                        </select>
                    </div>
                    <div className="btn-group dropright user_ip_item">
                        <button type="button" className="btn btn-secondary">Time Range</button>
                        <input className="time_input" type="number" value={this.state.start_time} onChange={this.start_timechange}></input>
                        <input className="time_input" type="number" value={this.state.end_time} onChange={this.end_timechange}></input>
                    </div>
                    <div className="btn-group dropright user_ip_item">
                        <button type="button" className="btn btn-secondary">Output Range</button>
                        <input className="time_input" type="number" value={this.state.start_val} onChange={this.start_val_change}></input>
                        <input className="time_input" type="number" value={this.state.end_val} onChange={this.end_val_change}></input>
                    </div>
                    <div className="btn-group user_ip_item">
                        <button type="button" className="btn btn-primary">Derived Output</button>
                        <button type="button" className="btn btn-danger" value="1" onClick={this.output_type}>Normal</button>
                        <button type="button" className="btn btn-secondary" value="2" onClick={this.output_type}>*10</button>
                        <button type="button" className="btn btn-success" value="3" onClick={this.output_type}>log</button>
                    </div>
                </div>
                <div id="main">
                    <button type="button" className="openbtn" onClick={this.open_nav}>☰ Derived Outputs</button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Chart field={this.state.value} start_time={this.state.start_time} end_time={this.state.end_time}
                                output_type={this.state.output_type} start_val={this.state.start_val} end_val={this.state.end_val} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}