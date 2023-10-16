import React from 'react';
import { Basebutton, outlinebutton, primarybutton, secondarybutton } from './Button.style';

function Button({children, Btntype='primary', btndisabled=false, ...rest}) {

    const checkButtontype = () => {

        switch(Btntype){
            case 'primary':
                return primarybutton
            case 'secondary':
                return secondarybutton
            case 'outline':
                return outlinebutton
        }
    }

    const CustomButton = checkButtontype();

    return (
       <>
        <CustomButton disabled={btndisabled} {...rest}>
           {children}
        </CustomButton>
       </>
    );
}

export default Button;