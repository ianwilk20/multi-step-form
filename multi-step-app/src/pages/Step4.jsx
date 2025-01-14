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
            <section className="flex flex-col items-center md:justify-center flex-grow md:flex-grow-0 bg-transparent max-w-[30rem] w-full md:w-[400px] lg:w-[500px]">
                <div className="flex flex-col items-center gap-3 w-11/12 md:w-full rounded-lg bg-white px-6 py-16 shadow-md md:shadow-none md:px-10 md:pb-0 md:pt-6 lg:pt-8 md:gap-0">
                    <img
                        src={thankYouIcon}
                        alt="Icon of a checkmark"
                        className="mb-4 w-14 md:mb-6 md:w-16 lg:w-[4.5rem]"
                    />
                    <h2 className="text-xl font-bold md:text-2xl lg:text-3xl md:mb-2 lg:mb-3">
                        Thank you!
                    </h2>
                    <p className="text-gray-500 font-normal">
                        Thanks for confirming your subscription! We hope you
                        have fun using our platform. If you ever need support,
                        please feel free to email us at support@loremgaming.com.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <div className="flex flex-col items-center md:justify-between md:w-full md:px-10">
            <section className="flex flex-col flex-grow md:items-center md:flex-grow-0 bg-transparent w-11/12 max-w-[30rem] md:max-w-full md:w-[400px] lg:w-[500px]">
                <div className="flex flex-col items-start w-full rounded-lg bg-white px-6 py-8 shadow-md md:shadow-none md:px-10 md:pb-0 md:pt-6 lg:pt-8 md:gap-0">
                    <h1 className="text-sky-950 font-bold text-2xl lg:text-3xl mb-2">
                        Finishing up
                    </h1>
                    <p className="text-gray-500 text-left font-normal mb-4 lg:mb-6">
                        Double-check everything looks OK before confirming.
                    </p>
                    <div className="flex flex-col items-start w-full gap-3">
                        <ul className="flex flex-col gap-2 w-full bg-gray-100 p-4 rounded-md">
                            <li className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <p className="text-sm text-sky-950 font-bold lg:text-base">
                                        {formValues.plan_type} ({subPeriod})
                                    </p>
                                    <input
                                        type="button"
                                        value="Change"
                                        onClick={() => updateFormStep(2)}
                                        className="p-0 w-fit text-sm text-gray-500 hover:text-purple-800 bg-transparent border-none underline h-auto"
                                    />
                                </div>
                                <p className="text-sm text-sky-950 font-bold">
                                    {getPlanCostingText()}
                                </p>
                            </li>
                            {selectedServices().length > 0 && (
                                <>
                                    <hr className="my-3" />
                                    {selectedServices().map((service) => (
                                        <li
                                            key={service.name}
                                            className="flex justify-between items-center mb-2"
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
                                <p className="text-purple-800 font-bold lg:text-lg">
                                    {getTotalCost()}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="flex justify-between items-center p-4 bg-white w-[100vw] h-18 md:px-10 md:w-[400px] lg:w-[500px]">
                <input
                    type="button"
                    value="Go Back"
                    onClick={() => updateFormStep(formValues.step - 1)}
                    className="text-sm text-gray-500 hover:text-sky-950 bg-transparent font-medium border-none p-0 lg:text-base"
                />
                <input
                    type="button"
                    value="Confirm"
                    onClick={onConfirm}
                    className="text-sm text-white bg-purple-800 hover:bg-purple-800/80 font-medium border-none lg:text-base lg:h-11 md:rounded-lg lg:w-28"
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
