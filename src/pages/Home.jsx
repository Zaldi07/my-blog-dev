import React, { useState } from "react";
import Card from "../components/Card";
import { posts } from "../data/posts";
const Home = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log("data search ", search);
  };
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLocaleLowerCase());
  });
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-center mb-8">My Blog</h1>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={handleChange}
          className="w-full max-w-md px-4 py-2 border border-gray-300"
        />
      </div>
      {/* menampilkan posts */}
      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Card key={post.id} post={post} />)
        ) : (
          <p>Not posts found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
