import { useField } from 'formik';
import React from 'react';

const CustomInput = ({label, ...props}) => {

    const[Field, meta, /*helpers*/] = useField(props);
    console.log('field', Field);
    console.log('meta', meta);


    return (
        <>
            <label>{label}</label>
            <input {...Field}{...props}
            className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </>
    );
};

export default CustomInput;