import styled from 'styled-components';

export const TomorrowContainer = styled.div`
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: center;

    flex-direction: column;
`;

export const TomorrowWeatherContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-wrap: wrap;
    }
`;

export const TomorrowTitle = styled.p`
    color: white;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
`;

export const EmptyMessage = styled.p`
    color: white;
    font-size: 20px;
    text-align: center;

`;
