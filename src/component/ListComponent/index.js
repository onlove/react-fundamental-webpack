/**
 * Created by Administrator on 2016/10/13 0013.
 */
import React, { Component } from 'react';

class ListDemo extends Component {
    render(){
        console.log(React.Children)
        return (
            <ul>
                {
                    React.Children.map(this.props.children, function(c, index){
                        return <li key={index}>{c}</li>
                    })
                }
            </ul>
        )
    }
}

class UseChildrenComponent extends Component {
    render(){
        return (
            <ListDemo>
                <a href="#">Facebook</a>
                <a href="#">Google</a>
                <a href="#">SpaceX</a>
            </ListDemo>
        )
    }
}

export default UseChildrenComponent
