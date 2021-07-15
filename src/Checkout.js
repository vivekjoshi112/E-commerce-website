import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <h4>Hello,  { user?.email}  </h4>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <hr className="checkout__hr"></hr>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        rating={item.rating}  />  
                    ))}
                    {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/ }  
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal />
                

                
            </div>
        </div>
    )
}

export default Checkout
