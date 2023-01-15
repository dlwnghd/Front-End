function* loadPosts(action) {
    try {
        yield delay(1000);
        yield put({type: LOAD_ALLPOSTS_SUCCESS, data: createDummyPost(10)});
    } catch (err) {
        console.log(err);
        yield put({type: LOAD_ALLPOSTS_FAILURE, error: err.response.data});
    }
}

function* addPost(action) {
    try {
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            data: dummyPost(action.data)
        });
    } catch (err) {
        console.log(err);
        yield put({type: ADD_POST_FAILURE, error: err.response.data});
    }
}

function* removePost(action) {
    try {
        yield delay(1000);
        yield put({type: REMOVE_POST_SUCCESS, data: action.data});
    } catch (err) {
        console.log(err);
        yield put({type: REMOVE_POST_FAILURE, error: err.response.data});
    }
}

function* updatePost(action) {
    try {
        yield delay(1000);
        yield put({type: UPDATE_POST_SUCCESS, data: action.data});
    } catch (err) {
        console.log(err);
        yield put({type: UPDATE_POST_FAILURE, error: err.response.data});
    }
}

function* watchLoadPosts() {
    yield takeLatest(LOAD_ALLPOSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchUpdatePost() {
    yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addCommnet);
}

function* watchRemoveCommet() {
    yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}