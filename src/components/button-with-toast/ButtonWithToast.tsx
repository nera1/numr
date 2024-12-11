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
          description: "필요한 곳에 붙여넣기 해주세요",
        })
      }
    ></Button>
  );
};

export default ButtonWithToast;
