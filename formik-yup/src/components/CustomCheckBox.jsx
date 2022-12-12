import { useField } from 'formik'
import React from 'react'

const CustomCheckbox = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <div className='checkbox'>
                <label>{label}</label>
                <input {...field} {...props}
                    className={meta.touched && meta.error ? "input-error" : ""} />
                <span>I accept the terms of service</span>
            </div>
            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </>

    )
}

export default CustomCheckbox


