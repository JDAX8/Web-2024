import React, { useEffect, useState } from 'react';
import proyecto1 from '../../assets/imgs/Proyecto1.png'
import proyecto2 from '../../assets/imgs/Proyecto2.png'
import proyecto3 from '../../assets/imgs/Proyecto3.jpg'
import { Programs, Button, BigProjectBox, Loader } from '../../components';
import { useLocation, useParams } from 'react-router-dom';
import { getProyect } from '../../services/firebase';

export function ProjectsOverview() {
  const { projectId } = useParams();
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const goToProject = (link) => {
    window.open(link, '_blank');
  }

  useEffect(() => {
    if (!projectId) {
              const id = pathname.split("/profile/").join('');
              getProyect(id)
              .then(projectData => {
                if (projectData) {
                  setData(projectData)
                  setLoading(false);
                } else {
                  console.log('Project not found');
                  setLoading(false);
                }
              })
              .catch(error => {
                console.error('Error:', error);
                setError(error);
                setLoading(false);
              });
    } else {

            getProyect(projectId)
            .then(projectData => {
              if (projectData) {
                setData(projectData)
                setLoading(false);
              } else {
                console.log('Project not found');
                setLoading(false);
              }
            })
            .catch(error => {
              console.error('Error:', error);
              setError(error);
              setLoading(false);
            });
    }
  }, [projectId, pathname]);

  if (loading) return <div className='flex w-full items-center justify-center p-20'><Loader /></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className='flex flex-col items-center justify-center pt-28'>
        <h1 className='font-extrabold bg-gradient-to-r from-[#BE7DDD] to-white text-transparent bg-clip-text w-fit border-solid bg-clip-border-box text-6xl'>Featured projects</h1>
        <BigProjectBox 
        src={data.imageUrl}
        />
        <p className='text-2xl w-3/4 font-light text-center pb-20'>{data.description}</p>
        <Button className='mb-20' title={"CHECK IT OUT"} onClick={()=>goToProject(data.url)}/>
      </section>
      
      <footer>
        <Programs programs={data.tools}/>
      </footer>
    </>
  );
}
