import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // console.log(this.props.name + "child constructor");
        this.state = {
            // count : 0,
            // count2 : 1,
            userInfo : 0,
        };
    }
    async componentDidMount(){
        // console.log(this.props.name + "component did mount");
        // this.timer = setInterval(() => {
        //     console.log("hello");
        // }, 1000);
        const data = await fetch("https://api.github.com/users/architsr313");
        const json = await data.json();

        this.setState({
            userInfo : json,
        });
    }
    UNSAFE_componentWillMount(){
        // clearInterval(this.timer);
        console.log("component will mount");
    }
    render(){
        // const {count, count2} = this.state;
        // const {name, location} = this.props;

        const {name, location, avatar_url, bio} = this.state.userInfo;

        // console.log(name + "child render");
        return (
            // <div className="user-card">
            //     <h1>{name}</h1>
            //     <h2>Location : {location}</h2>
            //     <h3>Count :{count}</h3>
            //     <h3>Count2 :{count2}</h3>
            //     <button onClick={()=>{
            //         this.setState({
            //             count : this.state.count + 1,
            //             count2 : this.state.count2 + 2
            //         });
            //     }}>Count Increase</button>
            // </div>
            <div className="user-card">
                <img src={`${avatar_url}`} alt="image" />
                <h1>{name}</h1>
                <h2>Location : {location}</h2>
                <h2>Bio : {bio}</h2>
            </div>
        );
    }
}

export default UserClass;