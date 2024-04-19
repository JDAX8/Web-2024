import { useState, useEffect } from 'react';
import getCustomers from '../services/getCustomers';

export const useSearchBar = () => {
  const [data, setData] = useState([]);
  const [dataModify, setDataModify] = useState([]);

  useEffect(() => {
    getCustomers().then(customers => {
      setData(customers);
      setDataModify(customers);
    });
  }, []);

  const setSearchUser = (value) => {
    const searchUserInfo = value.toString().toLowerCase();

    if (value === '') {
      setDataModify(data);
    } else {
      const filteredData = data.filter((customer) =>
        Object.keys(customer).filter((key) => key.toLowerCase()!== 'id').some((key) =>
          customer[key].toString().toLowerCase().includes(searchUserInfo)
        )
      );
      setDataModify(filteredData);
    }
  };

  return { dataModify, setSearchUser };
};