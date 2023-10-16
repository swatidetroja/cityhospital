import styled from "styled-components";

const Basebutton = styled.button`
    border: 0;
    padding: 10px 35px;
    transition: 0.4s;
    border-radius: 50px;
    cursor:pointer;
`
export const primarybutton = styled(Basebutton)`
    background: ${props => props.disabled ? 'gray' : '#FF6337' } ;
    color: #fff;

    &:hover{
        background:${props => props.disabled ? 'gray' : 'pink' };
        color: black;
    }
`
export const secondarybutton = styled(Basebutton)`
    background: ${props => props.disabled ? 'gray' : '#000000'};
    color: #fff;

    &:hover{
        background:${props => props.disabled ? 'gray' : 'pink'};
        color: black;
    }
`
export const outlinebutton = styled(Basebutton)`
    background:  ${props => props.disabled ? 'gray' : '#111111'};
    color: #ffffff;
    border: 1px solid black;

    &:hover{
        background:${props => props.disabled ? 'gray' : 'pink'};
        color: black;
    }
`