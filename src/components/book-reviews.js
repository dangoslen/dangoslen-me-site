import * as React from "react";
import { Component } from "react";

class BookReviews extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://testimonial.to/js/iframeResizer.min.js";
    script.async = true;
    this.instance.appendChild(script);

    const resize = document.createElement("script")
    script.async = true;
    script.innerHTML = "iFrameResize({log: false, checkOrigin: false}, '#testimonialto-code-review-champion-embracing-the-power-of-technical-feedback-tag-all-light-animated');"
    this.instance.appendChild(resize)
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.instance = el)}></div>
        <iframe height="420px" id='testimonialto-code-review-champion-embracing-the-power-of-technical-feedback-tag-all-light-animated' src="https://embed-v2.testimonial.to/w/code-review-champion-embracing-the-power-of-technical-feedback?animated=on&horizontal=on&theme=light&shadowColor=f7f7f7&speed=.5&rows=1&tag=all" frameborder="0" scrolling="no" width="100%"></iframe>
      </div>
    );
  }
}

export default BookReviews;