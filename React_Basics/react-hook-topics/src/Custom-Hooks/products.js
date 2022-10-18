import React,{useState,useEffect} from 'react'


const Products = ({products})=>  {
    return (
    products.map((product)=>{
        const {id, fields} = product
        const urlData = fields.image
        const {url} = urlData[0]
        console.log(url)
        return (
           
            <div className='item' key={id}>
            <img src={url} alt="" />
        <h3>{fields.company.toUpperCase()}</h3>
       <h3>{fields.name}</h3>
       <h3>{fields.color}</h3>
        <h3>{fields.price}</h3>
            </div>
          
        )
    })
    )
}

export default Products