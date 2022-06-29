import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Wrapper } from "../../components/ui/Flex";
import { TextMenuHeader, TextMenuItem, Status } from "../../components/ui/text";
import { Context } from "../../components/context";

function Options(props) {

    const navigate = useNavigate();

    // const [difficulty, setDifficulty] = useState("easy");
    const {isBot, changeState} = useContext(Context);

    return (
        <Wrapper {...props} >

            <Flex margin = "0 0 50px 0">
                <TextMenuHeader>options</TextMenuHeader>
            </Flex>

            <Flex width="100vw" justify="space-around" >
                <Flex width="60%" direction="column" gap="25px"> 
                    <Flex>
                        <TextMenuItem onClick={() => changeState()}>opponent</TextMenuItem>
                    </Flex>
                    {/* <Flex>
                        <TextMenuItem opacity={isBot ? 1 : 0.3} onClick={() => setDifficulty(difficulty == "easy" ? "hard" : "easy")}>difficulty</TextMenuItem>
                    </Flex> */}
                </Flex>
                
                <Flex width="40%" direction="column" gap="25px">
                    <Flex>
                        <Status>{isBot ? "bot" : "human"}</Status>
                    </Flex>
                    {/* <Flex>
                        <Status opacity={isBot ? 1 : 0.3}>{difficulty}</Status>
                    </Flex> */}
                </Flex>
            </Flex> 

            <Flex onClick={() => navigate("/")}>
                <TextMenuItem>back</TextMenuItem>
            </Flex> 

        </Wrapper>
        
    )
}

export default Options;