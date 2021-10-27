import Head from "next/head";
import Link from "next/link";
import { nanoid } from "nanoid";
import React, { useState } from "react";

import Layout from "../components/Layout";
import data from "../public/comment-dummy.json";

const Comments = () => {
  const [comments, setComments] = useState(data);
  const [addFormData, setaddFormData] = useState({
    name: "",
    comment: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setaddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      id: nanoid(),
      name: addFormData.name,
      comment: addFormData.comment,
    };
    const newComments = [...comments, newComment];
    setComments(newComments);
  };

  return (
    <div className="container">
      <form onSubmit={handleAddFormSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            id="floatingInput"
            placeholder="İsminiz: Cenk"
            onChange={handleAddFormChange}
          />
          <label>İsminiz</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            name="comment"
            onChange={handleAddFormChange}
            placeholder="Yorumunuzu giriniz."
            id="floatingTextarea"
            style={{ height: "100px" }}
          ></textarea>
          <label>Yorumunuz</label>
          <button type="submit" className="btn btn-success mt-3 p-3">
            Gönder
          </button>
        </div>
      </form>
      <div
        className="my-3 p-3 bg-body rounded shadow-sm overflow-auto"
        style={{ height: "400px" }}
      >
        <h6 className="border-bottom pb-2 mb-0">Yorumlar</h6>
        {comments.map((comment) => (
          <div className="d-flex text-muted pt-3">
            <svg
              className="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#007bff"></rect>
              <text x="50%" y="50%" fill="#007bff" dy=".3em">
                32x32
              </text>
            </svg>

            <p className="pb-3 mb-0 small lh-sm border-bottom">
              <strong className="d-block text-gray-dark">
                {"@" + comment.name}
              </strong>
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Comments.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Comments;
