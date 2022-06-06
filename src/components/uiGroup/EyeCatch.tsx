/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

const EyeCatch: FC = () => {
  return (
    <div className="overflow-hidden relative w-full text-center img-effect-wrapper">
      <img
        src="/top.webp"
        alt="結婚式"
        className="object-cover object-bottom w-full h-full img-effect"
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-white img-effect-wrapper"></div> */}
    </div>
  );
};

export default EyeCatch;
