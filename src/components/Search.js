import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
  };

  return (
    // <Form onSubmit={handleSubmit}>
    //   <h1>{props.keyword && "Search by term: " + props.keyword}</h1>

    //   <input
    //     type="text"
    //     term={props.keyword}
    //     onChange={(event) => {
    //       props.setKeyword(event.target.value);
    //     }}
    //   />
    //   <Button className="btn-info">Search</Button>
    // </Form>

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="searchKeyword">
        <Form.Label>Enter Search: </Form.Label>
        <Form.Control
          type="keyword"
          placeholder="Enter keyword"
          term={props.keyword}
          onChange={(event) => {
            props.setKeyword(event.target.value);
          }}
        />{" "}
      </Form.Group>
      <Button className="btn-info" type="submit">
        {" "}
        Submit
      </Button>{" "}
    </Form>
  );
};

export default Search;
