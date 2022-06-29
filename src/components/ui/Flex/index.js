import styled from "styled-components";

const Flex = styled.div`

    display: ${({ display }) => display || "flex"};
    box-sizing: ${({ boxSize }) => boxSize || "border-box"};

    height: ${({ height }) => height || "auto"};
    width: ${({ width }) => width || "auto"};
    min-height: ${({ minHeight }) => minHeight || "auto"};
    min-width: ${({ minWidth }) => minWidth || "auto"};

    padding: ${({ padding }) => padding || null};
    margin: ${({ margin }) => margin || null};
    gap: ${({ gap }) => gap || null};

    justify-content: ${({ justify }) => justify || "center"};
    align-items: ${({ align }) => align || "center"};
    flex-direction: ${({ direction }) => direction || "row"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};

    position: ${({ position }) => position || "static"};
    left: ${({ left }) => left || null};
    top: ${({ top }) => top || null};
    transform: ${({ transform }) => transform || null};

    border: ${({ border }) => border || null};
    border-radius: ${({ radius }) => radius || null};
    background: ${({ background }) => background || null};
    box-shadow: ${({ shadow }) =>  shadow || null};

`;

const Wrapper = styled(Flex)`

    animation: ani 3s forwards;

    @keyframes ani 
        {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }
`;

export { Flex, Wrapper }
