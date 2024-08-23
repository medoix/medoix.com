import React, { useState, useEffect } from 'react';
import BooksList from '../General/BooksList';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';


export default function BooksReading() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsDesktop(window.innerWidth > 1024);
    }
  }, []);

  const [booksReading, setBooksReading] = useState([]);

  useEffect(() => {
    fetch('https://books.medoix.com/reading/85150139/currently-reading/json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const books = data;
        setBooksReading(books);
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
        Books i am currentlty reading.
      </p>
      <BooksList books={booksReading} />
    </>
  );
}
