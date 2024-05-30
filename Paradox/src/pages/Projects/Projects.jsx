import React, { useEffect, useState } from 'react';
import { Programs, Button, Carousel, Loader, ProjectBox } from '../../components';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../../services/firebase';


export function Projects() {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleOnClick = (id) => {
    navigate(`/projectoverview/${id}`)
  }

    useEffect(() => {

      getAllProjects()
      .then(userData => {
        setData(userData)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error: ', error);
        setLoading(false);
      });

    }, []);

  if (loading) return <div className='flex w-screen items-center justify-center p-20'><Loader /></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className='flex flex-col items-center justify-center pt-40 cell:pt-28'>
        <h1 className='font-extrabold bg-gradient-to-r from-[#BE7DDD] to-white text-transparent bg-clip-text w-fit border-solid bg-clip-border-box text-4xl cell:text-6xl'>Featured projects</h1>
        <Carousel dataProjects={data} />
        <h1 className='font-extrabold bg-gradient-to-r from-[#BE7DDD] to-white text-transparent bg-clip-text w-fit border-solid bg-clip-border-box text-4xl cell:text-6xl pt-20 cell:pt-40'>Full catalog</h1>
        <div className='flex flex-wrap justify-center pb-10'>
          {data.map((project, index) => (
            <section key={index} className='p-10'>
              <Link to={`/projectoverview/${project.id}`}>
                <ProjectBox
                key={index}
                src={project.imageUrl}
                alt={project.title}
                onChange={() => {}}
                />
              </Link>
            </section>
            
          ))}
        </div>
      </section>
      
      <footer>
        <Programs/>
      </footer>
    </>
  );
}
