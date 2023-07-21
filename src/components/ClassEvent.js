import {Component} from "react";

class ClassEvent extends Component {
    handleClick(){
        console.log('Class based component')
    }
    render(){
        return(
            <div>
                this is a Class based Class
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }

}

export default ClassEvent;