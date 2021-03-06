import React from 'react';
import './Order.css'

const Order = (props) => {
    const { cart } = props;
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cart) {
        quantity = quantity + product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        price = price + product.price * product.quantity;
    }
    const tax = parseFloat((price * 0.1).toFixed(2));
    const grandTotal = price + shipping + tax;

    return (
        <div className='order'>
            <h4>Order Summary</h4>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            {props.children}
        </div>
    );
};

export default Order;