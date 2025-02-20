import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
                {/* using context in class based components */}
                <div>
                    <UserContext.Consumer>
                        {({loggedUser})=><h3 className="p-2 text-red-500">Logged User : {loggedUser}</h3>}
                    </UserContext.Consumer> 
                </div>
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