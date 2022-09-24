import React from 'react';
import { useParams } from 'react-router-dom';
import KidBoy from '../../TrialRooms/KidBoy';
import KidGirl from '../../TrialRooms/KidGirl';
import NormalMen from '../../TrialRooms/NormalMen';
import NormalWomen from '../../TrialRooms/NormalWomen';

export const TrialRoom = () => {
  const { personType, figureType } = useParams();
  return (
    <>
      {personType === 'men' && figureType === 'normal' && (
        <NormalMen personType={personType} figureType={figureType} />
      )}
      {personType === 'women' && figureType === 'normal' && (
        <NormalWomen personType={personType} figureType={figureType} />
      )}
      {personType === 'kid' && figureType === 'boy' && (
        <KidBoy personType={personType} figureType={figureType} />
      )}
      {personType === 'kid' && figureType === 'girl' && (
        <KidGirl personType={personType} figureType={figureType} />
      )}
    </>
  );
};
