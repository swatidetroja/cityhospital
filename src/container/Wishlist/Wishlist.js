import React from 'react';
import { useSelector } from 'react-redux';

function Wishlist(props) {

    const medicines = useSelector(state=> state.medicines);
    console.log(medicines);

    const wishList = useSelector(state=>state.wishList);
    console.log(wishList);

    const wishlistData = wishList.wishList.map((v) => {
        const med = medicines.find((m) => m.id === v.id)
        console.log(med);

        return med
    })  
    console.log(wishlistData);
  
    return (
        <div>
            <div className="py-3 py-md-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shopping-cart">
                                <div className="cart-header d-none d-sm-none d-mb-block d-lg-block">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4>Products</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4>Price</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4>Quantity</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4>Remove</h4>
                                        </div>
                                    </div>
                                </div>
                               {
                                wishList.map((v) => {
                                    return(
                                        <div className="cart-item">
                                        <div className="row">
                                            <div className="col-md-6 my-auto">
                                                <a href>
                                                    <label className="product-name">
                                                        <img src="hp-laptop.jpg" style={{ width: 50, height: 50 }} alt />
                                                        {v.name}
                                                    </label>
                                                </a>
                                            </div>
                                            <div className="col-md-2 my-auto">
                                                <label className="price">{v.price}</label>
                                            </div>
                                            <div className="col-md-2 col-7 my-auto">
                                                <div className="quantity">
                                                    <div className="input-group">
                                                        <span className="btn btn1"><i className="fa fa-minus" /></span>
                                                        <input type="text" defaultValue={1} className="input-quantity" />
                                                        <span className="btn btn1"><i className="fa fa-plus" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-5 my-auto">
                                                <div className="remove">
                                                    <a href className="btn btn-danger btn-sm">
                                                        <i className="fa fa-trash" /> Remove
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    )
                                })
                               }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Wishlist;