import React from "react";
import { Flex, Wrapper } from "../../components/ui/Flex";
import { useNavigate } from "react-router-dom";
import { TextMenuHeader, TextMenuItem } from "../../components/ui/text";

function MainMenu(props) {

    const navigate = useNavigate();

    return (
        <Wrapper {...props}>

            <Flex margin = "0 0 50px 0">
                <TextMenuHeader>Main menu</TextMenuHeader>
            </Flex>
                
            <Flex>
                <TextMenuItem onClick={() => navigate("/game")}>New game</TextMenuItem>
            </Flex>

            <Flex>
                <TextMenuItem onClick={() => navigate("/options")}>Options</TextMenuItem>
            </Flex>
            
        </Wrapper>
    )
}

export default MainMenu;