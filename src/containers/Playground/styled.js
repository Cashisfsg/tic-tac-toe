import styled from "styled-components";
import { Flex } from "../../components/ui/Flex";
import { darkTheme } from "../../themes/darkTheme";

const PlayArea = styled(Flex)`
    position: relative;
    height: 415px;
    width: 415px;
    gap: 20px;
    flex-wrap: wrap;
`;

const EmptyCell = styled.div`
    content-visibility: hidden;
    height: 125px;
    width: 125px;
    box-sizing: border-box;
    border: ${darkTheme.cells.border.empty.nonhover};
    position: relative;
    border-radius: 14px;
    background-color: none;
    opacity: 0;
    box-shadow: ${darkTheme.cells.shadows.empty.nonhover};

    cursor: pointer;

    animation: ani 3s forwards;

    @keyframes ani 
        {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }
    
    :hover {
        content-visibility: visible;
        opacity: 0.75;

        border: ${darkTheme.cells.border.empty.hover};
        box-shadow: ${darkTheme.cells.shadows.empty.hover};

        animation: anim 1.5s forwards;

        @keyframes anim 
        {
            0% {opacity: 0;}
            100% {opacity: .85;}
        }
    }
`
const XCell = styled.div`
    height: 125px;
    width: 125px;
    border-radius: 14px;
    background-size: cover;
    border: ${darkTheme.cells.border.X};
    box-shadow: ${darkTheme.cells.shadows.X};
    animation: ani 0.75s forwards;
`

const OCell = styled(XCell)`
    border: ${darkTheme.cells.border.O};
    box-shadow: ${darkTheme.cells.shadows.O};
`;

export { PlayArea, EmptyCell, XCell, OCell }