import React, { useEffect, useState } from 'react';
import "./Button.css"; 

export interface filterBarProps {
	label: any;
	background: string;
	color: string;
	onclick: Function;
}

const Button: React.FC<filterBarProps> = ({ label = "", background = "", color = "", onclick}) => {


	const [colorBackground, setColorBackground] = useState("");

	const [colorText, setColorText] = useState("");

	const [colorBorder, setColorBorder] = useState("");

	useEffect(() => {
		getBackground();
		getColorText();
		getColorBorder();
	},[])

	const getBackground = () => {
		if(background === "gray") {
			setColorBackground("color-gray-selected");
		} else if (background === "success") {
			setColorBackground("bg-green-600");
		} else if (background === "yellow") {
			setColorBackground("bg-yellow-600");
		} else if (background === "white"){
			setColorBackground("bg-white");
		} else {
			setColorBackground("color-gray");
		}
	}

	const getColorText = () => {
		if(color === "white") {
			setColorText("text-white");
		} else if (color === "black"){
			setColorText("text-black");
		} else {
			setColorText("text-gray-500");
		}
	}

	const getColorBorder = () => {
		if(background === "white") {
			setColorBorder("border-black border-1");
		} else if (background !== "white") {
			setColorBorder("");
		}
	}

	return (
		<div>
			<button type="button" onClick={() => onclick(label)} className={`rounded-sm pt-3 pb-3 pl-4 pr-4 mb-1 w-auto ${colorBackground +' '+ colorText + ' '+ colorBorder}`}><h5 className="font-serif font-bold"> {label} </h5></button>
		</div>
	)
}

export default Button;
