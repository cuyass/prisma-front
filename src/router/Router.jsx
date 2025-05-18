import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AdminDashboard from '../pages/AdminDashboard';
import MarkdownLessonEditor from '../pages/MarkdownLessonEditor';
import Learn from '../pages/Learn';
/* 
import FAQ from '../pages/FAQ';
import Directory from '../pages/Directory';

import Register from '../pages/Register';
import Login from '../pages/Login'; */

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/edit" element={<MarkdownLessonEditor />} />
            <Route path="/edit/:lessonId" element={<MarkdownLessonEditor />} />
            {/*
            <Route path="/learn" element={<Learn />} />
{/*             
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/directory" element={<Directory />} />
            
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
        </Routes>
    );
}

export default Router;