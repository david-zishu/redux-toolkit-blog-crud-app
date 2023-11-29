import { AddPostForm } from "./features/posts/AddPostForm";
import { PostsList } from "./features/posts/PostsList";
import { SinglePostPage } from "./features/posts/SinglePostPage";
import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { EditPostForm } from "./features/posts/EditPostForm";
import { UsersList } from "./features/users/UsersList";
import { UserPage } from "./features/users/UserPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
