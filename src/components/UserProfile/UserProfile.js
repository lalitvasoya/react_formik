import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form } from "formik";
import userProfileSchema from "../../schemas/userProfile";
import { useSelector, useDispatch } from "react-redux";
import { DECREMENT_COUNT, updateCountValue } from "../../action/countAction";


const UserProfile = () => {

  const dispatch = useDispatch();

  const {countValue} = useSelector( state => {
    const countValue = state?.count;
    return { countValue }
  }); 

  const updateCount = () => {
    return dispatch(updateCountValue(countValue+1))
  }

  const removeCount = () => { 
    return dispatch({
      type: DECREMENT_COUNT,
      payload: countValue-1})
  }
  

  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <p>User Profile</p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            dob: "",
            address: "",
            password: "",
            confirmPassword: "",
            phoneNumber: ""
          }}
          validationSchema={userProfileSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ isSubmitting, handleChange, handleBlur, values, handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="firstname">First Name</InputGroup.Text>
                <FormControl
                  name="firstName"
                  value={values.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && touched.firstName && (<p> {errors.firstName}</p>)}
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="lastname">Last Name</InputGroup.Text>
                <FormControl
                  name="lastName"
                  value={values.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.lastName && touched.lastName && (<p> {errors.lastName}</p>)}
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="email">Email</InputGroup.Text>
                <FormControl
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.email && touched.email && (<p> {errors.email}</p>)}
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="dob">Date of birth</InputGroup.Text>
                <FormControl
                  type="date"
                  name="dob"
                  value={values.dob}
                  placeholder="dob"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.dob && touched.dob && (<p> {errors.dob}</p>)}
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="address">Address</InputGroup.Text>
                <FormControl
                  name="address"
                  value={values.address}
                  as="textarea"
                  placeholder="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.address && touched.address && (<p> {errors.address}</p>)}
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="password">Password</InputGroup.Text>
                <FormControl
                  name="password"
                  value={values.password}
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.password && touched.password && (<p> {errors.password}</p>)}
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="conformpassword">
                  Confirm Password
                </InputGroup.Text>
                <FormControl
                  name="confirmPassword"
                  value={values.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.confirmPassword && touched.confirmPassword && (<p> {errors.confirmPassword}</p>)}
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="phonenumber">Phone Number</InputGroup.Text>
                <FormControl
                  name="phoneNumber"
                  value={values.phoneNumber}
                  placeholder="Phone Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.phoneNumber && touched.phoneNumber && (<p> {errors.phoneNumber}</p>)}
              </InputGroup>

              <Button disabled={isSubmitting?true:false} onClick={handleSubmit}>Submit</Button>
            </Form>
          )}
        </Formik>

        <Button onClick={removeCount}>-</Button>
          <p>{countValue} count</p>
        <Button onClick={updateCount}>+</Button>
      </div>
    </div>
  );
};

export default UserProfile;
