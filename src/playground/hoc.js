import React from 'react';
import ReactDom from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning= (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin&&<p>This is private info. Please don`t share.</p>}
            <WrappedComponent {...props} />
        </div>
    )//
}

const getAuthenticationComponent=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated
            ? <WrappedComponent {...props} />
            : <p>User is not Authenticated</p> }
            
        </div>
    )
}


const AdminComponent=withAdminWarning(Info);
const AuthenticationComponent= getAuthenticationComponent(Info);

//ReactDom.render(<AdminComponent isAdmin={false} info='My Information' />,document.getElementById('app'));
ReactDom.render(<AuthenticationComponent isAuthenticated={true} info='My Information' />,document.getElementById('app'));