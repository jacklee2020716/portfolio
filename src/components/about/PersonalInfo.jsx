import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "James" },
  { meta: "last name", metaInfo: "Lee" },
  { meta: "Age", metaInfo: "28 Years" },
  { meta: "Nationality", metaInfo: "Canada" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "2314 11th Ave, Calgary, Canada" },
  { meta: "phone", metaInfo: "+1 613-226-2647" },
  { meta: "Email", metaInfo: "jame98813@gmail.com" },
  { meta: "Skype", metaInfo: "live:.cid.cdcf78e50858c224" },
  { meta: "Telegram", metaInfo: "@jame98813" },
  { meta: "languages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
