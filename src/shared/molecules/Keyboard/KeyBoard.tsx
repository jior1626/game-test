import { useState, FC, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { WordleContext } from "./../../../context/GameContext";
import { GlobalDispatch } from '../../../store';
import Button from '../../atoms/Button/Buttons';
import "./KeyBoard.css"

interface KeyBoardInterface {
    setLetter: Function
}

const KeyBoard: FC<KeyBoardInterface> = ({ setLetter }) => {

    const { revealedLetters, handlePressBackspace, handlePressEnter, handlePressLetter } = useContext(WordleContext);

    const [letterKey, setLetterKey] = useState("");

    const dispatch: GlobalDispatch = useDispatch();

    const matriz = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const handlePressKey = (key: string) => () => {
        setLetter(key);
        handlePressLetter(key);
      };

    function columns(rows: any[], indexColumn: number) {
        return rows.map((r, i) => (
            <div key={`key-row-${r}-column-${indexColumn}`} style={{ padding: 3 }} onClick={() => handlePressKey(r)}>
                <button key={`key-button-${r}`} style={{ padding: 10, minWidth: 35, background: 'rgba(147, 155, 159, 0.3)', borderRadius: 5 }} >
                    {indexColumn == (matriz.length - 1) && i == (rows.length - 1) ? (
                        <>
                            <svg style={{ width: 60 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                            </svg>
                        </>
                    ) : (
                        <>
                            {r}
                        </>
                    )}
                </button>
            </div>
        ))
    }

    function rows(array: any[]) {
        return array.map((c, i) => (
                <div 
                    key={`key-row-${i}`}
                    style={
                    i === 1 ? {
                        marginLeft: 30, display: 'flex', justifyContent: 'center', alignItems: 'center'
                    } : i === 2 ? {
                        marginRight: 80, display: 'flex', justifyContent: 'center', alignItems: 'center'
                    } : {
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }
                }>
                    {columns(c, i)}
                </div>
        ));
    }

    return (
        <div className="container-fluid w-100 p-1" style={{ borderRadius: 15, background: 'rgba(218, 220, 224, 0.3)' }}>
            {rows(matriz)}
        </div>
    )
}

export default KeyBoard
