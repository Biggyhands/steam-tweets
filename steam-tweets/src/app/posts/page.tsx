"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/utils";
import PostList from "@/components/PostList";
import SkeletonLoadingPost from "@/components/SkeletonLoadingPosts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
/* import { getGameName } from "@/lib/helper/getGameName"; no needed*/
import { useSearchParams } from "next/navigation";
import { Post } from "@/lib/types/globals";

/* interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
} */

/*
page props not needed in client component 
*/

const itemsPerPage = 10;

export default function PostsPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = page ? Number(page) : 1;
  /*
  const [allPosts, setAllPosts] = useState<any[]>([]);
  explicity any type
  */
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  /*  const [gameName, setGameName] = useState<string>(getGameName()); 
 not used in this component
 */
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [filterText, setFilterText] = useState<string>("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getPosts(itemsPerPage, currentPage),
  });

  useEffect(() => {
    if (data) {
      setAllPosts(
        data /* (prevPosts) => {
        const newPosts = [...prevPosts];
        newPosts[currentPage - 1] = data;
        return newPosts;  nol logic needed
      } */
      );
    }
  }, [data, currentPage]);

  const totalPosts = 100;
  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  /*  const posts: Post[] = allPosts[currentPage - 1] || []; 
 not needed
 */

  /*  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );
  was using a wrong variable
  */

  const filteredPosts = allPosts?.filter((post: Post) =>
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

  if (isError) {
    return <div>Error fetching posts: {(error as Error).message}</div>;
  }

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

      {isLoading ? <SkeletonLoadingPost /> : <PostList data={sortedPosts} />}

      <Pagination className="mt-4">
        <PaginationPrevious
          href={getLink(currentPage - 1)}
          isActive={currentPage === 1}
        />
        <PaginationContent>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                href={getLink(i + 1)}
                isActive={i + 1 === currentPage}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
        <PaginationNext
          href={getLink(currentPage + 1)}
          isActive={currentPage === totalPages}
        />
      </Pagination>
    </main>
  );
}
