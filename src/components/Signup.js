import SignupForm from '../forms/SignupForm';
import { useState } from 'react'
function Signup(props) {
    const [showForm, setShowForm] = useState(true)
    return (
    <div>
       {!props.currentUser.user && <h1>Create An Account</h1>}
    { showForm && <SignupForm setSignupUser={props.setSignupUser} setShowForm={setShowForm}/> }
    { props.currentUser.user && <h2>{`${props.currentUser.user.user.data.attributes.first_name}, you have successfully signed up. Press on the Navigation Bar Medications and Complications tab to continue.`}</h2> } 
    </div>
    )
}
     
export default Signup;