"use client";

import { FunctionComponent, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search: FunctionComponent = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.trim()) {
      const url = `/?search=${encodeURIComponent(input)}`;
      console.log(url);
      router.push(url);
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
  return <Search />;
}
