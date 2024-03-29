import React, { useEffect } from "react";
import classes from "./Comments.module.scss";
import { Post } from "./Post";
import { useSelector } from "react-redux";
import { fetchPosts } from "../../store/postsSlice";
import { useDispatch } from "react-redux";

export const PostsList = () => {
  const { posts, isLoading, isError } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section className={classes.container}>
      <div className={classes.commentsList}>
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>Error...</h2>}
        {posts?.map((post) => (
          <Post key={post?.id} post={post} />
        ))}
      </div>
    </section>
  );
};
