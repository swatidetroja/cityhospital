import React from 'react';
import { CardDiv, CardTitle, Cardid, Cardsubtitle } from './Card.style';
import Button from '../Button/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function Card({ id, img = '', title = '', subtitle = '', btnValue = '', btnClick, favClick, favStatus }) {
    return (
        <>
            <CardDiv>
                <IconButton aria-label="wishlist" onClick={favClick}>
                    <Badge color="primary" >
                        {
                            favStatus ? <FavoriteIcon /> : <FavoriteBorderIcon color="action" />
                        }
                        
                    </Badge>
                </IconButton>
                <Cardid>{id}</Cardid>
                <CardTitle>{title}</CardTitle>
                <Cardsubtitle>{subtitle}</Cardsubtitle>
                {
                    btnValue ? <Button onClick={btnClick}>Add To cart</Button> : null
                }

            </CardDiv>
        </>


    );
}

export default Card;