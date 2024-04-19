// import getCustomers from "../services/getCustomers"
// import { useState, useEffect } from "react"

// export function Table() {
//   const [customers, setCustomers] = useState([])

//   useEffect(() => {
//     getCustomers().then(customers => {
//       setCustomers(customers)
//     })
//   }, [])
//   return (
//     <div className='layout-column align-items-center justify-content-start'>
//       <div className='card pt-30 pb-8 mt-20'>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Location</th>
//               <th>Gender</th>
//               <th>Income</th>
//             </tr>
//           </thead>
//           <tbody >
//               { 
//                 customers.map((user)=>(
//                   <tr key={user.id}>
//                     <td>{user.name}</td>
//                     <td>{user.age}</td>
//                     <td>{user.location}</td>
//                     <td>{user.gender}</td>
//                     <td>{user.income}</td>   
//                 </tr>
//                 ))
//               }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }


// function SearchCustomer({setSearchCustomer}) {
//   const [findCustomer,  setFindCustomer] = useState()
//   const [customers, setCustomers] = useState([]);
  
//   useEffect(() => {
//     getCustomers().then(customers => {
//       setCustomers(customers)
//     })
//   }, [])

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setFindCustomer(value);
//     setSearchCustomer(value);
//   };  

//   return (
//     <>
//       <div className='layout-row align-items-center justify-content-center mt-30'>
//       <input
//         placeholder="Search..."
//         type="text"
//         onChange={handleInputChange}
//         value={findCustomer}
//       />
//       </div>
//       <Table />
//     </>
//   )
// }

// export default SearchCustomer