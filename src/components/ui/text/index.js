import styled from "styled-components";
import { darkTheme } from "../../../themes/darkTheme";

const BlinkingText = styled.h1`
    position: relative;
    font-family: ${darkTheme.font.family};
    font-size: ${darkTheme.font.size.header};
    color: ${darkTheme.font.colors.header};
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
    line-height: 0.7em;
    outline: none;
    animation: animate 5s linear infinite;

    @keyframes animate{
        0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%
        {
            color: ${darkTheme.font.colors.header.begin};
            box-shadow: none;
        }
        18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%
        {
            color: ${darkTheme.font.colors.header.end};
            text-shadow: ${darkTheme.font.shadows.header};

        }
    }   
`;

const TextMenuHeader = styled.h2`
    position: relative;
    font-family: ${darkTheme.font.family};
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: ${darkTheme.font.size.menu.header};
    color: ${darkTheme.font.colors.menu.header};
    text-transform: uppercase;
    text-align: center;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
    line-height: 1em;
    outline: none;
    text-shadow: ${darkTheme.font.shadows.menu.header};
    opacity: ${({ opacity }) => opacity || 1};
`;

const TextMenuItem = styled(TextMenuHeader)`

    color: transparent;
    cursor: pointer;
    text-shadow: ${darkTheme.font.shadows.menu.item};
    
    ::before {
        content: "${({children}) => children}";
        position: absolute;
        color: ${darkTheme.font.colors.menu.item};
        width: 0%;
        overflow: hidden;
        text-shadow: none;
        transition: 1s;
        white-space: nowrap;
    }

    :hover::before {
        width: 100%;
        -webkit-text-stroke: 2px #fff;
    }
`;

const Status = styled(TextMenuHeader)`
    text-shadow: ${darkTheme.font.shadows.menu.status};
`;

const TextEmptyCell = styled(TextMenuHeader)`
    color: ${darkTheme.font.colors.cells.empty};
    text-shadow: ${darkTheme.font.shadows.cells.empty};
`;

const TextFillCellX = styled(TextMenuHeader)`
    color: ${darkTheme.font.colors.cells.fill.X};
    text-shadow: ${darkTheme.font.shadows.cells.fill.X};
`;

const TextFillCellO = styled(TextMenuHeader)`
    color: ${darkTheme.font.colors.cells.fill.O};
    text-shadow: ${darkTheme.font.shadows.cells.fill.O};
`;

export { BlinkingText, TextMenuHeader, TextMenuItem, Status, TextEmptyCell, TextFillCellX, TextFillCellO};