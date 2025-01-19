import { createContext, useState } from "react";

export const AppContext = createContext();

const baseUrl = `https://codehelp-apis.vercel.app/api/get-blogs`;

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlog(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error is here");
      }
      const data = await response.json();
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error is here");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlog(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlog,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
