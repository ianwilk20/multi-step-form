import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const FormContainer = () => {
    const { formValues, setFormValues } = useContext(FormContext)

    console.log(JSON.stringify(formValues))

    // console.log({ step: 1, ...{ fullName: '' }, ...{ chocolate: true } })

    const updateFormValues = (newValues) => {
        console.log('New formValues: ', { ...formValues, ...newValues })
        setFormValues({ ...formValues, ...newValues }) //Spread operator - last takes precedence over first
    }

    const updateFormStep = (newStep) => {
        console.log('Pre-update step formValues: ', {
            ...formValues,
        })
        // Needed to add the (prevState to get state updates to persist, ask CoPilot why)
        setFormValues((prevState) => ({ ...prevState, step: newStep }))
        console.log('Updated step formValues: ', {
            ...formValues,
            step: newStep,
        })
    }

    // const changeFormStep = ()

    const renderCurrentFormStep = (stepNumber) => {
        switch (stepNumber) {
            case 1:
                console.log('In step 1')
                return (
                    <Step1
                        saveNewFormValues={updateFormValues}
                        updateFormStep={updateFormStep}
                    />
                )
            case 2:
                console.log('In step 2')
                return (
                    <Step2
                        saveNewFormValues={updateFormValues}
                        updateFormStep={updateFormStep}
                    />
                )
            case 3:
                console.log('In step 3')
                return (
                    <Step3
                        saveNewFormValues={updateFormValues}
                        updateFormStep={updateFormStep}
                    />
                )
            case 4:
                console.log('In step 4')
                return (
                    <Step4
                        saveNewFormValues={updateFormValues}
                        updateFormStep={updateFormStep}
                    />
                )
            default:
                console.log('In default')
                return <div>Error - An invalid step number was provided</div>
        }
    }

    return (
        <>
            {formValues && formValues.step
                ? renderCurrentFormStep(formValues.step)
                : null}
            {/* <Step1 saveFormState={updateFormValues} /> */}
        </>
    )
}

export default FormContainer
