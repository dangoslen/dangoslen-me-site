
import * as React from "react";
import { Component } from "react";

class StickyEmail extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://relentless-producer-4085.ck.page/b38a988870/index.js";
    script.async = true;
    script.setAttribute("data-uid", "b38a988870");
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

export default StickyEmail;