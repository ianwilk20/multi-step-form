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
            <div className="bg-white md:bg-transparent md:absolute md:left-0 md:right-0 md:bottom-2 attribution py-4 text-xs sm:text-sm text-center text-gray-500">
                Challenge by&nbsp;
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    className="underline text-sky-950 font-medium hover:text-black"
                >
                    Frontend Mentor
                </a>
                . Coded by&nbsp;
                <a
                    href="https://github.com/ianwilk20"
                    className="underline text-sky-950 font-medium hover:text-black"
                >
                    Ian Wilkinson
                </a>
                .
            </div>
        </>
    )
}

export default App
