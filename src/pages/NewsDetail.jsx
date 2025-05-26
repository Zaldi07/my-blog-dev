import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
const NewsDetail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  const [theme, setTheme] = useState("light");
  const themeHandle = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    if (theme == "light") {
      document.querySelector("html")?.classList.remove("dark");
    } else {
      document.querySelector("html")?.classList.add("dark");
    }
    console.log("use effect berjalan dan theme  berubah");
  });

  return (
    <div className="bg-white dark:bg-gray-800 w-full h-screen p-4 mx-auto">
      <button
        onClick={themeHandle}
        className="bg-gray-800 text-white dark:bg-white dark:text-gray-800 px-4 py-2"
      >
        {theme}
      </button>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full object-cover h-64"
      />
      <h1 className="text-xl text-gray-800 dark:text-white">{post.title}</h1>
      <p className="text-md text-gray-800 dark:text-gray-400">{post.content}</p>
    </div>
  );
};

export default NewsDetail;
