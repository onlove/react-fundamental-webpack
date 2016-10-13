/**
 * Created by Administrator on 2016/10/13 0013.
 */
import React, { Component } from 'react';

class Checkboxes extends Component {
    render(){
        return (
            <div>
                A
                <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="A"/>
                B
                <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="B"/>
                C
                <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="C"/>
            </div>
        )
    }
}

export default Checkboxes;