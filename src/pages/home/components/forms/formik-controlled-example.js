import React from 'react';
import { Formik } from 'formik';

const initialValues = {
    email: '', password: ''
};

const BasicFormikControlledExample = () => {
    const handleFormSubmit = (values) => {
        console.log(values);
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={handleFormSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email Address: </label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <br />
                            <br />

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">Password: </label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />

                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type=""
                                name="age"
                                onChange={(event) => setFieldValue('age', event.target.value)}
                                value={values.age}
                            />

                            <br />
                            {errors.password && touched.password && errors.password}
                            <button type="submit" >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default BasicFormikControlledExample;