/**
 * Created by Administrator on 2016/10/12 0012.
 */
import React, { Component } from 'react';

class LifeCycle extends Component {
    //getInitialState(){
    //    console.log("getInitialState")
    //}
    //
    //getDefaultProps(){
    //    console.log("getDefaultProps");
    //    return {
    //        value: '开始渲染'
    //    }
    //}

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");
        this.setState({
            value: nextProps.value
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(prevProps, prevState){
        console.log("componentWillUpdate");
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    render(){
        console.log('render');
        return <span>{this.props.value}</span>
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(prevProps, prevState){
        console.log('componentWillUnmount')
    }
}

LifeCycle.defaultProps = {
    value: '开始渲染'
}

export default LifeCycle;