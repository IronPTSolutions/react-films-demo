const ListItem = ({ title, onClick }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{title}</span>

      {onClick && (
        <button className="btn btn-danger" onClick={onClick}>Delete</button>
      )}
    </li>
  )
}

export default ListItem