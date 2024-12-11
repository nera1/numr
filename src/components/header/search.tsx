"use client";

import {
  FunctionComponent,
  RefObject,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import Link from "next/link";

const Search: FunctionComponent = () => {
  const [input, setInput] = useState<string>("");
  const [dynamicLink, setDynamicLink] = useState<string>("");
  const linkRef: RefObject<HTMLAnchorElement> = useRef(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.trim()) {
      const url = `../?search=${encodeURIComponent(input)}`;
      setDynamicLink(url);
      setTimeout(() => {
        setInput("");
      }, 5);
    }
  };

  useEffect(() => {
    if (dynamicLink) {
      linkRef.current?.click();
    }
  }, [dynamicLink]);

  return (
    <div className="px-3 flex items-center border border-input rounded-md p-1 bg-background h-9">
      <Link className="hidden" href={dynamicLink} ref={linkRef}></Link>
      <SearchIcon size={16} />
      <Input
        type="text"
        value={input}
        onChange={(event) => {
          const { value } = event.target;
          setInput(value);
        }}
        onKeyDown={handleKeyDown}
        className="border-none bg-transparent focus:ring-0 focus-visible:ring-0 placeholder:text-muted-foreground w-28"
      />
    </div>
  );
};

export default function SearchComponent() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
