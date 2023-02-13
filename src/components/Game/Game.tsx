
import { useState } from "react";
import Button from "../../shared/atoms/Button/Buttons";
import Keyboard from "../../shared/molecules/Keyboard/Keyboard";
import "../Game/Game.css"


const Game = () => {

    const rows = [1,2,3,4,5];

    const renderRows = () => {
        return rows.map(item => {
            return (
                <div className="container">         
                    <div className="flex flex-row content-center justify-between items-center buttons-margin">
                        <div className="">
                            <Button key={item+"-1"} label=""  background="default"  color="gray" onclick={() => {}}/>
                        </div>
                        <div className="">
                            <Button key={item+"-2"} label=""  background="default"  color="gray" onclick={() => {}}/>
                        </div>
                        <div className="">
                            <Button key={item+"-3"} label=""  background="default"  color="gray" onclick={() => {}}/>
                        </div>
                        <div className="">
                            <Button key={item+"-4"} label=""  background="default"  color="gray" onclick={() => {}}/>
                        </div>
                        <div className="">
                            <Button key={item+"-5"} label=""  background="default"  color="gray" onclick={() => {}}/>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="pl-15 pr-15 pt-10">
            {renderRows()}
        </div>
    )
}

export default Game;