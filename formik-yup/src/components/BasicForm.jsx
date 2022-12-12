import React from 'react'
import { useFormik } from 'formik'
import { basicSchemas } from '../schemas'

const BasicForm = () => {
    const { values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit } = useFormik({
            initialValues: {
                email: '',
                age: "",
                password: "",
                confirmPassword: ""
            },
            validationSchema: basicSchemas,
            onSubmit: async (values, actions) => {
                console.log(values);
                console.log(actions)
                await new Promise((resolve) => setTimeout(resolve, 1000))
                actions.resetForm()
            }
        })
    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className={errors.email && touched.email ? 'input-error' : ''}
                />
                {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                <label htmlFor="email">Age</label>
                <input
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="age"
                    type="age"
                    placeholder="Enter your age"
                    className={errors.age && touched.age ? 'input-error' : ''}
                />
                {errors.age && touched.age && <p className='error'>{errors.age}</p>}
                <label htmlFor="age">Password</label>
                <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className={errors.password && touched.password ? 'input-error' : ''}
                />
                {errors.password && touched.password && <p className='error'>{errors.password}</p>}
                <label htmlFor="password">Confirm Password</label>
                <input
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="confirmPassword"
                    type="password"
                    placeholder="Enter your password again"
                    className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
                />
                {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                <button disabled={isSubmitting} className={isSubmitting ? 'isSubmitting' : ''} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default BasicForm
