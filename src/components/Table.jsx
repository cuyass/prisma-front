import React from 'react';
import Button from './buttons/Button';
import { useNavigate } from 'react-router-dom';

const LessonTable = ({ lessons, onDelete, isDeleting }) => {

    const navigate = useNavigate();

    if (!Array.isArray(lessons) || lessons.length === 0) {
        return <p className="font-[Roboto]">Això està més buit que la VIP room de la Kandy Muse</p>;
      }
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th className="font-[Roboto]">Títol</th>
            <th className="font-[Roboto]">Data de creació</th>
            <th className="font-[Roboto]">Última actualizació</th>
            <th className="font-[Roboto]">Accions</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson, index) => (
            <tr key={lesson.id}>
              <th>{index + 1}</th> 
              <td>{lesson.title}</td>
              <td>{new Date(lesson.createdAt).toLocaleDateString()}</td>
              <td>{new Date(lesson.updatedAt).toLocaleDateString()}</td>
              <td>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => navigate(`/edit/${lesson.id}`)}>
                    Editar
                  </Button>
                  <Button 
                    variant="error" 
                    onClick={() => onDelete(lesson.id)} 
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
  );
};

export default LessonTable;
