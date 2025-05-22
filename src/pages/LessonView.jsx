import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Button from '../buttons/Button';

const LessonView = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [lesson, setLesson] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/lessons/${id}`)
            .then(({ data }) => {
                setLesson(data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error carregant la lliçó:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="p-4">Carregant...</div>;
    if (!lesson) return <div className="p-4">Lliçó no trobada</div>;
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded-md">
            <div className="gap-4 py-5 w-30">
            <Button variant="info" onClick={() => navigate(`/learn`)}>
                ← Tornar
            </Button>
            </div>
            <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>

            <article className="prose max-w-none prose-sm sm:prose lg:prose-lg">
                <ReactMarkdown>{lesson.markdownContent}</ReactMarkdown>
            </article>
            <div className="mt-6 grid grid-cols-1 gap-4 w-40">
                <Button variant="warning" onClick={() => navigate(`/learn/${id}/quiz`)}>
                    Començar quiz!
                </Button>
                <Button variant="info" onClick={() => navigate(`/learn`)}>
                    ← Tornar
                </Button>
            </div>
        </div>
    );
};
export default LessonView;