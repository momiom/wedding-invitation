type Props = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ className = '', children }: Props) => {
  return <div className={`px-6 md:px-10 ${className}`}>{children}</div>;
};

export default Container;
