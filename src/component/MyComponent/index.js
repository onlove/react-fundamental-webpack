/**
 * Created by Administrator on 2016/10/11 0011.
 */
import React, { Component } from 'react';

class StyleDemo extends Component {
    render(){
        var MyComponentStyles = {
            aa: {
                color: "blue",
                fontSize: "26px"
            }
        }

        return (
            <div style={MyComponentStyles.aa}>可以直接这样写行内样式</div>
        )
    }
}

export default StyleDemo;