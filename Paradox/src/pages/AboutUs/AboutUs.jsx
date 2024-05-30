import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Card, Loader } from '../../components/index.js'
import { getAllUsersData } from '../../services/firebase.js'

export function AboutUs(){

  const navigate = useNavigate() 
  const [developersData, setDevelopersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleOnClick = (id) => {
    navigate(`/profile/${id}`)
  }

  useEffect(() => {
    getAllUsersData()
      .then(usersList => {
        setDevelopersData(usersList);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error: ', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

    return(
        <>
      <main>
        <section className='w-screen flex flex-col items-center justify-center pt-40 pb-20'>
          {developersData.map((developer) => (
            <section key={developer.uid} className='flex p-10 justify-center items-center'>
              { developer.owner && (
                <Card
                key={developer.uid}
                userimage={developer.imageUrl}
                nombre={developer.name}
                description={developer.skills.join(' - ')}
                socialmedia={developer.socialNetworks}
                onClick={() => handleOnClick(developer.id)}
                />
              )}
            </section>
          ))}
        </section>
      </main>
    </>
    )
}