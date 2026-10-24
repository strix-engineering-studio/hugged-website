import Image from "next/image";
import { Assets } from "@/lib/assets";
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src={Assets.logo3D}
      alt="HUGGED"
      width={60}
      height={60}
      className={className}
    />
  );
}
