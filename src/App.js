import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react'

import { MainLayout } from '~/layouts'
import  Home from '~/pages/Home'
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout> <Home /> </MainLayout>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
