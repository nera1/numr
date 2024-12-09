import { Suspense } from "react";

import { readFileSync } from "fs";
import { join } from "path";

import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import ButtonWithToast from "@/components/button-with-toast/ButtonWithToast";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

import PostNavigator from "./post-navigator";
import ScrollTop from "./scroll-top";

import GetCode from "@/plugins/get-code";
import AddCopyButton from "@/plugins/add-copy-button";

import db from "@/data/db.json";

import { dateString } from "@/util";

import { Database, Markdown } from "@/types";

import { restoreImg } from "@/util/restore-img";

import styles from "@/styles/post/post.module.scss";
import remarkAddEmptyTitle from "@/plugins/rehype-codeblock-with-figure";

const Post = async function ({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const prevId: number = Number(id) - 1;
  const nextId: number = Number(id) + 1;

  const DB: Database = db;
  const { dictionary }: { dictionary: { [key: string]: Markdown } } = DB;

  const { title, category, created, tags }: Markdown = dictionary[id];

  const yamlPattern = /^---[\s\S]+?---/;

  const file = readFileSync(
    join(process.cwd(), "src", "md", dictionary[id]?.filename)
  )
    .toString()
    .replace(yamlPattern, "");

  let { value } = await remark()
    .use(remarkGfm)
    .use(remarkAddEmptyTitle)
    .use(remarkRehype)
    .use(GetCode)
    .use(rehypePrettyCode)
    .use(AddCopyButton)
    .use(rehypeStringify)
    .process(file);

  value = restoreImg(value);

  return (
    <>
      <Breadcrumb className={`${styles["bread"]} mt-4`}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/?category=${category}`}>
              {category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">{dateString(created)}</p>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-2 py-2">
          {tags.map((tag, index) => (
            <Badge className="rounded-full" key={index}>
              {tag}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Separator className="my-2" />
      <div
        className={`${styles["post"]} ${styles["markdown"]} pb-20`}
        dangerouslySetInnerHTML={{ __html: value }}
      ></div>
      <Separator className="my-2" />
      {(prevId >= 0 || nextId < db.titles.length) && (
        <p className="text-lg font-semibold py-2">Recent Post</p>
      )}
      <div className={`flex space-x-2 ${styles["navigator-container"]}`}>
        {prevId >= 0 && (
          <PostNavigator
            id={String(prevId)}
            title={dictionary[prevId].title}
            direction="prev"
          />
        )}
        {nextId < db.titles.length && (
          <PostNavigator
            id={String(nextId)}
            title={dictionary[nextId].title}
            direction="next"
          />
        )}
      </div>
      <ScrollTop />
      <ButtonWithToast />
    </>
  );
};

export default function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<div></div>}>
      <Post params={params} />
    </Suspense>
  );
}
