import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Learn = () => {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    const lessonsPerPage = 8;

    const fetchLessons = async (page) => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/api/v1/lessons', {
                params: {
                    page: page - 1,
                    size: lessonsPerPage,
                },
            });
            console.log('API Response:', response.data);
            setLessons(response.data.data || []);
        setTotalPages(Math.ceil((response.data.data?.length || 0) / lessonsPerPage)); 
        } catch (err) {
            console.error(err);
            setError('Hi ha hagut un error carregant les guies.');
        } finally {
            setLoading(false);
            
        }
    };

    useEffect(() => {
        fetchLessons(currentPage);
    }, [currentPage]);

    const handleLessonClick = (lessonId) => {
        navigate(`/learn/${lessonId}`);
    };

    if (loading) {
        return <div>Carregant guies...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    console.log("Lessons:", lessons);
    return (
        <div className="bg-base-200 max-w-7xl mx-auto p-6">
            <h1 className="text-4xl text-center font-[Righteous] mb-6">Guies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(lessons) && lessons.length === 0 ? (
                    <p>No hi ha guies disponibles.</p>
                ) : (
                    lessons.map(lesson => (
                        <Card
                            key={lesson.id}
                            title={lesson.title}
                            description={lesson.markdownContent.slice(0, 100) + '...'}
                            onClick={() => handleLessonClick(lesson.id)}
                        />
                    ))
                )}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
};
export default Learn;