import { FunctionComponent } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import styles from "@/styles/post-list-item/post-list-item.module.scss";

const PostListItem: FunctionComponent = () => {
  return (
    <li className={styles["post-list-item"]}>
      <AspectRatio ratio={16 / 9} className={styles["aspect"]}>
        <img
          src="https://picsum.photos/seed/picsum/1600/900"
          alt="preview"
          className="object-cover rounded"
        />
      </AspectRatio>
      <div className="text-lg font-semibold">
        Are you absolutely sure? HERE WE GOOOOOO
      </div>
    </li>
  );
};

export default PostListItem;
