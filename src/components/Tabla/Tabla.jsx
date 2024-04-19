import getCustomers from '../../services/getCustomers'
import { useState, useEffect } from "react"

export function Table() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers().then(customers => {
      setCustomers(customers)
    })
  }, [])
  return (
    <div className='layout-column align-items-center justify-content-start'>
      <div className='card pt-30 pb-8 mt-20'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Gender</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody >
              { 
                customers.map((user)=>(
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.location}</td>
                    <td>{user.gender}</td>
                    <td>{user.income}</td>   
                </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
  )
}
