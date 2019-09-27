import React from 'react'

export default ({ input, type, required, placeholder, meta: { touched, error } }) => {
    return (
        <div className="form-group">
            <input {...input} className="form-control form-control-sm mt-2 " type={type} placeholder={placeholder} required={required} />
            {touched && error && <span className="text-danger title">{error}</span>}
        </div>
    )
}


//Css Field