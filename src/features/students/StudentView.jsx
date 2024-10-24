import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import { fetchStudents } from "./studentsSlice"
import StudentList from "./StudentList"
import Header from "../../components/Header"

const StudentView = () => {
const dispatch = useDispatch()
const {students, status, error} = useSelector((state) => state.students)

useEffect(() => {
dispatch(fetchStudents())
}, [])

return(

    <div>
        <Header />
<div className="container py-4">
        <h1>Student View</h1>
        <Link to="/add-student" className="btn btn-warning">Add Student</Link>
        {status === "Loading" && <p>Loading...</p>}
    {error && <p>{error}</p>}
{students && <StudentList  students={students}/>}
</div>
    </div>
)
}

export default StudentView
