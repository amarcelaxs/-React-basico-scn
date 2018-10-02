import React, { Component } from 'react'
import StateInput from './StateInput'



class HelloWorld extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            name: 'Ana',
            altura: '1,54',
            txt:this.props.txt
        }
    }
    render(){
        const result= 4
        const style= {
            color:'#ff0000',
            fontSize: 50,
            backgroundColor: '#000'
        }
        return(

            <div className="my-class-from-react">
            <StateInput />
                <h1 style={style}>{this.props.txt}</h1>
                <h2>{ result === 2 * 2 ? <div><ul><li>TRUE</li></ul></div> :  <div><ul><li>FALSE</li></ul></div>  } </h2>
                <span>{this.state.name}</span>
                <span>{this.state.altura}</span>
            </div>
        )
    }
}

export default HelloWorld