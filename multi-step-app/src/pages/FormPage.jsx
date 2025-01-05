import FormContainer from './FormContainer'
import mobileSidebar from '../assets/images/bg-sidebar-mobile.svg'
import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const FormPage = () => {
    const { formValues } = useContext(FormContext)

    return (
        <main className="bg-sky-100/50 h-[100%] w-[100%] flex flex-col">
            <div className="relative">
                <picture>
                    <source srcSet={mobileSidebar} media="(max-width: 375px)" />
                    <source
                        srcSet={desktopSidebar}
                        media="(min-width: 376px)"
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
                                className="flex items-center justify-center bg-sky-200 text-sky-950 text-sm font-semibold rounded-full w-8 h-8"
                            >
                                <p>{item}</p>
                            </div>
                        ) : (
                            <div
                                key={item}
                                className="flex items-center justify-center bg-transparent border border-solid border-white text-white text-sm font-semibold rounded-full w-8 h-8"
                            >
                                <p>{item}</p>
                            </div>
                        )
                    )}
                </div>
                <div className="absolute top-24 flex justify-center">
                    <FormContainer />
                </div>
            </div>
        </main>
    )
}

export default FormPage
