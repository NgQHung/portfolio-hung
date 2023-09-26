import {configureStore} from '@reduxjs/toolkit';
import ThemeSwitcher from './ThemeSwitcher';
import Project from './Project';

const store = configureStore({
    reducer: {
        themeSwitcher: ThemeSwitcher,
        project: Project,
    },
});

export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
