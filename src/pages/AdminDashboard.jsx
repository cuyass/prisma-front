import React, { useEffect, useState } from "react";
import axios from "axios";

import Alert from "../components/Alert";

import { useNavigate } from "react-router";
import LessonTable from "../components/Table";

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
        <div className="bg-error text-white p-4 sm:bg-info lg:bg-success">
  Tailwind test

        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    
          {/* MAIN CONTENT */}
          <div className="drawer-content flex flex-col p-6">
            {/* Button to open drawer in mobile */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
              Obrir menú
            </label>
    
            <h1 className="font-[Righteous] text-2xl mb-4">Panell d'administrador</h1>
    
            {alertVisible && (
              <Alert variant={alertVariant} duration={3} closable>
                {alertMessage}
              </Alert>
            )}
    
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <LessonTable
                lessons={lessons}
                onDelete={handleDelete}
                onEdit={handleEdit}
                isDeleting={isDeleting}
              />
            </div>
          </div>
    
          {/* DRAWER SIDEBAR */}
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li><a href="#">Lliçons</a></li>
              <li><a href="#">Usuaris</a></li>
              <li><a href="#">Mètriques</a></li>
              <li><a href="#">Configuració</a></li>
            </ul>
          </div>
        </div>
        </div>
      );
    }

export default AdminDashboard;