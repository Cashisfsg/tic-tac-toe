import { useState, useEffect} from "react";
import { useEasyBot } from "./useEasyBot";

export function useWin(cells, setCells, step, isBot, isNextMoveAvaliable, setIsNextMoveAvaliable) {

    const [winner, setWinner] = useState({X: false, O: false});
    const [isGameOver, setIsGameOver] = useState(false);
    const [isLetCheck, setIsLetCheck] = useState(false);

    const {setIsBotNextMove} = useEasyBot(cells, setCells, step)

    useEffect(() => {
        
        function CheckWin() {
            console.log("Is bot", isBot)
            cells.forEach(e => {
                let check = e.reduce((a, b) => a  + b, 0) 
                if(check == 3) {
                    setWinner({X: true});
                    setIsGameOver(true);
                } else if(check == 12) {
                    setWinner({O: true});
                    setIsGameOver(true);
                }})

            cells.forEach((e, i) => {
                let check = cells.reduce((a, b) => a + b[i], 0)
                if(check == 3) {
                    setWinner({X: true});
                    setIsGameOver(true);
                } else if(check == 12) {
                    setWinner({O: true});
                    setIsGameOver(true);
                }})

            let check = cells[0][0] + cells[1][1] + cells[2][2];
                if(check == 3) {
                    setWinner({X: true});
                    setIsGameOver(true);
                } else if(check == 12) {
                    setWinner({O: true});
                    setIsGameOver(true);
                }

            check = cells[0][2] + cells[1][1] + cells[2][0];
                if(check == 3) {
                    setWinner({X: true});
                    setIsGameOver(true);
                } else if(check == 12) {
                    setWinner({O: true});
                    setIsGameOver(true);
                }

            if(cells.every(row => row.every(cell => cell)))
                setIsGameOver(true);
            
            if(isBot)
                setIsLetCheck(true);
            
        }
        
        CheckWin()
    }, [cells])

    useEffect(() => {
        if(!isGameOver && isBot && isNextMoveAvaliable && isLetCheck) {
            setIsBotNextMove(true);
            setIsNextMoveAvaliable(false);
        }
        setIsLetCheck(false);
    }, [isLetCheck])

    return [{winner, isGameOver}, setWinner, setIsGameOver];
}