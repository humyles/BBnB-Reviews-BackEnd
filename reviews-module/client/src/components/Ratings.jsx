import React from "react";

const Ratings = props => (
  <div className="_2h22gn">
    {props.showBackToReviewsButton ? (
      <div>
        <div className="back-to-reviews">
          <div className="search-count">
            {props.reviews.length} guests have mentioned{" "}
            <b>"{props.searchInput}"</b>
          </div>
          <div>
            <button
              className="back-to-reviews-button"
              type="button"
              onClick={props.handleBackToReviews}
            >
              Back to all reviews
            </button>
          </div>
        </div>
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <div className="_7qp4lh" />
        </div>
      </div>
    ) : (
      <div>
        <table className="_en5l15m">
          <tbody>
            <tr style={{ marginBottom: 12 }}>
              <th className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Accuracy</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgAccuracy)}
                  </div>
                </div>
              </th>
            </tr>
            <tr style={{ marginBottom: 12 }}>
              <th className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Communication</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgCommunication)}
                  </div>
                </div>
              </th>
            </tr>
            <tr style={{ marginBottom: 12 }}>
              <th className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Cleanliness</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgCleanliness)}
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <table className="_ej5l15s">
          <tbody>
            <tr style={{ marginBottom: 12 }}>
              <th className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Location</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgLocation)}
                  </div>
                </div>
              </th>
            </tr>
            <tr style={{ marginBottom: 12 }}>
              <th className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Check-in</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgCheckIn)}
                  </div>
                </div>
              </th>
            </tr>
            <tr style={{ marginBottom: 12 }}>
              <th className="_2h22gn">
                <div className="_iq8x9is">
                  <span className="_1r804a6o">Value</span>
                </div>
                <div className="_iq8x9is">
                  <div className="_1iu38l3">
                    {props.handleStarRating(props.avgValue)}
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    )}
  </div>
);

export default Ratings;
