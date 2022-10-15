import React, { Component, useRef } from 'react'

class Monster extends Component {

    constructor(){
        super()

        this.state = {
            monsters:[
            // {
            //     name: 'Linda'
            // },

            // {
            //     name: 'Frank'
            // },

            // {
            //     name: 'Atilla'
            // }
        ]
        }
    }

   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>
     this.setState(
        ()=>{
        return {monsters:users}
        },
        ()=>{

        }))

   }

    render(){
       
        return (
            <div className="container">
               {
                this.state.monsters.map((monster,index)=>{
                return (
                    <div className='item' style={{paddingLeft:'2rem',paddingRight:'2rem'}} key={index}>
                    <h1>{index}</h1>
                <h1>{monster.name}</h1>
               
                    </div>
                 
                )
                
                }
                
                )
               }
              
            </div>
        )
    }
}

export default Monster