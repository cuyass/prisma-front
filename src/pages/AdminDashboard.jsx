import React, { useEffect, useState } from "react";
import axios from "axios";
import MarkdownLessonEditor from "../components/MarkdownLessonEditor";
import Alert from "../components/Alert";
import Button from "../components/buttons/Button";

const AdminDashboard = () => {
    const [lessons, setLessons] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('neutral');

  useEffect(() => {
   
    axios.get('http://localhost:8080/api/v1/lessons')
      .then(res => {
        setLessons(res.data);
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
        setAlertMessage('Hubo un error al eliminar la lección');
        setAlertVariant('error');
        setAlertVisible(true);
      } finally {
        setIsDeleting(false);
      }
    } 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Panell d'administrador</h1>
      </div>

      {alertVisible && (
        <Alert variant={alertVariant} duration={3} closable>
          {alertMessage}
        </Alert>
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 font-semibold text-sm text-gray-600">Título</th>
              <th className="px-4 py-2 font-semibold text-sm text-gray-600">Fragmento de contenido</th>
              <th className="px-4 py-2 font-semibold text-sm text-gray-600">Fecha de creación</th>
              <th className="px-4 py-2 font-semibold text-sm text-gray-600">Última actualización</th>
              <th className="px-4 py-2 font-semibold text-sm text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map(lesson => (
              <tr key={lesson.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-gray-800">{lesson.title}</td>
                <td className="px-4 py-2 text-gray-600">{lesson.content.substring(0, 100)}...</td>
                <td className="px-4 py-2 text-gray-600">{new Date(lesson.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-2 text-gray-600">{new Date(lesson.updatedAt).toLocaleDateString()}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    {/* Botón de Editar */}
                    <Button variant="primary" onClick={() => {/* Función para editar */}}>
                      Editar
                    </Button>
                    {/* Botón de Eliminar */}
                    <Button 
                      variant="error" 
                      onClick={() => handleDelete(lesson.id)} 
                      loading={isDeleting}
                    >
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;