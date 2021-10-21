import {useState} from "react";
import PatientForm from '../forms/PatientForm'


const CreatePatient = (props) => {
    const [showForm, setShowForm] = useState(false)
    const handleClick = () => {
         setShowForm(!showForm)
     }
     return (
        <>
            <button id='add-patient-button' onClick={handleClick}>Add A New Patient</button>
            {showForm && <PatientForm setShowForm={setShowForm}/>}
       </>
     )
}

export default CreatePatient;