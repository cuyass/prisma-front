import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import AdminDashboard from '../components/pages/AdminDashboard';
import MarkdownLessonEditor from '../components/pages/MarkdownLessonEditor';
import Learn from '../components/pages/Learn';
import LessonView from '../components/pages/LessonView';
import LessonQuiz from '../components/pages/LessonQuiz';
import FAQ from '../components/pages/FAQ';
import Directory from '../components/pages/Directory';
import Register from '../components/pages/Register';


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/edit" element={<MarkdownLessonEditor />} />
            <Route path="/edit/:lessonId" element={<MarkdownLessonEditor />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/:id" element={<LessonView />} />
            <Route path="/learn/:id/quiz" element={<LessonQuiz />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default Router;