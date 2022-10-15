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
            <div className="App">
            <input type="text" className="search-box" 
                placeholder='search monsters'
                onChange={(e)=>{

                const filteredMonster = this.state.monsters.filter((monster)=> monster.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
                this.setState(()=>{
        return {monsters:filteredMonster}
        })
                }}
            />
               {
                this.state.monsters.map((monster,index)=>{
                return (
                    <div key={index}>
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