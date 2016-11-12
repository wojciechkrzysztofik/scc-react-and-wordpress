import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import Item from '../item/item'

require('./assets/stylesheets/list.scss')

var logoSmallPath = require('./assets/images/logo.png')
var sampleThumbPath = require('./assets/images/thumb.jpg')

export default class List extends React.Component {
  constructor(props, context) {
     super(props, context);

     this.state = {
       entries: []
     };
   };

  componentDidMount() {
    self = this;
    $.ajax({
        type : 'GET',
        url : 'http://appslabs.pl/prinspiration/scc/wp-json/wp/v2/posts?filter[category_name]=' + this.props.route.category,
        success : function(response){
          self.setState({ entries: response });
        }
    });
  }

  render() {
    let slug = this.props.route.path
    return (
      <div className="list-page">
        <div className="wrapper">
          <div className="innerContainer">
            <header className="clearfix">
              <div className="col-xs-8">
                <h1>{this.props.route.title}</h1>
                <Link className="btn btn-small" to="/">wróć</Link>
              </div>
              <div className="col-xs-4">
                <img src={logoSmallPath} alt="Silesia City Center - logo" />
              </div>
            </header>

            <div className="items">
              <ul>

                { this.state.entries.map(function(entry, i){
                    return <Item path={slug + '/' + entry.id} thumb={entry.acf.cover} key={i} />
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
