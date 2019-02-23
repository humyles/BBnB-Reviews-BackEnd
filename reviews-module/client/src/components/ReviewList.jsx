import React from "react";
import Review from "./Review.jsx";

const ReviewList = props => (
  <div>
    {/* reviews */}
    <div>
      {props.reviews.map(review => {
        return <Review review={review} key={review.id} />;
      })}
    </div>
    {/* pages */}
    <div>
      {/* pages...when clicked, render 7 new reviews based on page # */}
      <div>
        <div className="_36rlri">
          <div style={{ marginBottom: 32 }}>
            <nav role="navigation">
              <span>
                <div>
                  <ul className="_11hau3k">
                    {/* previous page arrow */}
                    {props.currentPage > 1 ? (
                      <li className="_8wtxgiq">
                        <button
                          className="_1ip5u88"
                          type="button"
                          onClick={props.handlePreviousArrow}
                        >
                          <div className="_1yofwd5">
                            <div className="_1rltvky">
                              <svg
                                viewBox="0 0 18 18"
                                role="img"
                                focusable="false"
                                style={{
                                  height: "1em",
                                  width: "1em",
                                  display: "block",
                                  fill: "currentColor"
                                }}
                              >
                                <path
                                  d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </li>
                    ) : null}

                    {Object.keys(props.reviewsInPage).map((pageNum, index) => {
                      return (
                        <li className="_1am0dt" key={pageNum}>
                          <button
                            className="_1ip5u88"
                            type="button"
                            onClick={props.handlePageClick}
                          >
                            <div className="_1bdke5s">{pageNum}</div>
                          </button>
                        </li>
                      );
                    })}

                    {/* next page arrow */}
                    {props.currentPage < props.numPages ? (
                      <li className="_b8vexar">
                        <button
                          className="_1ip5u88"
                          type="button"
                          onClick={props.handleNextArrow}
                        >
                          <div className="_1yofwd5">
                            <div className="_1rltvky">
                              <svg
                                viewBox="0 0 18 18"
                                role="img"
                                focusable="false"
                                style={{
                                  height: "1em",
                                  width: "1em",
                                  display: "block",
                                  fill: "currentColor"
                                }}
                              >
                                <path
                                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewList;

// {/*elipsis ... */}
// <li className="_1am0dt">
// <div className="_1oq38vn">
//   <div className="_1r804a6o">...</div>
// </div>
// </li>
// <li className="_1am0dt" data-id="page-29">
// <button
//   className="_1ip5u88"
//   type="button"
//   aria-label="Page 29"
//   aria-busy="false"
// >
//   <div className="_1bdke5s">29</div>
// </button>
// </li>
