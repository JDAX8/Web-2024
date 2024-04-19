import React, { useState } from 'react';
import SearchCustomer from './searchbar/searchbar';
import { Table } from './Tabla/Tabla';

export function Body() {
  const { dataModify, setDataModify } = useState();

  return (
    <main>
      <SearchCustomer setSearchWord={setDataModify} />
      <Table dataModify={dataModify} />
    </main>
  );
}