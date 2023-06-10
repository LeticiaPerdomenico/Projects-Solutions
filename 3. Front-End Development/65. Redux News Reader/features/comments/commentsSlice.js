// Import createAsyncThunk and createSlice here.
/*1*/
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Create loadCommentsForArticleId here.
/*2*/
export const loadCommentsForArticleId = createAsyncThunk(
  'comments/loadCommentsForArticleId',
  /*3*/
  async(id) => {
    const data = await fetch(`api/articles/${id}/comments`);
    const json = await data.json();
    console.log(json);
    return json;
  }
  
);
// Create postCommentForArticleId here.
/*11*/
export const postCommentForArticleId = createAsyncThunk( 
  'comments/postCommentForArticleId',
  async ({articleId, comment}) => {
    /*12*/
    const requestBody = JSON.stringify({comment: comment});
    const response = await fetch(`api/articles/${articleId}/comments`, {
      method: 'POST', 
      body: requestBody
      });
    const json = await response.json();
    return json;
  }
)


export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    // Add initial state properties here.
    /*4*/
    byArticleId: {},
    /*5*/
    isLoadingComments: false,
    failedToLoadComments: false,
    /*13*/
    createCommentIsPending: false,
    failedToCreateComment: false,
  },
  // Add extraReducers here.
  /*6*/
  extraReducers: (builder) => {
    builder
    /*7*/
      .addCase(loadCommentsForArticleId.pending, (state) => {
        state.isLoadingComments = true;
        state.failedToLoadComments = true;
      })
      .addCase(loadCommentsForArticleId.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
        state.byArticleId = {[action.payload.articleId]: action.payload.comments}
      })
      .addCase(loadCommentsForArticleId.rejected, (state) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
      })
      /*14*/
      .addCase(postCommentForArticleId.pending, (state) => {
        state.createCommentIsPending = true;
        state.failedToCreateComment = false;
      })
      .addCase(postCommentForArticleId.fulfilled, (state, action) => {
        state.createCommentIsPending = false;
        state.failedToCreateComment = false;
        state.byArticleId[action.payload.articleId].push(action.payload)
      })
      .addCase(postCommentForArticleId.rejected, (state) => {
        state.createCommentIsPending = false;
        state.failedToCreateComment = true;
      })
  }
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;