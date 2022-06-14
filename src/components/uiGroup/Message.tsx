import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

const Message: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 pb-8 mx-5 max-w-xl text-sm leading-8 transition-all duration-1000 ${
        inView ? 'opacity-1' : 'opacity-0'
      }`}
    >
      <p>
        皆様いかがお過ごしでしょうか。
        <br />
        このたび結婚式を執り行うこととなりました。
      </p>
      <p>
        日頃お世話になっております皆様に
        <br />
        私どもの門出をお見守りいただきたく
        <br />
        ささやかながら小宴を催したく存じます
      </p>
      <p>
        ご多用中誠に恐縮ではございますが
        <br />
        ぜひご出席いただきたくご案内申し上げます
      </p>
    </div>
  );
};

export default Message;
