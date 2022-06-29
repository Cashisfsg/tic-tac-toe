import React, { useState, useContext } from 'react';
import { Flex } from '../components/ui/Flex';
import { BlinkingText } from '../components/ui/text';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Context } from '../components/context/';

import Playground from './Playground';
import MainMenu from './MainMenu';
import Options from './Options';

import { useWin } from '../hooks/useWin';

function Field(props) {
 
    const [cells, setCells] = useState(Array.from({length: 3}, row => Array.from({length: 3}).fill(0)));
    const [step, setStep] = useState(Math.round(Math.random()));
    const [isNextMoveAvaliable, setIsNextMoveAvaliable] = useState(false);

    const {isBot} = useContext(Context)

    const [{winner, isGameOver} , setWinner, setIsGameOver] = 
        useWin(cells, setCells, step, isBot, isNextMoveAvaliable, setIsNextMoveAvaliable)

    const navigate = useNavigate();

    function setColor(i, j) {
        setCells(cells => cells.map((row, idx) => {
            return i == idx
            ? row.map((cell, jdx) => {
                return j == jdx ? (!(step % 2) ? 1 : 4) : cell
            })
            : row
        }));
        setStep(step => isBot ? step + 2 : step + 1);
        setIsNextMoveAvaliable(true);
    }

    function Reset() {
        setIsGameOver(false);
        setCells(Array.from({length: 3}, row => Array.from({length: 3}).fill(0)))
        for (let i in winner) {
            setWinner({i: false})
        }
        setStep(Math.round(Math.random()));
        setIsNextMoveAvaliable(false);
    }

    function GameOver () {
        Reset();
        navigate("/");
    }

    return (
        <Flex {...props}>
            <BlinkingText>Tic-Tac-Toe</BlinkingText>
        
            <Routes>
                <Route exact path = "/" element = {<MainMenu 
                                                        direction = "column"
                                                        gap = "25px"
                                                        wrap = "wrap"/>} />
                <Route exact path = "/game" element = {<Playground 
                                                            cells = {cells} 
                                                            step = {step} 
                                                            isGameOver = {isGameOver}
                                                            setColor = {setColor} 
                                                            winner = {winner} 
                                                            restart = {Reset}
                                                            GameOver = {GameOver}/>} />
                <Route exact path="/options" element = {<Options 
                                                            direction = "column"
                                                            gap = "25px" />} />
            </Routes>
        </Flex>
    )
}

export default Field;