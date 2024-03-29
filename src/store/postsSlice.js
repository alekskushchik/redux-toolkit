import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
  return response;
});

export const createPost = createAsyncThunk("posts/createPost", async (body) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({ body }),
  }).then((res) => res.json());
  return { ...response, body };
});

export const deletePostById = createAsyncThunk("posts/deletePostById", async (postId) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: "DELETE" }).then((res) => res.json());
  return postId;
});

export const editPostById = createAsyncThunk("posts/editPostById", async ({ postId, text }) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify({ text }),
  }).then((res) => {
    const response = res.json();
    console.log(response);
    return response;
  });
  return { postId, text };
});

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addComment(state, action) {
      state.posts.push({
        id: nanoid(),
        text: action.payload,
        isLiked: false,
        likes: 0,
      });
    },
    deleteComment(state, action) {
      const filteredPosts = state.posts.filter((comment) => comment.id !== action.payload);
      state.posts = filteredPosts;
    },
    toggleLikeComment(state, action) {
      state.posts = state.posts.map((comment) => {
        if (comment.id === action.payload) {
          return {
            ...comment,
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          };
        }
        return comment;
      });
    },
    editComment(state, action) {
      state.posts = state.posts.map((comment) => {
        if (comment.id === action.payload.id) {
          return {
            ...comment,
            text: action.payload.text,
          };
        }
        return comment;
      });
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // Add user to the state array
        state.posts = action.payload.slice(0, 10);
      })
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    // _____________________________

    builder
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        state.posts.push(action.payload);
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    // _____________________________
    builder
      .addCase(deletePostById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const filteredPosts = state.posts.filter((comment) => comment.id !== action.payload);
        state.posts = filteredPosts;
      })
      .addCase(deletePostById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePostById.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    // _____________________________
    builder
      .addCase(editPostById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.posts = state.posts.map((comment) => {
          if (comment.id === action.payload.postId) {
            return {
              ...comment,
              body: action.payload.text,
            };
          }
          return comment;
        });
      })
      .addCase(editPostById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editPostById.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { addComment, deleteComment, toggleLikeComment, editComment } = postsSlice.actions;

export default postsSlice.reducer;
