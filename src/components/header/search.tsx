"use client";

import { FunctionComponent, Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search: FunctionComponent = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.trim()) {
      router.push(`./?search=${encodeURIComponent(input)}`);
      setTimeout(() => {
        setInput("");
      }, 10);
    }
  };

  return (
    <div className="px-3 flex items-center border border-input rounded-md p-1 bg-background h-9">
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
