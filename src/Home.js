import React from 'react';
import "./Home.css";
import img2 from './Images/banner.jpg';
import Product from "./Product";
import img3 from './Images/product1.png';
import img4 from './Images/product2.png';



function Home() {
    return (
        <div className="home" >
            <div className="home__conatiner">
                <img className="home__image" src={img2}/>

                <div className="home__row">
                    {/* Product  */}
                    {/* Product  */}
                    <Product id="00001" title="NIKE AIR 1" price={29.99} image={img3} rating={5} />

                    <Product id="00002" title="NIKE AIR 2" price={20.99} image={img4} rating={4} />
                    
                    
                    
                </div>
                <div className="home__row">
                    {/* Product  */}
                    {/* Product  */}
                    {/* Product */}
                    <Product id="00003" title="NIKE AIR 3" price={20.99} image={img3} rating={4} />
                    <Product id="00004" title="NIKE AIR 4" price={20.99} image={img4} rating={3} />
                    <Product id="00005" title="NIKE AIR 5" price={20.99} image={img3} rating={4} />

                    
                </div>
                <div className="home__row">
                    {/* Product  */}

                    <Product id="00006" title="NIKE AIR 6" price={20.99} image={img4} rating={4} />
                    
                    
                    
                </div>

            </div>
                
        </div>
    )
}
 
export default Home
