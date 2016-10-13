/**
 * Created by Administrator on 2016/10/10 0010.
 */

//es5
//var React = require('react');
//var ReactDOM = require('react-dom');
//
//var MyComponent = React.createClass({
//    render(){
//        return <div>1111</div>
//    }
//})
//
//ReactDOM.render(
//    <MyComponent />,
//    document.getElementById("app")
//)




//es6
//import React, {Component} from 'react';
//import ReactDOM, {render} from 'react-dom';
//console.log(React);
//console.log(ReactDOM)
//class MyCompoonent extends Component {
//    render(){
//        return <h1>Hello React</h1>
//    }
//}
//
//render(
//    <MyCompoonent />,
//    document.getElementById("app")
//)

//React     11
//ReactDOM  5


//import React, { Component } from 'react';
//import ReactDOM, { render } from 'react-dom';
//import MyComponent from './component/MyComponent'
//
//render(
//    <MyComponent />,
//    document.getElementById("app")
//)



//import React, { Component } from 'react';
//import ReactDOM, { render } from 'react-dom';
//import SpreadComponent from './component/SpreadComponent'
//
//const obj = {
//    name :'zhang san',
//    type: 'boy'
//}
//
//render(
//    <SpreadComponent {...obj}/>,
//    document.getElementById("app")
//)


//组件
//状态机
//props(输入) 父组件, 传入进来的(输入) --> 组件内部逻辑(state) 管理组件内部的状态 --> html


//import React, {Component} from 'react';
//import ReactDOM, {render} from  'react-dom';
//import StateComponent from './component/StateComponent';
//
//render(
//    <StateComponent status = "fail"/>,
//    document.getElementById("app")
//)



/*
* props
* 顶层逐级往下渲染，父组件到子组件
* 例如:香槟塔
*
* 初始props
* es5 getDefaultProps:function(){}
* es6 props
*     defaultProps
* */



//生命周期
//import React, { Component } from 'react';
//import ReactDOM, { render } from 'react-dom';
//import LifeCycle from './component/LifeCycleComponent';
//
//
//render(
//    <LifeCycle />,
//    document.getElementById('app')
//)

//import React, { Componet } from 'react';
//import ReactDOM, { render } from 'react-dom';
//import Destroy from './component/LifeCycleComponent/destory.js';
//
//render(
//    <Destroy />,
//    document.getElementById('app')
//)


//操作DOM
//import React, { Component } from 'react';
//import ReactDOM, { render } from 'react-dom';
//import HandleDemo from './component/HandleDOMComponent';
//
//render(
//    <HandleDemo />,
//    document.getElementById('app')
//)

//import React, { Component } from 'react';
//import ReactDOM, { render } from 'react-dom';
//import Refs from './component/RefsComponent';
//
//render(
//    <Refs />,
//    document.getElementById("app")
//)




//事件
//import React, { Component } from 'react';
//import ReactDOM, {render} from 'react-dom';
//import HandleEvent from './component/HandleEventComponent';
//
//render(
//    <HandleEvent />,
//    document.getElementById('app')
//)



//组件嵌套
//import React, {Component} from 'react';
//import ReactDOM, { render } from 'react-dom';
//import ListDemo from './component/ListComponent'
//
//render(
//    <ListDemo/>,
//    document.getElementById('app')
//)


//表单
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import FromApp from './component/FormComponent/FormApp';

render(
    <FromApp/>,
    document.getElementById('app')
)




