import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const Step1 = ({ saveNewFormValues, updateFormStep }) => {
    const { formValues } = useContext(FormContext)
    console.log('Step 1 state:', formValues)

    return (
        <div className="flex flex-col items-center md:justify-between md:w-full md:px-10">
            <Formik
                initialValues={{
                    fullName: formValues.fullName || '',
                    email: formValues.email || '',
                    phoneNumber: formValues.phoneNumber || '',
                }}
                validate={(values) => {
                    const errors = {}
                    if (!values.fullName) {
                        errors.fullName = 'This field is required'
                    }
                    if (!values.email) {
                        errors.email = 'This field is required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = 'Invalid email address'
                    }
                    if (!values.phoneNumber) {
                        errors.phoneNumber = 'This field is required'
                    } else if (
                        !/^\+\d{1}\s\d{3}\s\d{3}\s\d{4}$/i.test(
                            values.phoneNumber
                        )
                    ) {
                        errors.phoneNumber = 'Invalid phone number'
                    }

                    return errors
                }}
                onSubmit={(values, actions) => {
                    console.log('On submit - step 1')
                    saveNewFormValues(values)
                    updateFormStep(2)
                    actions.setSubmitting(false)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <section className="flex flex-col flex-grow md:items-center md:flex-grow-0 bg-transparent w-11/12 max-w-[30rem] md:max-w-full md:w-full">
                        <form
                            id="step1"
                            onSubmit={handleSubmit}
                            className="flex flex-col items-start w-full rounded-lg bg-white px-6 py-8 shadow-md md:shadow-none md:px-10 md:pb-0 md:pt-6 lg:pt-8 md:w-[400px] lg:w-[500px]"
                        >
                            <h1 className="text-sky-950 font-bold text-2xl lg:text-3xl mb-2">
                                Personal info
                            </h1>
                            <p className="text-gray-500 text-left font-normal mb-4 lg:mb-6">
                                Please provide your name, email address, and
                                phone number.
                            </p>
                            <div className="flex flex-col w-full lg:gap-3">
                                <div className="w-full">
                                    <div className="w-full flex items-center justify-between mb-1">
                                        <label
                                            htmlFor="full-name"
                                            className="text-sky-950 text-sm font-normal"
                                        >
                                            Name
                                        </label>
                                        <p className="text-sm text-red-600 font-bold">
                                            {errors.fullName &&
                                                touched.fullName &&
                                                errors.fullName}
                                        </p>
                                    </div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="e.g. Stephen King"
                                        className={`w-full mb-3 font-medium hover:border-sky-950 ${
                                            errors.fullName &&
                                            touched.fullName &&
                                            'border border-red-700 border-solid'
                                        } lg:h-[2.75rem]`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fullName}
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="w-full flex items-center justify-between mb-1">
                                        <label
                                            htmlFor="email"
                                            className="text-sky-950 text-sm font-normal"
                                        >
                                            Email Address
                                        </label>
                                        <p className="text-sm text-red-600 font-bold">
                                            {errors.email &&
                                                touched.email &&
                                                errors.email}
                                        </p>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="e.g. stephenking@lorem.com"
                                        className={`w-full mb-3 font-medium hover:border-sky-950 ${
                                            errors.email &&
                                            touched.email &&
                                            'border border-red-700 border-solid'
                                        } lg:h-[2.75rem]`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="w-full flex items-center justify-between mb-1">
                                        <label
                                            htmlFor="phone-number"
                                            className="text-sky-950 text-sm font-normal"
                                        >
                                            Phone Number
                                        </label>
                                        <p className="text-sm text-red-600 font-bold">
                                            {errors.phoneNumber &&
                                                touched.phoneNumber &&
                                                errors.phoneNumber}
                                        </p>
                                    </div>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="e.g. +1 234 567 890"
                                        className={`w-full mb-3 font-medium hover:border-sky-950 ${
                                            errors.phoneNumber &&
                                            touched.phoneNumber &&
                                            'border border-red-700 border-solid'
                                        } lg:h-[2.75rem]`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phoneNumber}
                                    />
                                </div>
                            </div>
                        </form>
                    </section>
                )}
            </Formik>
            <div className="flex justify-end items-center p-4 bg-white w-[100vw] h-18 md:px-10 md:w-[400px] lg:w-[500px]">
                <input
                    form="step1"
                    type="submit"
                    value="Next Step"
                    className="text-sm text-white bg-sky-950 font-medium border-none md:rounded-lg lg:text-base lg:h-11 lg:w-28"
                />
            </div>
        </div>
    )
}

Step1.propTypes = {
    saveNewFormValues: PropTypes.func.isRequired,
    updateFormStep: PropTypes.func.isRequired,
}

export default Step1
