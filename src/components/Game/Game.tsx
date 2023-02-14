
import { useState } from "react";
import Button from "../../shared/atoms/Button/Buttons";
import Keyboard from "../../shared/molecules/Keyboard/KeyBoard";
import "../Game/Game.css"


const Game = (props: any) => {

    const matriz = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ];

    const loopThroughArray = (lyrics: string) => {
        for (let x = 0; x < matriz.length; x++) {
            for (let y = 0; y < matriz[x].length; y++) {
                console.log(matriz[x][y]);
                matriz[x][y] = lyrics;
            }
        }
    };

    function rows(array: any[]) {
        return array.map((r) => (
            <>
                <div style={{padding: 5}}>
                    <button style={{ padding: 5, width: 50, height: 50, background: 'rgba(147, 155, 159, 0.3)', borderRadius: 5}} onClick={() => { }} />
                </div>
            </>
        ))
    }

    function columns(array: any[]) {
        return array.map((c) => (
            <>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {rows(c)}
                </div>
            </>
        ));
    }

    return (
        <>
            <div className="pl-15 pr-15 pt-2">
                {columns(matriz)}
            </div>
        </>
    );
}

export default Game;