"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";

import { Spinner } from "@/components/ui/spinner";

import CategorySelect from "@/components/category-select/category-select";
import OrderSelect from "@/components/order-select/order-select";

import PostListItem from "@/components/post-list-item/post-list-item";

import { PostListItem as PostListItemProps } from "@/types/post-list-item";

import db from "@/data/db.json";

import { debounce } from "@/util";

import { Markdown } from "@/types";

import styles from "@/styles/index.module.scss";

export type PostState = {
  order?: string | null;
  limit: number;
  offset: number;
  list: PostListItemProps[];
  category?: string | null;
  search?: string | null;
  tag?: string | null;
  isEnd: boolean;
};

function Home() {
  const [postListState, setPostListState] = useState<PostState>({
    order: "latest",
    limit: 6,
    offset: 12,
    category: null,
    list: [
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
      { title: "", created: "", category: "", preview: null },
    ],
    isEnd: false,
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("order");
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const tag = searchParams.get("tag");

    console.log(order, category, search, tag);

    setPostListState((prev) => ({
      ...prev,
      order,
      category,
      search,
      tag,
    }));
  }, [searchParams]);

  useEffect(() => {
    setPostListState((prev) => {
      const { offset, category, order, search, tag } = prev;

      let filteredPosts = [...db.titles];
      const dictionary: { [key: string]: Markdown } = db.dictionary;

      if (tag) {
        filteredPosts = filteredPosts.filter((post) =>
          dictionary[post.id].tags.includes(tag)
        );
      } else if (category) {
        filteredPosts = filteredPosts.filter(
          (post) => post.category === category
        );
      } else if (search) {
        filteredPosts = filteredPosts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      let newList = [];
      switch (order) {
        case "latest":
          newList = filteredPosts.reverse().slice(0, offset);
          break;
        case "oldest":
          newList = filteredPosts.slice(0, offset);
          break;
        default:
          newList = filteredPosts.reverse().slice(0, offset);
          break;
      }

      // 초기화된 상태 설정
      return {
        ...prev,
        list: newList,
        isEnd: newList.length >= filteredPosts.length, // 초기 상태에서 isEnd 계산
      };
    });
  }, [postListState.order, postListState.category, postListState.search]);

  function fetchData() {
    setPostListState((prev) => {
      const { order, limit, list, category, search, tag } = prev;
      const currentListLength = list.length;

      // 데이터 필터링
      let filteredPosts = [...db.titles];
      const dictionary: { [key: string]: Markdown } = db.dictionary;

      if (tag) {
        filteredPosts = filteredPosts.filter((post) =>
          dictionary[post.id].tags.includes(tag)
        );
      } else if (category) {
        filteredPosts = filteredPosts.filter(
          (post) => post.category === category
        );
      } else if (search) {
        filteredPosts = filteredPosts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      // 데이터 추가
      let newPosts = [];
      switch (order) {
        case "latest":
          newPosts = filteredPosts
            .reverse()
            .slice(currentListLength, currentListLength + limit);
          break;
        case "oldest":
          newPosts = filteredPosts.slice(
            currentListLength,
            currentListLength + limit
          );
          break;
        default:
          newPosts = filteredPosts
            .reverse()
            .slice(currentListLength, currentListLength + limit);
          break;
      }

      const newList = [...list, ...newPosts];

      // 상태 업데이트
      return {
        ...prev,
        list: newList,
        isEnd: newList.length >= filteredPosts.length || newPosts.length === 0,
      };
    });
  }

  const debouncer = debounce(() => {
    fetchData();
  }, 550);

  function next() {
    debouncer();
  }

  return (
    <>
      <title>sumr</title>
      <div className={styles["keyword-container"]}>
        {postListState.tag && (
          <div className="text-2xl font-extrabold tracking-tight py-3">
            {`"${postListState.tag}" 태그 검색결과`}
          </div>
        )}
        {postListState.search && (
          <div className="text-2xl font-extrabold tracking-tight py-3">
            {`"${postListState.search}" 검색결과`}
          </div>
        )}
      </div>
      <div className={styles["options-container"]}>
        <CategorySelect />
        <OrderSelect />
      </div>
      <ul className={styles["post-list"]}>
        <InfiniteScroll
          dataLength={postListState.list.length}
          next={next}
          hasMore={!postListState.isEnd}
          loader={
            <div className="w-full flex justify-center py-12 box-border">
              <Spinner size="sm" className="bg-black dark:bg-white" />
            </div>
          }
          className={styles["infinite"]}
        >
          {postListState.list.map((post, index) => (
            <PostListItem {...post} key={index} />
          ))}
        </InfiniteScroll>
      </ul>
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div></div>}>
      <Home />
    </Suspense>
  );
}
