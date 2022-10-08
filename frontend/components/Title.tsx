interface TitleProps {
  children?: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-white text-center font-semibold text-3xl mb-8">
      {children}
    </h1>
  );
};

export default Title;
