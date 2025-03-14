"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPostById, getCommentsByPostId, getUsers } from "@/lib/utils";
import SkeletonLoadingPostDetail from "@/components/SkeletonLoadingPostsDetails";
import { User } from "@/lib/types/globals";
import Image from "next/image";

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
  const {
    data: users,
    isLoading: loadingUsers,
    isError: errorUsers,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const [newComment, setNewComment] = useState<string>("");
  const [localComments, setLocalComments] = useState<Comment[]>([]);
  const [userLogged, setUserLogged] = useState<string | undefined>();
  const [author, setAuthor] = useState<string | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user_session");
      if (storedUser) {
        setUserLogged(storedUser);
      }
    }
    if (post && users) {
      const findAuthor: User = users.find(
        (user: User) => user.id === post.userId
      );
      if (findAuthor) {
        setAuthor(findAuthor.name);
      }
    }
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
        <div className="flex gap-2 my-2">
          <Image
            className="rounded-xl aspect-square w-[50%] h-40"
            src={`https://api.dicebear.com/9.x/pixel-art/jpg?seed=${post.userId}`}
            alt="user avatar"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-blue-500 font-bold text-start">
              {post.title}
            </h1>{" "}
            <p className="font-bold">{author}</p>
            <p className="my-4 text-sm">{post.body}</p>
          </div>
        </div>
        <hr />
        <h2 className="text-xl font-bold mb-2">Comentarios</h2>
        <ul className="space-y-2 mb-4">
          {localComments.map((comment) => (
            <li
              key={comment.id}
              className="bg-[#364e68] p-2 rounded-md text-sm"
            >
              {isLoadingPost && (
                <div className="w-12 h-12 flex items-center justify-center bg-[#171a21] mr-2">
                  <span className="text-white text-lg font-bold">?</span>
                </div>
              )}
              <Image
                src={`https://api.dicebear.com/9.x/pixel-art/jpg?seed=${comment.id}`}
                alt="user avatar"
                width={30}
                height={30}
              />

              {comment.body}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-stretch">
          <h3 className="text-blue-400 my-2">{userLogged}</h3>
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
