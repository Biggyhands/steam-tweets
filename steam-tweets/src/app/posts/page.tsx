"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./utils/posts-api";
import PostList from "../components/PostList";
import SkeletonLoadingPosts from "../components/SkeletonLoadingPosts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { getGameName } from "../helper/getGameName";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const itemsPerPage = 10;

export default function PostsPage({ searchParams }: Props) {
  const { page } = React.use(searchParams);
  const currentPage = page ? Number(page) : 1;
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [gameName, setGameName] = useState<string>(getGameName());
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [filterText, setFilterText] = useState<string>("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getPosts(itemsPerPage, currentPage),
  });

  useEffect(() => {
    if (data) {
      setAllPosts((prevPosts) => {
        const newPosts = [...prevPosts];
        newPosts[currentPage - 1] = data;
        return newPosts;
      });
    }
  }, [data, currentPage]);

  const totalPosts = 100;
  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  if (isError) {
    return <div>Error fetching posts: {(error as Error).message}</div>;
  }

  const posts = allPosts[currentPage - 1] || [];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const getLink = (p: number): string => `/posts?page=${p}`;

  return (
    <main className="min-h-screen bg-[#1b2838] text-white p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Publicaciones</h1>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Filtrar por título"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="p-2 rounded-md bg-[#2c3441] text-white"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 rounded-md bg-[#2c3441] text-white ml-2"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>

      {isLoading ? (
        <SkeletonLoadingPosts />
      ) : (
        <PostList data={sortedPosts} gameName={gameName} />
      )}

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
