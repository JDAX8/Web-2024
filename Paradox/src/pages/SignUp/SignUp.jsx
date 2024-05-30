import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import LogoG from '../../assets/imgs/LogoG.png';
import { Input, Return, Button, InputGrande, InputList, ErrorNotification, Loader } from '../../components';
import './SignUp.css';
import { SignIn } from '../../services/firebase';

export function SignUp() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
    details: '',
    image: ''
  });

  const [imageUpload, setImageUpload] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

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
    
    if (imageUpload === null) {
      console.log('Por favor, sube una imagen de perfil.');
      return false;
    }
    
    if (formValues.password !== formValues.confirmPassword) {
      console.log('Las contraseñas no coinciden.');
      return false;
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUpload(file);
      setFormValues((prevValues) => ({
        ...prevValues,
        image: file
      }));
    }
  };

  const handleSubmit = async (event) => {
    setIsLoading(true)
    event.preventDefault();
    if (validateForm()) {
      if(formValues.password === formValues.confirmPassword){
        await SignIn(formValues)
        .then(user => {
          setIsLoading(false)
          navigate('/'); 
        })
        .catch(error => {
          setError('Hubo un problema al crear el proyecto. Por favor, intenta de nuevo.');
          setIsLoading(false)
        });
      }
    }else setIsLoading(false)
  };


  return (
    <>
    {isLoading && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <Loader />
        </div>
        )}

        {error && <ErrorNotification message={error} onClick={()=>setError(null)}/>}

      <nav className='fixed top-0 left-0 w-full h-20 flex flex-row p-6'>
        <div className="flex justify-start items-center">
          <Return />
        </div>
      </nav>
      <main className='flex flex-col items-center cell:flex-row w-screen mb-10'>
        <section className='w-2/5 cell:h-screen mt-20 mb-10 flex flex-col items-center justify-center'>
          <img className="w-1/2 animate-pulse" src={LogoG} alt="Logo" />
          <h1 className='px-contact-title'> Sign <span style={{ color: '#BE7DDD' }}>Up</span> </h1>
        </section>
        <section className='cell:w-1/2 flex flex-col items-center justify-center'>
          <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
            <section className='w-full flex flex-row items-center justify-center'>
              <Input className="w-8/12 mb-4" placeholder="Name" type="text" name="name" value={formValues.name} onChange={handleChange} />
            </section>
            <Input className="w-4/6 h-12 mb-4" placeholder="Email" type="email" name="email" value={formValues.email} onChange={handleChange} />
            <Input className="w-4/6 h-12 mb-4" placeholder="Password" type={'password'} name="password" value={formValues.password} onChange={handleChange} />
            <Input className="w-4/6 h-12 mb-4" placeholder="Confirm Password" type={'password'} name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} />
            <InputList title={"Skills"} className={"w-full h-12"} name="skills" onSubmit={handleChange} />
            <InputGrande multiline rows={3} maxRows={10} className="w-4/6 h-40 mb-4" type="text" placeholder="Biography" name="details" value={formValues.details} onChange={handleChange} />
            <section className='flex flex-row items-center justify-center w-4/6 mt-10'>
              <p className='mr-4'>Upload here your profile photo</p>
              <input type="file" onChange={handleImageChange} />
            </section>
            <Button className="w-4/6 h-12 mt-10" type="submit" title="Sign up"/>
          </form>
        </section>
      </main>
    </>
  );
}
