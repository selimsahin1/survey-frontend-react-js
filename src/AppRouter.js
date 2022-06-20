import React from 'react'

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import QuestionPage from './pages/QuestionPage';
import { ROUTES } from './utils/constans'
// ROUTES


const AppRouter = () => {


    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<QuestionPage />} />

        </Routes>

    </BrowserRouter>

}

export default AppRouter
