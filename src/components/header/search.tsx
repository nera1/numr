"use client";

import { FunctionComponent } from "react";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search: FunctionComponent<any> = () => {
  return (
    <div className="px-2 flex items-center border border-input rounded-md p-1 bg-background h-9">
      <SearchIcon size={16} />
      <Input
        type="text"
        className="border-none bg-transparent focus:ring-0 focus-visible:ring-0 placeholder:text-muted-foreground"
      />
    </div>
  );
};

export default Search;
