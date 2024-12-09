import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { FunctionComponent } from "react";
import Link from "next/link";

import styles from "@/styles/post-navigator/post-navigator.module.scss";

type PostNavigator = {
  title: string;
  id: string;
  direction: "prev" | "next";
};

const PostNavigator: FunctionComponent<PostNavigator> = ({
  title,
  id,
  direction,
}) => {
  return (
    <Link
      href={`/post/${id}`}
      className={`flex items-center space-x-4 rounded-md p-4 hover:bg-accent grow ${
        direction === "prev" ? "justify-start" : "justify-end"
      } ${styles["post-navigator"]}`}
    >
      {direction === "prev" && <CircleArrowLeft />}
      <div
        className={`flex-1 space-y-2 ${
          direction === "next" ? "text-right" : ""
        }`}
      >
        <p className="text-sm font-medium leading-none text-muted-foreground">
          {`${direction === "next" ? "Next" : "Previous"} Post`}
        </p>
        <p className="text-sm font-semibold">{title}</p>
      </div>
      {direction === "next" && <CircleArrowRight />}
    </Link>
  );
};

export default PostNavigator;
