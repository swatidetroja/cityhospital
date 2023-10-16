import styled from "styled-components";

export const BaseInputbox = styled.input`
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    height: 44px;
    padding: 10px !important;
    

    &:focus{
        border-color: #FF6337;
        box-shadow:none;
    }
`
 export const Errortext = styled.span`
    color : red;
    display : ${props => props.disabled ? 'inline-block' : 'none' };
 `