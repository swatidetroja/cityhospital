import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../../redux/action/wishlist.action';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

function Wishlist(props) {

    const dispatch = useDispatch();

    const medicines = useSelector(state=> state.medicines);
    console.log(medicines);

    const wishList = useSelector(state=>state.wishList)
    console.log(wishList);

    const wishlistData = wishList.wishList.map((v) => {
        const med = medicines.medicines.find((m) => v === m.id)
        
        return med
    })  
    console.log(wishlistData);

    const handleDelete = (id) => {
        dispatch(removeFromWishlist(id))
    }
  
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
                                            <h4>Remove</h4>
                                        </div>
                                    </div>
                                </div>
                               {
                                wishlistData.map((v) => {
                                    return(
                                        <div className="cart-item">
                                        <div className="row">
                                            <div className="col-md-6 my-auto">
                                                <a href>
                                                    <label className="product-name">
                                                        {/* <img src="hp-laptop.jpg" style={{ width: 50, height: 50 }} alt /> */}
                                                        {v.name}
                                                    </label>
                                                </a>
                                            </div>
                                            <div className="col-md-2 my-auto">
                                                <label className="price">{v.price}</label>
                                            </div>
                                            <div className="col-md-2 col-5 my-auto">
                                                <div className="remove">
                                                        <Link onClick={() => handleDelete(v.id)}><DeleteIcon /></Link>
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