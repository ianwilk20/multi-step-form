import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

const Step2 = ({ saveNewFormValues, updateFormStep }) => {
    const { formValues } = useContext(FormContext)
    console.log('Step 2 state:', formValues)

    return (
        <Formik
            initialValues={{
                plan_type: formValues.plan_type || '',
                yearly_subscription: formValues.yearly_subscription || false,
            }}
            onSubmit={(values) => {
                console.log('Submitted values: ', JSON.stringify(values))
                saveNewFormValues(values)
                updateFormStep(3)
            }}
        >
            {({ values, handleChange, handleSubmit }) => (
                <section className="flex flex-col items-start rounded-lg bg-white w-11/12 p-6">
                    <h1 className="text-sky-950 font-semibold text-2xl mb-2">
                        Select your plan
                    </h1>
                    <p className="text-gray-500 text-left font-normal mb-4">
                        You have the option of monthly or yearly billing.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-start w-full gap-3"
                    >
                        <input
                            type="radio"
                            id="arcade"
                            name="plan_type"
                            className="sr-only peer/arcade"
                            value="Arcade"
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="arcade"
                            className="w-full p-4 rounded-md border border-solid border-gray-500 peer-checked/arcade:bg-purple-100/40 peer-checked/arcade:border-purple-900"
                        >
                            <div className="flex rounded-md gap-4">
                                <img
                                    src={arcadeIcon}
                                    alt="A yellow filled circle with a white Atari joystick"
                                />
                                <div className="flex flex-col justify-start">
                                    <strong className="text-sky-950 font-bold w-fit">
                                        Arcade
                                    </strong>
                                    <p className="text-gray-500 font-normal text-sm w-fit">
                                        {values.yearly_subscription
                                            ? '$90/yr'
                                            : '$9/mo'}
                                    </p>
                                    {values.yearly_subscription && (
                                        <p className="text-sm text-sky-950">
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
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="advanced"
                            className="w-full p-4 rounded-md border border-solid border-gray-500 peer-checked/advanced:bg-purple-100/40 peer-checked/advanced:border-purple-900"
                        >
                            <div className="flex items-start rounded-md gap-4">
                                <img
                                    src={advancedIcon}
                                    alt="A red filled circle with a white SNES game controller"
                                />
                                <div className="flex flex-col justify-start">
                                    <strong className="text-sky-950 font-bold w-fit">
                                        Advanced
                                    </strong>
                                    <p className="text-gray-500 font-normal text-sm w-fit">
                                        {values.yearly_subscription
                                            ? '$120/yr'
                                            : '$12/mo'}
                                    </p>
                                    {values.yearly_subscription && (
                                        <p className="text-sm text-sky-950">
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
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="pro"
                            className="w-full p-4 rounded-md border border-solid border-gray-500 peer-checked/pro:bg-purple-100/40 peer-checked/pro:border-purple-900"
                        >
                            <div className="flex rounded-md gap-4">
                                <img
                                    src={proIcon}
                                    alt="A purple filled circle with a white game controller"
                                />
                                <div className="flex flex-col justify-start">
                                    <strong className="text-sky-950 font-bold w-fit">
                                        Pro
                                    </strong>
                                    <p className="text-gray-500 font-normal text-sm w-fit">
                                        {values.yearly_subscription
                                            ? '$150/yr'
                                            : '$15/mo'}
                                    </p>
                                    {values.yearly_subscription && (
                                        <p className="text-sm text-sky-950">
                                            2 months free
                                        </p>
                                    )}
                                </div>
                            </div>
                        </label>
                        <div className="flex justify-center gap-4 p-4 bg-sky-200/20 w-full rounded-md">
                            <input
                                type="checkbox"
                                id="yearly_subscription"
                                className="sr-only peer/subscription"
                                value={values.yearly_subscription}
                                onChange={handleChange}
                            />
                            <p className="text-sm font-bold text-sky-950 peer-checked/subscription:text-gray-500">
                                Monthly
                            </p>
                            <label
                                htmlFor="yearly_subscription"
                                className="relative inline-block w-12 h-6 peer-checked/subscription:[&>]:before:translate-x-6"
                            >
                                <span className="absolute cursor-pointer top-0 bottom-0 left-0 right-0 bg-sky-950 duration-300 rounded-full before:absolute before:content-[''] before:w-4 before:h-4 before:left-1 before:bottom-1 before:bg-white before:duration-300 before:rounded-full"></span>
                            </label>
                            <p className="text-sm font-bold text-gray-500 peer-checked/subscription:text-sky-950">
                                Yearly
                            </p>
                        </div>
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

Step2.propTypes = {
    saveNewFormValues: PropTypes.func.isRequired,
    updateFormStep: PropTypes.func.isRequired,
}

export default Step2
