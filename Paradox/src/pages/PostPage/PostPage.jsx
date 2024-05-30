import React, { useState } from 'react';
import './PostPage.css';
import Logo from '../../assets/imgs/Logo.png';
import { Return, Button, Input, InputUpload, InputGrande, Loader,ErrorNotification } from '../../components';
import { Participants } from '../../components/Participants/Participants';
import { createProyect } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

export function PostPage() {
    const [formValues, setFormValues] = useState({
        image: '',
        title: '',
        description: '',
        url: '',
        participants: [],
        tools: []
    });

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate() 

    const toolsList = [
        { name: 'Photoshop', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png' },
        { name: 'Illustrator', src: 'https://thelogocompany.net/wp-content/uploads/2023/04/Adobe-Illustrator-Icon.png' },
        { name: 'Procreate', src: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Procreate-icon.png' },
        { name: 'Blender', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png' }
    ];

    const validateForm = () => {
        for (const [key, value] of Object.entries(formValues)) {
            if (typeof value === 'string' && value.trim() === '') {
                setError(`Por favor, llena el campo ${key}.`);
                return false;
            } else if (Array.isArray(value) && value.length === 0) {
                setError(`Por favor, llena el campo ${key}.`);
                return false;
            }
        }
        return true;
    };

    const handleChange = (event) => {
        const { name, value } = event;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleParticipantChange = (participant, isSelected) => {
        setFormValues((prevValues) => {
            const updatedParticipants = isSelected
                ? [...prevValues.participants, participant]
                : prevValues.participants.filter(p => p !== participant);
            return {
                ...prevValues,
                participants: updatedParticipants
            };
        });
    };

    const handleToolClick = (tool) => {
        setFormValues((prevValues) => {
            const updatedTools = prevValues.tools.includes(tool)
                ? prevValues.tools.filter(t => t !== tool)
                : [...prevValues.tools, tool];
            return {
                ...prevValues,
                tools: updatedTools
            };
        });
    };

    const handleSubmit = async (event) => {
        setIsLoading(true)
        event.preventDefault();
        if (validateForm()) {
            try {
                await createProyect(formValues);
                navigate('/')
                setIsLoading(false)
              } catch (error) {
                setError('Hubo un problema al crear el proyecto. Por favor, intenta de nuevo.');
                setIsLoading(false)
              }  
        } else setIsLoading(false)

    }

    return (
        <>
        {isLoading && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <Loader />
        </div>
        )}

        {error && <ErrorNotification message={error} onClick={()=>setError(null)}/>}
        
            <nav className='cell:fixed top-0 left-0 w-full h-20 flex flex-row p-6'>
                <div className="flex justify-start items-center">
                    <Return />
                </div>
                <div className="px-img-postit mx-auto">
                    <img className="hidden cell:block pt-2 animate-pulse" src={Logo} alt="logo" />
                </div>
            </nav>
            <div className='w-screen cell:w-screen flex flex-col items-center justify-center'>
                <header className='pb-8 flex items-start cell:ml-48 w-3/5'><h1 className='px-postit-header'>Add new media</h1></header>
                <div className='cell:w-auto flex flex-col cell:flex-row w-3/4 items-center'>
                    <section className='flex mb-10'>
                        <InputUpload name="photo" type="file" className="w-[1550px] h-96 placeholder:text-lg placeholder:font-semibold placeholder:text-center " value={formValues.image} onSubmit={(file) => handleChange({ name: "image", value: file })} placeholder={"+ Add image of your project"} />
                    </section>
                    <section className='gap-0 flex flex-col'>
                        <Input name="title" value={formValues.title} onChange={handleChange} className="mb-4 w-96 cell:w-[550px] h-10 cell:h-14 placeholder:text-lg placeholder:font-semibold" placeholder={"Title"} />
                        <InputGrande multiline rows={3} maxRows={10} name="description" onChange={handleChange} className="mb-4 w-96 cell:w-[550px] cell:h-64 h-10 placeholder:text-lg placeholder:font-semibold" placeholder={"Description"} />
                        <Input name="url" onChange={handleChange} className="mb-4 w-96 cell:w-[550px] cell:h-14 h-10 placeholder:text-lg placeholder:font-semibold" placeholder={"URL"} />
                    </section>
                    <section className='flex flex-col px-2 items-center space-y-2 mt-10 mb-10'>
                        <h1 className='px-postit-header text-4xl'>Tools</h1>
                        <section className='flex cell:flex-col flex-row '>
                            {toolsList.map(tool => (
                                <img
                                    key={tool.name}
                                    className={`w-14 pb-2 mx-3 cursor-pointer ${formValues.tools.includes(tool.src) ? '' : 'opacity-40'}`}
                                    src={tool.src}
                                    alt={tool.name}
                                    onClick={() => handleToolClick(tool.src)}
                                />
                            ))}
                        </section>
                    </section>
                </div>
                <section className='cell:pl-8 cell:pt-8 flex flex-col items-center w-3/5'>
                    <h1 className='px-postit-header text-4xl'>Participants</h1>
                    <section className='flex flex-col items-center'>
                        <section className='flex flex-col items-center cell:flex-row'>
                            <section className='flex flex-col items-center'>
                                <Participants nombre="Isaac Calle Cardozo" onChange={(isSelected) => handleParticipantChange("JLtteERcBNYHyip3CdKVllISS4J3", isSelected)} />
                                <Participants nombre="Juan David Valencia" onChange={(isSelected) => handleParticipantChange("paSXgvQgrMWbkhXkHVBcOk7JIIv2", isSelected)} />
                            </section>
                            <section className=''>
                                <Participants nombre="Juan Martín López" onChange={(isSelected) => handleParticipantChange("4SpsupBI8XR78kN9jnxkp1Y0uhi1", isSelected)} />
                                <Participants nombre="Juan Sebastián Silva" onChange={(isSelected) => handleParticipantChange("Juan Sebastián Silva", isSelected)} />
                            </section>
                        </section>
                        <section className='w-full mt-4 flex flex-col items-center mb-10'>
                            <Button className="w-96 h-14" value="Upload" title="Añadir" onClick={handleSubmit} />
                        </section>
                    </section>

                </section>
            </div>
        </>
    );
}
