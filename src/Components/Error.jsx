import { useRouteError } from "react-router-dom";
const Error = () => {
    // console.log(useRouteError)
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <h1>OOPSS!!!</h1>
            <h2>Something went wrong</h2>
            <h2> {err.status} : {err.statusText} </h2>
        </>
        
    )
}
export default Error;