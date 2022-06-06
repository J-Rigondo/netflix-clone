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
  top: -16%;
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

export const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    zIndex: 99,
    y: -50,
    transition: {
      delay: 0.5,
    },
  },
};

export const Box = styled(motion.div)<{ bgphoto: string }>`
  position: relative;
  background-color: white;
  height: 200px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    transform-origin: bottom left;
  }
  &:last-child {
    transform-origin: bottom right;
  }
`;

export const boxInfoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export const BoxInfo = styled(motion.div)`
  position: absolute;
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 16px;
    color: white;
  }
`;
