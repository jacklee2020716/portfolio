import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Jack" },
  { meta: "last name", metaInfo: "Lee" },
  { meta: "Age", metaInfo: "28 Years" },
  { meta: "Nationality", metaInfo: "United State" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "640 Granite Way, Wellington, NV, 89444" },
  { meta: "phone", metaInfo: "+1 613-226-2647" },
  { meta: "Email", metaInfo: "jakelee2020716@gmail.com" },
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
