import React from "react";
import { Link } from "react-router-dom";
import { Divider } from 'antd';
import './style.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Divider type="vertical" />
        <Link to="group">Group</Link>
        <Divider type="vertical" />
        <Link to="secret">Secret</Link>
      </div>
    );
  }
}
