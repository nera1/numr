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
    <li>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://picsum.photos/seed/picsum/1600/900"
          alt="Example"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </AspectRatio>
    </li>
  );
};

export default PostListItem;
