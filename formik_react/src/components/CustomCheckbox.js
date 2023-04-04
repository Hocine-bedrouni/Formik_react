import { useField } from "formik";


const CustomCheckbox = ({label, ...props}) => {

    const[Field, meta, /*helpers*/] = useField(props);
    console.log('field', Field);
    console.log('meta', meta);


    return (
        <>
        <div className="checkbox">
            <input {...Field}{...props}
            className={meta.touched && meta.error ? "input-error" : ""}
            />
            <span> J'accepte les termes du contrat</span>
        </div>

            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </>
    );
};

export default CustomCheckbox;