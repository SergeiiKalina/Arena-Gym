import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyLayouts from "./Components/layouts/MyLayouts"
import Main from "./Components/Main/Main"
import "./App.scss"
import ScheduleTraining from "./Components/TrainingSchedule/ScheduleTraining"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MyLayouts />}>
                    <Route index element={<Main />} />
                    <Route path="/schedule" element={<ScheduleTraining />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
