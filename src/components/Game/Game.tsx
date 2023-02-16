
import { useState, FC, useEffect } from "react";
import Button from "../../shared/atoms/Button/Buttons";
import Keyboard from "../../shared/molecules/Keyboard/KeyBoard";
import "../Game/Game.css"


interface GameInterface {
    letterClick: string,
    setLetter: Function
}

const Game: FC<GameInterface>  = ({letterClick = "", setLetter}) => {

    const [file, setFile] = useState(0);
    const [column, setColumn] = useState(1);
    const [onpress, setOnpress] = useState(0);

    document.getElementById(`board-row-${file}-col-${column}`)?.classList.add(
        "border border-lightBorder dark:border-darkBorder"
    );

    const array = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ];

    const [matriz, setMatriz] = useState(array);

    useEffect(() => {
        
        if (letterClick !== "") {
        
            console.log("letter", letterClick);
            console.log("column", column);
            setColumn(column + 1)

            if(column > 4) {
                setFile(() => file + 1)
                setColumn(1);
            }    

            const old = matriz[file];
            old[column - 1] = letterClick;
            const clone = [...matriz];
            clone[file] = old

            setMatriz(clone);
            setLetter("");
            console.log("clone", clone);
        }
    }, [letterClick])

    function columns(row: any[], idxRow: any) {
        return row.map((item, idxCol) => (
            <div key={`board-row-${idxRow}-col-${idxCol}`}  style={{padding: 5}}>
                <button  key={`button-row-${idxRow}-col-${idxCol}`} style={{ padding: 5, width: 50, height: 50, background: 'rgba(147, 155, 159, 0.3)', borderRadius: 5}} onClick={() => { }} >
                    {item}
                </button>
            </div>
        ))
    }

    function rows(array: any[]) {
        return array.map((row, idxRow) => (
                <div key={`board-row-${idxRow}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {columns(row, idxRow)}
                </div>
        ));
    }

    return (
        <>
            <div className="pl-15 pr-15 pt-2">
                {rows(matriz)}
            </div>
        </>
    );
}

export default Game;