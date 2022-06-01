import * as Yup from 'yup';


const REQUIRED = "This field is required!"
const userProfileSchema = Yup.object({
    firstName: Yup.string().required(REQUIRED).trim().matches(/^[a-zA-Z]+$/, "Enter String only"),
    lastName: Yup.string().required(REQUIRED).trim(),
    email: Yup.string().email("Please Enter valid email").required(REQUIRED).trim(),
    dob: Yup.string().required(REQUIRED).trim(),
    address: Yup.string().required(REQUIRED).trim(),
    password: Yup.string().required(REQUIRED).trim(),
    confirmPassword: Yup.string().required(REQUIRED).trim().oneOf([Yup.ref('password')], 'Password must match'),
    phoneNumber: Yup.number().typeError('Must be number').positive().required(REQUIRED),
})

export default userProfileSchema;
