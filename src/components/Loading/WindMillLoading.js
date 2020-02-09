import React from 'react';
import styled, { keyframes } from 'styled-components';

const commonStyle = {
    margin: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

const bouncedelay = keyframes`
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const LoadingContainer = styled.div`
  height: 0;
  width: 12px;
  border-width: 0 12px ${props => props.size === 'small' ? 40 : (props.size === 'large' ? 180 : 50)}px 12px;
  border-style: none solid solid;
  border-color: transparent transparent ${props => props.color || '#00adb5'};
  position: relative;
  padding-top: 75px;
`;

const ItemFirst = styled.div`
  height: 0;
  width: 6px;
  border-width: ${props => props.size === 'small' ? 24 : (props.size === 'large' ? 120 : 30)}px 6px 0px 6px;
  border-style: solid solid none;
  border-color: ${props => props.color || '#00adb5'} transparent transparent;
  transform-origin: 0 -6px;
  transform: rotate(60deg);
  position: absolute;
`;

const ItemSecord = styled.div`
  height: 0;
  width: 6px;
  border-width: ${props => props.size === 'small' ? 24 : (props.size === 'large' ? 120 : 30)}px 6px 0px 6px;
  border-style: solid solid none;
  border-color: ${props => props.color || '#00adb5'} transparent transparent;
  transform-origin: 6px -3px;
  transform: rotate(180deg);
  position: absolute;
`;

const ItemThree = styled.div`
  height: 0;
  width: 6px;
  border-width: ${props => props.size === 'small' ? 24 : (props.size === 'large' ? 120 : 30)}px 6px 0px 6px;
  border-style: solid solid none;
  border-color: ${props => props.color || '#00adb5'} transparent transparent;
  transform-origin: 15px 0;
  transform: rotate(300deg);
  position: absolute;
`;

const Center = styled.div`
  width: 12px;
  height: 12px;
  border: 9px ${props => props.color || '#00adb5'} solid;
  background: #fff;
  border-radius: 15px;
  transform: translateX(-9px) translateY(-12px);
  position:absolute;
`;

const Con = styled.div`
  position: relative;
  animation: ${bouncedelay} ${props => props.speed || 5}s infinite linear;
`;

const WindMillLoading = ({ style = commonStyle, color, speed, size="default" }) => {
  return (
    <LoadingContainer style={style} color={color} size={size}>
      <Center color={color} />
      <Con speed={speed}>
        <ItemFirst color={color} size={size} />
        <ItemSecord color={color} size={size} />
        <ItemThree color={color} size={size} />
      </Con>
    </LoadingContainer>
  );
};

export default WindMillLoading;