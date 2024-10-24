import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { deleteStudentAsync } from "./studentsSlice"
import Header from "../../components/Header"


const StudentDetail = () => {
    const data = useSelector((state) => state.students.students)
    const dispatch = useDispatch()

    const [studentData, setStudentData] = useState({})
    const {studentId} = useParams()

useEffect(() => {

    const student = data.find(curr => curr._id == studentId) || {}
    setStudentData(student)

}, [data, studentId])


const deleteStudentHandler = () => {
dispatch(deleteStudentAsync(studentId))
}

return(
    <div>
        <Header />
        <div className="container py-4">
<h1>Student Detail</h1>
<p>Name: {studentData.name}</p>
<p>Age: {studentData.age}</p>
<p>Grade: {studentData.grade}</p>
<p>Attendance: {studentData.attendance}</p>
<p>Marks: {studentData.marks}</p>

<Link className="btn btn-warning"
to={{
    pathname: `/update-student/${studentId}`,
    }}
state={{student: studentData}}
>
    Edit Details
</Link>
<button className="ms-2 btn btn-danger" onClick={deleteStudentHandler}>Delete</button>
    </div>
    </div>

)
}
export default StudentDetail
