import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'
import checkmarkIcon from '../assets/images/icon-checkmark.svg'
import { getServiceCosting } from '../utils/util'

const Step3 = ({ saveNewFormValues, updateFormStep }) => {
    const { formValues } = useContext(FormContext)
    console.log('Step 3 state:', formValues)

    return (
        <div className="flex flex-col items-center md:justify-between md:w-full md:px-10">
            <Formik
                initialValues={{
                    online_service: formValues.online_service || false,
                    larger_storage: formValues.larger_storage || false,
                    customizable_profile:
                        formValues.customizable_profile || false,
                }}
                onSubmit={(values) => {
                    console.log('Submitted values: ', JSON.stringify(values))
                    saveNewFormValues(values)
                    updateFormStep(4)
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <section className="flex flex-col flex-grow md:items-center md:flex-grow-0 bg-transparent w-11/12 max-w-[30rem] md:max-w-full md:w-full">
                        <form
                            id="step3"
                            onSubmit={handleSubmit}
                            className="flex flex-col items-start w-full rounded-lg bg-white px-6 py-8 shadow-md md:shadow-none md:px-10 md:pb-0 md:pt-6 lg:pt-8 md:gap-0 md:w-[400px] lg:w-[500px]"
                        >
                            <h1 className="text-sky-950 font-bold text-2xl lg:text-3xl mb-2">
                                Pick add-ons
                            </h1>
                            <p className="text-gray-500 text-left font-normal mb-4 md:mb-2 lg:mb-6">
                                Add-ons help enhance your gaming experience.
                            </p>
                            <fieldset className="flex flex-col w-full gap-3 md:gap-2 mb-6 md:mb-2 lg:gap-3">
                                <label className="w-full">
                                    <input
                                        type="checkbox"
                                        id="online_service"
                                        name="online_service"
                                        className="sr-only peer/os"
                                        value={values.online_service}
                                        checked={values.online_service}
                                        onChange={handleChange}
                                    />
                                    <div className="grid grid-cols-[1fr_5fr_1fr] items-center p-4 rounded-md border border-solid border-gray-300 peer-checked/os:bg-purple-100/40 peer-checked/os:border-purple-900 peer-checked/os:[&>*:first-child]:bg-indigo-600 hover:border-sky-950">
                                        <img
                                            className="rounded-sm border border-solid border-gray-300 w-5 h-5 p-0.5 lg:ml-2"
                                            src={checkmarkIcon}
                                        />
                                        <div className="flex rounded-md gap-4">
                                            <div className="flex flex-col justify-start">
                                                <strong className="text-sky-950 font-bold text-sm w-fit lg:text-base">
                                                    Online service
                                                </strong>
                                                <p className="text-gray-500 font-normal text-xs w-fit lg:text-sm">
                                                    Access to multiplayer games
                                                </p>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                        <p className="text-indigo-600 font-normal text-xs w-fit lg:text-sm">
                                            {'+' +
                                                getServiceCosting(
                                                    'Online service',
                                                    formValues.yearly_subscription
                                                        ? 'Yearly'
                                                        : 'Monthly'
                                                ).text}
                                        </p>
                                    </div>
                                </label>
                                <label className="w-full">
                                    <input
                                        type="checkbox"
                                        id="larger_storage"
                                        name="larger_storage"
                                        className="sr-only peer/os"
                                        value={values.larger_storage}
                                        checked={values.larger_storage}
                                        onChange={handleChange}
                                    />
                                    <div className="grid grid-cols-[1fr_5fr_1fr] items-center p-4 rounded-md border border-solid border-gray-300 peer-checked/os:bg-purple-100/40 peer-checked/os:border-purple-900 peer-checked/os:[&>*:first-child]:bg-indigo-600 hover:border-sky-950">
                                        <img
                                            className="rounded-sm border border-solid border-gray-300 w-5 h-5 p-0.5 lg:ml-2"
                                            src={checkmarkIcon}
                                        />
                                        <div className="flex rounded-md gap-4">
                                            <div className="flex flex-col justify-start">
                                                <strong className="text-sky-950 font-bold text-sm w-fit lg:text-base">
                                                    Larger storage
                                                </strong>
                                                <p className="text-gray-500 font-normal text-xs w-fit lg:text-sm">
                                                    Extra 1TB of cloud save
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-indigo-600 font-normal text-xs w-fit lg:text-sm">
                                            {'+' +
                                                getServiceCosting(
                                                    'Larger storage',
                                                    formValues.yearly_subscription
                                                        ? 'Yearly'
                                                        : 'Monthly'
                                                ).text}
                                        </p>
                                    </div>
                                </label>
                                <label className="w-full">
                                    <input
                                        type="checkbox"
                                        id="customizable_profile"
                                        name="customizable_profile"
                                        className="sr-only peer/os"
                                        value={values.customizable_profile}
                                        checked={values.customizable_profile}
                                        onChange={handleChange}
                                    />
                                    <div className="grid grid-cols-[1fr_5fr_1fr] items-center p-4 rounded-md border border-solid border-gray-300 peer-checked/os:bg-purple-100/40 peer-checked/os:border-purple-900 peer-checked/os:[&>*:first-child]:bg-indigo-600 hover:border-sky-950">
                                        <img
                                            className="rounded-sm border border-solid border-gray-300 w-5 h-5 p-0.5 lg:ml-2"
                                            src={checkmarkIcon}
                                        />
                                        <div className="flex rounded-md gap-4">
                                            <div className="flex flex-col justify-start">
                                                <strong className="text-sky-950 font-bold text-sm w-fit lg:text-base">
                                                    Customizable profile
                                                </strong>
                                                <p className="text-gray-500 font-normal text-xs w-fit lg:text-sm">
                                                    Customize theme on your
                                                    profile
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-indigo-600 font-normal text-xs w-fit lg:text-sm">
                                            {'+' +
                                                getServiceCosting(
                                                    'Customizable profile',
                                                    formValues.yearly_subscription
                                                        ? 'Yearly'
                                                        : 'Monthly'
                                                ).text}
                                        </p>
                                    </div>
                                </label>
                            </fieldset>
                        </form>
                    </section>
                )}
            </Formik>
            <div className="flex justify-between items-center p-4 bg-white w-[100vw] h-18 md:px-10 md:w-[400px] lg:w-[500px]">
                <input
                    type="button"
                    value="Go Back"
                    onClick={() => {
                        console.log('Go Back clicked')
                        updateFormStep(formValues.step - 1)
                    }}
                    className="text-sm text-gray-500 hover:text-sky-950 bg-transparent font-medium border-none p-0 lg:text-base"
                />
                <input
                    form="step3"
                    type="submit"
                    value="Next Step"
                    className="text-sm text-white bg-sky-950 font-medium border-none lg:text-base lg:h-11 md:rounded-lg lg:w-28"
                />
            </div>
        </div>
    )
}

Step3.propTypes = {
    saveNewFormValues: PropTypes.func.isRequired,
    updateFormStep: PropTypes.func.isRequired,
}

export default Step3
