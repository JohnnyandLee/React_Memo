const Item = ({ id, note, date, time, deleteData }) => {


  let deleteItem = () => {
    deleteData((prev) => {
       return prev.filter(item => item.id !== id)
    })
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">Delete</button>
    </div>
  );
};

export default Item;
