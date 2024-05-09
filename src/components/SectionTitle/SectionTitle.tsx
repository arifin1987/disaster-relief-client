type SectionProps = {
  subHeading: string;
  heading: string;
};

const SectionTitle = ({ heading, subHeading }: SectionProps) => {
  return (
    <div className="text-center py-4">
      <p className="text-green-500 uppercase">---{subHeading}---</p>
      <h1 className="text-3xl font-bold text-blue-400 uppercase">
        --{heading}--
      </h1>
    </div>
  );
};

export default SectionTitle;
