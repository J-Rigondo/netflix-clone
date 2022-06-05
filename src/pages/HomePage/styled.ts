import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 200vh;
`;

export const Loading = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  color: white;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  font-size: 26px;
  width: 50vw;
`;
