import './formInput.css';
import { useState } from 'react';

//FormInput component holding the input tag.
const FormInput = (props) => {

    const [focused, setFocused] = useState(false);

    const { label, errorMessage, onChange, id, ...inputProps } = props;

    //Controlling the onBlur event
    const handleFocus = (e) => {
        setFocused(true);
    };
    
    return ( 
        <div className="formInput">
            <label>{label}</label>
            <input
                {...inputProps} 
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
     );
}
 
export default FormInput;