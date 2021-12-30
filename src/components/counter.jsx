import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Counter extends React.Component {
  state = {
    count: this.props.value,
    tags: []
  };


  handleIncrement = product => {

    this.setState({ count: this.state.count + 1 })
  };
  renderTags(){
    if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }
  render() {      
    console.log(this.props);

    return(
    <div>
      <h4>{this.props.id}</h4>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={(product) => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
      <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      {/* {this.state.tags.length === 0 && "Please create a new tag!"}
      {this.renderTags()} */}
    </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const { count } = this.state;
    return count ===  0 ? 'Zero' : count;
  }
}
 
export default Counter;