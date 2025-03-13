"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./utils/posts-api";
import PostList from "../components/PostList";
import SkeletonLoading from "@/components/SkeletonLoading";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const itemsPerPage = 10;

export default function PostsPage({ searchParams }: Props) {
  const { page } = React.use(searchParams);
  const currentPage = page ? Number(page) : 1;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getPosts(itemsPerPage, currentPage),
  });

  const totalPosts = 100;
  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error fetching posts: {(error as Error).message}</div>;
  }

  const posts = data || [];

  const getLink = (p: number): string => `/posts?page=${p}`;

  return (
    <main className="min-h-screen bg-[#1b2838] text-white p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Publicaciones</h1>

      <PostList data={posts} />

      <Pagination>
        <PaginationPrevious
          href={getLink(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <PaginationContent>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                href={getLink(i + 1)}
                isactive={(i + 1 === currentPage).toString()}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
        <PaginationNext
          href={getLink(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </main>
  );
}
