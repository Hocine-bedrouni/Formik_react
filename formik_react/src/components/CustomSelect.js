import { useField } from "formik";

const CustomSelect = ({label, ...props}) => {

    const[Field, meta, /*helpers*/] = useField(props);
    console.log('field', Field);
    console.log('meta', meta);


    return (
        <>
            <label>{label}</label>
            <select {...Field}{...props}
            className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </>
    );
};

export default CustomSelect;