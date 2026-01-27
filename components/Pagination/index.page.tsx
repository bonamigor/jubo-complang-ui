import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { PaginationButtons } from './pagination';

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }: PaginationProps) => {
  const [pages] = useState<number[]>([])
  const [pagesToDisplay, setPagesToDisplay] = useState<number[]>([])
  const [initialIndex, setInitialIndex] = useState(0)
  const [finalIndex, setFinalIndex] = useState(5)

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    setPagesToDisplay(pages.slice(initialIndex, finalIndex))
  }, [finalIndex, initialIndex, pages])

  const displayMorePages = () => {
    setInitialIndex(initialIndex + 5)
    setFinalIndex(finalIndex + 5)
  }

  const displayLessPages = () => {
    setInitialIndex(initialIndex - 5)
    setFinalIndex(finalIndex - 5)
  }

  return (
    <PaginationButtons>
      {pagesToDisplay[0] > 1 && <button id='more' onClick={() => { displayLessPages() }}>Menos...</button>}
      {pagesToDisplay.map((page, index) => {
        return (
          <button key={index} onClick={() => { setCurrentPage(page) }}>
            {page}
          </button>
        )
      })}
      {pagesToDisplay[pagesToDisplay.length - 1] < pages[pages.length - 1] && <button id='more' onClick={() => displayMorePages()}>Mais...</button>}
    </PaginationButtons>
  );
};

export default Pagination;
