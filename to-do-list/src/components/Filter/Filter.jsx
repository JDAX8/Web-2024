import { useState } from "react";

export function Filter (props){
    const { onChangeFilter } = props;
    const [selectedFilter, setselectedFilter] = useState('All');

    const handleFilterChange = (filter) => {
        setselectedFilter(filter);
        onChangeFilter(filter)
    };

    return
 }