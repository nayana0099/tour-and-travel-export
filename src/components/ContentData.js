import { Component } from "react";
import Image1 from "../assets/0.jpg";
import Image2 from "../assets/boat.jpg";
import Image3 from "../assets/p.jpg";
import Image4 from "../assets/paris.jpg";
import "./ContentStyles.css";

class ContentData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="cont-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <br />
          <p>{this.props.text1}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default ContentData;
