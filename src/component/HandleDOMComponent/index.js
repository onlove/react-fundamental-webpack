/**
 * Created by Administrator on 2016/10/12 0012.
 */
import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

class HandleDOMComponent extends Component {
    componentDidMount(){
        let ele = findDOMNode(this.refs.content)    ;
        let ele2 = this.refs.content;

        console.log(ele);
        console.log(ele.innerHTML);
        console.log(ele2.innerHTML);

        console.dir(this.refs.content);

        console.log(this.refs.content.offsetTop)
    }

    render(){
        return (
            <div>
                <h3>来吧，一起操作DOM</h3>
                <div ref='content'>这是我DOM元素里面的内容</div>
            </div>
        )
    }
}

export default HandleDOMComponent