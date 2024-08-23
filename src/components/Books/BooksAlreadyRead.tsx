import React, { useState, useEffect } from 'react';
import BooksList from '../General/BooksList';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';


export default function BooksAlreadyRead() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsDesktop(window.innerWidth > 1024);
    }
  }, []);

  const [booksAlreadyRead, setBooksAlreadyRead] = useState([]);

  useEffect(() => {
    fetch('https://books.medoix.com/reading/85150139/read/json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const books = data;
        setBooksAlreadyRead(books);
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
        Not all the books I have read, but the ones I have enjoyed the most.
      </p>
      <BooksList books={booksAlreadyRead} />
    </>
  );
}
