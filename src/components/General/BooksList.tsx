import React from 'react';

interface Book {
  book: {
    title: string;
    image_url: string;
  }
}

interface BooksListProps {
  books: Book[];
}

export default function BooksList({ books }: BooksListProps) {
  return (
    <div>
      <div className="book-wrapper">
        {books.map((book) => (
          <div className="book-items" key={book.book[0].title}>
            <div className="main-book-wrap">
              <div className="book-cover">
                <div className="book-inside"></div>
                <div className="book-image">
                  <img src={book.book[0].image_url} alt={`${book.book[0].title}`} />
                  <div className="effect"></div>
                  <div className="light"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}