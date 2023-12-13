import { useState } from 'react'

const Edit = ({ add }) => {

    const [note, setNote] = useState("")
    let noteChange = (e) => {
        setNote(e.target.value)
    }

    const [date, setDate] = useState("")
    let dateChange = (e) => {
        setDate(e.target.value)
    }

    const [time, setTime] = useState("")
    let timeChange = (e) => {
        setTime(e.target.value)
    }

    let addItem = () =>{
        add((preData) => {
            return [
                {
                    note,
                    date,
                    time
                },
                ...preData
            ]
        })
    }

    return <div>
        <h1>Memo</h1>
        <p>Event</p>
        <input type="text" value={note} onChange={noteChange}/>
        <p>Date</p>
        <input type="date" value={date} onChange={dateChange}/>
        <p>Time</p>
        <input type="time" value={time} onChange={timeChange}/>
        <button onClick={addItem} className="add">Add</button>
    </div>
}

export default Edit