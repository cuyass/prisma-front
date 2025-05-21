import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import Alert from "../Alert";
import Button from "../buttons/Button";
import LessonTable from "../Table";
import Drawer from "../Drawer";

function AdminDashboard() {
    const [lessons, setLessons] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('neutral');

    const navigate = useNavigate();

    useEffect(() => {

        axios.get('http://localhost:8080/api/v1/lessons')
            .then(({ data }) => {
                console.log("Lliçons carregades:", data);
                setLessons(data.data);
            })
            .catch(err => {
                console.error('Error al cargar les lliçons: ', err);
            });
    }, []);

    const handleDelete = async (lessonId) => {
        if (window.confirm('Estàs seguri de voler eliminar aquesta lliçó?')) {
            setIsDeleting(true);

            try {
                await axios.delete(`http://localhost:8080/api/v1/lessons/${lessonId}`);
                setAlertMessage('Lliçó eliminada correctament');
                setAlertVariant('success');
                setAlertVisible(true);
                setLessons(lessons.filter(lesson => lesson.id !== lessonId));
                setTimeout(() => setAlertVisible(false), 3000);
            } catch (err) {
                setAlertMessage('Hi ha hagut un error eliminant la lliçó');
                setAlertVariant('error');
                setAlertVisible(true);
            } finally {
                setIsDeleting(false);
            }
        }
    };
    const handleEdit = (lessonId) => {
        navigate(`/edit/${lessonId}`);
    };
    console.log("Lecciones:", lessons);
    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="mb-6">
                <h1 className="text-center text-4xl font-[Righteous]">Panell d'administrador</h1>
            </div>

            {alertVisible && (
                <Alert variant={alertVariant} duration={3} closable>
                    {alertMessage}
                </Alert>
            )}
            <div className="mb-4 flex justify-start">
                <Button variant="info" onClick={() => navigate(`/edit`)}>
                    + Crear nova guia
                </Button>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/4 w-full">
                    <Drawer />
                </div>
                <div className="lg:w-3/4 w-full overflow-x-auto bg-white rounded-lg shadow-md">
                    <LessonTable
                        lessons={lessons}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        isDeleting={isDeleting} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;