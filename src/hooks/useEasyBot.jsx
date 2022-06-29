import { useState, useEffect} from "react";

export function useEasyBot(cells, setCells, step) {

    const [isBotNextMove, setIsBotNextMove] = useState(false);

    useEffect(() => {

        function easyBotMove(cell) {

            while(true) {
    
                const x = Math.round(Math.random() * 2);
                const y = Math.round(Math.random() * 2);
                
                if(cell[x][y] == 0) {
                    setCells(cell => cell.map((row, i) => {
                        return i == x
                            ? row.map((c, j) => {
                                if(j == y) {
                                    return !(step % 2) ? 4 : 1;
                                } else {
                                    return c;
                                }
                            })
                            : row
                    }));
                    break;
                } 
            }
        } 

        if(isBotNextMove) {
            easyBotMove(cells);
            setIsBotNextMove(false);
        }

    }, [isBotNextMove])

    return {setIsBotNextMove}
}