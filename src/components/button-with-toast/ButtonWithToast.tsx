"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ButtonWithToast = () => {
  return (
    <Button
      variant="outline"
      id="message"
      className="hidden"
      onClick={() =>
        toast("코드가 복사되었습니다", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        })
      }
    ></Button>
  );
};

export default ButtonWithToast;
