import React from 'react';

const Button = ({handleClick, buttonClass}) => {


    return(
        <div>
            <button className={buttonClass} onClick={handleClick}>Add</button>
        </div>
    )

}

export default Button;