import { Dialog, Transition } from "@headlessui/react"
import { useState, Fragment } from "react"
import Button from "../../shared/atoms/Button/Buttons";
import "./Help.css";


interface HelpInterface {
	isOpen: boolean;
	setIsOpen: Function;
}

const Help: React.FC<HelpInterface> = ({isOpen, setIsOpen}) => {

	// let [isOpen, setIsOpen] = useState(true)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
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
								<Dialog.Panel className="w-fulltransform modal-help overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all">
									
									<Dialog.Title
										as="h3"
										className="text-4xl text-center font-bold font-sans text-black"
									>
										Cómo jugar
									</Dialog.Title>

									<div className="mt-9">
										<p className="text-left text-lg text-black">
											Adivina la palabra oculta en cinco intentos. Cada intento debe ser una palabra válida de 5 letras. Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
										</p>
										<h4 className="mt-5 text-left text-xl text-black font-bold">Ejemplos</h4>
									</div>

									<Dialog.Description
										as="div"
										className="mt-5"
									>
										<div className='flex flex-row content-center justify-between items-center pl-24 pr-24'>
											<Button label="G" background="success" color="white" onclick={() => {}}/>
											<Button label="A" background="white" color="black" onclick={() => {}}/>
											<Button label="T" background="white" color="black" onclick={() => {}}/>
											<Button label="O" background="white" color="black" onclick={() => {}}/>
											<Button label="S" background="white" color="black" onclick={() => {}}/>
										</div>
										<div className="mt-3 mb-3">
											<h3 className="font-semibold" >La letra <strong>G</strong> está en la palabra y en la posición correcta.</h3>
										</div>
										<div className='flex flex-row content-center justify-between items-center pl-24 pr-24'>
											<Button label="V" background="white" color="black" onclick={() => {}}/>
											<Button label="O" background="white" color="black" onclick={() => {}}/>
											<Button label="C" background="yellow" color="white" onclick={() => {}}/>
											<Button label="A" background="white" color="black" onclick={() => {}}/>
											<Button label="L" background="white" color="black" onclick={() => {}}/>
										</div>
										<div className="mt-3 mb-3">
											<h3 className="font-semibold" >La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.</h3>
										</div>
										<div className='flex flex-row content-center justify-between items-center pl-24 pr-24'>
											<Button label="C" background="white"  color="black" onclick={() => {}}/>
											<Button label="A" background="white" color="black" onclick={() => {}}/>
											<Button label="N" background="white" color="black" onclick={() => {}}/>
											<Button label="T" background="white" color="black" onclick={() => {}}/>
											<Button label="O" background="gray" color="black" onclick={() => {}}/>
										</div>
										<div className="mt-3 mb-3">
											<h3 className="font-semibold" >La letra <strong>O</strong> no está en la palabra.</h3>
										</div>
										<div className="mt-7 mb-6">
											<h3 className="font-semibold">Puede haber letras repetidas. Las pistas son independientes para cada letra.</h3>
											<h3 className="mt-5 text-center font-semibold">¡Una palabra nueva cada 5 minutos!</h3>
										</div>

										<div className="flex items-center justify-center mb-5">
											<button
												type="button"
												className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-10 py-2 text-sm font-medium text-white"
												onClick={closeModal}
											>
												!JUGAR¡
											</button>
										</div>

									</Dialog.Description>

									<div className="mt-4">
										
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default Help;