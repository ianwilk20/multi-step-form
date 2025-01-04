import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'
import checkmarkIcon from '../assets/images/icon-checkmark.svg'

const Step3 = ({ saveNewFormValues, updateFormStep }) => {
    const { formValues } = useContext(FormContext)
    console.log('Step 3 state:', formValues)

    return (
        <Formik
            initialValues={{
                online_service: formValues.online_service || false,
                larger_storage: formValues.larger_storage || false,
                customizable_profile: formValues.customizable_profile || false,
            }}
            onSubmit={(values) => {
                console.log('Submitted values: ', JSON.stringify(values))
                saveNewFormValues(values)
                updateFormStep(4)
            }}
        >
            {({ values, handleChange, handleSubmit }) => (
                <section className="flex flex-col items-start rounded-lg bg-white w-11/12 p-6">
                    <h1 className="text-sky-950 font-semibold text-2xl mb-2">
                        Pick add-ons
                    </h1>
                    <p className="text-gray-500 text-left font-normal mb-4">
                        Add-ons help enhance your gaming experience.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-start w-full gap-3"
                    >
                        <label className="w-full">
                            <input
                                type="checkbox"
                                id="online_service"
                                name="online_service"
                                className="sr-only peer/os"
                                value={values.online_service}
                                onChange={handleChange}
                            />
                            <div className="grid grid-cols-[1fr_5fr_1fr] items-center p-4 rounded-md border border-solid border-gray-500 peer-checked/os:bg-purple-100/40 peer-checked/os:border-purple-900 peer-checked/os:[&>*:first-child]:bg-indigo-600">
                                <img
                                    className="rounded-sm border border-solid border-gray-500 w-5 h-5 p-0.5"
                                    src={checkmarkIcon}
                                />
                                <div className="flex rounded-md gap-4">
                                    <div className="flex flex-col justify-start">
                                        <strong className="text-sky-950 font-bold text-sm w-fit">
                                            Online service
                                        </strong>
                                        <p className="text-gray-500 font-normal text-xs w-fit">
                                            Access to multiplayer games
                                        </p>
                                    </div>
                                </div>
                                {/* </div> */}
                                <p className="text-indigo-600 font-normal text-xs w-fit">
                                    {values.yearly_subscription
                                        ? '+$10/yr'
                                        : '+$1/mo'}
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
                                onChange={handleChange}
                            />
                            <div className="grid grid-cols-[1fr_5fr_1fr] items-center p-4 rounded-md border border-solid border-gray-500 peer-checked/os:bg-purple-100/40 peer-checked/os:border-purple-900 peer-checked/os:[&>*:first-child]:bg-indigo-600">
                                <img
                                    className="rounded-sm border border-solid border-gray-500 w-5 h-5 p-0.5"
                                    src={checkmarkIcon}
                                />
                                <div className="flex rounded-md gap-4">
                                    <div className="flex flex-col justify-start">
                                        <strong className="text-sky-950 font-bold text-sm w-fit">
                                            Larger storage
                                        </strong>
                                        <p className="text-gray-500 font-normal text-xs w-fit">
                                            Extra 1TB of cloud save
                                        </p>
                                    </div>
                                </div>
                                <p className="text-indigo-600 font-normal text-xs w-fit">
                                    {values.yearly_subscription
                                        ? '+$20/yr'
                                        : '+$2/mo'}
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
                                onChange={handleChange}
                            />
                            <div className="grid grid-cols-[1fr_5fr_1fr] items-center p-4 rounded-md border border-solid border-gray-500 peer-checked/os:bg-purple-100/40 peer-checked/os:border-purple-900 peer-checked/os:[&>*:first-child]:bg-indigo-600">
                                <img
                                    className="rounded-sm border border-solid border-gray-500 w-5 h-5 p-0.5"
                                    src={checkmarkIcon}
                                />
                                <div className="flex rounded-md gap-4">
                                    <div className="flex flex-col justify-start">
                                        <strong className="text-sky-950 font-bold text-sm w-fit">
                                            Customizable profile
                                        </strong>
                                        <p className="text-gray-500 font-normal text-xs w-fit">
                                            Customize theme on your profile
                                        </p>
                                    </div>
                                </div>
                                <p className="text-indigo-600 font-normal text-xs w-fit">
                                    {values.yearly_subscription
                                        ? '+$10/yr'
                                        : '+$1/mo'}
                                </p>
                            </div>
                        </label>

                        <input
                            type="button"
                            value="Go Back"
                            onClick={() => updateFormStep(formValues.step - 1)}
                            className="text-gray-500 bg-transparent font-medium border-none"
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

Step3.propTypes = {
    saveNewFormValues: PropTypes.func.isRequired,
    updateFormStep: PropTypes.func.isRequired,
}

export default Step3
