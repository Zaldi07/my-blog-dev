import React from "react";
import { posts } from "../data/posts";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id == parseInt(id));
  return (
    <div className="max-w-6xl mx-auto p-6">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover"
      />
      <h1 className="text-3xl">{post.title}</h1>
      <p className="text-md">{post.content}</p>
    </div>
  );
};

export default NewsDetail;
