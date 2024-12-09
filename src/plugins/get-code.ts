import { visit } from "unist-util-visit";
import { Element } from "hast";
import { Root } from "hast";

function GetCode() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "pre") {
        const code = node.children.find(
          (child) => (child as Element).tagName === "code"
        ) as Element | undefined;

        if (code && code.children[0]?.type === "text") {
          node.properties = {
            ...(node.properties || {}),
            codeValue: code.children[0].value,
          };
        }
      }
    });
  };
}

export default GetCode;
