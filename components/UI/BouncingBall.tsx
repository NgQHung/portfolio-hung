import React from 'react';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/react';

const bouncing = keyframes`
  0% {
         transform: translateY(-50px);
      }
      10%{
        height: 50px;
        width: 50px;
      }
      30% {
         height: 50px;
        width: 40px;
      }
      50% {
         transform: translateY(140px);
          height: 30px;
        width: 57px;
      }
      75%{
         height: 50px;
        width: 57px;
      }
      100% {
         transform: translateY(-50px);
      }
`;
const ContainerBall = styled.div`
    width: 40px;
    height: 40px;
    list-style: none;
    background-color: rgb(55, 17, 108);
    margin: auto 20px;
    border-radius: 50%;
    animation: ${bouncing} 1s linear infinite alternate-reverse;
`;

const BouncingBall = () => {
    return (
        <div className="flex flex-row items-center justify-center lg:justify-end ">
            <div className="flex flex-row justify-between ">
                <ContainerBall />
                {/* <ContainerBall />
                <ContainerBall /> */}
            </div>
        </div>
    );
};

export default BouncingBall;
