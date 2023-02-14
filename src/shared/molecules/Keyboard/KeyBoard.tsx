import { useState } from 'react';
import Button from '../../atoms/Button/Buttons';
import "./KeyBoard.css"

interface KeyBoardInterface {
    onclick?: Function
}

const KeyBoard: React.FC<KeyBoardInterface> = ({ }) => {

    const [letter, setLetter] = useState("");

    const matriz = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    function rows(array: any[], indexColumn: number) {

        return array.map((r, i) => (
            console.log("indexColumn", indexColumn), console.log("matriz.length", matriz.length),


            <>
                <div style={{ padding: 3 }}>
                    <button style={{ padding: 10, minWidth: 35, background: 'rgba(147, 155, 159, 0.3)', borderRadius: 5 }} onClick={() => { }} >

                        {indexColumn === (matriz.length - 1) && i === (array.length - 1) ? (
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
            </>
        ))
    }

    function columns(array: any[]) {
        return array.map((c, i) => (
            <>
                <div style={
                    i === 1 ? {
                        marginLeft: 30, display: 'flex', justifyContent: 'center', alignItems: 'center'
                    } : i === 2 ? {
                        marginRight: 80, display: 'flex', justifyContent: 'center', alignItems: 'center'
                    } : {
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }
                }>
                    {rows(c, i)}
                </div>
            </>
        ));
    }

    return (
        <div className="container-fluid w-100 p-1" style={{ borderRadius: 15, background: 'rgba(218, 220, 224, 0.3)' }}>
            {columns(matriz)}
        </div>
    )
}

export default KeyBoard
