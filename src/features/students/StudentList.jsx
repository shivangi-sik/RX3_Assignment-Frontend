import { Link } from "react-router-dom"

const StudentList = ({students}) =>{

    return(
        <div className="py-3">
            <h2>Student List</h2>
            <ul>
{students && students.map((student) =>
    <li key={student._id}><Link to={`studentDetail/${student._id}`}>{student.name} (Age: {student.age})</Link></li>
)}
</ul>
        </div>
    )
}
export default StudentList
