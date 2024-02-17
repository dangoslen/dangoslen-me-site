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
    script.innerHTML = "iFrameResize({log: false, checkOrigin: false}, '#testimonialto-carousel-code-review-champion-embracing-the-power-of-technical-feedback-tag-all-light');"
    this.instance.appendChild(resize)
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.instance = el)}></div>
        <iframe id='testimonialto-carousel-code-review-champion-embracing-the-power-of-technical-feedback-tag-all-light' src="https://embed-v2.testimonial.to/carousel/all/code-review-champion-embracing-the-power-of-technical-feedback?theme=light&autoplay=off&showmore=on&one-row=off&same-height=off&tag=all&arrowColor=d9825c" frameborder="0" scrolling="no" width="100%"></iframe>
      </div>
    );
  }
}

export default BookReviews;