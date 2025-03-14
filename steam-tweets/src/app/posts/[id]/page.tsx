// app/posts/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPostById, getCommentsByPostId } from "../utils/posts-api";
import SkeletonLoadingPostDetail from "../../components/SkeletonLoadingPostsDetails";

interface Comment {
  id: number;
  body: string;
}

export default function PostDetailPage() {
  const { id } = useParams();
  const postId = Number(id);

  const {
    data: post,
    isLoading: isLoadingPost,
    isError: isErrorPost,
    error: errorPost,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostById(postId),
    enabled: !!postId,
  });

  const {
    data: comments,
    isLoading: isLoadingComments,
    isError: isErrorComments,
    error: errorComments,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getCommentsByPostId(postId),
    enabled: !!postId,
  });

  const [newComment, setNewComment] = useState<string>("");
  const [localComments, setLocalComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (comments) {
      setLocalComments(comments);
    }
  }, [comments]);

  const handleAddComment = () => {
    const newCommentObj = {
      id: localComments.length + 1,
      body: newComment,
    };
    setLocalComments([...localComments, newCommentObj]);
    setNewComment("");
  };

  if (isLoadingPost) {
    return <SkeletonLoadingPostDetail />;
  }

  if (isErrorPost) {
    return <div>Error fetching post: {(errorPost as Error).message}</div>;
  }

  if (isErrorComments) {
    return (
      <div>Error fetching comments: {(errorComments as Error).message}</div>
    );
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="min-h-screen bg-[#1b2838] text-white p-8">
      <div className="bg-[#2c3441] rounded-md p-4 max-w-2xl mx-auto">
        {" "}
        <h1 className="text-2xl text-blue-500 font-bold mb-2 text-start">
          {post.title}
        </h1>{" "}
        <p className="mb-4 text-sm">{post.body}</p>
        <hr />
        <h2 className="text-xl font-bold mb-2">Comentarios</h2>
        <ul className="space-y-2 mb-4">
          {localComments.map((comment) => (
            <li
              key={comment.id}
              className="bg-[#364e68] p-2 rounded-md text-sm"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-[#171a21] mr-2">
                <span className="text-white text-lg font-bold">?</span>
              </div>{" "}
              {comment.body}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-stretch">
          {" "}
          <div className="w-8 h-8 flex items-center justify-center bg-[#171a21] mr-2">
            <span className="text-white text-lg font-bold">?</span>
          </div>
          <h3 className="text-blue-400">Usuario</h3>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Añadir un comentario"
            className="p-2 rounded-md bg-[#364e68] text-white text-sm mb-2 focus:outline-none"
          />
          <button
            onClick={handleAddComment}
            className="p-2 rounded-md bg-blue-500 text-white text-sm"
          >
            Añadir Comentario
          </button>
        </div>
      </div>
    </main>
  );
}
