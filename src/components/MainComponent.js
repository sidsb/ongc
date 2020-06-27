import React, { Component } from 'react';
import Chart from './chart';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '0' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className="container">
                <form>
                    <label>
                        Pick your Field:
                        <select className="dropdown" value={this.state.value} onChange={this.handleChange}>
                            <option value="0">Field 1</option>
                            <option value="1">Field 2</option>
                        </select>
                    </label>
                </form>
                <Chart field={this.state.value} />
            </div>
        );
    }
}