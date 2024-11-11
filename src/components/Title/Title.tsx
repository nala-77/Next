interface TitleProps {
    head: string;
  }
  
  const Title = ({ head }: TitleProps) => {
    return (
      <h3 className="max-724:text-2xl max-724:text-center text-32 font-extrabold capitalize mb-15">
        {head}
      </h3>
    );
  };
  
  export default Title;
  