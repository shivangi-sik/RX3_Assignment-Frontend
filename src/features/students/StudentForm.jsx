import { useEffect, useState } from "react"
import { useDispatch  } from "react-redux"
import { addStudentAsync, updateStudentAsync } from "./studentsSlice"
import { useLocation } from "react-router-dom"
import Header from "../../components/Header"

const StudentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        grade: "",
        gender: "",
        attendance: "",
        marks: ""
    })



const dispatch = useDispatch()
const location = useLocation()

useEffect(()=>{
    if(location.state && location.state.student){
     setFormData(location.state.student)
    }
}, [])

const handleChange = (e) => {

    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()


    if(location.state && location.state.student){
        const updatedStudent = formData

dispatch(updateStudentAsync(updatedStudent))
    }
else{
    const newStudent = formData
    dispatch(addStudentAsync(newStudent))
}

}
return(
<div>
 <Header />
 <div className="container py-4">
 <h1>{location.state && location.state.student ? "Edit Student" : "Add Student"}</h1>
    <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" type="text" onChange={handleChange} value={formData.name}/><br/><br/>
        <input name="age" placeholder="Age" type="number" onChange={handleChange} value={formData.age}/><br/><br />
        <input name="grade" placeholder="Grade" type="text" onChange={handleChange} value={formData.grade}/><br/><br/>
        <label>Gender: </label>
        <input className="ms-2" id="male" name="gender" value="Male" type="radio"   onChange={handleChange}/> <label htmlFor="male">Male</label>
        <input className="ms-2" id="female" name="gender" value="Female" type="radio" onChange={handleChange}/> <label htmlFor="female">Female</label><br/><br/>
{location.state && location.state.student && (
    <>
<input name="attendance" type="number" placeholder="Attendance" onChange={handleChange} /><br/><br/>
<input name="marks" type="marks" placeholder="Marks" onChange={handleChange}/><br/><br/>
</>
)}
        <button className="btn btn-primary" type="submit">{location.state && location.state.student ? "Update" : "Add"}</button>
    </form>
 </div>

</div>
)
}
export default StudentForm
