import React, { useEffect, useRef } from 'react'
import { productsData } from '../../constants';
import gsap from 'gsap';

const Products = () => {

  const titleRef = useRef(null);
  const featureRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(()=>{
    const t1= gsap.timeline();

    gsap.set([titleRef.current, imageRef.current, featureRef.current],{
      opacity:0,
    });

    t1.fromTo(
      titleRef.current,
      {y:40, opacity:0},
      {y:0, opacity:1, duration:0.6, ease:"power2.out"}
    )
    .fromTo(
      featureRef.current,
      {y:30, opacity:0},
      {y:0, opacity:1, duration:0.4, stagger:0.12, ease:"power2.out"},
      "-=0.2"
    )

    .fromTo(
      imageRef.current,
      {x:120, opacity:0},
      {x:0, opacity:1, duration:0.8, ease:"power3.out"},
      "-=0.4"
    );
  });
  const [index, setIndex] = React.useState(0);

  const nextProduct = ()=>{
    setIndex((prev)=>(prev+1)%productsData.length);
  };

  const prevProduct = ()=>{
    setIndex((prev)=>
    prev===0?productsData.length-1:prev-1
    );
  };

  const product = productsData[index];

  return (
    <section id='products' className='products-section '>
        <h2 className='product-title'>Our Products</h2>

        <div className='product-slider'>

          <div className='product-info'>
            <h3 ref={titleRef}>{product.title}</h3>
            <p>{product.description}</p>

            <ul>
              {product.features.map((feature,idx)=>(
                <li key={idx} ref={featureRef}>• {feature}</li>
              ))}
            </ul>

            <div className='arrows'>
              <button onClick={prevProduct} >&lt;</button>
              <button onClick={nextProduct} >&gt;</button>
            </div>
          </div>

           <div className='product-image'>
              <img ref={imageRef} src={product.image} alt={product.title}/>
            </div>

        </div>
    </section>
  )
}

export default Products