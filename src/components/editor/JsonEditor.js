import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Editor.css";

export default function JsonEditor(props) {
  const [jsonValue, setJsonValue] = useState([]);

  const handlePaste = (event) => {
    event.preventDefault();
    setJsonValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getData(jsonValue);
  };

  return (
    <>
      <div className="json_editor">
        <h1 className="text_center">Paste your JSON here</h1>
        <form className="editor_form">
          <textarea type="text" onChange={handlePaste} value={jsonValue} />
        </form>

        <div className="button_div">

        <div>
          <a className="github_link" href="https://github.com/Vivek3072" target="_blank" rel="noreferrer">
          <BsGithub /> Vivek3072
          </a>
          <a className="linkedin_link" href="https://www.linkedin.com/in/vivek-srivastava-2b3642202" target="_blank" rel="noreferrer">
          <BsLinkedin /> Linkedin
          </a>
        </div>
        
          <button className="button" onClick={handleSubmit}>
            View Form
          </button>
        </div>
      </div>
    </>
  );
}
