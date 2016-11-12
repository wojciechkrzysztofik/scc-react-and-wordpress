import React from 'react'
import ReactDOM from 'react-dom'

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="app container">
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
