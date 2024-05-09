import SectionTitle from "@/components/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <div>
      <SectionTitle subHeading="we work for humanity" heading="About Us" />
      <div className="md:flex justify-between gap-8">
        <div className=" border-slate-600 border-2 p-4 rounded shadow-2xl">
          <h1 className="text-2xl text-red-500 ">Our Mission</h1>
          <p>
            With so much time spent in the classroom, teachers can make a huge
            impact on a student’s life. We asked the GoFundMe community to share
            a memory of a teacher who helped them.
          </p>
        </div>
        <div className=" border-slate-600 border-2 p-4 rounded shadow-2xl">
          <h1 className="text-2xl text-red-500 ">Our Vission</h1>
          <p>
            GoFundMe has the first and only donor guarantee in the industry.You
            can personalize and share your GoFundMe in just a few minutes.Our
            Trust & Safety team works around the clock
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
