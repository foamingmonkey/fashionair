import React from 'react';
import CartContext from 'context/CartContext';
import {CartItem, CartHeader, CartFooter} from './styles';



export function CartContexts() {
    const { checkout } = React.useContext(CartContext);
    console.log(checkout.lineItems);

    return (
      <section>
        <h1> your cart</h1>
        <CartHeader>
          <div> Product </div>
          <div> Unit Price</div>
          <div> Quantitiy</div>
    <div> Amount</div>
        </CartHeader>
        {checkout?.lineItems?.map(item => (
          <CartItem key={item.variant.id}>
            <div>
              <div>{item.title}</div>
              <div> {item.variant.title}</div>
            </div>
            <div>${item.variant.price}</div>
            <div>{item.quantitiy}</div>

            <div>${(item.quantitiy * item.variant.price).toFixed(2)}</div>
          </CartItem>
        ))}
        <CartFooter>
          <div/>
          <div> 
            <strong>
              Total:
            </strong> <span> 
              ${checkout?.totalPrice}</span>
          </div>
        </CartFooter>
      </section>
    );

}