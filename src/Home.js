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
                    <Product
                    id="3"
                    title="Lenovo Yoga Slim 7 Carbon 11th Gen Intel Core i7 13.3' QHD IPS Ultra-Light & Thin Laptop (16GB/1TB SSD/Windows 10/MS Office/Intel Iris Xe GFX/Carbon Fiber Material/Moon White/0.96 Kg), 82EV003WIN"
                    price={500}
                    image="https://m.media-amazon.com/images/I/81exv0e1PQL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4}
                    />
                </div>


                <div className="home_row">
                    <Product
                    id="3"
                    title="Lume Cube Panel Mini with DSLR Camera Mount Bundle | Bicolor Continuous LED Video Light | Made for Content Creators | Photo and Video Lighting | Fits Sony, Nikon, Canon, Fuji, Panasonic"
                    price={79.95}
                    image="https://m.media-amazon.com/images/I/610NKjj9I-S._AC_UL480_FMwebp_QL65_.jpg"
                    rating={2}/>        
                    <Product
                    id="4"
                    title="Philips QP2525/10 Cordless OneBlade Hybrid Trimmer and Shaver with 3 Trimming Combs (Lime Green)"
                    price={100}
                    image="https://m.media-amazon.com/images/I/718398O4TVL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                    />
                    <Product
                    id="5"
                    title="Dyson V10 Absolute Pro Cord-Free Vacuum (Copper)"
                    price={1000}
                    image="https://m.media-amazon.com/images/I/61Xp9nLb5QL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4}
                    />
                </div>

                <div className="home_row">
                    <Product
                    id="6"
                    title="TCL 108 cm (43 inches) 4K Ultra HD Certified Android Smart LED TV 43P615 (Black) (2020 Model) | With Dolby Audio"
                    price={250}
                    image="https://m.media-amazon.com/images/I/613VLxnkEWS._AC_UL480_FMwebp_QL65_.jpg"
                    rating={2}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
