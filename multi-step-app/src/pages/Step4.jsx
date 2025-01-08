import PropTypes from 'prop-types'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'
import thankYouIcon from '../assets/images/icon-thank-you.svg'
import {
    listOfServices,
    getServiceCosting,
    getServiceNameFromKey,
    getPlanCosting,
} from '../utils/util'

const Step4 = ({ saveNewFormValues, updateFormStep }) => {
    const { formValues } = useContext(FormContext)
    console.log('Step 3 state:', formValues)

    const subPeriod = formValues.yearly_subscription ? 'Yearly' : 'Monthly'

    const selectedServices = () => {
        const selectedServicesKeys = Object.keys(formValues).filter(
            (formField) =>
                listOfServices.includes(formField) &&
                formValues[formField] === true
        )
        return selectedServicesKeys.map((serviceKey) => ({
            name: getServiceNameFromKey(serviceKey),
            costObj: getServiceCosting(
                getServiceNameFromKey(serviceKey),
                subPeriod
            ),
        }))
    }

    const getPlanCostingText = () =>
        getPlanCosting(formValues.plan_type, subPeriod).text

    const getPlanCostingValue = () =>
        getPlanCosting(formValues.plan_type, subPeriod).value

    const isMonthlySub = () => !formValues.yearly_subscription
    const isYearlySub = () => formValues.yearly_subscription

    const getTotalCost = () => {
        const planCost = getPlanCostingValue()
        const servicesCost = selectedServices().reduce(
            (accumulator, service) => accumulator + service.costObj.value,
            0
        )
        const subPeriod = isMonthlySub() ? 'mo' : 'yr'
        return `+${planCost + servicesCost}/${subPeriod}`
    }

    const onConfirm = () => {
        saveNewFormValues({ complete: true })
    }

    console.log(JSON.stringify(selectedServices()))

    if (formValues.complete) {
        return (
            <div className="flex flex-col items-center">
                <section className="flex flex-col flex-grow bg-transparent w-11/12 mb-4">
                    <div className="flex flex-col items-center gap-3 w-full rounded-lg bg-white px-6 py-16 shadow-md">
                        <img
                            src={thankYouIcon}
                            alt="Icon of a checkmark"
                            className="mb-4 w-14"
                        />
                        <h2 className="text-xl font-bold">Thank you!</h2>
                        <p className="text-gray-500 font-normal">
                            Thanks for confirming your subscription! We hope you
                            have fun using our platform. If you ever need
                            support, please feel free to email us at
                            support@loremgaming.com.
                        </p>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center">
            <section className="flex flex-col flex-grow bg-transparent w-11/12 mb-4">
                <div className="flex flex-col items-start gap-3 w-full rounded-lg bg-white px-6 py-8 shadow-md">
                    <h1 className="text-sky-950 font-bold text-2xl mb-2">
                        Finishing up
                    </h1>
                    <p className="text-gray-500 text-left font-normal mb-4">
                        Double-check everything looks OK before confirming.
                    </p>
                    <div className="flex flex-col items-start w-full gap-3">
                        <ul className="flex flex-col gap-2 w-full bg-gray-100 p-4 rounded-md">
                            <li className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <p className="text-sm text-sky-950 font-bold">
                                        {formValues.plan_type} ({subPeriod})
                                    </p>
                                    <input
                                        type="button"
                                        value="Change"
                                        onClick={() => updateFormStep(2)}
                                        className="p-0 w-fit text-sm text-gray-500 bg-transparent border-none underline h-auto"
                                    />
                                </div>
                                <p className="text-sm text-sky-950 font-bold">
                                    {getPlanCostingText()}
                                </p>
                            </li>
                            {selectedServices().length > 0 && (
                                <>
                                    <hr />
                                    {selectedServices().map((service) => (
                                        <li
                                            key={service.name}
                                            className="flex justify-between items-center"
                                        >
                                            <p className="text-sm text-gray-500 font-normal">
                                                {service.name}
                                            </p>
                                            <p className="text-sm text-sky-950 font-normal">
                                                +{service.costObj.text}
                                            </p>
                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>
                        <ul className="flex flex-col gap-2 w-full px-4 pt-3">
                            <li className="flex justify-between items-center">
                                <p className="text-sm text-gray-500 font-normal">
                                    Total{' '}
                                    {isMonthlySub()
                                        ? '(per month)'
                                        : isYearlySub()
                                        ? '(per year)'
                                        : ''}
                                </p>
                                <p className="text-purple-800 font-bold">
                                    {getTotalCost()}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="flex justify-between items-center p-4 bg-white w-full h-18">
                <input
                    type="button"
                    value="Go Back"
                    onClick={() => updateFormStep(formValues.step - 1)}
                    className="text-sm text-gray-500 bg-transparent font-medium border-none p-0"
                />
                <input
                    type="button"
                    value="Confirm"
                    onClick={onConfirm}
                    className="text-sm text-white bg-purple-800 font-medium border-none"
                />
            </div>
        </div>
    )
}

Step4.propTypes = {
    saveNewFormValues: PropTypes.func.isRequired,
    updateFormStep: PropTypes.func.isRequired,
}

export default Step4
