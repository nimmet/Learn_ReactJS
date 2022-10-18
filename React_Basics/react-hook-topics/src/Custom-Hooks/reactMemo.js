import React,{useState,useEffect,useCallback,useMemo} from 'react'
import { useFetch } from './useFetch'
import Product from './product'


const url = 'https://course-api.com/javascript-store-products'

const calculateMostExpensive = (data) => {
    return data.reduce((total,item)=>{
const price = item.fields.price 
if(price > total){
    total = price 
}
return total

    },0 )/100
}

const ReactMemo = ()=> {
 
    const {loading,products} = useFetch(url)
    const [count,setCount] = useState(0)
    const [cart,setCart] = useState(0)

    const addToCart = useCallback(()=>{
        setCart(cart+1)
    },[cart])

    const mostExpensive = useMemo(()=> calculateMostExpensive(products),[products])

    return (
        <div>
            <h1 style={{color:'white'}}>Counts: {count}</h1>
            <button style={{background:'olive',color:'white'}}
            className='btn'
            onClick={()=>setCount(count+1)}
            >Click me</button>
            <h1 style={{marginTop:'3rem'}}>
                Cart: {cart}
            </h1>
            <h1>Most Expensive : ${mostExpensive}</h1>
          <BigList products={products} addToCart={addToCart}/>
          

        </div>
    )
    }

const BigList = React.memo(({products,addToCart}) => {
useEffect(()=>{
    console.log('big list called');
})
return (
    <section className='container'>
    {
        products.map((product)=>{
            return <SingleProduct key={product.id} {...product} 
                addToCart={addToCart}
            />
        })
    }

    </section>
)
})

const SingleProduct = ({fields,addToCart})=> {
    useEffect(()=>{
        console.count('single item called')
    })
    let {name,price} = fields
    price = price / 100
    const image = fields.image[0].url

    return (
        <article className='item'>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>${price}</p>
            <button className="btn"
             onClick={addToCart}>add</button>
        </article>
    )
}

export default ReactMemo