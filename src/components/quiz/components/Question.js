import React from 'react';
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
const Question = ({ question }) => {
  console.log("......=>" + JSON.stringify(question));
  let dataSrc = question.questionType !== "text" ? question.questionData : null;
  return (
    <div>
      {dataSrc && <iframe height="300" width="500" src={dataSrc}></iframe>}
    </div>
  );
};

export default Question;
