import React from 'react';


class ClassComponent extends React.Component{
    constructor(props){
    super(props)
    this.state={
        val : "hello val state 1",
        obj : {
            valobj:10
        }
    }
    }
render(){
    return (<>
    <h1>Class Component {this.props.name}</h1>
    <p>{this.state.val} & {this.state.obj.valobj}</p>
    </>) 
    
}
}
export default ClassComponent;