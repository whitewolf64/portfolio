import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Html", xp: 1.2 },
      { id: 2, value: "Css", xp: 1 },
      { id: 3, value: "javascript", xp: 1 },
      { id: 4, value: "React", xp: 1 },
    ],
    frameworks: [
      { id: 1, value: "Node.js", xp: 1 },
      { id: 2, value: "MySQL", xp: 1 },
      { id: 3, value: "Bootstrap", xp: 1 },
      { id: 4, value: "Express", xp: 1 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="Languages"
        />
        <ProgressBar
          languages={frameworks}
          title="Technologies"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}
export default Languages;
