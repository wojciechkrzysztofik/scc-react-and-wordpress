import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

require('./assets/stylesheets/preview.scss')
var coverImagePath = require('./assets/images/cover.png')

export default class Preview extends React.Component {
  constructor(props, context) {
     super(props, context);

     this.state = {
       title: '',
       cover: '',
       content: '',
       start: '',
       end: ''
     };
   };

  componentDidMount() {
    self = this;
    $.ajax({
        type : 'GET',
        url : 'http://appslabs.pl/prinspiration/scc/wp-json/wp/v2/posts/' + this.props.params.entryID,
        success : function(response){
          self.setState({ name: response.title.rendered })
          self.setState({ cover: response.acf.cover})
          self.setState({ content: response.content.rendered})
          self.setState({ start: response.acf.promotion_start})
          self.setState({ end: response.acf.promotion_end})
        }
    });
  }

  createContentMarkup() {
    return {__html: this.state.content};
  }

  render() {
    return (
      <div className="preview-page">
        <div className="wrapper">
          <div className="innerContainer">
            <div className="row">
              <div className="col-xs-8">
                <h1 className="title">{this.props.route.title}</h1>
              </div>
              <div className="col-xs-4">
                <Link to={this.props.route.return} className="btn btn-small pull-right">wróć</Link>
              </div>
            </div>
            <div className="imageWrapper">
              <img src={this.state.cover} alt="" />
            </div>
            <h3 className="name">{this.state.name}</h3>
            <p className="description" dangerouslySetInnerHTML={this.createContentMarkup()}></p>

            <p className="time">{this.props.route.time_label} od <span>{this.state.start}</span> do <span>{this.state.end}</span>.</p>
          </div>
        </div>
      </div>
    )
  }
}
