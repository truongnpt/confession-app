import React, { Fragment } from 'react';
import { StyledPagination } from 'styles/StyledPagination';
import PropTypes from 'prop-types';
import { Pagination as PaginationNav } from 'react-bootstrap';
import clsx from 'clsx';

const Pagination = ({ itemsPerPage, totalItems, paginate, page }) => {
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const handleClick = (number) => () => {
    paginate(number);
    window.scrollTo(0, 400);
  };
  const PageItem = ({ number }) => {
    return (
      <PaginationNav.Item
        key={number}
        className={clsx(number === page && 'active')}
        onClick={handleClick(number)}
      >
        {number + 1}
      </PaginationNav.Item>
    );
  };
  const PrevButton = () => {
    const number = page - 1;
    return (
      <PaginationNav.Prev
        className="btn-prev"
        onClick={handleClick(number)}
        disabled={number < 0}
      />
    );
  };
  const NextButton = () => {
    const number = page + 1;

    return (
      <PaginationNav.Next
        className="btn-next"
        onClick={() => {
          paginate(number);
        }}
        disabled={number >= totalPage}
      />
    );
  };

  const renderHtmlPageNumber = () => {
    const htmlPageNumber = [];
    const currentPage = page;
    if (totalPage <= 5) {
      //render

      for (let number = 0; number < totalPage; number++) {
        htmlPageNumber.push(<PageItem number={number} key={number} />);
      }

      return (
        <Fragment>
          <PrevButton number={currentPage} />
          {htmlPageNumber}
          <NextButton number={currentPage} />
        </Fragment>
      );
    } else {
      const currentPage = page;
      const begin = [0, 1, 2];
      const end = [totalPage - 1, totalPage - 2, totalPage - 3];
      if (begin.includes(currentPage)) {
        //render 1, 2, 3, 4...10
        for (let number = 0; number <= begin.length; number++) {
          htmlPageNumber.push(<PageItem number={number} key={number} />);
        }
        return (
          <Fragment>
            <PrevButton number={currentPage} />
            {htmlPageNumber}
            <PaginationNav.Ellipsis />
            <PageItem number={totalPage - 1} />
            <NextButton number={currentPage} />
          </Fragment>
        );
      }

      if (end.includes(currentPage)) {
        for (
          let number = totalPage - 1 - end.length;
          number < totalPage;
          number++
        ) {
          htmlPageNumber.push(<PageItem number={number} key={number} />);
        }
        return (
          <Fragment>
            <PrevButton number={currentPage} />
            <PageItem number={0} />
            <PaginationNav.Ellipsis />
            {htmlPageNumber}
            <NextButton number={currentPage} />
          </Fragment>
        );
      }
      //If number active between 4 and 8
      return (
        <Fragment>
          <PrevButton number={currentPage} />
          <PageItem number={0} />
          <PaginationNav.Ellipsis />
          <PageItem number={currentPage - 1} />
          <PageItem number={currentPage} />
          <PageItem number={currentPage + 1} />
          <PaginationNav.Ellipsis />
          <PageItem number={totalPage - 1} />
          <NextButton number={currentPage} />
        </Fragment>
      );
    }
  };

  return (
    <StyledPagination>
      <PaginationNav>{renderHtmlPageNumber()}</PaginationNav>
    </StyledPagination>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number,
  paginate: PropTypes.func,
  page: PropTypes.number,
  number: PropTypes.number,
};

export default Pagination;
