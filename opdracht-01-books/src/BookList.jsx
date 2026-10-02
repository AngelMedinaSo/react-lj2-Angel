import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import SearchBar from "./SearchBar";

function BookList() {
  const [books] = useState([
    {
      id: 1,
      image: "/images/book-1.png",
      title: "Harry Potter",
      author: "J.F.K",
      category: "Fantasy",
    },
    {
      id: 2,
      image: "/images/book-2.png",
      title: "Geronimo Stilton",
      author: "Pelckmans",
      category: "Avontuur",
    },
    {
      id: 3,
      image: "/images/book-3.png",
      title: "The Hunger Games",
      author: "Suzanne Collins",
      category: "Sciencefiction",
    },
  ]);

  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
    "Thriller",
    "Romance",
  ];

  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  function searchHandler(e) {
    setSearchInput(e.target.value);
  }

  function filterHandler(e) {
    setSelectedCategory(e.target.value);
  }

  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .filter((book) =>
      selectedCategory === "Alle"
        ? true
        : book.category === selectedCategory
    );

  return (
    <div>
      <BookCounter count={books.length} />

      <SearchBar
        value={searchInput}
        onChange={searchHandler}
      />

      <select
        value={selectedCategory}
        onChange={filterHandler}
        className="border p-2 rounded mb-5 bg-mist-800"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="flex justify-center gap-10">
        {filteredBooks.map((book) => (
          <Book
            key={book.id}
            image={book.image}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;