'use client';

import React from 'react';

import { InvitationDTO } from '@/lib/invitation';

const BackgroundView = ({ backgroundImageData, basicBackgroundType }: Partial<InvitationDTO>) => {
  const backgroundImageUrl = !backgroundImageData?.endsWith('null')
    ? `url(${process.env.NEXT_PUBLIC_API_URL}${backgroundImageData})`
    : `url("/images/background/background_${basicBackgroundType}.png")`;

  return (
    <div
      className='fixed w-full max-w-content min-h-dvh bg-center bg-cover bg-no-repeat z-[-1]'
      style={{ backgroundImage: backgroundImageUrl }}
    ></div>
  );
};

export default BackgroundView;
