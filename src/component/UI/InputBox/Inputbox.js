import React from 'react';
import { BaseInputbox, Errortext } from './Input.style';

function Inputbox({errorText,...rest}) {


    return (
       <>
        <BaseInputbox {...rest}/>
            <Errortext>
                {errorText}
            </Errortext>
       </>
    );
}

export default Inputbox;