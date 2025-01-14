import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import { getPlanCosting } from '../utils/util'

const Step2 = ({ saveNewFormValues, updateFormStep }) => {
    const { formValues } = useContext(FormContext)
    console.log('Step 2 state:', formValues)

    return (
        <div className="flex flex-col items-center md:justify-between md:w-full md:px-10">
            <Formik
                initialValues={{
                    plan_type: formValues.plan_type || '',
                    yearly_subscription:
                        formValues.yearly_subscription || false,
                }}
                validateOnBlur={false}
                validateOnChange={false}
                validate={(values) => {
                    const errors = {}
                    if (!values.plan_type) {
                        errors.plan_type = 'This field is required'
                    }
                    console.log('errors:', errors)
                    return errors
                }}
                onSubmit={(values) => {
                    console.log('Submitted values: ', JSON.stringify(values))
                    saveNewFormValues(values)
                    updateFormStep(3)
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <section className="flex flex-col flex-grow md:items-center md:flex-grow-0 bg-transparent w-11/12 max-w-[30rem] md:max-w-full md:w-full">
                        <form
                            id="step2"
                            onSubmit={handleSubmit}
                            className="flex flex-col items-start w-full rounded-lg bg-white px-6 py-8 shadow-md md:shadow-none md:pb-0 md:px-10 md:gap-0 md:w-[400px] lg:w-[500px]"
                        >
                            <h1 className="text-sky-950 font-bold text-2xl lg:text-3xl mb-2">
                                Select your plan
                            </h1>
                            <p className="text-gray-500 text-left font-normal mb-4 lg:mb-6">
                                You have the option of monthly or yearly
                                billing.
                            </p>
                            <p className="text-sm text-red-600 font-bold self-end md:mb-1">
                                {errors.plan_type &&
                                    touched.plan_type &&
                                    errors.plan_type}
                            </p>
                            <fieldset
                                className={`flex flex-col w-full gap-3 mb-6 md:flex-row lg:gap-5 ${
                                    errors.plan_type &&
                                    'border border-red-600 border-solid rounded-md p-2'
                                }`}
                            >
                                <input
                                    type="radio"
                                    id="arcade"
                                    name="plan_type"
                                    className="sr-only peer/arcade"
                                    value="Arcade"
                                    checked={values.plan_type === 'Arcade'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="arcade"
                                    className="w-full p-3 rounded-md border border-solid border-gray-300 peer-checked/arcade:bg-purple-100/40 peer-checked/arcade:border-purple-900 hover:border-sky-950"
                                >
                                    <div className="flex md:flex-col items-start rounded-md gap-4 lg:gap-8">
                                        <img
                                            src={arcadeIcon}
                                            alt="A yellow filled circle with a white Atari joystick"
                                        />
                                        <div className="flex flex-col items-start gap-1">
                                            <strong className="text-sky-950 font-bold w-fit">
                                                Arcade
                                            </strong>
                                            <p className="text-gray-500 font-normal text-sm w-fit">
                                                {
                                                    getPlanCosting(
                                                        'Arcade',
                                                        values.yearly_subscription
                                                            ? 'Yearly'
                                                            : 'Monthly'
                                                    ).text
                                                }
                                            </p>
                                            {values.yearly_subscription && (
                                                <p className="text-xs text-sky-950">
                                                    2 months free
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </label>
                                <input
                                    type="radio"
                                    id="advanced"
                                    name="plan_type"
                                    className="sr-only peer/advanced"
                                    value="Advanced"
                                    checked={values.plan_type === 'Advanced'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="advanced"
                                    className="w-full p-3 rounded-md border border-solid border-gray-300 peer-checked/advanced:bg-purple-100/40 peer-checked/advanced:border-purple-900 hover:border-sky-950"
                                >
                                    <div className="flex md:flex-col items-start rounded-md gap-4 lg:gap-8">
                                        <img
                                            src={advancedIcon}
                                            alt="A red filled circle with a white SNES game controller"
                                        />
                                        <div className="flex flex-col justify-start gap-1">
                                            <strong className="text-sky-950 font-bold w-fit">
                                                Advanced
                                            </strong>
                                            <p className="text-gray-500 font-normal text-sm w-fit">
                                                {
                                                    getPlanCosting(
                                                        'Advanced',
                                                        values.yearly_subscription
                                                            ? 'Yearly'
                                                            : 'Monthly'
                                                    ).text
                                                }
                                            </p>
                                            {values.yearly_subscription && (
                                                <p className="text-xs text-sky-950">
                                                    2 months free
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </label>
                                <input
                                    type="radio"
                                    id="pro"
                                    name="plan_type"
                                    className="sr-only peer/pro"
                                    value="Pro"
                                    checked={values.plan_type === 'Pro'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="pro"
                                    className="w-full p-3 rounded-md border border-solid border-gray-300 peer-checked/pro:bg-purple-100/40 peer-checked/pro:border-purple-900 hover:border-sky-950"
                                >
                                    <div className="flex md:flex-col items-start rounded-md gap-4 lg:gap-8">
                                        <img
                                            src={proIcon}
                                            alt="A purple filled circle with a white game controller"
                                        />
                                        <div className="flex flex-col justify-start gap-1">
                                            <strong className="text-sky-950 font-bold w-fit">
                                                Pro
                                            </strong>
                                            <p className="text-gray-500 font-normal text-sm w-fit">
                                                {
                                                    getPlanCosting(
                                                        'Pro',
                                                        values.yearly_subscription
                                                            ? 'Yearly'
                                                            : 'Monthly'
                                                    ).text
                                                }
                                            </p>
                                            {values.yearly_subscription && (
                                                <p className="text-xs text-sky-950">
                                                    2 months free
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </label>
                            </fieldset>
                            <div className="flex justify-center gap-4 p-3 bg-gray-400/5 w-full rounded-md md:mb-3">
                                <input
                                    type="checkbox"
                                    id="yearly_subscription"
                                    className="sr-only peer/subscription"
                                    value={values.yearly_subscription}
                                    checked={values.yearly_subscription}
                                    onChange={handleChange}
                                />
                                <p className="text-sm font-bold text-sky-950 peer-checked/subscription:text-gray-500">
                                    Monthly
                                </p>
                                <label
                                    htmlFor="yearly_subscription"
                                    className="relative inline-block w-12 h-6 peer-checked/subscription:[&>]:before:translate-x-6"
                                    title="Yearly or monthly subscription"
                                >
                                    <span className="absolute cursor-pointer top-0 bottom-0 left-0 right-0 bg-sky-950 duration-300 rounded-full before:absolute before:content-[''] before:w-4 before:h-4 before:left-1 before:bottom-1 before:bg-white before:duration-300 before:rounded-full"></span>
                                </label>
                                <p className="text-sm font-bold text-gray-500 peer-checked/subscription:text-sky-950">
                                    Yearly
                                </p>
                            </div>
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
                    form="step2"
                    type="submit"
                    value="Next Step"
                    className="text-sm text-white bg-sky-950 font-medium border-none lg:text-base lg:h-11 md:rounded-lg lg:w-28"
                />
            </div>
        </div>
    )
}

Step2.propTypes = {
    saveNewFormValues: PropTypes.func.isRequired,
    updateFormStep: PropTypes.func.isRequired,
}

export default Step2
