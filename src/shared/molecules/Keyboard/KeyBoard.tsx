import { useState } from 'react';
import Button from '../../atoms/Button/Buttons';
import "./KeyBoard.css"

interface KeyBoardInterface {
    onclick?: Function
}

const KeyBoard: React.FC<KeyBoardInterface> = ({}) => {

    const [letter, setLetter] = useState("");

    return (
        <div className="container-fluid w-100 p-1">
            <div className='flex flex-row content-center justify-between items-center letter p-1'>
                <Button key="Q" label="Q" background="default"  color="gray" onclick={setLetter}/>
                <Button key="W" label="W" background="default"  color="gray" onclick={setLetter}/>
                <Button key="E" label="E" background="default"  color="gray" onclick={setLetter}/>
                <Button key="R" label="R" background="default"  color="gray" onclick={setLetter}/>
                <Button key="T" label="T" background="default"  color="gray" onclick={setLetter}/>
                <Button key="Y" label="Y" background="default"  color="gray" onclick={setLetter}/>
                <Button key="U" label="U" background="default"  color="gray" onclick={setLetter}/>
                <Button key="I" label="I" background="default"  color="gray" onclick={setLetter}/>
                <Button key="O" label="O" background="default"  color="gray" onclick={setLetter}/>
                <Button key="P" label="P" background="default"  color="gray" onclick={setLetter}/>
            </div>
            <div className='flex flex-row content-center justify-between items-center letter2 p-1'>
                <Button key="A" label="A"  background="default"  color="gray" onclick={setLetter}/>
                <Button key="S" label="S"  background="default"  color="gray" onclick={setLetter}/>
                <Button key="D" label="D"  background="default"  color="gray" onclick={setLetter}/>
                <Button key="F" label="F"  background="default"  color="gray" onclick={setLetter}/>
                <Button key="G" label="G"  background="default"  color="gray" onclick={setLetter}/>
                <Button key="H" label="H"  background="default"  color="gray" onclick={setLetter}/>
                <Button key="J" label="J"  background="default"  color="gray" onclick={setLetter}/>
                <Button key="K" label="K"  background="default"  color="gray" onclick={setLetter}/>
                <Button key="L" label="L"  background="default"  color="gray" onclick={setLetter}/>
                <Button key="Ñ" label="Ñ"  background="default"  color="gray" onclick={setLetter}/>
            </div>
            <div className='flex flex-row content-center justify-between items-center letter p-1'>
                <Button key="ENTER" label="ENTER" background="default" color="gray" onclick={setLetter}/>
                <Button key="Z" label="Z" background="default" color="gray" onclick={setLetter}/>
                <Button key="X" label="X" background="default" color="gray" onclick={setLetter}/>
                <Button key="C" label="C" background="default" color="gray" onclick={setLetter}/>
                <Button key="V" label="V" background="default" color="gray" onclick={setLetter}/>
                <Button key="B" label="B" background="default" color="gray" onclick={setLetter}/>
                <Button key="N" label="N" background="default" color="gray" onclick={setLetter}/>
                <Button key="M" label="M" background="default" color="gray" onclick={setLetter}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>
            </div>
        </div>
    )
}

export default KeyBoard
