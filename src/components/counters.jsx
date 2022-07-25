import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {onReset, counters, onDelete, onAdd, onRemove} = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onAdd={onAdd}
            onRemove={onRemove}
            counter={counter}
          >
            <h4>Item #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
