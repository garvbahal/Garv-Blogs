import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { fetchBlog } = useContext(AppContext);

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
