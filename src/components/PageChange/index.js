import React from "react";

const PageChange = ({
  page,
  allPages,
  previousDisabled,
  handleClickPreviousPage,
  nextDisabled,
  handleClickNextPage,
}) => {
  return (
    <div className="change-page">
      <p>
        Pagina <span>{page}</span> de
        <span>{allPages}</span>
      </p>
      <button
        className="previous"
        type="button"
        disabled={previousDisabled}
        onClick={() => handleClickPreviousPage()}
      >
        {`<`}
      </button>
      <button
        className="next"
        type="button"
        disabled={nextDisabled}
        onClick={() => handleClickNextPage()}
      >
        {`>`}
      </button>
    </div>
  );
};

export default PageChange;
