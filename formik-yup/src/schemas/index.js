import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchemas = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required('Required'),
    age: yup.number().positive("Please enter a valid age").integer().required('Required').min(18, 'The age must be at least 18'),
    password: yup.string().min(5).required('Required').matches(passwordRules, { message: "Please create a strong password" }),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null,], "Passwords must match")
})

export const advancedSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
    jobType: yup
        .string()
        .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
        .required("Required"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "Please accept the terms of service"),
});