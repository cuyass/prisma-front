import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import Button from './buttons/Button';

const MarkdownLessonEditor = ({ lessonId }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [originalTitle, setOriginalTitle] = useState('');
    const [originalContent, setOriginalContent] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/lessons/${lessonId}`)
            .then(res => {
                setTitle(res.data.title);
                setContent(res.data.content);
                setOriginalTitle(res.data.title);
                setOriginalContent(res.data.content);
            })
            .catch(err => console.error("Error al cargar la lliçó:", err));
    }, [lessonId]);

    const hasChanges = title !== originalTitle || content !== originalContent;

    const handleSave = async () => {
        if (!hasChanges) return;

        setIsSaving(true);

        try {
            const response = await axios.put(`http://localhost:8080/api/v1/lessons/${lessonId}`, {
                title,
                content
            });

            console.log("Resposta del servidor:", response.data);

            setSaved(true);
            setOriginalTitle(title);
            setOriginalContent(content);
            setTimeout(() => setSaved(false), 3000);

        } catch (err) {
            console.error("Error al guardar:", err);
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        if (hasChanges && window.confirm("Estàs seguri de guardar els canvis?")) {
            setTitle(originalTitle);
            setContent(originalContent);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <input
                className="w-full border p-2 text-xl font-semibold mb-4"
                placeholder="Títol de la lliçó"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <MDEditor
                value={content}
                onChange={setContent}
                height={400}
            />

            {saved && (
                <div className="mt-4 text-green-600 bg-green-100 p-3 rounded-lg">
                    <strong>Lliçó guardada correctament!</strong> 
                </div>
            )}

            <div className="mt-4 flex gap-4">
                <Button
                    onClick={handleSave}
                    variant="primary"
                    loading={isSaving}
                    disabled={!hasChanges}
                >
                    Guardar
                </Button>

                <Button
                    onClick={handleCancel}
                    variant="secondary"
                    disabled={!hasChanges || isSaving}
                >
                    Cancel·lar
                </Button>
            </div>
        </div>
    );
};

export default MarkdownLessonEditor;
