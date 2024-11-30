"use client";

import { FunctionComponent, useState } from "react";

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

function SelectIcon(value: String) {
  switch (value) {
    case "desc":
      return <ClockArrowDown />;
    case "asc":
      return <ClockArrowUp />;
    default:
      return <ArrowUpDown />;
  }
}

const OrderSelect: FunctionComponent = () => {
  const orders = [
    { value: "desc", label: "Latest" },
    { value: "asc", label: "Oldest" },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(orders[0].value);

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

export default OrderSelect;
