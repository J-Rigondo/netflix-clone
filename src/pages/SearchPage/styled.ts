import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;
export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

export const Page = styled.div<{ active: boolean }>`
  font-weight: 600;
  border-radius: 15px;
  margin-right: 1rem;
  cursor: pointer;
  border: 1px solid white;
  padding: 1rem;
  background-color: ${(props) => (props.active ? 'white' : 'black')};
  color: ${(props) => (props.active ? 'black' : 'white')};

  &:hover {
    background-color: white;
    color: black;
  }
`;
