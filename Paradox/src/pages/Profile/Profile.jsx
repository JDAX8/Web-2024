import React, { useEffect, useState } from 'react';
import { Carousel, Loader } from '../../components';
import { ProjectBox } from '../../components/ProjectBox/ProjectBox';
import { Programs } from '../../components';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Button } from '../../components';
import { getUserData } from '../../services/firebase';

export function Profile() {

  const [data, setData] = useState({});
  const { developerId } = useParams();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!developerId) {
      const id = pathname.split("/profile/").join('');

                  getUserData(id)
              .then(userData => {
                setData(userData)
                setLoading(false);
              })
              .catch(error => {
                console.error('Error: ', error);
                setError(error);
                setLoading(false);
              });

    } else {

                  getUserData(developerId)
              .then(userData => {
                setData(userData)
                setLoading(false);
              })
              .catch(error => {
                console.error('Error: ', error);
                setError(error);
                setLoading(false);
              });
    }
  }, [developerId, pathname]);

  if (loading) return <div className='flex w-screen items-center justify-center p-20'><Loader /></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className='w-full h-1/2 flex flex-col items-center cell:flex-row pt-36'>
        <section className='cell:w-1/2 flex flex-col items-center justify-center cell:pl-20'>
          <h1 className='cell:border-b-8 font-extrabold bg-gradient-to-r from-[#BE7DDD] to-white text-transparent bg-clip-text w-fit border-solid bg-clip-border-box text-5xl'>
            {data?.name}
          </h1>
          <p className='w-3/4 text-xl font-light pt-10'>
            {data?.details || "Biography not available."}
          </p>
        </section>
        <section className='cell:w-1/2 flex flex-col items-center justify-center'>
          <img className='mt-10 cell:w-1/2 border-4 p-1 rounded-2xl border-[#BE7DDD]' src={data?.imageUrl} alt="Developer" />
        </section>
      </section>
      <section className='flex flex-col items-center justify-center pt-28'>
        <h1 className='font-extrabold bg-gradient-to-r from-[#BE7DDD] to-white text-transparent bg-clip-text w-fit border-solid bg-clip-border-box text-6xl'>Featured projects</h1>
        <Carousel dataProjects={data.projects} />
        <h1 className='font-extrabold bg-gradient-to-r from-[#BE7DDD] to-white text-transparent bg-clip-text w-fit border-solid bg-clip-border-box text-6xl pt-10 mb-20'>Full catalog</h1>
        <div className='flex flex-wrap justify-center pb-10'>
          {data.projects?.map((project, index) => (
            <section key={index} className='p-10'>
              <Link to={`/projectoverview/${project.id}`}>
                <ProjectBox
                  key={index}
                  src={project.imageUrl}
                  alt={project.title}
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