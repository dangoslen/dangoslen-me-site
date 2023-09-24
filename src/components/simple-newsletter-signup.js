import * as React from "react";
import { Component } from "react";
import styled from "styled-components"

class SimpleNewsletterSignup extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://relentless-producer-4085.ck.page/07eaaed918/index.js";
    script.async = true;
    script.setAttribute("data-uid", "07eaaed918");
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

export default SimpleNewsletterSignup;