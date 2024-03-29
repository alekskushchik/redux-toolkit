import { AddCommentForm } from "@components/Comments/AddCommentForm";
import "./App.css";
import { PostsList } from "@components/Comments/PostsList";

function App() {
  
  return (
    <div>
      <AddCommentForm />
      <PostsList />
    </div>
  );
}

export default App;
