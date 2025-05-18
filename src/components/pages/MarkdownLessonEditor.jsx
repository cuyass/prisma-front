import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import Button from '../buttons/Button';
import Alert from '../Alert';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

const MarkdownLessonEditor = () => {

    const { lessonId } = useParams();

    const [title, setTitle] = useState('');
    const [markdownContent, setMarkdownContent] = useState('');

    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('neutral');

    const [originalTitle, setOriginalTitle] = useState('');
    const [originalContent, setOriginalContent] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (lessonId) {
            
            axios.get(`http://localhost:8080/api/v1/lessons/${lessonId}`)
            .then(res => {
                const lessonData = res.data.data;
                if (!lessonData) {
                    console.error("No s'ha trobat la lliçó");
                    return;
                } 
                console.log("Lliçó carregada:", lessonData);
                setTitle(res.data.title || '');
                setMarkdownContent(res.data.markdownContent || '');
                setOriginalTitle(res.data.title || '');
                setOriginalContent(res.data.markdownContent || '');
            })
            .catch(err => { console.error("Error al carregar la lliçó:", err)});
        }
    }, [lessonId]);

    const hasChanges = title !== originalTitle || markdownContent !== originalContent;

    const handleSave = async () => {
        if (!hasChanges) return;

        setIsSaving(true);

        try {

            
            const lessonData = { title, markdownContent };

            let response;
            if (lessonId) {
                response = await axios.put(`http://localhost:8080/api/v1/lessons/${lessonId}`, lessonData);
                setAlertMessage('Lliçó actualitzada correctament!');
                console.log("Saving lesson data:", lessonData);
            } else {
                response = await axios.post('http://localhost:8080/api/v1/lessons', lessonData);
                setAlertMessage('Lliçó creada correctament!');
            }
           
            setAlertVariant('success');
            setAlertVisible(true);
            setOriginalTitle(title);
            setOriginalContent(markdownContent);

            setTimeout(() => {
                setSaved(true);
                setAlertVisible(false);
                navigate('/admindashboard');
            }, 3000);

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
        if (hasChanges && window.confirm("Estàs seguri de cancel·lar els canvis?")) {
            setTitle(originalTitle);
            setContent(originalContent);
            navigate('/admindashboard');
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
                value={markdownContent}
                onChange={setMarkdownContent}
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
                    variant="accent"
                    loading={isSaving}
                    disabled={!hasChanges}
                >
                    Guardar
                </Button>

                <Button
                    onClick={handleCancel}
                    variant="error"
                    disabled={!hasChanges || isSaving}
                >
                    Cancel·lar
                </Button>
            </div>
        </div>
    );
};

export default MarkdownLessonEditor;
