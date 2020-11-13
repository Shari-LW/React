import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const info = props.book.volumeInfo;

  const {
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
  } = props.book;

  const renderAmount = () => {
    if (
      props.book.saleInfo &&
      props.book.saleInfo.listPrice &&
      props.book.saleInfo.listPrice.amount
    ) {
      return "£" + props.book.saleInfo.listPrice.amount;
    }
    return "No price available";
  };

  return (
    <div className="book">
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>by {authors.length === 1 ? authors[0] : authors.join(", ")}</p>
      <h4>{renderAmount()}</h4>
      <p className="description"> {description}</p>
      <button className="add-button" onClick={() => props.addBook(title)}>
        {" "}
        Add +{" "}
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
      }),
    }),
    saleInfo: PropTypes.shape({
      listPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }).isRequired,
    }),
  }),
};

Book.defaultProps = {
  title: "This is title",
};

export default Book;
