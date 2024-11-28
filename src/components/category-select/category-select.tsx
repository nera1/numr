"use client";

import { FunctionComponent, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Check, ChevronsUpDown, Calendar } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import styles from "@/styles/category-select/category-select.module.scss";

const CategorySelect: FunctionComponent<any> = () => {
  const frameworks = [
    { value: "framework-1", label: "Framework 1" },
    { value: "framework-2", label: "Framework 2" },
    { value: "framework-3", label: "Framework 3" },
    { value: "framework-4", label: "Framework 4" },
    { value: "framework-5", label: "Framework 5" },
    { value: "framework-6", label: "Framework 6" },
    { value: "framework-7", label: "Framework 7" },
    { value: "framework-8", label: "Framework 8" },
    { value: "framework-9", label: "Framework 9" },
    { value: "framework-10", label: "Framework 10" },
    { value: "framework-11", label: "Framework 11" },
    { value: "framework-12", label: "Framework 12" },
    { value: "framework-13", label: "Framework 13" },
    { value: "framework-14", label: "Framework 14" },
    { value: "framework-15", label: "Framework 15" },
    { value: "framework-16", label: "Framework 16" },
    { value: "framework-17", label: "Framework 17" },
    { value: "framework-18", label: "Framework 18" },
    { value: "framework-19", label: "Framework 19" },
    { value: "framework-20", label: "Framework 20" },
    { value: "framework-21", label: "Framework 21" },
    { value: "framework-22", label: "Framework 22" },
    { value: "framework-23", label: "Framework 23" },
    { value: "framework-24", label: "Framework 24" },
    { value: "framework-25", label: "Framework 25" },
    { value: "framework-26", label: "Framework 26" },
    { value: "framework-27", label: "Framework 27" },
    { value: "framework-28", label: "Framework 28" },
    { value: "framework-29", label: "Framework 29" },
    { value: "framework-30", label: "Framework 30" },
    { value: "framework-31", label: "Framework 31" },
    { value: "framework-32", label: "Framework 32" },
    { value: "framework-33", label: "Framework 33" },
    { value: "framework-34", label: "Framework 34" },
    { value: "framework-35", label: "Framework 35" },
    { value: "framework-36", label: "Framework 36" },
    { value: "framework-37", label: "Framework 37" },
    { value: "framework-38", label: "Framework 38" },
    { value: "framework-39", label: "Framework 39" },
    { value: "framework-40", label: "Framework 40" },
    { value: "framework-41", label: "Framework 41" },
    { value: "framework-42", label: "Framework 42" },
    { value: "framework-43", label: "Framework 43" },
    { value: "framework-44", label: "Framework 44" },
    { value: "framework-45", label: "Framework 45" },
    { value: "framework-46", label: "Framework 46" },
    { value: "framework-47", label: "Framework 47" },
    { value: "framework-48", label: "Framework 48" },
    { value: "framework-49", label: "Framework 49" },
    { value: "framework-50", label: "Framework 50" },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select category..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Avatar className="w-5 h-5">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategorySelect;
