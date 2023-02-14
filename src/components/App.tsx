import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../shared/molecules/Header/Header';
import Keyboard from '../shared/molecules/Keyboard/Keyboard';
import Game from './Game/Game';
import Help from './Help/Help';
import Statistics from './Statistics/Statistics';

function App() {

	const [openHelpModal, setOpenHelpModal] = useState(true);

	const [counter, setCounter] = useState(20);

	useEffect(() => {
		let timer: any;
		if (counter > 0) {
			timer = setTimeout(() => setCounter(c => c - 1), 1000);
		}
		if (counter == 0) {
			// clearTimeout(timer);
			setCounter(300);
		}
	}, [counter]);

	const padTime = (time: any) => {
		return String(time).length === 1 ? `0${time}` : `${time}`;
	};
	  
	const format = (time: any) => {
		// Convert seconds into minutes and take the whole part
		const minutes = Math.floor(time / 60);
	  
		// Get the seconds left after converting minutes
		const seconds = time % 60;
	  
		//Return combined values as string in format mm:ss
		return `${minutes}:${padTime(seconds)}`;
	};

	return (
		<div className="wrapper">
			<Header openHelp={setOpenHelpModal}/>
			<div className="mt-10 mb-10">
				{/* <Help isOpen={openHelpModal} setIsOpen={setOpenHelpModal}/> */}
				<Statistics isOpen={openHelpModal} setIsOpen={setOpenHelpModal} countdown={format(counter)}/>
				<Game />
			</div>
			<div className="mt-2 mb-2">
				<Keyboard  />
			</div>
		</div>
	);
}

export default App;
