import React from 'react';

function Cart(props) {
    return (
        <>
            <div class="cart-main-container">
                <div class="container-fluid mb-3">
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
                                <div class="card-top-part">
                                    <div class="cart-product-container">
                                        <div class="cart-product-img">
                                            <img src="https://dummyimage.com/100x120/000/fff" class="img-fluid" alt=""/>
                                        </div>

                                        <div class="cart-product-details">
                                            <div class="cart-product-wrapper">
                                                <div class="cart-product-name">
                                                    <p>10257bl- Durable 4 Wheel Rollator</p>
                                                </div>
                                                <div class="cart-product-feature">
                                                    <p>Color: OLIVE/MULTI</p>
                                                </div>
                                                <div class="cart-product-feature">
                                                    <p>Size: S</p>
                                                </div>
                                                <div class="cart-product-feature">
                                                    <p class="stock">In Stock</p>
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
                                                <p>₵89.25</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="cart-product-details">
                                        <div class="cart-product-wrapper">
                                            <div class="Quantity heading">
                                                <p>Quantity</p>
                                            </div>
                                            <div class="cart-product-quantity">
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="cart-product-details">
                                        <div class="cart-product-wrapper total-price">
                                            <div class="total heading">
                                                <p>Total</p>
                                            </div>
                                            <div class="cart-product-price">
                                                <p>₵89.25</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="card-cta-container">
                                    <a href="#">Edit</a>
                                    <a href="#">Remove</a>
                                    <a href="#">Move to Wishlist</a>
                                    <a href="#">Save for Later</a>
                                </div>
                            </div>
                            <div class="cart-container">
                                <div class="card-top-part">
                                    <div class="cart-product-container">
                                        <div class="cart-product-img">
                                            <img src="https://dummyimage.com/100x120/000/fff" class="img-fluid" alt=""/>
                                        </div>

                                        <div class="cart-product-details">
                                            <div class="cart-product-wrapper">
                                                <div class="cart-product-name">
                                                    <p>10257bl- Durable 4 Wheel Rollator</p>
                                                </div>
                                                <div class="cart-product-feature">
                                                    <p>Color: OLIVE/MULTI</p>
                                                </div>
                                                <div class="cart-product-feature">
                                                    <p>Size: S</p>
                                                </div>
                                                <div class="cart-product-feature">
                                                    <p class="stock">In Stock</p>
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
                                                <p>₵89.25</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="cart-product-details">
                                        <div class="cart-product-wrapper">
                                            <div class="Quantity heading">
                                                <p>Quantity</p>
                                            </div>
                                            <div class="cart-product-quantity">
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="cart-product-details">
                                        <div class="cart-product-wrapper total-price">
                                            <div class="total heading">
                                                <p>Total</p>
                                            </div>
                                            <div class="cart-product-price">
                                                <p>₵89.25</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="card-cta-container">
                                    <a href="#">Edit</a>
                                    <a href="#">Remove</a>
                                    <a href="#">Move to Wishlist</a>
                                    <a href="#">Save for Later</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 offset-md-1">
                            <div class="checkout-container">
                                <table class="table checkout-table">
                                    <tbody>
                                        <tr>
                                            <td>Shipping cost</td>
                                            <td>TBD</td>
                                        </tr>
                                        <tr>
                                            <td>Discount</td>
                                            <td>-₵9.25</td>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <td>TBD</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Estimated Total</strong></td>
                                            <td><strong>₵19.25</strong></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <p>You're <span>₵9.25</span> away from free shipping!</p>
                                            </td>
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