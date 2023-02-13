import React, { useState } from 'react';
import './App.css';
import Header from '../shared/molecules/Header/Header';
import Keyboard from '../shared/molecules/Keyboard/Keyboard';
import Game from './Game/Game';
import Help from './Help/Help';

function App() {

	const [openHelpModal, setOpenHelpModal] = useState(true);

	return (
		<div className="wrapper">
			<Header openHelp={setOpenHelpModal}/>
			<div className="mt-10 mb-10">
				<Help isOpen={openHelpModal} setIsOpen={setOpenHelpModal}/>
				<Game />
			</div>
			<div className="mt-2 mb-2">
				<Keyboard  />
			</div>
		</div>
	);
}

export default App;
