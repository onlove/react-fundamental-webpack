/**
 * Created by Administrator on 2016/10/12 0012.
 */
import React, { Component } from 'react';
import LifeCycleDemo from './index';

class Destroy extends Component {

    state = {
        value: 1,
        destoryed: false
    }

    increase = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    destoryed = () => {
        this.setState({
            destoryed: true
        })
    }

    render(){
        if(this.state.destoryed){
            return null;
        }

        return (
            <div>
                <p>
                    <button onClick={this.increase}>每次加1</button>
                    <button onClick={this.destoryed}>干掉两个按钮</button>
                </p>
                <LifeCycleDemo value={this.state.value}/>
            </div>
        )
    }
}

export default Destroy;