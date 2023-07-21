import { useState } from "react"

function FunctionEvent(){
    // let counter = 0
    const [counter, setCounter] = useState(0)
    function handleClick(){
        console.log("button is clicked")
        counter += 1
    }
    // setInterval(() => {
    //     setCounter(count => count += 1)
    // }, 1000)
    // const timeOut = () => {
        // setTimeout(() => {
        //     setCounter(count => {
        //         console.log({ count });
        //         return count + 1
        //     })
        // }, 1000)
    // }
    return(
        <div>
            Function Component {counter}
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}

export default FunctionEvent;