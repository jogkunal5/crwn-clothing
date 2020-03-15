import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (

    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}></CartItem>
                    ))
                ) : (<span className="empty-message">Your Cart is Empty</span>)

            }
        </div>

        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden()); // dispatching toggleCartHidden() when user clicks on checkout button
        }
        }>
            GO TO CHECKOUT
        </CustomButton>
    </div>

);

//passing redux state automatically to selectCartItems selector by using createStructuredSelector
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


// withRouter is a higher order component that will pass closest route's match, current location, 
// and history props to the wrapped component whenever it renders. simply it connects component to the router.
// Here, withRouter just taking the component that got returned from our connect call as its component argument.
export default withRouter(connect(mapStateToProps)(CartDropdown));