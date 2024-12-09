import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Code } from "mdast";

const remarkAddEmptyTitle: Plugin = () => {
  return (tree) => {
    visit(tree, "code", (node: Code) => {
      if (node.meta === null) {
        node.meta = `title="${node.lang || "ㅤ"}"`;
      }
    });
  };
};

export default remarkAddEmptyTitle;
