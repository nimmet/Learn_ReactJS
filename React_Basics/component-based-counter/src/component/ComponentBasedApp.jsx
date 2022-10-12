import React, { Component } from 'react'

class ComponentBasedApp extends Component {
    constructor(){
        super()
        this.state = {
            counter:0,
            showMessage:false,
            message: 'You have reached the upper limit of number'
        }
    }

    handleIncrease = ()=>{
            this.setState({
                counter : this.state.counter+1
                
            })
            if(this.state.counter===5){
                    this.setState({
                        showMessage:true,
                        counter:0
                    })
            }else{
                this.setState({
                    showMessage:false
                    
                })
            }
    }

    handleReset = ()=> {
        this.setState({
            counter: 0
        })
    }

    handleDecrease = ()=> {
        this.setState({
            counter: this.state.counter-1
        })
        if(this.state.counter===-5){
            this.setState({
                showMessage:true,
                counter:0,
                message: 'You have reached the lower limit of number'
            })
    }else{
        this.setState({
            showMessage:false,
            message: 'You have reached the upper limit of number'
            
        })
    }
    }

    render(){
        
        return (
            <div className='container'>
            <h2>Counter</h2>
            <h1>{this.state.counter}</h1>
            <div className='btns'>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleDecrease}>Decrease</button>
            </div>
            <div className='message'>
            { 
                this.state.showMessage && this.state.message
            }
            </div>
           
            </div>
           
        )
        
    }
}

export default ComponentBasedApp