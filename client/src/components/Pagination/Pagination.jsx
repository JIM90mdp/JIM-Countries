import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import "../Pagination/pagination.css";

export default function Pagination({ pageSize, allCountries }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.page);
  const pageNumbers = [];
  const cardsPerPage = allCountries / pageSize;

  if (!Number.isInteger(cardsPerPage)) {
    for (let i = 0; i <= Math.ceil(cardsPerPage); i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = 0; i <= 1 + Math.ceil(cardsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  const indexOfLastPage = currentPage + 3; // inicia en 8
  const indexOfFirstCountry = indexOfLastPage - 3; // 0
  const currentPages = pageNumbers.slice(indexOfFirstCountry, indexOfLastPage);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  function handlerSetPages(e) {
    dispatch(setCurrentPage(e));
  }
  function handlerBack(e) {
    currentPage > 1
      ? dispatch(setCurrentPage(currentPage - 1))
      : dispatch(setCurrentPage(currentPage));
  }
  function handlerNext(e) {
    currentPages.length > 1
      ? dispatch(setCurrentPage(currentPage + 1))
      : dispatch(setCurrentPage(currentPage));
  }
  // const slicing = pageNumbers?.slice(1,-1)
  return (
    <span className="pagination__container">
      <div onClick={handlerBack} className="pagination__btn back">
        Back{" "}
      </div>
      <div className="pagination__number-container">
        {currentPages &&
          currentPages.map((number) => (
            <button
              className="number-container__number"
              key={number}
              disabled={number === currentPage ? true : false}
            >
              <div onClick={() => handlerSetPages(number)}> {number} </div>
            </button>
          ))}
      </div>
      <div onClick={handlerNext} className="pagination__btn next">
        Next
      </div>
    </span>
  );
}
