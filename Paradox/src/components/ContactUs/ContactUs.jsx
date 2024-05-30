import { Return } from '../Return/Return'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { InputGrande } from '../InputGrande/InputGrande'
import LogoG from '../../assets/imgs/LogoG.png'
import React, { useState } from 'react'

export function ContactUs() {
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    title: '',
    details: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <>
      <nav className='fixed top-0 left-0 w-full h-20 flex flex-row p-6'>
        <div className="flex justify-start items-center">
          <Return />
        </div>
      </nav>
      <main className='flex flex-row w-screen'>
        <section className='w-2/5 h-screen items-center justify-center'>
          <img className="w-1/2" src={LogoG} alt="" />
          <h1 className='font-extrabold'> Contact <span style={{ color: '#BE7DDD' }}>Us</span> </h1>
        </section>
        <section className='w-1/2 flex flex-col items-center justify-center'>
          <section className='w-4/6 flex flex-row items-center justify-center'>
            <Input className="h-12 w-full mb-4" placeholder="Name" type="text" name="name" value={formValues.name} onChange={handleChange} />
            <Input className="h-12 w-full mb-4" placeholder="Last Name" type="text" name="lastName" value={formValues.lastName} onChange={handleChange} />
          </section>
          <Input className=" w-4/6 h-12 mb-4" placeholder="Email" type="Email" name="email" value={formValues.email} onChange={handleChange} />
          <Input className=" w-4/6 h-12  mb-4" placeholder="Title" type="text" name="title" value={formValues.title} onChange={handleChange} />
          <InputGrande multiline rows={3} maxRows={10} className=" w-4/6 h-40  mb-4" placeholder="Details" type="text" name="details" value={formValues.details} onChange={handleChange} />
          <Button className="w-4/6 h-12  mt-10" type="button" value="Send Message"></Button>
        </section>
      </main>
    </>
  )
}