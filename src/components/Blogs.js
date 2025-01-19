import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  // consuming the data
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="flex w-full flex-col h-[90%]  mt-[90px] mb-[90px] gap-y-10 my-4">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Posts Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post}/>
        ))
      )}
    </div>
  );
};

export default Blogs;
