import React from "react";

const experienceContent = [
  {
    year: "May 2021 - Current",
    position: "Software Engineer",
    compnayName: "Self-Employed",
    details:
      "Worked on Solana NFT Marketplace integration such as Hyperspace, Magic Eden and P2E game project powered by Ethereum network.",
  },
  {
    year: "May 2021 - Dec 2021",
    position: "Full-Stack Blockchain Developer",
    compnayName: "Self-Employed",
    details:
      "Worked on several DeFi projects like NFT Marketplace, Dex, and so on.",
  },
  {
    year: " May 2017 - Apr 2018",
    position: "Web developer Internship",
    compnayName: "Mattered",
    details:
      "Learned how to manage projects and write reusable, clean and robust code",
  },
  {
    year: "Jul 2018 - Feb 2019",
    position: "Back-end developerr",
    compnayName: "Alliance App",
    details:
      "Learned organization’s overall strategies, business operations, and what drives success in the business.Worked on a WebRTC application backend development using Node.js, socket.io in a month.",
  },
  {
    year: "Jun 2019 - Apr 2021",
    position: "Full-stack web developer",
    compnayName: "Liiingo",
    details: "Achieved SEO-Friendly Front-end using Next.js, and complicated state management using Redux/XState.",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
