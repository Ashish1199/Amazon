import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" alt="Background" />


                <div className="home_row">
                    <Product 
                    id="1"
                    title="The Body Keeps The Score"
                    price={29.3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41D3enj6JVS._AC_SX184_.jpg"
                    rating={3}
                    />
                    <Product 
                    id="2"
                    title="Official SAT Study Guide 2020 Edition Study Guide Edition"
                    price={13.4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._AC_SX184_.jpg"
                    rating={5}
                    />
                </div>


                <div className="home_row">
                    <Product
                    id="3"
                    title="Lume Cube Panel Mini with DSLR Camera Mount Bundle | Bicolor Continuous LED Video Light | Made for Content Creators | Photo and Video Lighting | Fits Sony, Nikon, Canon, Fuji, Panasonic"
                    price={79.95}
                    image="https://m.media-amazon.com/images/I/610NKjj9I-S._AC_UL480_FMwebp_QL65_.jpg"
                    rating={2}/>
                </div>

                <div className="home_row">
                    {/* {Product}  */}
                </div>
            </div>
        </div>
    )
}

export default Home
