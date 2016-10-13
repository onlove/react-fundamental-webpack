/**
 * Created by Administrator on 2016/10/11 0011.
 */
import React, { Component } from 'react';

class SpreadDemo extends Component {
    render(){
        return (
            <h1>{this.props.name} is a {this.props.type}</h1>
        )
    }
}

export default SpreadDemo;