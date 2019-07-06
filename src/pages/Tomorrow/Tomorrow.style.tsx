import styled from 'styled-components';

export const TomorrowContainer = styled.div`
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