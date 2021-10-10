import {useState} from "react";
import MedicationForm from '../forms/MedicationForm'


const CreateMedication = (props) => {
    const [showForm, setShowForm] = useState(false)
    const handleClick = () => {
         setShowForm(!showForm)
     }
     return (
        <>
            <button id='add-med-button' onClick={handleClick}>Add A New Medication</button>
            {showForm && <MedicationForm setShowForm={setShowForm}/>}
       </>
     )
}

export default CreateMedication;