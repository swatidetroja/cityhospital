import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { incrementCart } from '../../redux/action/cart.action';
import { useSelector } from 'react-redux';

function Header(props) {

    const cart = useSelector(state => state.cart)
    console.log(cart);

    const cartCount = cart.cart.reduce((acc, v) => acc + v.qty, 0)
    console.log(cartCount);

    const wishList = useSelector(state => state.wishList)
    console.log(wishList);

    const wishListCount = wishList.wishList.reduce((acc,v) => acc + v, 0)
    console.log(wishListCount);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <NavLink
                            className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                            }
                            to={"/cart"}
                        >
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={cartCount} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </NavLink>
                        <NavLink
                            className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                            }
                            to={"/wishlist"}

                        >
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={wishListCount} color="secondary">
                                    <FavoriteBorderIcon />
                                </StyledBadge>
                            </IconButton>
                        </NavLink>

                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink
                                className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                                }
                                to={"/"}
                            >
                                Home
                            </NavLink>
                            </li>
                            <li><NavLink
                                className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                                } to={"/departments"}
                            >
                                Departments
                            </NavLink>
                            </li>
                            <li><NavLink
                                className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                                }
                                to={"/doctors"}
                            >
                                Doctors
                            </NavLink>
                            </li>
                            <li><NavLink
                                className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                                }
                                to={"/medicines"}
                            >
                                Medicines
                            </NavLink>
                            </li>
                            <li><NavLink
                                className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                                }
                                to={"/form"}
                            >
                                Form
                            </NavLink>
                            </li>
                            <li><NavLink
                                className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                                }
                                to={"/counter"}
                            >
                                Counter
                            </NavLink>
                            </li>
                            <li><NavLink
                                className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                                }
                                to={"/about"}
                            >
                                About
                            </NavLink>
                            </li>
                            <li><NavLink
                                className={({ isActive, isPending }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"
                                }
                                to={"/contact"}
                            >
                                Contact
                            </NavLink>
                            </li>

                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <Link to={"/appointment"} className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</Link>
                    <Link to={"/auth"} className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </Link>
                </div>
            </header>
        </div>

    );
}

export default Header;