import { useState } from 'react'
import { FormContext } from './contexts/FormContext'
import './App.css'
import FormPage from './pages/FormPage'

function App() {
    const [formValues, setFormValues] = useState({ step: 1 })
    console.log('Rerender app')

    return (
        <>
            <FormContext.Provider value={{ formValues, setFormValues }}>
                <FormPage />
            </FormContext.Provider>
        </>
    )
}

export default App
