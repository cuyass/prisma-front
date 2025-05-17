import React from 'react';
import Button from './buttons/Button';

const LessonTable = ({ lessons, onEdit, onDelete, isDeleting }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Títol</th>
            <th>Data de creació</th>
            <th>Última actualizació</th>
            <th>Accions</th>
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
                  <Button variant="secondary" onClick={() => onEdit(lesson.id)}>
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
