import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Button from "../../shared/atoms/Button/Buttons";
import "./Statistics.css";


interface StatisticsInterface {
	isOpen: boolean;
	setIsOpen: Function;
    countdown: any;
}

const Statistics: React.FC<StatisticsInterface> = ({isOpen, setIsOpen, countdown}) => {

	function closeModal() {
		setIsOpen(false)
	}

	return (
		<>
			{/* <div className="fixed inset-0 flex items-center justify-center">
				<button
					type="button"
					onClick={openModal}
					className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				>
					Open dialog
				</button>
			</div> */}

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-fulltransform modal-report overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all">
									
									<Dialog.Title
										as="h3"
										className="text-lg text-center font-bold font-sans text-black"
									>
										Estadísticas
									</Dialog.Title>

									<Dialog.Description
										as="div"
										className="mt-5"
									>
                                        <div className="flex flex-row place-content-evenly">
                                            <div className="mt-4">
                                                <h4 className="text-center">2</h4>
                                                <p className="text-center">Jugadas</p>
                                            </div>
                                            <div className="mt-4">
                                                <h4 className="text-center">4</h4>
                                                <p className="text-center">Victorias</p>
                                            </div>
										</div>
										<div className="mt-7 mb-6 flex flex-col">
                                            <p className="text-center text-xs mb-5">La palabra era: <strong></strong></p>
											<p className="text-center text-xs">SIGUIENTE PALABRA</p>
											<p className="mt-4 text-center font-semibold">{countdown}</p>
										</div>

										<div className="flex items-center justify-center mb-5">
											<button
												type="button"
												className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-10 py-2 text-sm font-medium text-white"
												onClick={closeModal}
											>
												Aceptar
											</button>
										</div>

									</Dialog.Description>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default Statistics;