import React, { useState } from "react";
import classes from "./Comment.module.scss";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deletePostById, editPostById } from "../../store/postsSlice";
import { useDispatch } from "react-redux";

export const Post = ({ post }) => {
  const { id = "",  body = "" } = post ?? {};
  const [editMode, setEditMode] = useState(false);
  const [editedCommentText, setEditedCommentText] = useState(name);
  const dispatch = useDispatch();

  const handleDeleteComment = (id) => {
    dispatch(deletePostById(id));
  };

  const handleEditComment = (postId, text) => {
    dispatch(editPostById({ postId, text }));
    setEditMode(false);
  };

  return (
    <div className={classes.comment}>
      {editMode ? (
        <div className={classes.editCommentContainer}>
          <input
            className={classes.editCommentInput}
            value={editedCommentText}
            onChange={(e) => setEditedCommentText(e.target.value)}
            autoFocus
          />
          <button type={"submit"} onClick={() => handleEditComment(id, editedCommentText)}>
            Edit
          </button>
        </div>
      ) : (
        <span className={classes.comment__body}>{body}</span>
      )}
      <div className={classes.comment__actions}>
        <FaEdit onClick={() => setEditMode(true)} />
        <FaTrash onClick={() => handleDeleteComment(id)} />
      </div>
    </div>
  );
};
