import { Component } from "react";
import Header from './components/Header/Header'
import List from "./components/List/List"
import books from './data/books.json'

class App extends Component {
  state = {
    books: books,
    search: '',
    sort: ''
  }

  handleOnChange = (event) => {
    const { value, name } = event.target
    // const value = event.target.value
    // const name = event.target.name

    this.setState({ [name]: value })
  }

  getBooksBySearchFilter = () => {
    const { books, search } = this.state

    // return books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    return books.filter(book => {
      if (book.title.toLowerCase().includes(search.toLowerCase())) {
        return true
      }

      if (book.description.toLowerCase().includes(search.toLowerCase())) {
        return true
      }

      return false
    })
  }

  deleteBook = (id) => {
    const { books } = this.state

    this.setState({ books: books.filter(book => book.id !== id) })

    //patch para borrar
  }

  handleSortBy = (event) => {
    const { name } = event.target

    this.setState(prevState => {
      return {
        sort: prevState.sort === name ? '' : name
      }
    })
  }

  sortBooks = () => {
    const { sort } = this.state

    const filteredBooks = this.getBooksBySearchFilter()

    if (!sort) {
      return filteredBooks
    }

    if (sort === 'name') {
      return filteredBooks.sort((a, b) => {
        if (a.title < b.title) return -1
        if (b.title < a.title) return 1
        return 0
      })
    }

    if (sort === 'id') {
      return filteredBooks.sort((a, b) => {
        if (a.id < b.id) return 1
        if (b.id < a.id) return -1
        return 0
      })
    }
  }

  render() {
    const { search, patata, melon, sort } = this.state

    const books = this.sortBooks()

    return (
      <div className="App">
        <Header />

        <div className="container mt-4">
          <div>
            <label htmlFor="search" className="me-2">Search</label>
            <input id="search" name="search" type="text" value={search} onChange={this.handleOnChange} />
            <input id="search" name="patata" type="text" value={patata} onChange={this.handleOnChange} />
            <input id="search" name="melon" type="text" value={melon} onChange={this.handleOnChange} />
          </div>

          <div className="mt-4">
            <button
              name="name"
              className={`btn btn-${sort === 'name' ? 'success' : 'secondary'} me-2`}
              onClick={this.handleSortBy}
            >
              Sort by name
            </button>
            <button
              name="id"
              className={`btn btn-${sort === 'id' ? 'success' : 'secondary'}`}
              onClick={this.handleSortBy}
            >
              Sort by id descendant
            </button>
          </div>

          <List books={books} deleteBook={this.deleteBook} />
        </div>
      </div>
    )
  }
}

export default App;
