import React from 'react';
import { useParams } from 'react-router-dom';
import NormalMen from '../../TrialRooms/NormalMen';

export const TrialRoom = () => {
  const { personType, figureType } = useParams();
  return (
    <>
      {personType === 'men' && figureType === 'normal' && (
        <NormalMen personType={personType} figureType={figureType} />
      )}
    </>
  );
};
