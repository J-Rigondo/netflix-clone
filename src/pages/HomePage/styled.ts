import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  height: 200vh;
  background-color: black;
  overflow-x: hidden;
`;

export const Loading = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div<{ bgphoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  color: white;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 40px;
`;

export const Overview = styled.p`
  font-size: 20px;
  width: 50vw;
  line-height: 30px;
`;

export const Slider = styled.div`
  position: relative;
  top: -20%;
`;

export const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  position: absolute;
  width: 100%;
`;

export const Box = styled(motion.div)<{ bgphoto: string }>`
  background-color: white;
  height: 200px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
`;
