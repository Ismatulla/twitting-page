import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import PostsStatusFilter from "./components/PostsStatusFilter";

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <SearchPanel/>
        <PostsStatusFilter/>
    </div>
  );
}

export default App;
