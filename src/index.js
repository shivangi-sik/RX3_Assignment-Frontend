import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store';
import StudentForm from './features/students/StudentForm';
import StudentDetail from './features/students/StudentDetail';
import ClassView from './features/class/ClassView';
import SchoolView from './features/school/SchoolView';

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/"
  },
  {
    element: <StudentForm />,
    path: "/add-student"
  },
  {
    element: <StudentForm />,
    path: "/update-student/:id"
  },
 {
   element: <StudentDetail />,
  path: "/studentDetail/:studentId"
  },
  {
element: <ClassView />,
path: "/classes"
  },
  {
  element: <SchoolView />,
  path: "/schoolView"
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
