import React from 'react'
import './App.css'
import Button from './components/Button'
import ClearButton from './components/ClearButton'
import Input from './components/Input'
import * as math from 'mathjs'

class App extends React.Component{
    constructor(){
        super()
       this.state={
           input: ''
       }
    }
    addToInput = val => {
       this.setState({
           input: this.state.input + val
       })
    }
    handleEquals = () =>{
        this.setState({
            input: math.eval(this.state.input)
        })
    }
    render(){
        return(
            <div className="App">
            <div className="calc-wrapper">
         < Input input={this.state.input}></Input>
        <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
        </div> 
        <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
        </div> 
        <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEquals}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
        </div>
        < ClearButton handleClear={() => this.setState({
            input: ''
        })}/>
        </div>
        </div>
            )
    }
}
export default App