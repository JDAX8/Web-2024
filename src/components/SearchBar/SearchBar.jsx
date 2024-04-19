import { useState, useEffect } from 'react';

function SearchCustomer({useSearchBar}) {
    const [findCustomer,  setFindCustomer] = useState('')

    const handleInputChange = (event) => {
      const value = event.target.value;
      setFindCustomer(value);
      useSearchBar(value);
    };  

    return (
      <div className='layout-row align-items-center justify-content-center mt-30'>
        <input
          placeholder="Search..."
          type="text"
          onChange={handleInputChange}
          value={findCustomer}
        />
      </div>
    )
  }

  export default SearchCustomer