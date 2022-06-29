import React from "react";
import { Flex, Wrapper } from "../../components/ui/Flex";
import { TextMenuHeader, TextMenuItem, Status, TextEmptyCell, TextFillCellX, TextFillCellO } from "../../components/ui/text";
import { PlayArea, EmptyCell, XCell, OCell } from "./styled";

function Playground({cells, step, isGameOver, setColor, winner, restart, GameOver}) {
    
    return (
        <PlayArea>
            {isGameOver
                && <Wrapper style={{
                            display: "flex",
                            minWidth: "max-content",
                            minHeight: "max-content",
                            justifyContent: "center",
                            padding: "25px",
                            position: "absolute",
                            top: "50%",
                            left: "50%", 
                            transform: "translate(-50%, -50%)", 
                            backdropFilter: "blur(4px)", 
                            flexDirection: "column",
                            zIndex: "1", 
                            gap: "4em"}}>
                {winner.X 
                    ? <Status>Win X</Status> 
                    : winner.O 
                        ? <Status>Win O</Status>
                        : <Status>Draw</Status>}
                <TextMenuHeader>Begin new game?</TextMenuHeader>
                <Flex width = "100%" justify = "space-around">
                    <div onClick={restart}><TextMenuItem>Yes</TextMenuItem></div>
                    <div onClick={GameOver}><TextMenuItem>no</TextMenuItem></div>
                </Flex>
            </Wrapper>} 
            {cells.map((row, i) => (
                row.map((cell, j) => (
                    !cell
                        ? <EmptyCell key={`[${i}; ${j}]`} onClick={!cell ? () => setColor(i, j) : () => {}}><TextEmptyCell>{!(step % 2) ? "X" : "O"}</TextEmptyCell></EmptyCell>
                        : cell == 1
                            ? <XCell key={`[${i}; ${j}]`} ><TextFillCellX>{cell == 1 ? "X" : "O"}</TextFillCellX></XCell>       
                            : <OCell key={`[${i}; ${j}]`} ><TextFillCellO>{cell == 1 ? "X" : "O"}</TextFillCellO></OCell>             
             ))))}
        </PlayArea>
            
    )
}

export default Playground;