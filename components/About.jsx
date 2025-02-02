import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(){
        super();
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent component did mount");
    }

    render(){
        console.log("parent render");
        return (
            <div>
                <h1>About Us</h1>
                <UserClass/>
                {/* <UserClass name={"first"} location={"delhi"}/> */}
                {/* <UserClass name={"second"} location={"mumbai"}/> */}
            </div>
        )
    }
}
// const About = ()=>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>Focus on the process not on the result</p>
//             <UserClass name={"Class Based Component"} location={"Knowhere"}/>
//         </div>
//     )
// };

export default About;