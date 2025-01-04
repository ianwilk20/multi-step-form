import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'
import checkmarkIcon from '../assets/images/icon-checkmark.svg'
import { getPlanCosting } from '../utils/util'

const Step4 = ({ saveNewFormValues, updateFormStep }) => {
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
                saveNewFormValues(values)
                updateFormStep(4)
            }}
        >
            {({ values, handleChange, handleSubmit }) => (
                <section className="flex flex-col items-start rounded-lg bg-white w-11/12 p-6">
                    <h1 className="text-sky-950 font-semibold text-2xl mb-2">
                        Finishing up
                    </h1>
                    <p className="text-gray-500 text-left font-normal mb-4">
                        Double-check everything looks OK before confirming.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-start w-full gap-3"
                    >
                        <ul className="w-full">
                            <li className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <p className="text-sm text-sky-950 font-bold">
                                        {formValues.plan_type} (
                                        {formValues.plan_subscription
                                            ? 'Yearly'
                                            : 'Monthly'}
                                        )
                                    </p>
                                    <input
                                        type="button"
                                        value="Change"
                                        onClick={() =>
                                            updateFormStep(formValues.step - 1)
                                        }
                                        className="p-0 w-fit text-sm text-gray-500 bg-transparent border-none underline"
                                    />
                                </div>
                                <p className="text-sm text-sky-950 font-bold">
                                    $9/mo
                                    {/* {getPlanCosting(
                                    formValues.plan_type,
                                    formValues.plan_subscription
                                )} */}
                                </p>
                            </li>
                            <li></li>
                        </ul>
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
                                    {values.plan_subscription
                                        ? '+$20/yr'
                                        : '+$2/mo'}
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

Step4.propTypes = {
    saveNewFormValues: PropTypes.func.isRequired,
    updateFormStep: PropTypes.func.isRequired,
}

export default Step4
