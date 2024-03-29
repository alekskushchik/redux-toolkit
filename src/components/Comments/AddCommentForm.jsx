import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/postsSlice.js";

export const AddCommentForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAddComment = () => {
    dispatch(createPost(value));
    setValue("");
  };

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAddComment}>Add comment</button>
    </>
  );
};
