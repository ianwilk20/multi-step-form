import { useState } from 'react'
import { FormContext } from './contexts/FormContext'
import FormContainer from './pages/FormContainer'
import './App.css'

function App() {
    const [formValues, setFormValues] = useState({ step: 1 })
    console.log('Rerender app')

    return (
        <>
            <FormContext.Provider value={{ formValues, setFormValues }}>
                <FormContainer />
            </FormContext.Provider>
        </>
    )
}

export default App
