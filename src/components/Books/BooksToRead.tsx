import React, { useState, useEffect } from 'react';
import BooksList from '../General/BooksList';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function BooksToRead() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsDesktop(window.innerWidth > 1024);
    }
  }, []);

  const [booksToRead, setBooksToRead] = useState([]);

  useEffect(() => {
    fetch('https://books.medoix.com/reading/85150139/to-read/json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const books = data;
        setBooksToRead(books);
      })
      .catch((error) => {
        console.log(
          'There was a problem with the fetch operation: ' + error.message,
        );
      });
  }, []);

  return (
    <>
      <p>
        If there is a particular book that you think I should read, feel free to recommend it.
      </p>
      <BooksList books={booksToRead} />
    </>
  );
}
