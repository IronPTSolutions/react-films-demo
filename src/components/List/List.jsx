import ListItem from "./ListItem"

const List = ({ books, deleteBook }) => {
  return (
    <div className="List">
      <h1>Books list</h1>

      {books && books.length > 0 ? (
        <div>We currently have {books.length} books</div>
      ) : null}

      <ul className="list-group">
        {books && books.length > 0 ? (
          books.map(({ id, title }, index) => (
            <ListItem key={id} title={title} onClick={() => deleteBook(id)} />
          ))
        ) : (
          <div>There are not books</div>
        )}
      </ul>
    </div>
  )
}

export default List