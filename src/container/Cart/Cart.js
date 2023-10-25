import React from 'react';
import Button from '../../component/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQty, deleteItem, incrementQty } from '../../redux/action/cart.action';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function Cart(props) {
    const dispatch = useDispatch()

    const medicines = useSelector(state => state.medicines);
    console.log(medicines);

    const cart = useSelector(state => state.cart)
    console.log(cart);

    const Quantity = cart.cart.reduce((acc, v) => acc + v.qty, 0)
    console.log(Quantity);

    const hanldeInc = (id) => {
        dispatch(incrementQty(id))
    }
    const hanldeDec = (id) => {
        dispatch(decrementQty(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }
    const cartData = cart.cart.map((v) => {
        const med = medicines.medicines.find((m) => m.id === v.id)
        let cartQty = { ...med, qty: v.qty }
        return cartQty;
    })

    console.log(cartData);

    const Total = cartData.reduce((acc, v) => acc + v.price * v.qty , 0)
    console.log(Total);

    return (
        <>
            <div class="cart-main-container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 pt-5 pb-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="text-center">My Cart</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-7">
                            <div class="cart-container">
                                {
                                    cartData.map((v) => {
                                        return (
                                            <div class="card-top-part">
                                                <div class="cart-product-container">
                                                    {/* <div class="cart-product-img">
                                                    <img src="https://dummyimage.com/100x120/000/fff" class="img-fluid" alt="" />
                                                </div> */}

                                                    <div class="cart-product-details">
                                                        <div class="cart-product-wrapper">
                                                            <div class="cart-product-name">
                                                                <p>Medicines Name : {v.name}</p>
                                                            </div>
                                                            <div class="cart-product-feature">
                                                                <p>Medicines Expiry :{v.expiry}</p>
                                                            </div>
                                                            <div class="cart-product-feature">
                                                                <p> Price :{v.price}</p>
                                                            </div>
                                                            <div class="cart-product-feature">
                                                                <p class="stock">Descripation : {v.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cart-product-details">
                                                    <div class="cart-product-wrapper">
                                                        <div class="item heading">
                                                            <p>Each</p>
                                                        </div>
                                                        <div class="cart-product-item-price">
                                                            <p>{v.price}</p>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="cart-product-details">
                                                    <div class="cart-product-wrapper">
                                                        <div class="Quantity heading">
                                                            <p>Quantity</p>
                                                        </div>
                                                        <div class="cart-product-quantity">
                                                            <Button onClick={() => hanldeInc(v.id)}>+</Button>
                                                            {v.qty}
                                                            <Button onClick={() => hanldeDec(v.id)}
                                                            disabled={v.qty <=1 ? true : false}
                                                            >-</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cart-product-details">
                                                    <div class="cart-product-wrapper total-price">
                                                        <div class="total heading">
                                                            <p>Total</p>
                                                        </div>
                                                        <div class="cart-product-price">
                                                            <p>{v.price * v.qty}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-cta-container">

                                                    <Link onClick={() => handleDelete(v.id)}><DeleteIcon /></Link>


                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>

                        <div class="col-md-4 offset-md-1">
                            <div class="checkout-container">
                                <table class="table checkout-table">
                                    <tbody>


                                        <tr>
                                            <td><strong>Total Quantity</strong></td>
                                            <td><strong>{Quantity}</strong></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Estimated Total</strong></td>
                                            <td><strong>{Total}</strong></td>
                                        </tr>

                                        <tr>
                                            <td colspan="2"><a href="#" class="checkout-btn"><i class="fas fa-lock"></i> Checkout</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cart;