import LoginForm from '../forms/LoginForm';
import { useState } from 'react'
 
const Login = (props) => {
    const [showForm, setShowForm] = useState(props.currentUser.user === null)

    return (
        <div>
            {!props.currentUser.user && <h1>Login</h1>}
            { showForm && <LoginForm setLoginUser={props.setLoginUser} setShowForm={setShowForm} /> }
            { props.currentUser.user && <h2>{`${props.currentUser.user.user.data.attributes.first_name}, you have successfully logged in. Press on the Navigation Bar "Medications and Complications" tab to continue.`}</h2> } 
        </div>
    )
}
     
export default Login;

 