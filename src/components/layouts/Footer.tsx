const Footer = () => {
  return (
    <div className="md:flex justify-between border-y-2 py-4 my-4">
      <h1 className="text-3xl font-semibold ">
        <span className="text-blue-500">D</span>isaster{" "}
        <span className="text-red-600">R</span>elief
      </h1>
      <div>
        <h1 className="text-2xl font-semibold">Fundraise for</h1>
        <p>Medical</p>
        <p>Emergency</p>
        <p>Memorial</p>
        <p>Education</p>
        <p>Non Profit</p>
        <p>Crisis relief</p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Learn More</h1>
        <p>How disaster relief works</p>
        <p>Common Questions</p>
        <p>Success Stories</p>
        <p>Supported Countries</p>
        <p>Charity Fundraising</p>
        <p>Pricing</p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Resources</h1>
        <p>Help Center</p>
        <p>Blog</p>
        <p>Disaster Relief Strories</p>
        <p>Newsroom</p>
        <p>Careers</p>
        <p>More Resources</p>
      </div>
    </div>
  );
};

export default Footer;
