
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import './Header.css';

const Header: React.FC<any> = ({openModal}) => {

    const [enabled, setEnabled] = useState(false)

    return (
        <>
            <header className='header rounded-2xl border-x-1 border-y-1 pl-2 pr-2 pt-2 pb-2'>
                <nav>
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <div className="flex items-center lg:order-1">
                            <a href="#" onClick={() => openModal(true)} className='ml-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex items-center lg:order-2">
                        <h1 className='ml-14'>PALABRA</h1>
                        </div>
                        <div className="flex items-center lg:order-3" id="mobile-menu-2">
                            <a href="#" className="flex items-center px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                                relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                                <span className="sr-only">Use setting</span>
                                <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                                    pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div> 
                    </div>
                </nav>
            </header>
        </>
    )

}




export default Header;