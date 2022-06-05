import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  font-size: 14px;
  padding: 20px 60px;
  top: 0;
  color: white;
`;

export const Col = styled.div<{ ml?: string | undefined }>`
  display: flex;
  align-items: center;
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
`;

export const logoVariants = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: '#E51013',
  },
};

export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled(Link)`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
  cursor: pointer;
`;

export const Circle = styled(motion.span)`
  background-color: ${(props) => props.theme.red};
  width: 100%;
  height: 6px;
  margin-top: 3px;
  border-radius: 5px;
`;

export const Search = styled.span`
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;

  svg {
    height: 25px;
    width: 17px;
    fill: white;
  }
`;

export const Input = styled(motion.input)`
  color: black;
  padding: 5px;
  border-radius: 5px;
  transform-origin: right;
  width: 200px;
  margin-right: 10px;
`;
