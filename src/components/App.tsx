import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../shared/molecules/Header/Header';
import Keyboard from '../shared/molecules/Keyboard/KeyBoard';
import Game from './Game/Game';
import Help from './Help/Help';
import Statistics from './Statistics/Statistics';

function App() {

	const [openHelpModal, setOpenHelpModal] = useState(true);

	const [openStatisticsModal, setOpenStatisticsModal] = useState(false);

	const [counter, setCounter] = useState(20);

	const [letter, setLetter] = useState("");

	useEffect(() => {
		let timer: any;
		if (counter > 0) {
			timer = setTimeout(() => setCounter(c => c - 1), 1000);
		}
		if (counter === 0) {
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

	const letterClick = () => {

	}

	return (
		<div className="wrapper min-w-screen min-h-screen">
			<Header openHelp={setOpenHelpModal} openStatistics={setOpenStatisticsModal}/>
			<Help isOpen={openHelpModal} setIsOpen={setOpenHelpModal}/>
			<Statistics isOpen={openStatisticsModal} setIsOpen={setOpenStatisticsModal} countdown={format(counter)}/>
			<Game letterClick={letter} setLetter={setLetter}/>
			<Keyboard setLetter={setLetter}/>
		</div>
	);
}

export default App;
