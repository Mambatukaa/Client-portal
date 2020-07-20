import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SectionHeader from "../../common/components/SectionHeader";
import CreateButton from "../../common/components/CreateButton";

class ForumList extends React.Component {
  handleClick = () => {
    console.log("forum");
  };
  renderItem(title) {
    return (
      <li className="forum-item">
        <Link to="/forums/forum">
          <h4>{title}</h4>
        </Link>
        <div className="reply">
          <Link to="/#" className="forum-author">
            Uuganbayar
          </Link>
          replied 15 mins ago
          <span className="reply-count">&#8226; 5 replies</span>
        </div>
        <Row className="detail-row">
          <Col className="categories">
            <Link to="/#">General</Link>
            <Link to="/#">Jquery</Link>
            <Link to="/#">PHP</Link>
          </Col>
          <Col className="counts">
            <span>10.5k views</span>
            <span>1.5k comments</span>
          </Col>
        </Row>
      </li>
    );
  }
  render() {
    return (
      <div className="forum-page">
        <SectionHeader icon="speech-bubble-2" title="Forum" />
        <CreateButton value="Create forum" onClick={this.handleClick} />
        <ul className="forum-list">
          {this.renderItem("Reasonable Visual Designer and Inventor")}
          {this.renderItem("Former Planner of AR Massacres")}
          {this.renderItem("Idiot of Design Reclusivity")}
        </ul>
      </div>
    );
  }
}

export default ForumList;
