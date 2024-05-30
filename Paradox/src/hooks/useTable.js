import { useState, useEffect } from 'react'

export const useTable = (initialData) => {

  const [ data, setData ] = useState([])
  const [ searchWord, setSearchWord ] = useState("")
  
  const setDATAS = async () => {
    setData(await initialData())
}

  useEffect(() => {
    setDATAS()
  }, [])

  const handleOnChange = (value) => {
    const search = value.target.value
    setSearchWord(search.trim())
  }

    const filteredData = data.filter((data) => {
    return Object.keys(data).filter(key => key.toLowerCase() !== 'id').some((key) => 
      data[key].toString().includes(searchWord)
    );
    });

  return (
    {
        handleOnChange,
        filteredData,
        searchWord
    }
  )
}
