import React from 'react';
import Tour from './Tour';
import './index.css'

const Tours = ({tours}) => {
  return <section>
<div className='title'>
<h2>Our Tours</h2>
<div className='underline'></div>
</div>  
<div>
    {
        tours.map((tour)=>{
            
            return <Tour key={tour.id} {...tour}/>
        })
    }
</div>
</section>;
};

export default Tours;