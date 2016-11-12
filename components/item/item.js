import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

require('./assets/stylesheets/item.scss')

export default class Item extends React.Component {
  render() {
    return (
      <li className="item">
        <Link to={this.props.path}>
          <img src={this.props.thumb} alt="Promocja" />
        </Link>
      </li>
    )
  }
}
