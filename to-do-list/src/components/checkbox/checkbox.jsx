import './checkbox.css'

export function CheckBox() {
    const data = [{title: 'Add'},{title: 'Complete'},{title: 'Pending'}]
  return (
    <> 
        <div className='check-container'>
        {data.map((d) =>
        <>
            <div  className="check-container">
                <input className="checkbox" type="radio"/>
            <p>{d.title}</p>
            </div>
     </>
    ) }
    </div>
    </>
      )
}
