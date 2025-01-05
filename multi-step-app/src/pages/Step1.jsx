import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const Step1 = ({ saveNewFormValues, updateFormStep }) => {
    const { formValues } = useContext(FormContext)
    console.log('Step 1 state:', formValues)

    return (
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
                    !/^\+\d{1}\s\d{3}\s\d{3}\s\d{4}$/i.test(values.phoneNumber)
                ) {
                    errors.phoneNumber = 'Invalid phone number'
                }

                return errors
            }}
            onSubmit={(values) => {
                saveNewFormValues(values)
                updateFormStep(2)
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
                <section className="flex flex-col items-start rounded-lg bg-white w-11/12 px-6 py-8 shadow-md">
                    <h1 className="text-sky-950 font-semibold text-2xl mb-2">
                        Personal info
                    </h1>
                    <p className="text-gray-500 text-left font-normal mb-4">
                        Please provide your name, email address, and phone
                        number.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-start w-full"
                    >
                        <div className="w-full flex items-center justify-between mb-1">
                            <label
                                htmlFor="full-name"
                                className="text-sky-950 text-sm font-normal"
                            >
                                Name
                            </label>
                            <p className="text-sm text-red-600 font-medium">
                                {errors.fullName &&
                                    touched.fullName &&
                                    errors.fullName}
                            </p>
                        </div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="e.g. Stephen King"
                            className={`w-full mb-3 font-medium ${
                                errors.fullName &&
                                touched.fullName &&
                                'border border-red-700 border-solid'
                            }`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullName}
                        />
                        <div className="w-full flex items-center justify-between mb-1">
                            <label
                                htmlFor="email"
                                className="text-sky-950 text-sm font-normal"
                            >
                                Email Address
                            </label>
                            <p className="text-sm text-red-600 font-medium">
                                {errors.email && touched.email && errors.email}
                            </p>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="e.g. stephenking@lorem.com"
                            className={`w-full mb-3 font-medium ${
                                errors.email &&
                                touched.email &&
                                'border border-red-700 border-solid'
                            }`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <div className="w-full flex items-center justify-between mb-1">
                            <label
                                htmlFor="phone-number"
                                className="text-sky-950 text-sm font-normal"
                            >
                                Phone Number
                            </label>
                            <p className="text-sm text-red-600 font-medium">
                                {errors.phoneNumber &&
                                    touched.phoneNumber &&
                                    errors.phoneNumber}
                            </p>
                        </div>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="e.g. +1 234 567 890"
                            className={`w-full mb-3 font-medium ${
                                errors.phoneNumber &&
                                touched.phoneNumber &&
                                'border border-red-700 border-solid'
                            }`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phoneNumber}
                        />
                        <input
                            type="submit"
                            value="Next Step"
                            className="text-sm text-white bg-sky-950 font-medium border-none"
                        />
                    </form>
                </section>
            )}
        </Formik>
    )
}

Step1.propTypes = {
    saveNewFormValues: PropTypes.func.isRequired,
    updateFormStep: PropTypes.func.isRequired,
}

export default Step1
