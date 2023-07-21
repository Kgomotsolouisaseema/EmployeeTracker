import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.counter = 2
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }
  // increment = ()=>{} the arrow function way of binding events with classes, this is recommended
  increment(){ 
    // console.log(this );
    this.setState({
      counter:this.state.counter + 1
    })
  this.counter += 2
  }

  render() {
    setInterval(() => {
      // this.counter += 1
      this.setState({
        counter: this.state.counter += 1
      })
    }, 1000)
    return (
      <div>
        <h3>Count Value is:{this.state.counter} </h3>
        <button onClick={this.increment} >Click</button>
        {/* <button onClick={()=>this.increment()}></button>  the 3rd  way to bind  */}
        {/* <button onClick={()=>this.increment()} >Click</button> */}{/* this is the normal event handling and not binding*/ }
      </div>
    );
  }
};
//create decreament button 

export default Counter;
