import React from "react";

const Search = props => (
  <div>
    <div style={{ marginBottom: 12 }}>
      <div className="_2h22gn">
        <div className="_1ers5f61">
          <div className="_f8t6x1">
            <div className="_djxl322">
              <div className="_17erhr0e">
                <div className="_vy3ibx">
                  <h2 className="_fecoyn4" tabIndex="-1">
                    <span className="_1dl27thl">
                      {props.allReviews.length} Reviews
                    </span>
                  </h2>
                  <div className="_l0ao8q">
                    {/* overall rating in stars // need to dynamically change content to total reviewcount*/}
                    <div itemProp="ratingValue" content={props.allReviews.length}>
                      <span role="img">
                        {props.handleStarRating(props.overallRating)}
                      </span>
                    </div>
                    {/* need to dynamically change content value to total reviewcount */}
                    <div
                      className="_1m8bb6v"
                      itemProp="reviewCount"
                      content={props.allReviews.length}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="_tvh5ly1">
          <div className="_f8t6x1">
            <div className="_djxl322">
              <div className="_17erhr0e">
                <div className="_9hxttoo">
                  <div className="_ckio8me">
                    {/* magnifying glass icon */}
                    <div className="_ncmdki">
                      <div
                        className="_e5ldu0s"
                        style={{ visibility: "visible", height: 34 }}
                      >
                        <div className="_nncr1bm">
                          <div className="_ni9axhe">
                            <svg
                              viewBox="0 0 24 24"
                              role="presentation"
                              aria-hidden="true"
                              focusable="false"
                              style={{
                                height: 1 + "em",
                                width: 1 + "em",
                                display: "block",
                                fill: "currentColor"
                              }}
                            >
                              <path
                                d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1"
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* search bar */}
                    <div className="_178faes">
                      <input
                        className="_qa9xwau"
                        type="text"
                        placeholder="Search reviews"
                        onChange={props.handleSearchInput}
                        onKeyDown={props.handleSearchEnter}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      <div className="_7qp4lh" />
    </div>
  </div>
);

export default Search;
