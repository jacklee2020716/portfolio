import React from "react";

const skillsContent = [
  //Basic
  { skillPercent: "87", skillName: "C++" },
  { skillPercent: "64", skillName: "Python" },
  { skillPercent: "92", skillName: "Typescript" },
  { skillPercent: "88", skillName: "Javascript" },
  { skillPercent: "72", skillName: "Solidity" },
  { skillPercent: "68", skillName: "Rust" },
  { skillPercent: "77", skillName: "Golang" },
  { skillPercent: "90", skillName: "Node.js" },

  { skillPercent: "73", skillName: "PHP" },

  { skillPercent: "85", skillName: "MySQL" },
  { skillPercent: "73", skillName: "PostgreSQL" },
  { skillPercent: "78", skillName: "Redis" },
  { skillPercent: "83", skillName: "MongoDB" },

  //WEB3
  { skillPercent: "88", skillName: "Web3 Integration" },
  { skillPercent: "83", skillName: "DEX" },
  { skillPercent: "66", skillName: "Moralis" },
  { skillPercent: "53", skillName: "Ethereum" },
  { skillPercent: "53", skillName: "Solana" },
  { skillPercent: "53", skillName: "Casper" },

  { skillPercent: "78", skillName: "Hardhat" },
  { skillPercent: "66", skillName: "Truffle" },

  //Fron-end
  { skillPercent: "95", skillName: "HTML5" },
  { skillPercent: "93", skillName: "CSS" },
  { skillPercent: "85", skillName: "SCSS" },
  { skillPercent: "59", skillName: "LESS" },
  { skillPercent: "90", skillName: "React.js" },
  { skillPercent: "74", skillName: "Angular" },
  { skillPercent: "64", skillName: "Vue" },

  //OTHERS
  { skillPercent: "84", skillName: "STREAMING" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 p${val.skillPercent}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
