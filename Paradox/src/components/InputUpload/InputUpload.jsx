import React, { useState } from 'react';

export function InputUpload ({defaultValue='', onSubmit}) {
  const [uploadedFile, setUploadedFile] = useState(defaultValue || null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedFile(reader.result);
      handleUpload(file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const handleUpload = (imageData) => {
    onSubmit(imageData)
  };

  return (
    <div>

      <div className="flex items-center justify-center w-full mr-10">
          <label htmlFor="dropzone-file" className="flex flex-col overflow-hidden items-center justify-center w-52 h-52 cell:w-96 cell:h-96 border-4 rounded-lg cursor-pointer  hover:border-white hover:bg-gray-600">
          {
          uploadedFile != null

          ? (<img src={uploadedFile} alt="Selected" className='fix ' />)
          : (<div className="flex flex-col items-center justify-center p-2">
          <svg className="w-8 h-8 mb-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-sm text-white"><span className="font-semibold">Click para subir</span></p>
          <p className="text-xs text-zinc-400">SVG, PNG, JPG o GIF</p>
      </div>)
        }

              <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          </label>
      </div> 
    </div>
  );
};