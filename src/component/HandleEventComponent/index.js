/**
 * Created by Administrator on 2016/10/12 0012.
 */
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class HandleEvent extends Component {
    state = {
        liked: false
    }

    handleClick = (event) => {
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){
        let text = this.state.liked ? '喜欢' : '不喜欢'
        return (
            <p onClick={this.handleClick}>我{text}你</p>
        )
    }
}


export default HandleEvent;