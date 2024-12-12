"use client";

import {
  FunctionComponent,
  useState,
  Suspense,
  useEffect,
  useRef,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Check,
  ChevronsUpDown,
  ClockArrowDown,
  ClockArrowUp,
  ArrowUpDown,
} from "lucide-react";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function SelectIcon(value: string) {
  switch (value) {
    case "latest":
      return <ClockArrowDown />;
    case "oldest":
      return <ClockArrowUp />;
    default:
      return <ArrowUpDown />;
  }
}

const OrderSelect: FunctionComponent = () => {
  const orders = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(
    searchParams.get("order") || null
  );
  const initialLoad = useRef(true); // Ref to track initial load

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false; // Skip the first effect call
      return;
    }

    const params = Object.fromEntries(searchParams.entries());
    const updatedQueryString = value
      ? { ...params, order: value }
      : Object.keys(params)
          .filter((key) => key !== "order")
          .reduce((acc, key) => ({ ...acc, [key]: params[key] }), {});

    // Push the updated query string
    const queryString = new URLSearchParams(updatedQueryString).toString();
    router.push(
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${
        queryString ? `/?${queryString}` : "/"
      }`
    );
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-28 justify-between"
        >
          {value
            ? orders.find((order) => order.value === value)?.label
            : "정렬"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-28 p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {orders.map((order) => (
                <CommandItem
                  key={order.value}
                  value={order.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? null : currentValue);
                    setOpen(false);
                  }}
                >
                  {SelectIcon(order.value)}
                  {order.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === order.value ? "opacity-100" : "opacity-0"
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

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <OrderSelect />
    </Suspense>
  );
}
