import FormContainer from './FormContainer'
import mobileSidebar from '../assets/images/bg-sidebar-mobile.svg'
import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const FormPage = () => {
    const { formValues } = useContext(FormContext)

    return (
        <main className="bg-sky-100/50 h-[100%] w-[100vw] md:flex md:justify-center">
            <div className="relative bg-sky-100/50 h-[100%] w-[100vw] flex flex-col md:bg-white md:rounded-lg md:w-[80vw] md:max-h-[30rem]">
                <div className="relative">
                    <picture>
                        <source
                            srcSet={mobileSidebar}
                            media="(max-width: 768px)"
                        />
                        <source
                            srcSet={desktopSidebar}
                            media="(min-width: 768px)"
                        />
                        <img
                            src={desktopSidebar}
                            alt="A purple background with various shapes of different proportions and colours"
                        />
                    </picture>
                    <div className="absolute top-8 w-full flex gap-4 justify-center">
                        {[1, 2, 3, 4].map((item) =>
                            formValues.step === item ? (
                                <div
                                    key={item}
                                    className="flex items-center justify-center bg-sky-200 text-sky-950 text-sm font-medium rounded-full w-8 h-8"
                                >
                                    <p>{item}</p>
                                </div>
                            ) : (
                                <div
                                    key={item}
                                    className="flex items-center justify-center bg-transparent border border-solid border-white text-white text-sm font-medium rounded-full w-8 h-8"
                                >
                                    <p>{item}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="absolute left-0 right-0 pt-24 h-full flex justify-center z-10">
                    <FormContainer />
                </div>
            </div>
        </main>
    )
}

export default FormPage
