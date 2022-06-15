import React from 'react'
import Slider from './Slider';
import Viewrange from './range/Viewrange';
import ProductSlider from './ProductSlider';
import Newproductslider from './Newproductslider';
import Sellingproduct from './Sellingproduct';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
export default function Home() {
    return (
        <div>
        <Slider/>
        <ProductSlider/>
        <Viewrange/>
        <Newproductslider/>
        <About/>
        <Sellingproduct/>
        <Contact/>
        <Footer/>
        </div>
    )
}
