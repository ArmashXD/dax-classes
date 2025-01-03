import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { simpleExampleValidationSchema } from '../../../../validations/simple-example.validation-schema';

const initialValues = {
    email: '',
    password: '',
    age: '',
};

const BasicUncontrolledFormExample = () => {

    const formik = useFormik();

    const handleFormSubmit = (values) => {
        console.log(values);
    }


    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign Up</h2>
            <p className="text-gray-600 mb-6">Enter your details to create an account</p>

            <Formik
                initialValues={initialValues}
                validationSchema={simpleExampleValidationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form className="space-y-6">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <Field
                                ref={email}
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your email"
                            />
                            <ErrorMessage name="email" component="p" className="mt-1 text-sm text-red-600" />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <Field
                                ref={password}
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your password"
                            />
                            <ErrorMessage name="password" component="p" className="mt-1 text-sm text-red-600" />
                        </div>

                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                                Age
                            </label>
                            <Field
                                type="number"
                                id="age"
                                name="age"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your age"
                            />
                            <ErrorMessage name="age" component="p" className="mt-1 text-sm text-red-600" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Sign Up'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BasicUncontrolledFormExample;

