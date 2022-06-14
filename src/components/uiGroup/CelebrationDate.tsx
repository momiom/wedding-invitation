import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

const Message: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <>
      <div
        ref={ref}
        className={`mt-8 mx-5 max-w-xl transition-all duration-1000 ${
          inView ? 'opacity-1' : 'opacity-0'
        }`}
      >
        <h2 className="text-5xl italic font-libre">event</h2>
        <p className="text-lg">日時・会場</p>

        <div
          ref={ref}
          className={`mt-4 event-date pb-8 mx-5 max-w-xl text-sm grid grid-cols-2 gap-2  transition-all duration-1000 ${
            inView ? 'opacity-1' : 'opacity-0'
          }`}
        >
          <p className="justify-self-center">日時・会場</p>
          <p>2022.09.11 sun</p>

          <p className="justify-self-center">挙式</p>
          <p>11:00</p>

          <p className="justify-self-center">披露宴</p>
          <p>11:30</p>
        </div>
      </div>
    </>
  );
};

export default Message;
