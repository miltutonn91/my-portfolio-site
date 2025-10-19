import { Button } from "@/components/ui/button"
import { CircleChevronRight } from "lucide-react"

export function ViewMoreButton() {
  return (
    <div className="flex gap-2 items-center">
      <span>詳しく見る</span>
      <CircleChevronRight size={18} />
      <Button variant="green">詳しく見る</Button>
      <Button variant="pink">購入する</Button>
      <Button variant="gray">キャンセル</Button>
    </div>
  );
}

