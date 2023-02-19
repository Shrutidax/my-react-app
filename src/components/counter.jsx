import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count : 0,
        tags : ["tag1", "tag2" , "tag3"]
    };

    styles = {
        color : 'blue'
    }

    // rendertags() {
    //     if (this.state.tags.length === 0) 
    //         return <p>There is no tags!</p>
    //     return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
    // }

    handleIncrement = () => {
        this.setState({count : this.state.count + 1})
    }

    handleDecrement = () => {
        if (this.state.count > 0)
        this.setState({count : this.state.count - 1})
    }

    render() { 
        return (
        <div>
            <span style = {this.styles} className='badge badge-pill badge-primary m-2'>{this.formatCount()} </span>
            <button onClick = {this.handleIncrement} className = 'btn btn-secondary btn-sm'> + </button>
            <button onClick = {this.handleDecrement} className = 'm-2 btn btn-secondary btn-sm'> - </button>
            {/* {this.rendertags()} */}
        </div>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero"  : count;
    }
}
 
export default Counter;