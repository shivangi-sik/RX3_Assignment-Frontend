import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../../components/Header"
import { setTopStudent, updateSchoolStats } from "../students/studentsSlice"

const SchoolView = () => {
    const {students, schoolStats} = useSelector((state) => state.students)
const dispatch = useDispatch()
    useEffect(() => {
        if (students.length > 0) {
            // Total number of students
            const totalStudents = students.length;

            // Calculate the sum of attendance and marks
            const totalAttendance = students.reduce((sum, student) => sum + student.attendance, 0);
            const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);

            // Calculate average attendance and average marks
            const averageAttendance = totalAttendance / totalStudents;
            const averageMarks = totalMarks / totalStudents;

            // Find the top-performing student based on marks
            const topStudent = students.reduce((top, student) =>
              student.marks > top.marks ? student : top, students[0]);


              dispatch(updateSchoolStats({totalStudents, averageAttendance, averageMarks, topStudent}))
              dispatch(setTopStudent(topStudent))

}

    }, [students, dispatch])

return(
    <div>
        <Header />
        <div className="container py-2">
        <h1>School view</h1>
<p>Total Students: {schoolStats.totalStudents}</p>
<p>Average Attendance: {schoolStats.averageAttendance?.toFixed(2)}</p>
<p>Average Marks: {schoolStats.averageMarks?.toFixed(2)}</p>
<p>Top Student: {schoolStats.topStudent ? schoolStats.topStudent.name : "-"} </p>
        </div>

    </div>
)
}

export default SchoolView
