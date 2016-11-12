import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

require('./assets/stylesheets/home.scss')
var logoBigPath = require('./assets/images/logo-big.png')

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="wrapper">
          <img src={logoBigPath} alt="Silesia City Center - logo" />
        </div>

        <div className="buttons">
          <div className="col-xs-6">
            <Link className="btn" to="/promotions">Promocje</Link>
          </div>
          <div className="col-xs-6">
            <Link className="btn pull-right" to="/collections">Nowe kolekcje</Link>
          </div>
        </div>
      </div>
    )
  }
}
