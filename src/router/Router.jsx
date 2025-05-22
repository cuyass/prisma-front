import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AdminDashboard from '../pages/AdminDashboard';
import MarkdownLessonEditor from '../pages/MarkdownLessonEditor';
import Learn from '../pages/Learn';
import LessonView from '../pages/LessonView';
import LessonQuiz from '../pages/LessonQuiz';
import FAQ from '../pages/FAQ';
import Directory from '../pages/Directory';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';


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
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;