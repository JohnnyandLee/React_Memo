import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  let noteChange = (e) => {
    setNote(e.target.value);
  };

  const [date, setDate] = useState("");
  let dateChange = (e) => {
    setDate(e.target.value);
  };

  const [time, setTime] = useState("");
  let timeChange = (e) => {
    setTime(e.target.value);
  };

  let addItem = () => {
    submittingStatus.current = true
    add((preData) => {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...preData,
      ];
    });
  };

  return (
    <div>
      <h1>Memo</h1>
      <p>Event</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Date</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        Add
      </button>
    </div>
  );
};

export default Edit;
