import React, { useState, useEffect, useRef } from 'react';
import { Card, Loader } from '../index';

export function Results({ data = [], searchWord, loading, addFavorite }) {
  const firstLoadRef = useRef(true);

  useEffect(() => {
    firstLoadRef.current = false;
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          {data.length > 0 ? (
            <div>
              <div className="flex flex-wrap justify-center">
                {data.map((datos) => (
                  <div key={crypto.randomUUID()} className='flex p-5'>
                    <Card
                      key={datos.id}
                      gif={datos.images.fixed_width_small.url}
                      text={datos.title}
                      addFavorite={() => addFavorite({ gif: datos.images.fixed_width_small.url, text: datos.title, id: datos.id })}
                    />
                  </div>
                ))}
              </div>
              <p className='text-2xl'>{data.length} results for '{searchWord}'</p>
            </div>
          ) : (
            <div>
              {!firstLoadRef.current && (
                <div>
                  <p>No hay resultados.</p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
