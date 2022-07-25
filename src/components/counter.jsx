import React, { Component } from "react";
// controlled component, draws from counters parent component
class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onAdd(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onRemove(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Remove
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-0.5"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag."}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>No tags</p>;

  //     return (
  //       <ul> {this.state.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
  //     );
  //   }
}

export default Counter;
