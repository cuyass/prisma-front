import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import Button from './buttons/Button';
import Alert from './Alert';

const MarkdownLessonEditor = ({ lessonId }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [isSaving, setIsSaving] = useState(false);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('neutral');

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
            await axios.put(`http://localhost:8080/api/v1/lessons/${lessonId}`, {
                title,
                content
            });

            setAlertVariant('success');
            setAlertMessage('Lliçó guardada correctament!');
            setAlertVisible(true);
            setOriginalTitle(title);
            setOriginalContent(content);
            setTimeout(() => setSaved(false), 3000);

        } catch (err) {
            console.error("Error al guardar:", err);
            setAlertVariant('error');
            setAlertMessage('Hi ha hagut un error al guardar la lliçó');
            setAlertVisible(true);
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

            {alertVisible && (
                    <Alert variant={alertVariant} duration={3} closable>
                    {alertMessage}
                    </Alert>
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
