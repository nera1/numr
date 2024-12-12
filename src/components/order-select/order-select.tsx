"use client";

import { FunctionComponent, useState, Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

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

  const searchParams = useSearchParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(orders[0].value);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    let updatedQueryString = "";
    if (!value) {
      const { order: _, ...others } = params; //eslint-disable-line no-unused-vars
      console.log(_);
      const newQueryString = { ...others };
      updatedQueryString = new URLSearchParams(newQueryString).toString();
    } else {
      const newQueryString = { ...params, order: value };
      updatedQueryString = new URLSearchParams(newQueryString).toString();
    }
    router.push(`?${updatedQueryString}`);
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
                    setValue(currentValue === value ? "" : currentValue);
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
