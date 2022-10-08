import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'

import './App.css'

const books = [
  {
    id:1,
    title: "No Escape: The True Story of China's Genocide of the Uyghurs",
author: "Nury Turkel",
img: "https://m.media-amazon.com/images/I/71ojWEVRVaL._AC_UY436_FMwebp_QL65_.jpg"},

{
  id:2,
  title: "Daddy? Daddy, when are you coming home?",
author: "Leila Uyghur",
img: "https://m.media-amazon.com/images/I/717u3nwdE5L._AC_UY436_FMwebp_QL65_.jpg"},

{
  id:3,
  title: "The Backstreets: A Novel from Xinjiang",
author: "Perhat Tursun and Darren Byler",
img: "https://m.media-amazon.com/images/I/51F+wRzlKkL._AC_UY436_QL65_.jpg"}
]

function Booklist() {
  
  return (
    <div className='booklist'>
    {
    books.map((book) => {
    {/* const {title,author,img} = book */}
      return <Book key={book.id} {...book}/>
    })
    }
    </div>
  )
}


function Book(props){
  const {title,author,img} = props
return (
  <div className='book'>
  <img src={img} alt="" />
  <h2>{title}</h2>
  <h4>{author}</h4>

  </div>
)
}


const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Booklist />)


// ReactDOM.render(<Booklist />, document.getElementById('root'))
