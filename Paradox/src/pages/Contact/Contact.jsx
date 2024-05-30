import LogoG from '../../assets/imgs/LogoG.png'
import React, { useState } from 'react'
import { Return, Button, Input } from '../../components'
import { InputGrande } from '../../components/InputGrande/InputGrande';
import { db } from '../../services/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

export function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    title: '',
    details: ''
  });

  const { name, lastName, email, title, details } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !title || !details) {
      console.log("Please provide value in each input field");
    } else {
      try {
        const docRef = await addDoc(collection(db, "contacts"), formValues);
        console.log("Document written with ID: ", docRef.id);
        setFormValues({ name: "", lastName: "", email: "", title: "", details: "" });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <div className='flex'>
      <nav className='fixed top-0 left-0 w-full h-20 flex flex-row p-6'>
        <div className="flex justify-start items-center">
          <Return />
        </div>
      </nav>
      <form onSubmit={handleSubmit} className='flex flex-col cell:flex-row w-screen'>
      <section className='cell:w-2/5 mb-10 cell:h-screen items-center justify-center'>
        <div className="flex flex-col items-center justify-center">
          <img className="w-1/2 mt-40 cell:mt-80 animate-pulse" src={LogoG} alt="" />
          <h1 className='font-extrabold'> Contact <span style={{ color: '#BE7DDD' }}>Us</span> </h1>
        </div>
      </section>
        <section className='cell:w-1/2 w-full flex flex-col items-center justify-center'>
          <section className='w-4/6 flex flex-row items-center justify-center'>
            <Input className="h-12 w-full mb-4" placeholder="Name" type="text" name="name" value={formValues.name} onChange={handleChange} />
            <Input className="h-12 w-full mb-4" placeholder="Last Name" type="text" name="lastName" value={formValues.lastName} onChange={handleChange} />
          </section>
          <Input className=" w-4/6 h-12 mb-4" placeholder="Email" type="Email" name="email" value={formValues.email} onChange={handleChange} />
          <Input className=" w-4/6 h-12  mb-4" placeholder="Title" type="text" name="title" value={formValues.title} onChange={handleChange} />
          <InputGrande multiline rows={3} maxRows={10} className=" w-4/6 h-40  mb-4" placeholder="Details" type="text" name="details" value={formValues.details} onChange={handleChange} />
          <Button className="w-4/6 h-12  mt-10" type="button" title="Send Message"></Button>
        </section>
      </form>
    </div>
  )
}