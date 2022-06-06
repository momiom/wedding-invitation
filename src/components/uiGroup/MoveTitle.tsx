import { FC } from 'react';

const MoveTitle: FC = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="relative top-[-130px] left-[4%] w-[90%] h-[300px] title-effect">
      <div className="sticky top-[450px]">
        <h2 className="text-5xl italic tracking-wider">
          wedding
          <br />
          invitation
        </h2>
        <p className="text-xl">結婚式のご招待</p>
      </div>
    </div>
  );
};

export default MoveTitle;
