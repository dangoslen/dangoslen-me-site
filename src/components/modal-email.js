import * as React from "react";
import { Component } from "react";

class ModalEmail extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://relentless-producer-4085.ck.page/dd955c1d63/index.js";
    script.async = true;
    script.setAttribute("data-uid", "dd955c1d63");
    this.instance.appendChild(script);
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.instance = el)}></div>
      </div>
    );
  }
}


export default ModalEmail;