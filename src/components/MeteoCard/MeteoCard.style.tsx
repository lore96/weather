import styled from 'styled-components';

export const MeteoCardContainer = styled.div`
    width: 95%;
    border-radius: 10px;

    margin: 2%;

    @media (min-width: 768px) {
        max-width: 45%;
    }

    color: white;
    background-color: #f9a825;
    box-shadow: 5px 5px #AAAAAA;
`;

export const PlaceContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`; 

export const DateContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`; 

export const TemperatureContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`; 

export const WeatherContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const StyledPlace = styled.h3`
    margin: 0;
    margin-top: 1em;
`;

export const StyledDate = styled.p`
    margin: 0;
    margin-top: 1em;

`;

export const StyledTemperature = styled.p`
    font-size: 100px;
    margin: 0;
    margin: 1rem;

    @media (max-width: 768px) {
        font-size: 60px;
        margin: 0.5rem;
    }
`;

export const StyledWeather = styled.h4`
    margin: 0;
    margin-bottom: 1em;
`;

export const StyledIcon = styled.i`
    font-size: 100px;
    margin: 1rem;
    @media (max-width: 768px) {
        font-size: 60px;
        margin: 0.5rem;
    }

    &.gray {
        color: #efefef
    }

    &.yellow {
        color: #ffe833;
    }

    &.white {
        color: #ffffff;
    }
`;