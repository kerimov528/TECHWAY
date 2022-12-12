import React from 'react'
import { Form, Formik } from 'formik'
import CustomInput from './CustomInput'
import { advancedSchema } from '../schemas'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckBox'

const AdvancedForm = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={{ username: '', jobType: '', acceptedTos: false }}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => {
                return <Form>
                    <CustomInput
                        label='Username'
                        name='username'
                        type='text'
                        placeholder='Enter your username'
                    />
                    <CustomSelect
                        label='Job Type'
                        name='jobType'
                        placeholder='Please select a Job'
                    >
                        <option value=''>Please select a Job type</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='manager'>Manager</option>
                        <option value='other'>other</option>

                    </CustomSelect>
                    <CustomCheckbox type="checkbox" name="acceptedTos" />
                    <button type='submit' disabled={isSubmitting}>Submit</button>
                </Form>
            }}
        </Formik>
    )
}

export default AdvancedForm


