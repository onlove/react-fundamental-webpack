/**
 * Created by Administrator on 2016/10/11 0011.
 */
import React, { Component, PropTypes } from 'react';

const defaultProps = {
    status: 'Ok'
}

class StateDemo extends Component {
    /*
    *  constructor(){
    *       super();
    *       this.state = {
    *           secondsElapsed: 0
    *       }
    *  }
    * */

    /*
    * getInitState: function(){}
    * */


    /*
       改变 state
       this.setState 改变已有的
       this.replaceState 替换
    */
    state = {
        secondsElapsed: 0
    }

    tick = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        })
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnMount(){
        clearInterval(this.interval)
    }

    render(){
        console.log(this);
        return (
            <div>目前已经计时：{this.state.secondsElapsed}秒, 初始的:{this.props.status}</div>
        )
    }
}

StateDemo.defaultProps = defaultProps;
StateDemo.propTypes = {
    status: PropTypes.string.isRequired
};
export default StateDemo;