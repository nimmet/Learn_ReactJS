import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

const books = [
  {"title": "No Escape: The True Story of China's Genocide of the Uyghurs",
"author": "Nury Turkel",
"img": "https://m.media-amazon.com/images/I/71ojWEVRVaL._AC_UY436_FMwebp_QL65_.jpg"},

{"title": "Daddy? Daddy, when are you coming home?",
"author": "Leila Uyghur",
"img": "https://m.media-amazon.com/images/I/717u3nwdE5L._AC_UY436_FMwebp_QL65_.jpg"},

{"title": "The Backstreets: A Novel from Xinjiang",
"author": "Perhat Tursun and Darren Byler",
"img": "https://m.media-amazon.com/images/I/51F+wRzlKkL._AC_UY436_QL65_.jpg"}
]

function Booklist() {
  
  return (
    <div className='booklist'>
    {
    books.map((book) => {
    const {title,author,img} = book
      return <Book book = {book}/>
    })
    }
    </div>
  )
}


function Book(props){
  const {title,author,img} = props.book
return (
  <div className='book'>
  <img src={img} alt="" />
  <h2>{title}</h2>
  <h4>{author}</h4>

  </div>
)
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
