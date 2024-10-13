import React from "react";
import ReactDOM from "react-dom/client"

const Childcomponent = () =>{ 
    return (
        <h2 className="child">This is child component</h2>
    )
}

const ParentComponent = () =>(
    <>
    <div className="parent">
        <h1>This is Parent Element</h1>
    </div>
    <Childcomponent/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ParentComponent/>)