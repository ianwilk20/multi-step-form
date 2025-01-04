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
            onSubmit={(values) => {
                saveNewFormValues(values)
                updateFormStep(2)
            }}
        >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
                <section className="flex flex-col items-start rounded-lg bg-white w-11/12 p-6">
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
                        <label
                            htmlFor="full-name"
                            className="text-sky-950 text-sm font-normal"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="e.g. Stephen King"
                            className="w-full mb-3 font-medium"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullName}
                        />
                        <label
                            htmlFor="email"
                            className="text-sky-950 text-sm font-normal"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="e.g. stephenking@lorem.com"
                            className="w-full mb-3 font-medium"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <label
                            htmlFor="phone-number"
                            className="text-sky-950 text-sm font-normal"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="e.g. +1 234 567 890"
                            className="w-full mb-3 font-medium"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phoneNumber}
                        />
                        <input
                            type="submit"
                            value="Next Step"
                            className="text-white bg-sky-950 font-medium"
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
