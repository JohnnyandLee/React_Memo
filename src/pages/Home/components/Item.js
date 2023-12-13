const Item = ({ note, date, time }) => {
    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button className="remove">Delete</button>
    </div>
}

export default Item