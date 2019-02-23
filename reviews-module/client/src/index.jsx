import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search.jsx";
import Ratings from "./components/Ratings.jsx";
import ReviewList from "./components/ReviewList.jsx";
import axios from "axios";

class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      allReviews: [],
      listingId: 1,
      avgAccuracy: 0,
      avgCommunication: 0,
      avgCleanliness: 0,
      avgLocation: 0,
      avgCheckIn: 0,
      avgValue: 0,
      overallRating: 0,
      showBackToReviewsButton: false,
      searchInput: "",
      reviewCount: 0,
      currentPage: 1,
      numPages: 0,
      reviewsInPage: {}
    };
    this.handleStarRating = this.handleStarRating.bind(this);
    this.handleBackToReviews = this.handleBackToReviews.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchEnter = this.handleSearchEnter.bind(this);
    this.handlePreviousArrow = this.handlePreviousArrow.bind(this);
    this.handleNextArrow = this.handleNextArrow.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  componentDidMount() {
    var listingId = window.location.pathname.substr(1).split("/")[0];
    this.getReviews(listingId);
    this.getRatings(listingId);
  }

  getReviews(listingId) {
    axios
      .get(`/api/items/${listingId}`)
      .then(res => {
        var numPages = Math.ceil(res.data.length / 7);
        var reviewsForPage = {};
        var start = 0;
        var end = 7;
        for (var i = 1; i <= numPages; i++) {
          reviewsForPage[i] = res.data.slice(start, end);
          start += 7;
          end += 7;
        }
        this.setState({
          reviews: reviewsForPage[1],
          allReviews: res.data,
          listingId: listingId,
          numPages: numPages,
          reviewsInPage: reviewsForPage
        });
      })
      .catch(err => {
        console.error(
          `error getting reviews from listing id ${listingId}`,
          err
        );
      });
  }

  getRatings(listingId) {
    axios
      .get(`/api/items/${listingId}`)
      .then(res => {
        this.setState(
          {
            avgAccuracy:
              res.data.reduce((sum, review) => {
                return sum + review.accuracy;
              }, 0) / res.data.length,
            avgCommunication:
              res.data.reduce((sum, review) => {
                return sum + review.communication;
              }, 0) / res.data.length,
            avgCleanliness:
              res.data.reduce((sum, review) => {
                return sum + review.cleanliness;
              }, 0) / res.data.length,
            avgLocation:
              res.data.reduce((sum, review) => {
                return sum + review.location;
              }, 0) / res.data.length,
            avgCheckIn:
              res.data.reduce((sum, review) => {
                return sum + review.checkin;
              }, 0) / res.data.length,
            avgValue:
              res.data.reduce((sum, review) => {
                return sum + review.value;
              }, 0) / res.data.length
          },
          () => {
            this.setState({
              overallRating:
                (this.state.avgAccuracy +
                  this.state.avgCommunication +
                  this.state.avgCleanliness +
                  this.state.avgLocation +
                  this.state.avgCheckIn +
                  this.state.avgValue) /
                6
            });
          }
        );
      })
      .catch(err => {
        console.error(
          `error getting ratings from listing id ${listingId}`,
          err
        );
      });
  }

  handleStarRating(avgRating) {
    var roundRating = Math.round(avgRating * 2) / 2;

    return (
      <span>
        {roundRating < 0.5 ? (
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : roundRating === 0.5 ? (
          <span className="_z88ebjv">
            <span className="_15qz71s">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
              </svg>
            </span>
            <span className="_odm2ne">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
              </svg>
            </span>
          </span>
        ) : roundRating > 0.5 ? (
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : null}

        {roundRating < 1.5 ? (
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : roundRating === 1.5 ? (
          <span className="_z88ebjv">
            <span className="_15qz71s">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
              </svg>
            </span>
            <span className="_odm2ne">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
              </svg>
            </span>
          </span>
        ) : roundRating > 1.5 ? (
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : null}

        {roundRating < 2.5 ? (
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : roundRating === 2.5 ? (
          <span className="_z88ebjv">
            <span className="_15qz71s">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
              </svg>
            </span>
            <span className="_odm2ne">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
              </svg>
            </span>
          </span>
        ) : roundRating > 2.5 ? (
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : null}

        {roundRating < 3.5 ? (
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : roundRating === 3.5 ? (
          <span className="_z88ebjv">
            <span className="_15qz71s">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
              </svg>
            </span>
            <span className="_odm2ne">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
              </svg>
            </span>
          </span>
        ) : roundRating > 3.5 ? (
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : null}

        {roundRating < 4.5 ? (
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : roundRating === 4.5 ? (
          <span className="_z88ebjv">
            <span className="_15qz71s">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
              </svg>
            </span>
            <span className="_odm2ne">
              <svg
                viewBox="0 0 1000 1000"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "currentColor"
                }}
              >
                <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
              </svg>
            </span>
          </span>
        ) : roundRating > 4.5 ? (
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        ) : null}
      </span>
    );
  }

  handleBackToReviews() {
    this.setState({
      reviews: this.state.allReviews,
      showBackToReviewsButton: false
    });
  }

  handleSearchInput(e) {
    this.setState({
      searchInput: e.target.value
    });
  }

  handleSearchEnter(e) {
    if (e.keyCode === 13) {
      this.setState({
        reviews: this.state.allReviews.filter(review =>
          review.review.includes(this.state.searchInput)
        ),
        showBackToReviewsButton: true
      });
    }
  }

  handlePreviousArrow() {
    this.setState({
      currentPage: this.state.currentPage - 1,
      reviews: this.state.reviewsInPage[this.state.currentPage - 1]
    });
    document.querySelector("._en5l15m").scrollIntoView({
      behavior: "smooth"
    });
  }

  handleNextArrow() {
    this.setState({
      currentPage: this.state.currentPage + 1,
      reviews: this.state.reviewsInPage[this.state.currentPage + 1]
    });
    document.querySelector("._en5l15m").scrollIntoView({
      behavior: "smooth"
    });
  }

  handlePageClick(e) {
    this.setState({
      currentPage: Number(e.target.textContent),
      reviews: this.state.reviewsInPage[Number(e.target.textContent)]
    });
    document.querySelector("._en5l15m").scrollIntoView({
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="reviews">
        <div className="scroll-here">
          <section>
            <Search
              {...this.state}
              handleStarRating={this.handleStarRating}
              handleSearchInput={this.handleSearchInput}
              handleSearchEnter={this.handleSearchEnter}
            />
            <div>
              <Ratings
                {...this.state}
                handleStarRating={this.handleStarRating}
                handleBackToReviews={this.handleBackToReviews}
              />
              <ReviewList
                {...this.state}
                handlePreviousArrow={this.handlePreviousArrow}
                handleNextArrow={this.handleNextArrow}
                handlePageClick={this.handlePageClick}
              />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<ReviewsModule />, document.getElementById("app"));

window.ReviewsModule = ReviewsModule;
