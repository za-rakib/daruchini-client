import React from 'react';
import { useParams } from 'react-router-dom';
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
    </>
  );
};
