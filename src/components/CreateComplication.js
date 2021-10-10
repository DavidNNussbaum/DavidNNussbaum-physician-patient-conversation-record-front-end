import {useState} from "react";
import ComplicationForm from '../forms/ComplicationForm'


const CreateComplication = (props) => {
    const [showForm, setShowForm] = useState(false)
    const handleClick = () => {
         setShowForm(!showForm)
     }
     return (
        <>
            <button onClick={handleClick}>Add A New Complication</button>
            {showForm && <ComplicationForm setShowForm={setShowForm} medicationId={props.medicationId}/>}
       </>
     )
}

export default CreateComplication;