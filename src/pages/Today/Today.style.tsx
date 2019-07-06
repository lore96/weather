import styled from 'styled-components';

export const TodayContainer = styled.div`
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: center;

    flex-direction: column;
`;

export const TodayWeatherContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    
    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

export const TodayTitle = styled.p`
    color: white;
    font-weight: bold;
    font-size: 30px;
`;

export const EmptyMessage = styled.p`
    color: white;
    font-size: 20px;
`;
