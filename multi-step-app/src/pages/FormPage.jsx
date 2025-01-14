import FormContainer from './FormContainer'
import mobileSidebar from '../assets/images/bg-sidebar-mobile.svg'
import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg'
import { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

const FormPage = () => {
    const { formValues } = useContext(FormContext)

    return (
        <main className="bg-sky-100/50 h-[100%] w-[100vw] md:min-h-screen md:flex md:justify-center md:items-center">
            <div className="relative bg-sky-100/50 h-[100%] w-[100vw] flex flex-col md:bg-white md:rounded-xl md:w-[45rem] md:h-[65vh] md:flex-row md:p-4 md:overflow-hidden lg:w-[55rem] lg:h-[70vh]">
                <div className="relative md:flex md:flex-col md:h-full md:w-auto">
                    <picture className="md:w-full md:h-full md:overflow-hidden md:rounded-xl">
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
                            className="md:w-full md:h-full md:object-cover"
                        />
                    </picture>
                    <div className="absolute top-8 w-full flex gap-4 md:gap-8 justify-center md:flex-col">
                        {[
                            { index: 1, text: 'Your Info' },
                            { index: 2, text: 'Select Plan' },
                            { index: 3, text: 'Add-ons' },
                            { index: 4, text: 'Summary' },
                        ].map((item) =>
                            formValues.step === item.index ? (
                                <div
                                    key={item.index}
                                    className="flex items-center gap-4 md:ml-8"
                                >
                                    <div className="flex items-center justify-center bg-sky-200 text-sky-950 text-sm font-bold rounded-full w-8 h-8 md:w-9 md:h-9">
                                        <p>{item.index}</p>
                                    </div>
                                    <div className="sr-only md:not-sr-only flex flex-col items-start">
                                        <p className="text-gray-300 text-xs uppercase m-0">
                                            Step {item.index}
                                        </p>
                                        <p className="text-white text-sm font-bold uppercase m-0 tracking-wider text-left">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    key={item.index}
                                    className="flex items-center gap-4 md:ml-8"
                                >
                                    <div
                                        key={item.index}
                                        className="flex items-center justify-center bg-transparent border border-solid border-white text-white text-sm font-medium rounded-full w-8 h-8 md:w-9 md:h-9"
                                    >
                                        <p>{item.index}</p>
                                    </div>
                                    <div className="sr-only md:not-sr-only flex flex-col items-start">
                                        <p className="text-gray-300 text-xs uppercase m-0">
                                            Step {item.index}
                                        </p>
                                        <p className="text-white text-sm font-bold uppercase m-0 tracking-wider">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="absolute md:relative w-full md:w-auto pt-24 h-full flex justify-center z-10 md:pt-0 md:flex-grow">
                    <FormContainer />
                </div>
            </div>
        </main>
    )
}

export default FormPage
