import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const backendUrl = process.env.REACT_APP_BACKEND_URL

export const fetchStudents = createAsyncThunk("students/fetchStudents", async () => {
    const response = await axios.get(`${backendUrl}/students`)

   return response.data
})

export const  addStudentAsync =  createAsyncThunk("students/addStudentAsync", async (newStudent) => {
    const response = await axios.post(`${backendUrl}/students`, newStudent)

return response.data
     })

 export const updateStudentAsync = createAsyncThunk("students/updateStudentAsync", async ( updatedStudent) => {
           const response = await axios.put(`${backendUrl}/students/${updatedStudent._id}`, updatedStudent)
           return response.data
     })

 export const deleteStudentAsync = createAsyncThunk("students/deleteStudentAsync", async (id) => {
       await axios.delete(`${backendUrl}/students/${id}`)
      return id
      })

export const studentsSlice = createSlice({
name: "students",
initialState: {
    students: [],
    status: "idle",
    error: null,
    filter: "All",
    sortBy: "name",
    schoolStats: {
        totalStudents: 0,
        averageAttendance: 0,
        averageMarks: 0,
        topStudent: null
    }
},
reducers: {
    setFilter: (state, action) => {
state.filter = action.payload
    },
    setSortBy: (state,action) => {
state.sortBy = action.payload
    },
    updateSchoolStats: (state, action) => {
state.schoolStats = {...state.schoolStats, ...action.payload}
    },
    setTopStudent: (state, action) => {
state.schoolStats.topStudent = action.payload
    }

},
extraReducers: (builder) => {
    //fetch Students Handling
    builder.addCase(fetchStudents.pending, (state) => {
        state.status = "loading"
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = action.payload
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
    })

    //Add Students Handling
    builder.addCase(addStudentAsync.fulfilled, (state, action) => {
        state.students.push(action.payload)
    });

    //Update Students Handling
    builder.addCase(updateStudentAsync.fulfilled, (state, action) => {

        const index = state.students.findIndex(student => student._id === action.payload._id)
        if(index >= 0){
            state.students[index] = action.payload
        }
    })

    //delete student handling
    builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {

state.students = state.students.filter(student => student._id !== action.payload)
    })
}
})

export const {setFilter, setSortBy, updateSchoolStats, setTopStudent} = studentsSlice.actions

export default studentsSlice.reducer;
