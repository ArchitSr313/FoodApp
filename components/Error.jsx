import { useRouteError } from "react-router";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Some Error Occured While Loading the Page</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
};

export default Error;