import { cva } from 'class-variance-authority';
import Image from 'next/image';
import stickerImage from 'public/images/sticker/01-Sticker-Module.png';

import { ICard } from '..';

const CardHeader = ({ invitationType, hostName }: Pick<ICard, 'invitationType' | 'hostName'>) => {
  return (
    <div className={cardHeaderVariants({ invitationType })}>
      {invitationType === 'RECEIVED' && (
        <Image src={stickerImage} alt='sticker' width={58} height={58} />
      )}
      {invitationType === 'SENT' && (
        <>
          <div className={profileImageStyles}>
            <Image src={'https://avatar.iran.liara.run/public'} alt='host' width={36} height={36} />
          </div>
          <div className={messageBoxStyles}>
            <span className='font-medium mr-2'>From.</span>
            <span>{hostName}</span>
          </div>
        </>
      )}
    </div>
  );
};

const cardHeaderVariants = cva('w-[180px] absolute top-0', {
  variants: {
    invitationType: {
      RECEIVED: 'flex justify-center',
      SENT: 'h-[68px] flex flex-col items-center',
    },
  },
});

const profileImageStyles = 'w-[38px] h-[38px] rounded-full border-2 border-white';

const messageBoxStyles =
  'w-fit mt-6 px-8 py-4 bg-white opacity-80 rounded-[6px] text-caption2 text-gray-7';

export default CardHeader;
