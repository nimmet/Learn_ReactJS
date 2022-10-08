import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'

import './App.css'
import {books} from './books.js'


function Booklist() {
  
  return (
    <div className='booklist'>
    {
    books.map((book) => {
    {/* const {title,author,img} = book */}
      return <Book key={book.id} {...book} />
    })
    }
    </div>
  )
}


function Book(props){
  const {title,author,img} = props
  // attribute, eventHandler
  // onClick, onMouseOver
const clickHandler = ()=> {
  const buy = document.querySelector(`.buy${props.id}`)
  buy.textContent = "Do you want to buy this book?"
}
return (
  <div className='book'>
  <img src={img} alt="" />
  <h2>{title}</h2>
  {/* <h4 onMouseOver={()=>alert(`Author: ${author}`)}>{author}</h4> */}
  <h4>{author}</h4>
  <div className={`buy${props.id}`}></div>
  <button type='button' onClick={clickHandler}>Buy</button>
  </div>
)
}


const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Booklist />)


// ReactDOM.render(<Booklist />, document.getElementById('root'))
